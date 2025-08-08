import { FiCamera, FiFileText, FiCloud } from "react-icons/fi";

const features = [
  {
    icon: FiCamera,
    title: "Photo Documentation",
    description:
      "High-resolution photo capture with automatic tagging and organization.",
  },
  {
    icon: FiFileText,
    title: "PDF Reports",
    description:
      "Generate professional reports instantly with customizable templates.",
  },
  {
    icon: FiCloud,
    title: "Cloud Sync",
    description:
      "Real-time synchronization across all devices with automatic backup.",
  },
];

const FeaturesExitSection = () => {
  return (
    <section className="bg-[#27272A] py-16 px-6 sm:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {features.map(({ icon: Icon, title, description }, index) => (
          <div
            key={index}
            className="bg-[#09090B] p-8 rounded-xl shadow-lg flex flex-col items-start
                       transition-transform duration-300 hover:scale-95"
          >
            <Icon
              size={28}
              className="mb-4 text-[#FB9033] hover:text-[#27272A] transition-colors duration-300"
            />
            <h3 className="text-white text-xl font-semibold mb-3">{title}</h3>
            <p className="text-gray-400 text-base">{description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturesExitSection;
