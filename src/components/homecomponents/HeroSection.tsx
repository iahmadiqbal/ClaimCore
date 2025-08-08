const HeroSection = () => {
  return (
    <div className="bg-[#09090B] w-full min-h-screen flex items-center">
      <section className="w-full mx-auto text-left px-4 md:px-6 lg:px-12 xl:px-20 py-12 md:py-20">
        <div className="flex flex-col md:flex-row items-center justify-between w-full max-w-full">
          {/* Left Text Section */}
          <div className="w-full md:w-1/2 space-y-5">
            <h1 className="text-[#FDB833] text-5xl sm:text-4xl md:text-5xl font-bold leading-tight">
              All-in-One <br /> Claims Solution
            </h1>
            <p className="text-gray-300 text-base sm:text-lg max-w-full">
              Streamline inspections, reporting, and management <br />
              with our powerful platform designed for modern{" "}
              <span className="text-white font-semibold">
                claims processing.
              </span>
            </p>

            <div className="flex flex-col sm:flex-row justify-start gap-4 mt-5">
              <button className="bg-[#FA681F] text-white px-6 py-3 rounded hover:bg-[#e0570d] transition w-full sm:w-auto font-semibold text-sm sm:text-base">
                Start Free Trial
              </button>
              <button className="border border-[#FA681F] text-[#FA681F] px-6 py-3 rounded hover:bg-[#FA681F] hover:text-white transition w-full sm:w-auto font-semibold text-sm sm:text-base">
                Watch Demo
              </button>
            </div>

            {/* Stats without background */}
            <div className="flex gap-6 sm:gap-12 text-[#FDA233] font-semibold text-sm sm:text-base flex-wrap max-w-full mt-8">
              <div className="text-center flex-1 min-w-[100px]">
                <div className="text-2xl sm:text-3xl font-bold">500K+</div>
                Claims Processed
              </div>
              <div className="text-center flex-1 min-w-[100px]">
                <div className="text-2xl sm:text-3xl font-bold">99.9%</div>
                Uptime
              </div>
              <div className="text-center flex-1 min-w-[100px]">
                <div className="text-2xl sm:text-3xl font-bold">24/7</div>
                Support
              </div>
            </div>
          </div>

          {/* Right Image Section */}
          <div className="w-full md:w-1/2 mt-8 md:mt-0">
            <img
              src="/images/herosection.avif"
              alt="Claims illustration"
              className="w-full h-auto rounded-xl"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default HeroSection;
