import Image from "next/image";
import sanitizeHtml from "sanitize-html";

const BlogInside = ({ blog }) => {
  // Sanitize HTML content
  const sanitizedContent = sanitizeHtml(blog?.content || "", {
    allowedTags: [
      "p",
      "br",
      "strong",
      "b",
      "em",
      "i",
      "u",
      "h1",
      "h2",
      "h3",
      "h4",
      "h5",
      "h6",
      "ul",
      "ol",
      "li",
      "a",
      "img",
      "blockquote",
      "code",
      "pre",
      "span",
      "div",
      "table",
      "thead",
      "tbody",
      "tr",
      "td",
      "th",
    ],
    allowedAttributes: {
      a: ["href", "target", "rel"],
      img: ["src", "alt", "width", "height", "class"],
      "*": ["class", "style"],
    },
    allowedSchemes: ["http", "https", "mailto"],
    allowedSchemesByTag: {
      img: ["http", "https", "data"],
    },
  });
  return (
    <>
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
                    src={blog?.featured_image?.url}
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
                    {blog?.title}
                  </h1>
                  <div className="blog-content">
                    <div
                      className="w-full flex flex-col gap-6 lg:gap-[30px] prose prose-lg max-w-none"
                      dangerouslySetInnerHTML={{ __html: sanitizedContent }}
                    />
                  </div>
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
                          src={imageSrc.url}
                          alt={`Gallery image ${index + 1}`}
                          width={666}
                          height={400}
                          className="w-full h-full object-cover max-h-[400px]"
                          loading="lazy"
                        />
                      </div>
                    ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </article>
    </>
  );
};

export default BlogInside;
