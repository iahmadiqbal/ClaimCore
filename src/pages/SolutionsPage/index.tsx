import FindYourSolution from "../../components/SolutionsPagecomponents/FindYourSolution";
import IndustrySolutions from "../../components/SolutionsPagecomponents/IndustrySolutions";
import InsuranceFeatures from "../../components/SolutionsPagecomponents/InsuranceFeatures";
import OurProcess from "../../components/SolutionsPagecomponents/processSteps";
import SuccessStories from "../../components/SolutionsPagecomponents/SuccessStories";

const SolutionsPage = () => {
  return (
    <>
      <IndustrySolutions />
      <InsuranceFeatures />
      <SuccessStories />
      <OurProcess />
      <FindYourSolution />
    </>
  );
};

export default SolutionsPage;
