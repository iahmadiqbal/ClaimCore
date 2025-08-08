const SuccessStories: React.FC = () => {
  return (
    <section className="w-full bg-[#09090B] py-16 px-6 sm:px-12 lg:px-24 text-white">
      {/* Title full width on top */}
      <h2 className="text-4xl font-bold mb-12 text-center text-orange-400">
        Success Stories
      </h2>

      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12">
        {/* Image on left */}
        <div className="flex-shrink-0 w-full lg:w-1/2">
          <img
            src="/images/suceess.avif"
            alt="Business team analyzing insurance data"
            className="rounded-lg shadow-lg w-full h-auto object-cover"
          />
        </div>

        {/* Content on right */}
        <div className="w-full lg:w-1/2">
          <h3 className="text-3xl font-bold mb-4">
            AccuraCorp Reduces Processing Time by 60%
          </h3>
          <p className="text-gray-300 mb-6 leading-relaxed">
            Learn how AccuraCorp streamlined their auto insurance claims process
            and improved customer satisfaction scores significantly.
          </p>
          <a
            href="#"
            className="inline-block text-orange-400 font-semibold hover:text-orange-500 transition-colors"
          >
            Read Case Study →
          </a>
        </div>
      </div>
    </section>
  );
};

export default SuccessStories;
