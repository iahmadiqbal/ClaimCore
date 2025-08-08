import React from "react";

const ClaimsSummary: React.FC = () => {
  const reports = [
    {
      title: "Claims Summary",
      description:
        "Comprehensive overview of all claims processed, including status and outcomes.",
      actionText: "Generate Report →",
      actionLink: "#",
    },
    {
      title: "Compliance Reports",
      description:
        "Automated compliance reporting for regulatory requirements and audits.",
      actionText: "Download Report →",
      actionLink: "#",
    },
    {
      title: "Financial Reports",
      description:
        "Detailed financial analysis including costs, savings, and ROI calculations.",
      actionText: "View Financials →",
      actionLink: "#",
    },
  ];

  return (
    <section className="w-full bg-[#09090B] py-16 px-6 sm:px-12 lg:px-24 text-white">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
        {reports.map(({ title, description, actionText, actionLink }) => (
          <div
            key={title}
            className="bg-[#27272A] p-8 rounded-lg shadow-md flex flex-col justify-between"
          >
            <div>
              <h3 className="text-2xl font-semibold mb-4">{title}</h3>
              <p className="text-gray-300 mb-6">{description}</p>
            </div>
            <a
              href={actionLink}
              className="text-orange-400 font-semibold hover:text-orange-500 transition-colors"
            >
              {actionText}
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ClaimsSummary;
