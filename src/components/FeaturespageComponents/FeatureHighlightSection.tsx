const FeatureHighlightSection = () => {
  return (
    <section className="bg-[#09090B] py-16 px-6 sm:px-12 lg:px-20">
      <div className="max-w-4xl mx-auto text-center rounded-lg">
        <h2 className="text-white text-4xl sm:text-5xl font-bold mb-4">
          Powerful <span style={{ color: "#FB9033" }}>Features</span>
        </h2>
        <p className="text-gray-400 text-base sm:text-lg mb-8">
          Discover the comprehensive suite of tools designed to revolutionize
          your claims <br />
          processing workflow.
        </p>

        {/* Image below text */}
        <img
          src="/images/dashboard.avif"
          alt="Feature illustration"
          className="mx-auto w-full max-h-[500px] rounded-lg shadow-lg"
        />
      </div>
    </section>
  );
};

export default FeatureHighlightSection;
