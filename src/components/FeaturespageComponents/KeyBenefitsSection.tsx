import React from "react";
import { FiTrendingUp, FiCheckCircle, FiDollarSign } from "react-icons/fi";

interface Benefit {
  icon: React.ComponentType<{ size?: number; className?: string }>;
  title: string;
  description: string;
}

const benefits: Benefit[] = [
  {
    icon: FiTrendingUp,
    title: "Increased Efficiency",
    description: "Process claims 50% faster with automated workflows",
  },
  {
    icon: FiCheckCircle,
    title: "Improved Accuracy",
    description: "Reduce errors with intelligent validation and checks",
  },
  {
    icon: FiDollarSign,
    title: "Cost Savings",
    description: "Lower operational costs through automation",
  },
];

const KeyBenefitsSection: React.FC = () => {
  return (
    <section className="bg-[#09090B] py-16 px-6 sm:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start gap-12">
        {/* Left Text Content */}
        <div className="md:w-1/2 text-left">
          <h2 className="text-white text-4xl sm:text-5xl font-bold mb-2">
            Key Benefits
          </h2>
          <p className="text-gray-400 text-lg mb-10">
            Insurance claims processing workflow
          </p>

          <div className="space-y-8">
            {benefits.map(({ icon: Icon, title, description }, index) => (
              <div key={index} className="flex items-start gap-5">
                <Icon size={28} className="text-[#FB9033] flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-white text-xl font-semibold mb-1">
                    {title}
                  </h3>
                  <p className="text-gray-400 text-base">{description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Image */}
        <div className="md:w-1/2">
          <img
            src="/images/Key.avif"
            alt="Key Benefits Illustration"
            className="w-full max-w-full max-h-[350px] rounded-lg shadow-lg object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default KeyBenefitsSection;
