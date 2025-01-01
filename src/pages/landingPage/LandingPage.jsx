import React from "react";
import HeroSection from "./heroPageSection/HeroSection";
import CardInfoSection from "./CardsInfoPageSection/CardInfoSection";
import StatisticsSection from "./StatisticsPageSection/StatisticsSection";
import NavbarLandingPage from "./navbarLandingPage/NavbarLandingPage";
import GalleryLayoutSection from "./GalleryLayoutPageSection/GalleryLayoutSection";
import SchoolNews from "./SchoolNewsPageSection/SchoolNewsSection";
import BranchesSection from "./BranchesPageSection/BranchesSection";
import ContactPage from "./ContactPageSection/ContactPage";
import NewsletterSection from "./NewsletterPageSection/NewsletterSection";
import { Footer } from "./footer/Footer";

function LandingPage() {
  return (
    <div>
      <NavbarLandingPage />
      <HeroSection />
      <CardInfoSection />
      <StatisticsSection />
      <GalleryLayoutSection />
      <SchoolNews />
      <BranchesSection />
      <ContactPage />
      <NewsletterSection />
      <Footer />
    </div>
  );
}

export default LandingPage;
