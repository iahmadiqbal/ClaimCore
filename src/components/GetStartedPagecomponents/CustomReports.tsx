import React from "react";

const CustomReports: React.FC = () => {
  return (
    <section className="w-full bg-[#09090B] py-16 px-6 sm:px-12 lg:px-24 text-white">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12">
        {/* Left side content */}
        <div className="w-full lg:w-1/2">
          <h2 className="text-4xl font-bold mb-6">Generate Detailed Reports</h2>

          <ul className="list-disc list-inside text-gray-300 mb-8 space-y-3 max-w-md">
            <li>Customizable report templates</li>
            <li>Automated report scheduling</li>
            <li>Export in multiple formats</li>
            <li>Real-time data updates</li>
          </ul>

          <button
            type="button"
            className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-8 rounded-md transition-colors"
          >
            Generate Report
          </button>
        </div>

        {/* Right side image */}
        <div className="w-full lg:w-1/2">
          <img
            src="/images/getstarted.avif"
            alt="Business analytics dashboard"
            className="w-full rounded-lg shadow-lg object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default CustomReports;
