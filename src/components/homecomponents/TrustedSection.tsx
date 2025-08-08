const TrustedSection = () => {
  return (
    <section className="py-16 bg-[#09090B]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 mb-16">
          <div className="bg-[#27272A] rounded-xl p-6 text-center border border-[#52525B] hover:border-[#FA7533] transition-colors duration-300">
            <div className="text-3xl md:text-4xl font-bold text-[#FA7533] mb-2">
              500K+
            </div>
            <div className="text-gray-300 font-medium">Claims Processed</div>
          </div>

          <div className="bg-[#27272A] rounded-xl p-6 text-center border border-[#52525B] hover:border-[#FA7533] transition-colors duration-300">
            <div className="text-3xl md:text-4xl font-bold text-[#FA7533] mb-2">
              1,200+
            </div>
            <div className="text-gray-300 font-medium">Active Users</div>
          </div>

          <div className="bg-[#27272A] rounded-xl p-6 text-center border border-[#52525B] hover:border-[#FA7533] transition-colors duration-300">
            <div className="text-3xl md:text-4xl font-bold text-[#FA7533] mb-2">
              99.9%
            </div>
            <div className="text-gray-300 font-medium">System Uptime</div>
          </div>

          <div className="bg-[#27272A] rounded-xl p-6 text-center border border-[#52525B] hover:border-[#FA7533] transition-colors duration-300">
            <div className="text-3xl md:text-4xl font-bold text-[#FA7533] mb-2">
              45%
            </div>
            <div className="text-gray-300 font-medium">Time Savings</div>
          </div>
        </div>

        {/* Trusted Companies */}
        <div className="mt-16 flex flex-wrap justify-center gap-8 md:gap-12 items-center">
          <div className="text-gray-400 font-medium">Trusted by:</div>
          <div className="text-xl text-white font-bold opacity-80">
            CompanyOne
          </div>
          <div className="text-xl text-white font-bold opacity-80">
            CompanyTwo
          </div>
          <div className="text-xl text-white font-bold opacity-80">
            CompanyThree
          </div>
          <div className="text-xl text-white font-bold opacity-80">
            CompanyFour
          </div>
          <div className="text-xl text-white font-bold opacity-80">
            CompanyFive
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustedSection;
