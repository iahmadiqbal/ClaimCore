import ClaimCoreComparisonTable from "../../components/FeaturespageComponents/ClaimCoreComparisonTable";
import ExperienceFeaturesCTA from "../../components/FeaturespageComponents/ExperienceFeaturesCTA";
import FeatureHighlightSection from "../../components/FeaturespageComponents/FeatureHighlightSection";
import KeyBenefitsSection from "../../components/FeaturespageComponents/KeyBenefitsSection";
import FeaturesExitSection from "../../components/homecomponents/FeaturesExitSection";

const FeaturesPage = () => {
  return (
    <>
      <FeatureHighlightSection />
      <FeaturesExitSection />
      <KeyBenefitsSection />
      <ClaimCoreComparisonTable />
      <ExperienceFeaturesCTA />
    </>
  );
};

export default FeaturesPage;
