import ProfileHero from "../components/profile/ProfileHero";
import AcademicSection from "../components/profile/AcademicSection";
import SkillsSection from "../components/profile/SkillsSection";
import ExperienceSection from "../components/profile/ExperienceSection";
import ContactSection from "../components/profile/ContactSection";
import ScrollReveal from "../components/ui/ScrollReveal";
import { useHashScroll } from "../hooks/useHashScroll";

export default function HomePage() {
  useHashScroll();

  return (
    <div id="page-home" className="page visible home-page">
      <ProfileHero />

      <ScrollReveal>
        <AcademicSection />
      </ScrollReveal>

      <ScrollReveal>
        <SkillsSection />
      </ScrollReveal>

      <ScrollReveal>
        <ExperienceSection />
      </ScrollReveal>

      <ScrollReveal>
        <ContactSection />
      </ScrollReveal>
    </div>
  );
}
