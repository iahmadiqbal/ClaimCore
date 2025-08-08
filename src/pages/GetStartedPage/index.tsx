import ActiveClaimsStats from "../../components/GetStartedPagecomponents/ActiveClaimsStats";
import AdvancedAnalytics from "../../components/GetStartedPagecomponents/AdvancedAnalytics";
import ClaimsSummary from "../../components/GetStartedPagecomponents/ClaimsSummary";
import CustomReports from "../../components/GetStartedPagecomponents/CustomReports";
import ExperienceDashboard from "../../components/GetStartedPagecomponents/ExperienceDashboard";
import PowerfulDashboard from "../../components/GetStartedPagecomponents/PowerfulDashboard";

const GetStartedPage = () => {
  return (
    <>
      <PowerfulDashboard />
      <ActiveClaimsStats />
      <AdvancedAnalytics />
      <CustomReports />
      <ClaimsSummary />
      <ExperienceDashboard />
    </>
  );
};

export default GetStartedPage;
