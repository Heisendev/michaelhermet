import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import StackSection from "@/components/StackSection";
import ExperienceSection from "@/components/ExperienceSection";
import CertificationsSection from "@/components/CertificationsSection";
import InterestsSection from "@/components/InterestsSection";
import SocialSection from "@/components/SocialSection";
import PortfolioSection from "@/components/PortfolioSection";
import LanguagesSection from "@/components/LanguageSection";

const Index = () => {
  return (
    <main className="bg-background text-foreground">
      <HeroSection />
      <AboutSection />
      <StackSection />
      <PortfolioSection />
      <ExperienceSection />
      <CertificationsSection />
      <InterestsSection />
      <LanguagesSection />
      <SocialSection />
    </main>
  );
};

export default Index;
