import React from "react";

const FindYourSolution: React.FC = () => {
  return (
    <section className="w-full bg-[#09090B] py-16 px-6 sm:px-12 lg:px-24 text-white text-center">
      <h2 className="text-4xl font-bold mb-4">Find Your Solution</h2>
      <p className="text-gray-300 mb-8 text-lg max-w-2xl mx-auto">
        Get a customized demo for your specific industry
      </p>
      <button
        type="button"
        className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-8 rounded-md transition-colors"
      >
        Request Custom Demo
      </button>
    </section>
  );
};

export default FindYourSolution;
