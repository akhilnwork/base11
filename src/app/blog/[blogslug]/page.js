import React, { Suspense } from "react";
import Image from "next/image";

// Mock blog data - In a real app, this would come from a CMS or API
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
export async function generateMetadata({ params }) {
  const { blogslug } = params;
  const blog = blogData.find((post) => post.slug === blogslug);

  if (!blog) {
    return {
      title: "Blog Not Found - Base Eleven",
      description: "The requested blog post could not be found.",
    };
  }

  return {
    title: `${blog.title} - Base Eleven`,
    description: blog.excerpt,
    keywords: [blog.category, "Base Eleven", "Architecture", "Design"].join(
      ", ",
    ),
    authors: [{ name: blog.author }],
    openGraph: {
      title: blog.title,
      description: blog.excerpt,
      images: [blog.featuredImage],
      type: "article",
      publishedTime: blog.publishedAt,
    },
  };
}

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
const BlogContent = ({ blog }) => {
  // blog.content is already an array, no need to split

  return (
    <article className="w-full lg:mt-25 mt-12 lg:py-25 py-20  bg-darkgray-150/20">
      <section className="w-full">
        <div className="container mx-auto px-5">
          <div className="max-w-[1362px] mx-auto">
            {/* Blog Content Section */}
            <div className="w-full flex flex-col justify-start items-end gap-8 lg:gap-[43px]">
              {/* Featured Image */}
              <div className="w-full h-64 md:h-96 lg:h-[550px]  rounded-[30px] relative overflow-hidden">
                <div className="flex absolute inset bg-black/20"></div>
                <Image
                  src={blog.featuredImage}
                  alt="Featured blog image "
                  width={1362}
                  height={550}
                  className="w-full h-full object-cover h-64 md:h-96 lg:h-[550px]"
                  priority
                />
              </div>

              {/* First Content Section */}
              <div className="w-full flex flex-col  gap-6 lg:gap-[30px]">
                <h1 className="w-full text-left text-black text-3xl md:text-4xl lg:text-5xl font-normal font-['Geometr415_Lt_BT'] leading-8 lg:leading-[30px] tracking-wide">
                  Spaces are being revolutionized modern architectural marvels.
                </h1>
                <div className="w-full flex flex-col gap-6 lg:gap-[30px]">
                  {blog.content &&
                    blog.content.map((paragraph, index) => (
                      <div
                        key={index}
                        className="w-full text-justify text-black text-sm sm:text-base lg:text-lg font-normal font-['Poppins'] leading-7 lg:leading-[30px]"
                      >
                        {paragraph}
                      </div>
                    ))}
                </div>
              </div>

              {/* Second Content Section */}
              <div className="w-full flex flex-col gap-6 lg:gap-[30px]">
                <h2 className="w-full text-left text-black text-3xl md:text-4xl lg:text-5xl font-normal font-['Geometr415_Lt_BT'] leading-8 lg:leading-[30px] tracking-wide">
                  Growth and meaning of mechanical technology
                </h2>
                {blog.aftercontent &&
                  blog.aftercontent.map((paragraph, index) => (
                    <div
                      key={index}
                      className="w-full text-justify text-black text-sm sm:text-base lg:text-lg font-normal font-['Poppins'] leading-7 lg:leading-[30px]"
                    >
                      There are many variations of passages of Lorem Ipsum
                      available, but the majority have suffered alteration in
                      some form, by injected humour, or randomised words which
                      don&apos;t look even slightly believable. If you are going to
                      use a passage of Lorem Ipsum, you need to be sure there
                      isn&apos;t anything embarrassing hidden in the middle of text.
                      All the Lorem Ipsum generators on the Internet tend to
                      repeat predefined chunks as necessary, making this the
                      first true generator on the Internet. It uses a dictionary
                      of over 200 Latin words, combined with a handful of model
                      sentence structures, to generate Lorem Ipsum which looks
                      reasonable. The generated Lorem Ipsum is therefore always
                      free from repetition, injected humour, or
                      non-characteristic words etc.
                    </div>
                  ))}
              </div>

              {/* Image Gallery */}
              <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-[30px]">
                {blog.images &&
                  blog.images.map((imageSrc, index) => (
                    <div
                      key={index}
                      className="w-full h-64 md:h-80 lg:h-[400px] rounded-[30px] overflow-hidden"
                    >
                      <Image
                        src={imageSrc}
                        alt={`Gallery image ${index + 1}`}
                        width={666}
                        height={400}
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                    </div>
                  ))}
              </div>

              <div className="w-full text-justify text-black text-sm sm:text-base lg:text-lg font-normal font-['Poppins'] leading-7 lg:leading-[30px]">
                <p>
                  There are many variations of passages of Lorem Ipsum
                  available, but the majority have suffered alteration in some
                  form, by injected humour, or randomised words which don&apos;t look
                  even slightly believable. If you are going to use a passage of
                  Lorem Ipsum, you need to be sure there isn&apos;t anything
                  embarrassing hidden in the middle of text. All the Lorem Ipsum
                  generators on the Internet tend to repeat predefined chunks as
                  necessary, making this the first true generator on the
                  Internet. It uses a dictionary of over 200 Latin words,
                  combined with a handful of model sentence structures, to
                  generate Lorem Ipsum which looks reasonable. The generated
                  Lorem Ipsum is therefore always free from repetition, injected
                  humour, or non-characteristic words etc.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </article>
  );
};

// Main component - This should be the default export for Next.js page
export default function BlogInner({ params }) {
  const { blogslug } = params;

  // Find the blog post by slug
  let blog = blogData.find((post) => post.slug === blogslug);

  // If blog post not found, use default static content
  if (!blog) {
    blog = {
      id: "default",
      slug: blogslug || "default",
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
    };
  }

  return (
    <Suspense fallback={<BlogLoading />}>
      <BlogContent blog={blog} />
    </Suspense>
  );
}
