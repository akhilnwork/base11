export default async function FetchSsr(page) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}${page}`, {
    // Ensures this runs on every request (no cache)
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch posts");
  }
  return res.json();
}
