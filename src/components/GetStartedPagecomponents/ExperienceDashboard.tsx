import React from "react";

const ExperienceDashboard: React.FC = () => {
  return (
    <section className="w-full bg-[#09090B] py-16 px-6 sm:px-12 lg:px-24 text-white text-center">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-4xl font-bold mb-6">Experience the Dashboard</h2>
        <p className="text-gray-300 mb-10 text-lg">
          See how our dashboard can transform your claims management
        </p>
        <div className="flex justify-center gap-6 flex-wrap">
          <button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-8 rounded-md transition-colors">
            Live Demo
          </button>
          <button className="bg-transparent border border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white font-semibold py-3 px-8 rounded-md transition-colors">
            Schedule Walkthrough
          </button>
        </div>
      </div>
    </section>
  );
};

export default ExperienceDashboard;
