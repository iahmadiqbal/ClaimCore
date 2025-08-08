const DashboardSection = () => {
  return (
    <section className="py-16 bg-[#09090B]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* 1. Trusted by Industry Leaders */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Trusted by <span className="text-[#FDAA33]">Industry Leaders</span>
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Join thousands of companies who trust ClaimCore for their claims
            processing needs.
          </p>
        </div>

        {/* 2. Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16 text-center">
          <div>
            <div className="text-3xl md:text-4xl font-bold text-[#FDAA33]">
              500K+
            </div>
            <div className="text-gray-400 mt-2">Claims Processed</div>
          </div>
          <div>
            <div className="text-3xl md:text-4xl font-bold text-[#FDAA33]">
              1,200+
            </div>
            <div className="text-gray-400 mt-2">Active Users</div>
          </div>
          <div>
            <div className="text-3xl md:text-4xl font-bold text-[#FDAA33]">
              99.9%
            </div>
            <div className="text-gray-400 mt-2">System Uptime</div>
          </div>
          <div>
            <div className="text-3xl md:text-4xl font-bold text-[#FDAA33]">
              45%
            </div>
            <div className="text-gray-400 mt-2">Time Savings</div>
          </div>
        </div>

        {/* 3. Dashboard + Content Section */}
        <div className="bg-[#27272A] rounded-2xl overflow-hidden border border-[#52525B] flex flex-col lg:flex-row">
          {/* Left Side - Image */}
          <div className="lg:w-1/2 p-6 lg:p-10 flex items-center justify-center">
            <img
              src="/images/realTimedashboard.avif"
              alt="ClaimCore Dashboard"
              className="w-full h-auto rounded-lg"
            />
          </div>

          {/* Right Side - Content */}
          <div className="lg:w-1/2 p-6 lg:p-10 text-white">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Real-time Dashboard
            </h3>
            <p className="text-gray-300 mb-6">
              Monitor all your claims in real-time with our intuitive dashboard.
              Track progress, identify bottlenecks, and optimize your workflow
              for maximum efficiency.
            </p>
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="text-[#FDAA33] text-2xl mr-3 mt-1">•</span>
                <span className="text-gray-300">Live claim status updates</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#FDAA33] text-2xl mr-3 mt-1">•</span>
                <span className="text-gray-300">Performance analytics</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#FDAA33] text-2xl mr-3 mt-1">•</span>
                <span className="text-gray-300">Custom reporting</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DashboardSection;
