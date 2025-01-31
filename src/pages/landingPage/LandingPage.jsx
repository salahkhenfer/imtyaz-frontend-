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
import SayAboutUs from "./SayAboutUs/SayAboutUs";
import { FAQSection } from "./FAQ/FAQSection";

function LandingPage() {
  return (
    <div>
      <HeroSection />
      <CardInfoSection />
      <StatisticsSection />
      <GalleryLayoutSection />
      <SchoolNews />
      <BranchesSection />
      <SayAboutUs />
      <FAQSection />

      <ContactPage />
      <NewsletterSection />
    </div>
  );
}

export default LandingPage;
