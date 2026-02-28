import { lazy, Suspense } from "react";
import HeroSection from "@/components/HeroSection";
import BlogSection from "@/components/BlogSection";

const AboutSection = lazy(() => import("@/components/AboutSection"));
const StackSection = lazy(() => import("@/components/StackSection"));
const PortfolioSection = lazy(() => import("@/components/PortfolioSection"));
const ExperienceSection = lazy(() => import("@/components/ExperienceSection"));
const CertificationsSection = lazy(() => import("@/components/CertificationsSection"));
const InterestsSection = lazy(() => import("@/components/InterestsSection"));
const LanguagesSection = lazy(() => import("@/components/LanguageSection"));
const SocialSection = lazy(() => import("@/components/SocialSection"));

const Index = () => {
  return (
    <main className="bg-background text-foreground">
      <HeroSection />
      <Suspense fallback={null}>
        <AboutSection />
        <StackSection />
        <PortfolioSection />
        <BlogSection />
        <ExperienceSection />
        <CertificationsSection />
        <InterestsSection />
        <LanguagesSection />
        <SocialSection />
      </Suspense>
    </main>
  );
};

export default Index;
