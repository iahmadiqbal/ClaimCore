import React from "react";

const ExperienceFeaturesCTA: React.FC = () => {
  return (
    <section className="bg-[#09090B] py-16 px-6 sm:px-12 lg:px-20 text-center">
      <h2 className="text-white text-2xl sm:text-5xl font-bold mb-4">
        Experience All Features
      </h2>
      <p className="text-gray-400 text-lg mb-8">
        Try ClaimCore risk-free for 30 days
      </p>
      <button className="bg-[#FA681F] hover:bg-[#e0570d] text-white font-semibold text-lg px-8 py-4 rounded-md transition">
        Start Your Free Trial
      </button>
    </section>
  );
};

export default ExperienceFeaturesCTA;
