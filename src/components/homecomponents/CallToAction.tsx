import React from "react";

const CallToAction: React.FC = () => {
  return (
    <div className="bg-[#09090B] py-16">
      <section className="bg-[#FA6A22] w-full py-16 px-12 sm:px-24 lg:px-36 text-white rounded-lg max-w-7xl mx-auto my-0">
        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl font-extrabold mb-4 max-w-3xl mx-auto text-left sm:text-center">
          Ready to Transform Your Claims Process?
        </h2>

        {/* Paragraph */}
        <p className="text-base sm:text-lg max-w-3xl mx-auto mb-8 px-0 text-left sm:text-center">
          Join thousands of professionals who have streamlined their claims
          workflow with ClaimCore.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-6 max-w-xl mx-auto">
          <button
            type="button"
            className="bg-[#09090B] text-white font-semibold rounded-2xl px-6 py-2.5 hover:bg-gray-900 transition w-full sm:w-auto"
          >
            Start Free Trial
          </button>

          <button
            type="button"
            className="border border-white text-white font-semibold rounded-2xl px-6 py-2.5 hover:bg-white hover:text-[#FA6A22] transition w-full sm:w-auto"
          >
            Schedule Demo
          </button>
        </div>
      </section>
    </div>
  );
};

export default CallToAction;
