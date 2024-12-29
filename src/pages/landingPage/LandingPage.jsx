import React from "react";
import NavbarLandingPage from "./navbarLandingPage/navbarLandingPage";
import HeroSection from "./heroPageSection/HeroSection";
import CardInfoSection from "./CardsInfoPageSection/CardInfoSection";
import StatisticsSection from "./StatisticsPageSection/StatisticsSection";

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
