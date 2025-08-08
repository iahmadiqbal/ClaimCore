import { Route, Routes } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import HomePage from "../pages/home/Home";
import ContactPage from "../pages/ContactPage";
import GetStartedPage from "../pages/GetStartedPage";
import SolutionsPage from "../pages/SolutionsPage";
import FeaturesPage from "../pages/Features";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<HomePage />} />

        <Route path="solutions" element={<SolutionsPage />} />
        <Route path="features" element={<FeaturesPage />} />
        <Route path="contact" element={<ContactPage />} />
        <Route path="get-started" element={<GetStartedPage />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
