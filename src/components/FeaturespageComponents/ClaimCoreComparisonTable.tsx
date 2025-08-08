import { FiCheck, FiX } from "react-icons/fi";

const features = ["Mobile App", "Real-time Sync", "API Access"];

// Feature availability for each product
const data = {
  ClaimCore: [true, true, true],
  CompetitorA: [true, false, false],
  CompetitorB: [false, false, true],
};

const CheckIcon = () => (
  <FiCheck className="text-green-500 w-6 h-6 mx-auto" aria-label="Available" />
);

const CrossIcon = () => (
  <FiX className="text-red-500 w-6 h-6 mx-auto" aria-label="Not Available" />
);

const ClaimCoreComparisonTable = () => {
  return (
    <section className="bg-[#27272A] py-24 px-6 sm:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-white text-4xl font-bold mb-10 text-center">
          Why Choose ClaimCore?
        </h2>

        <div className="overflow-x-auto">
          <table className="min-w-full border-collapse border border-gray-700 text-center text-white">
            <thead>
              <tr className="bg-[#09090B]">
                <th className="border border-gray-700 p-4 text-left">
                  Feature
                </th>
                <th className="border border-gray-700 p-4">ClaimCore</th>
                <th className="border border-gray-700 p-4">Competitor A</th>
                <th className="border border-gray-700 p-4">Competitor B</th>
              </tr>
            </thead>
            <tbody>
              {features.map((feature, idx) => (
                <tr key={idx} className="even:bg-[#121212] odd:bg-[#09090B]">
                  <td className="border border-gray-700 p-4 text-left">
                    {feature}
                  </td>
                  {[data.ClaimCore, data.CompetitorA, data.CompetitorB].map(
                    (colData, colIdx) => (
                      <td key={colIdx} className="border border-gray-700 p-4">
                        {colData[idx] ? <CheckIcon /> : <CrossIcon />}
                      </td>
                    )
                  )}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default ClaimCoreComparisonTable;
