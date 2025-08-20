// Common class names
const introTextClasses =
  "text-xl leading-9 font-poppins text-gray-600 opacity-90 mb-12";
const sectionTitleClasses = "text-2xl font-geometr415-lt-bt text-black mb-4";
const sectionTextClasses =
  "text-base leading-7 font-poppins text-gray-600 mb-8";
const LegalPages = ({ data }) => {
  const { title, description, content } = data;
  return (
    <>
      <main className="innrPage pt-20 mt-20 overflow-x-hidden">
        <div className="container mx-auto px-5 py-16">
          <div className="max-w-[1361px] mx-auto px-5">
            <h1 className="text-5xl font-geometr415-lt-bt text-black mb-8">
              {title}
            </h1>

            <p className={introTextClasses}>{description}</p>

            {content.map((section, index) => (
              <div key={index}>
                <h2 className={sectionTitleClasses}>{section.title}</h2>
                <p className={sectionTextClasses}>{section.content}</p>
              </div>
            ))}
          </div>
        </div>
      </main>
    </>
  );
};

export default LegalPages;
