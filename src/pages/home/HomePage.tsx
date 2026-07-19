import HeroSection from "./sections/HeroSection";
import AboutSection from "./sections/AboutSection";
import SkillSection from "./sections/SkillSection";
import ProjectSection from "./sections/ProjectSection";
import ContactSection from "./sections/ContactSection";

export default function HomePage() {
  return (
    <div>
      <HeroSection />
      <AboutSection />
      <SkillSection />
      <ProjectSection />
      <ContactSection />
    </div>
  );
}
