import CallToAction from "../../components/homecomponents/CallToAction";
import DashboardSection from "../../components/homecomponents/DashboardSection";
import HeroSection from "../../components/homecomponents/HeroSection";
import Testimonials from "../../components/homecomponents/Testimonials";
import FeaturesExitSection from "../../components/homecomponents/FeaturesExitSection";

const HomePage = () => {
  return (
    <>
      <HeroSection />
      <FeaturesExitSection />
      <DashboardSection />
      <Testimonials />
      <CallToAction />
    </>
  );
};

export default HomePage;
