import { Navigation } from "@/components/landing/navigation";
import { HeroSection } from "@/components/landing/hero-section";
import { ExperienceSection } from "@/components/landing/experience-section";
import { ProjectsSection } from "@/components/landing/projects-section";
import { SkillsSection } from "@/components/landing/skills-section";
import { EducationSection } from "@/components/landing/education-section";
import { ContactSection } from "@/components/landing/contact-section";
import { FooterSection } from "@/components/landing/footer-section";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-x-hidden">
      <Navigation />
      <HeroSection />
      <ExperienceSection />
      <ProjectsSection />
      <SkillsSection />
      <EducationSection />
      <ContactSection />
      <FooterSection />
    </main>
  );
}
