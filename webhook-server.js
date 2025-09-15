require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const { exec } = require('child_process');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = 3001;

app.use(bodyParser.json());

// Restrict access to localhost
app.use((req, res, next) => {
  const allowedIps = ['127.0.0.1', '::1'];
  const ip = req.connection.remoteAddress.replace('::ffff:', '');
  if (!allowedIps.includes(ip)) {
    return res.status(403).json({ error: 'Forbidden' });
  }
  next();
});

// Build webhook endpoint
app.post('/webhook/build', (req, res) => {
  const { secret } = req.body;
  if (secret !== process.env.WEBHOOK_SECRET) {
    return res.status(401).json({ error: 'Invalid secret' });
  }

  // Run next build
  exec('next build', { cwd: '/path/to/nextjs/project' }, (err, stdout, stderr) => {
    if (err) {
      fs.appendFileSync('build.log', stderr);
      console.error(stderr);
      return res.status(500).json({ error: 'Build failed', details: stderr });
    }
    fs.appendFileSync('build.log', stdout);
    console.log(stdout);

    // If statically exported, copy /out to /var/www/html
    if (fs.existsSync('/path/to/nextjs/project/out')) {
      exec('xcopy /E /I /Y /path/to/nextjs/project/out /var/www/html', (copyErr, copyStdout, copyStderr) => {
        if (copyErr) {
          fs.appendFileSync('build.log', copyStderr);
          return res.status(500).json({ error: 'Copy failed', details: copyStderr });
        }
        fs.appendFileSync('build.log', copyStdout);
        // Optionally restart app if running in next start mode
        exec('pm2 restart next-app', (pm2Err, pm2Stdout, pm2Stderr) => {
          if (pm2Err) {
            fs.appendFileSync('build.log', pm2Stderr);
            return res.status(500).json({ error: 'Restart failed', details: pm2Stderr });
          }
          fs.appendFileSync('build.log', pm2Stdout);
          return res.status(200).json({ message: 'Build, copy, and restart successful' });
        });
      });
    } else {
      // If not static, just restart
      exec('pm2 restart next-app', (pm2Err, pm2Stdout, pm2Stderr) => {
        if (pm2Err) {
          fs.appendFileSync('build.log', pm2Stderr);
          return res.status(500).json({ error: 'Restart failed', details: pm2Stderr });
        }
        fs.appendFileSync('build.log', pm2Stdout);
        return res.status(200).json({ message: 'Build and restart successful' });
      });
    }
  });
});

// ISR revalidate endpoint
app.post('/revalidate', (req, res) => {
  const { secret, path: revalidatePath } = req.body;
  if (secret !== process.env.REVALIDATE_SECRET) {
    return res.status(401).json({ error: 'Invalid secret' });
  }
  // Example: trigger Next.js revalidate API route
  // You must implement /api/revalidate in your Next.js app
  const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));
  fetch(`http://localhost:3000/api/revalidate`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ secret, path: revalidatePath })
  })
    .then(r => r.json())
    .then(data => {
      fs.appendFileSync('revalidate.log', JSON.stringify(data) + '\n');
      if (data.revalidated) {
        res.status(200).json({ message: 'Revalidation triggered', details: data });
      } else {
        res.status(500).json({ error: 'Revalidation failed', details: data });
      }
    })
    .catch(err => {
      fs.appendFileSync('revalidate.log', err.toString() + '\n');
      res.status(500).json({ error: 'Revalidate request failed', details: err.toString() });
    });
});

app.listen(PORT, '127.0.0.1', () => {
  console.log(`Webhook server running on http://localhost:${PORT}`);
});
