import React from "react";
import HeroSection from "./heroPageSection/HeroSection";
import CardInfoSection from "./CardsInfoPageSection/CardInfoSection";
import StatisticsSection from "./StatisticsPageSection/StatisticsSection";
import NavbarLandingPage from "./navbarLandingPage/NavbarLandingPage";

function LandingPage() {
  return (
    <div>
      <NavbarLandingPage />
      <HeroSection />
      <CardInfoSection />
      <StatisticsSection />
    </div>
  );
}

export default LandingPage;
