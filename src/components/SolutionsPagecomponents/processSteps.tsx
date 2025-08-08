const processSteps = [
  {
    number: "1",
    title: "Assessment",
    description: "Initial claim evaluation and documentation",
  },
  {
    number: "2",
    title: "Investigation",
    description: "Thorough investigation with mobile tools",
  },
  {
    number: "3",
    title: "Processing",
    description: "Automated processing and validation",
  },
  {
    number: "4",
    title: "Settlement",
    description: "Final approval and settlement processing",
  },
];

const OurProcess: React.FC = () => {
  return (
    <section className="w-full bg-[#27272A] py-16 px-6 sm:px-12 lg:px-24 text-white">
      <h2 className="text-4xl font-bold mb-12 text-center text-[#ffff]">
        Our Process
      </h2>

      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10 text-center">
        {processSteps.map(({ number, title, description }) => (
          <div key={number} className="flex flex-col items-center">
            {/* Circle with number */}
            <div
              className="flex items-center justify-center rounded-full mb-6"
              style={{
                backgroundColor: "#FF8904",
                width: "64px",
                height: "64px",
              }}
            >
              <span className="text-white font-bold text-3xl">{number}</span>
            </div>

            <h3 className="text-xl font-semibold mb-2">{title}</h3>
            <p className="text-gray-300 max-w-xs">{description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OurProcess;
