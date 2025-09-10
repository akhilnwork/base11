import React, { Suspense } from "react";

import BlogBottomLink from "@/app/components/blog/BlogBottomLink";
import BlogInside from "@/app/components/blog/BlogInside";
import FetchSsr from "@/app/components/common/FetchSsr";

const blogData = [
  {
    id: "1",
    slug: "spaces-revolutionized-modern-architectural-marvels",
    title: "Spaces are being revolutionized modern architectural marvels",
    excerpt:
      "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.",
    content: [
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.",
    ],
    featuredImage: "/img/temp/blog.png",
    images: ["/img/facilities/hall.png", "/img/facilities/wedding.png"],
    aftercontent: [
      "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.",
    ],
    author: "Base Eleven Team",
    publishedAt: "2024-01-15",
    category: "Architecture",
    readTime: "5 min read",
  },
];

// Generate metadata for SEO
// export async function generateMetadata({ params }) {
//   const { blogslug } = params;
//   const blog = blogData.find((post) => post.slug === blogslug);

//   if (!blog) {
//     return {
//       title: "Blog Not Found - Base Eleven",
//       description: "The requested blog post could not be found.",
//     };
//   }

//   return {
//     title: `${blog.title} - Base Eleven`,
//     description: blog.excerpt,
//     keywords: [blog.category, "Base Eleven", "Architecture", "Design"].join(
//       ", ",
//     ),
//     authors: [{ name: blog.author }],
//     openGraph: {
//       title: blog.title,
//       description: blog.excerpt,
//       images: [blog.featuredImage],
//       type: "article",
//       publishedTime: blog.publishedAt,
//     },
//   };
// }

// Loading component
const BlogLoading = () => (
  <div className="w-full">
    <div className="container mx-auto px-5 py-16">
      <div className="max-w-4xl mx-auto">
        <div className="w-full h-96 bg-gray-200 rounded-3xl animate-pulse mb-8" />
        <div className="space-y-4">
          <div className="h-4 bg-gray-200 rounded animate-pulse" />
          <div className="h-4 bg-gray-200 rounded animate-pulse w-3/4" />
          <div className="h-4 bg-gray-200 rounded animate-pulse w-1/2" />
        </div>
      </div>
    </div>
  </div>
);

// Blog content component
const BlogContent = ({ blog, related }) => {
  return (
    <>
      <BlogInside blog={blog} />
      <BlogBottomLink related={related} />
    </>
  );
};

// Main component - This should be the default export for Next.js page
export default async function BlogInner({ params }) {
  const { blogslug } = params;
  const blogData = await FetchSsr(`/blogs/${blogslug}`);
  const blogs = await FetchSsr(`/blogs/${blogslug}/related`);

  return (
    <Suspense fallback={<BlogLoading />}>
      <BlogContent blog={blogData?.data} related={blogs?.data} />
    </Suspense>
  );
}
