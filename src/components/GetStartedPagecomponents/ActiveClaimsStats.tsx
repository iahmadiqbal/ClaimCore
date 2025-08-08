import React from "react";

const ActiveClaimsStats: React.FC = () => {
  const stats = [
    {
      title: "Active Claims",
      value: "1,247",
      change: "+12% from last month",
      positive: true,
    },
    {
      title: "Completed",
      value: "3,891",
      change: "+8% from last month",
      positive: true,
    },
    {
      title: "Avg. Processing Time",
      value: "2.3 days",
      change: "-15% from last month",
      positive: false,
    },
    {
      title: "Customer Satisfaction",
      value: "4.8/5",
      change: "+3% from last month",
      positive: true,
    },
  ];

  return (
    <section className="w-full bg-[#09090B] py-16 px-6 sm:px-12 lg:px-24 text-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12 text-center">
          {stats.map(({ title, value, change, positive }) => (
            <div key={title} className="p-6 bg-[#27272A] rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2">{title}</h3>
              <p className="text-4xl font-bold mb-1">{value}</p>
              <p
                className={`text-sm font-medium ${
                  positive ? "text-green-500" : "text-red-500"
                }`}
              >
                {change}
              </p>
            </div>
          ))}
        </div>

        <div className="bg-[#27272A] rounded-lg p-6 shadow-md text-center">
          <h3 className="text-xl font-semibold mb-4">
            Claims Processing Timeline Chart
          </h3>
          <p className="text-gray-400">Real-time data visualization</p>
          {/* Replace above with actual chart component as needed */}
        </div>
      </div>
    </section>
  );
};

export default ActiveClaimsStats;
