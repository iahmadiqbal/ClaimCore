import React from "react";
import { FaCar, FaHome, FaHeartbeat, FaBuilding } from "react-icons/fa";

const insuranceFeatures = [
  {
    title: "Auto Insurance",
    description:
      "Streamline vehicle damage assessments and accident claims processing.",
    icon: <FaCar size={40} className="text-orange-400 mb-4" />,
  },
  {
    title: "Property Insurance",
    description:
      "Handle property damage claims with comprehensive documentation tools.",
    icon: <FaHome size={40} className="text-orange-400 mb-4" />,
  },
  {
    title: "Health Insurance",
    description:
      "Manage medical claims with secure, compliant processing workflows.",
    icon: <FaHeartbeat size={40} className="text-orange-400 mb-4" />,
  },
  {
    title: "Commercial Insurance",
    description:
      "Enterprise-level solutions for complex commercial claims processing.",
    icon: <FaBuilding size={40} className="text-orange-400 mb-4" />,
  },
];

const InsuranceFeatures: React.FC = () => {
  return (
    <section className="w-full px-6 py-12 bg-[#27272A]">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-8">
        {insuranceFeatures.map(({ title, description, icon }) => (
          <div
            key={title}
            className="bg-[#09090B] rounded-lg shadow-lg p-8 flex flex-col justify-between h-72"
          >
            <div>{icon}</div>
            <h3 className="text-white text-2xl font-semibold mb-3">{title}</h3>
            <p className="text-gray-300 flex-grow">{description}</p>
            <a
              href="#"
              className="mt-6 inline-block text-orange-400 font-semibold hover:text-orange-500 transition-colors"
            >
              Learn More →
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default InsuranceFeatures;
