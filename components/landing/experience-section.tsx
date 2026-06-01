"use client";

import { useEffect, useRef, useState } from "react";
import { Briefcase, Calendar, MapPin } from "lucide-react";

const experiences = [
  {
    id: 1,
    role: "Full Stack Developer",
    company: "COTECMAR",
    location: "Cartagena, Colombia",
    period: "2025",
    description: "Desarrollo aplicacion interna para gestion de proyectos, manejo de presupuestos y progreso de actividades.",
    highlights: ["React", "Springboot", "PostgreSQL", "Apache"],
  },
  {
    id: 2,
    role: "Backend Developer",
    company: "Personeria de cartagena",
    location: "Cartagena, Colombia",
    period: "2024 - 2025",
    description: "Desarrollo de proyecto de grado en conjunto a la personeria de cartagena, aplicacion para gestion documental dentro de la organizacion.",
    highlights: ["Springboot", "MySQL", "Docker", "Terraform"],
  },
  {
    id: 3,
    role: "Cofounder & Full Stack Developer",
    company: "Startup local",
    location: "Cartagena, Colombia",
    period: "2026",
    description: "Fundacion y desarrollo de una startup local, donde hemos desarrollado proyectos para gestion de invetarios y menus multitenant",
    highlights: ["Next.js", "React", "Nest.js"],
  },
];

export function ExperienceSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="experiencia"
      ref={sectionRef}
      className="relative py-24 lg:py-32 overflow-hidden"
    >
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="relative mb-20 lg:mb-24">
          <div className="grid lg:grid-cols-12 gap-8 items-end">
            <div className="lg:col-span-7">
              <span className="inline-flex items-center gap-3 text-sm font-mono text-muted-foreground mb-6">
                <span className="w-12 h-px bg-foreground/30" />
                Trayectoria
              </span>
              <h2
                className={`text-5xl md:text-6xl lg:text-[96px] font-display tracking-tight leading-[0.9] transition-all duration-1000 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
              >
                Experiencia
                <br />
                <span className="text-muted-foreground">profesional.</span>
              </h2>
            </div>
            <div className="lg:col-span-5 lg:pb-4">
              <p className={`text-xl text-muted-foreground leading-relaxed transition-all duration-1000 delay-200 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}>
                Mi recorrido profesional construyendo soluciones digitales 
                y colaborando con equipos de alto rendimiento.
              </p>
            </div>
          </div>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-0 lg:left-1/2 top-0 bottom-0 w-px bg-foreground/10 lg:-translate-x-1/2" />

          <div className="space-y-12 lg:space-y-0">
            {experiences.map((exp, index) => (
              <div
                key={exp.id}
                className={`relative grid lg:grid-cols-2 gap-8 lg:gap-16 transition-all duration-700 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: `${index * 150 + 300}ms` }}
                onMouseEnter={() => setActiveIndex(index)}
                onMouseLeave={() => setActiveIndex(null)}
              >
                {/* Timeline dot */}
                <div className={`absolute left-0 lg:left-1/2 top-0 w-3 h-3 rounded-full border-2 transition-all duration-300 lg:-translate-x-1/2 ${
                  activeIndex === index 
                    ? "bg-foreground border-foreground scale-150" 
                    : "bg-background border-foreground/30"
                }`} />

                {/* Content - alternating sides on desktop */}
                <div className={`pl-8 lg:pl-0 ${index % 2 === 0 ? "lg:pr-16 lg:text-right" : "lg:col-start-2 lg:pl-16"}`}>
                  <div className={`p-6 lg:p-8 border transition-all duration-300 ${
                    activeIndex === index 
                      ? "border-foreground bg-foreground/[0.02]" 
                      : "border-foreground/10 hover:border-foreground/20"
                  }`}>
                    {/* Period badge */}
                    <div className={`inline-flex items-center gap-2 text-xs font-mono px-3 py-1 mb-4 ${
                      activeIndex === index 
                        ? "bg-foreground text-background" 
                        : "bg-foreground/10 text-muted-foreground"
                    }`}>
                      <Calendar className="w-3 h-3" />
                      {exp.period}
                    </div>

                    {/* Role & Company */}
                    <h3 className="text-xl lg:text-2xl font-display mb-2">{exp.role}</h3>
                    <div className={`flex items-center gap-4 mb-4 text-sm text-muted-foreground ${index % 2 === 0 ? "lg:justify-end" : ""}`}>
                      <span className="flex items-center gap-1">
                        <Briefcase className="w-4 h-4" />
                        {exp.company}
                      </span>
                      <span className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        {exp.location}
                      </span>
                    </div>

                    {/* Description */}
                    <p className="text-muted-foreground leading-relaxed mb-6">
                      {exp.description}
                    </p>

                    {/* Tech highlights */}
                    <div className={`flex flex-wrap gap-2 ${index % 2 === 0 ? "lg:justify-end" : ""}`}>
                      {exp.highlights.map((tech) => (
                        <span
                          key={tech}
                          className="text-xs font-mono px-2 py-1 border border-foreground/10 text-muted-foreground"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Empty space for alternating layout */}
                {index % 2 === 0 && <div className="hidden lg:block" />}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
