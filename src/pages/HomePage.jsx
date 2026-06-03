import ProfileHero from "../components/profile/ProfileHero";
import AcademicSection from "../components/profile/AcademicSection";
import SkillsSection from "../components/profile/SkillsSection";
import ContactSection from "../components/profile/ContactSection";
import { useHashScroll } from "../hooks/useHashScroll";

export default function HomePage() {
  useHashScroll();

  return (
    <div id="page-home" className="page visible home-page">
      <ProfileHero />
      <AcademicSection />
      <SkillsSection />
      <ContactSection />
    </div>
  );
}
