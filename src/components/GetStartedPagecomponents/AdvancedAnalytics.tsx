import React from "react";

const AdvancedAnalytics: React.FC = () => {
  const analytics = [
    {
      title: "Claims Distribution",
      description:
        "Visual breakdown of claims by type, status, and priority level.",
    },
    {
      title: "Performance Trends",
      description:
        "Track key performance indicators and identify improvement opportunities.",
    },
    {
      title: "Team Performance",
      description:
        "Monitor individual and team productivity with detailed metrics.",
    },
  ];

  return (
    <section className="w-full bg-[#09090B] py-16 px-6 sm:px-12 lg:px-24 text-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center">
          Advanced Analytics
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {analytics.map(({ title, description }) => (
            <div key={title} className="bg-[#27272A] p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold mb-4">{title}</h3>
              <p className="text-gray-300">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AdvancedAnalytics;
