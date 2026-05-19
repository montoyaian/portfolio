"use client";

import { useEffect, useRef, useState } from "react";
import { ExternalLink, Github, ChevronRight, ChevronLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";

function ProjectImageCarousel({ images, alt, hovered }: { images: string[], alt: string, hovered: boolean }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="relative w-full h-full">
      {images.map((img, i) => (
        <img
          key={img}
          src={`/images/${img}`}
          alt={`${alt} image ${i + 1}`}
          className={`absolute top-0 left-0 w-full h-full object-cover transition-all duration-700 ${
            i === currentIndex ? "opacity-100 z-10" : "opacity-0 z-0"
          } ${hovered ? "scale-110" : "scale-100"}`}
        />
      ))}
      <div className="absolute bottom-2 right-2 z-20 flex gap-2">
        <button
          onClick={prevImage}
          className="p-1 rounded-full bg-black/50 text-white hover:bg-black/80 transition-colors"
        >
          <ChevronLeft className="w-4 h-4" />
        </button>
        <button
          onClick={nextImage}
          className="p-1 rounded-full bg-black/50 text-white hover:bg-black/80 transition-colors"
        >
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}

const projects = [
  {
    id: 1,
    title: "Human Talent Management Suite",
    description: "Sistema integral para la centralización y gestión de documentación corporativa. Optimiza los flujos de auditoría interna y el acceso seguro a expedientes digitales mediante una arquitectura robusta.",
    image: "/images/Perth.gif",
    stack: ["React", "Spring Boot", "MySQL", "Docker"],
    liveUrl: "https://browser-seven-black.vercel.app/login",
    featured: false, 
  },
  {
    id: 2,
    title: "Project & Resource Planner",
    description: "Plataforma para el control de proyectos, integrando seguimiento técnico y financiero. Incluye módulos de presupuestación dinámica y generación automatizada de informes analíticos.",
    image: "/images/Cotecmar.png",
    stack: ["React", "Spring Boot", "PostgreSQL"],
    featured: false,
  },
  {
    id: 3,
    title: "Stockify - Inventory Ecosystem",
    description: "Solución E2E para el control de inventarios a gran escala. Implementa algoritmos de alerta, trazabilidad de ventas en tiempo real y dashboards de rendimiento operativo.",
    images: ["stockify1.png", "stockify2.png", "stockify3.png"],
    stack: ["React", "Nest.js", "PostgreSQL"],
    liveUrl: "https://stockify.business/login",
    featured: false,
  },
  {
    id: 4,
    title: "Survey Builder Engine",
    description: "Plataforma avanzada con editor drag-and-drop para encuestas dinámicas. Soporta lógica condicional compleja, procesamiento de datos en tiempo real y escalabilidad mediante SSR con Next.js.",
    images: ["survey3.png" , "survey1.png", "survey2.png"],
    stack: ["Next.js", "Nest.js", "PostgreSQL"],
    liveUrl: "https://v0-encuestafrontend.vercel.app/signin",
    featured: false,
  },
  {
    id: 5,
    title: "Multi-tenant Digital Menu SaaS",
    description: "Infraestructura para la gestión de menús digitales distribuidos. Permite la administración independiente de múltiples comercios con actualización instantánea mediante un CMS headless.",
    image: "/images/Menu.png",
    stack: ["Next.js", "Sanity.io"],
    liveUrl: "https://restaurant-menu-psi-orcin.vercel.app/marviche",
    featured: false,
  },
  {
    id: 6,
    title: "SeriesChat - Debate & Recomendaciones",
    description: "Chatbot que hace scraping de información sobre series para construir contexto, cargarlo en un LLM y debatir con memoria de opiniones y recomendaciones basadas en tus gustos.",
    video: "/images/serieschat.mp4",
    stack: ["Next.js", "FastAPI", "LangChain", "ChromaDB"],
    featured: false,
  },
];
export function ProjectsSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);
  const [selectedProjectId, setSelectedProjectId] = useState<number | null>(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  const selectedProject = projects.find((project) => project.id === selectedProjectId) ?? null;

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
      id="proyectos"
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
                Portfolio
              </span>
              <h2
                className={`text-5xl md:text-6xl lg:text-[96px] font-display tracking-tight leading-[0.9] transition-all duration-1000 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
              >
                Proyectos
                <br />
                <span className="text-muted-foreground">destacados.</span>
              </h2>
            </div>
            <div className="lg:col-span-5 lg:pb-4">
              <p className={`text-xl text-muted-foreground leading-relaxed transition-all duration-1000 delay-200 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}>
                Una seleccion de mis trabajos mas recientes. 
                Cada proyecto representa un desafio unico resuelto con tecnologia moderna.
              </p>
            </div>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className={`flex flex-col group relative border transition-all duration-500 overflow-hidden ${
                hoveredProject === project.id 
                  ? "border-foreground bg-foreground/[0.02]" 
                  : "border-foreground/10 hover:border-foreground/20"
              } ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
              style={{ transitionDelay: `${index * 100 + 200}ms` }}
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
              onClick={() => setSelectedProjectId(project.id)}
              role="button"
              tabIndex={0}
              onKeyDown={(event) => {
                if (event.key === "Enter" || event.key === " ") {
                  event.preventDefault();
                  setSelectedProjectId(project.id);
                }
              }}
            >
              {/* Image */}
              <div className="relative h-60 overflow-hidden bg-black shrink-0">
                {project.video ? (
                  <video
                    src={project.video}
                    autoPlay
                    loop
                    muted
                    playsInline
                    preload="metadata"
                    aria-label={`${project.title} demo video`}
                    className={`w-full h-full object-cover transition-transform duration-500 ${
                      hoveredProject === project.id ? "scale-105" : "scale-100"
                    }`}
                  />
                ) : project.images ? (
                  <ProjectImageCarousel images={project.images} alt={project.title} hovered={hoveredProject === project.id} />
                ) : (
                  <img
                    src={project.image}
                    alt={project.title}
                    className={`w-full h-full object-cover transition-transform duration-500 ${
                      hoveredProject === project.id ? "scale-110" : "scale-100"
                    }`}
                  />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent pointer-events-none" />
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-display mb-2 group-hover:translate-x-1 transition-transform duration-300">
                  {project.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4 line-clamp-2">
                  {project.description}
                </p>

                <div className="mt-auto">
                  {/* Stack */}
                  <div className="flex flex-wrap gap-1 mb-6">
                    {project.stack.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className="text-[10px] font-mono px-2 py-0.5 bg-foreground/5 text-muted-foreground"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.stack.length > 3 && (
                      <span className="text-[10px] font-mono px-2 py-0.5 bg-foreground/5 text-muted-foreground">
                        +{project.stack.length - 3}
                      </span>
                    )}
                  </div>

                  {/* Links */}
                  <div className="flex items-center gap-4">
                    {project.liveUrl && (
                      <a 
                        href={project.liveUrl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        onClick={(event) => event.stopPropagation()}
                        className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground transition-colors"
                      >
                        Demo
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    )}
                  </div>
                </div>
              </div>

              {/* Bottom line animation */}
              <div className="absolute bottom-0 left-0 right-0 h-px bg-foreground/20 overflow-hidden">
                <div className={`h-full bg-foreground transition-all duration-500 ${
                  hoveredProject === project.id ? "w-full" : "w-0"
                }`} />
              </div>
            </div>
          ))}
        </div>

        <Dialog
          open={selectedProjectId !== null}
          onOpenChange={(open) => {
            if (!open) setSelectedProjectId(null);
          }}
        >
          {selectedProject && (
            <DialogContent className="sm:max-w-[1400px] w-[min(96vw,1400px)] p-0 overflow-hidden">
              <div className="grid lg:grid-cols-[minmax(0,1.2fr)_minmax(0,0.8fr)] lg:min-h-[36rem]">
                <div className="relative bg-black">
                  {selectedProject.video ? (
                    <video
                      src={selectedProject.video}
                      autoPlay
                      loop
                      muted
                      playsInline
                      preload="metadata"
                      aria-label={`${selectedProject.title} demo video`}
                      className="w-full h-96 sm:h-[32rem] lg:h-full object-cover"
                    />
                  ) : selectedProject.images ? (
                    <div className="h-96 sm:h-[32rem] lg:h-full">
                      <ProjectImageCarousel
                        images={selectedProject.images}
                        alt={selectedProject.title}
                        hovered={false}
                      />
                    </div>
                  ) : (
                    <img
                      src={selectedProject.image}
                      alt={selectedProject.title}
                      className="w-full h-96 sm:h-[32rem] lg:h-full object-cover"
                    />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-background/40 via-transparent to-transparent pointer-events-none" />
                </div>

                <div className="p-6 lg:p-8 flex flex-col gap-6">
                  <DialogHeader>
                    <DialogTitle className="text-2xl lg:text-3xl font-display">
                      {selectedProject.title}
                    </DialogTitle>
                  </DialogHeader>

                  <p className="text-sm lg:text-base text-muted-foreground leading-relaxed">
                    {selectedProject.description}
                  </p>

                  <div>
                    <div className="text-xs font-mono text-muted-foreground mb-3">Tecnologias</div>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.stack.map((tech) => (
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
              </div>
            </DialogContent>
          )}
        </Dialog>

        {/* View all link */}
        <div className={`mt-12 text-center transition-all duration-1000 delay-500 ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}>
          <a 
            href="https://github.com/montoyaian" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-mono text-muted-foreground hover:text-foreground transition-colors group"
          >
            Ver todos los proyectos en GitHub
            <span className="group-hover:translate-x-1 transition-transform">&rarr;</span>
          </a>
        </div>
      </div>
    </section>
  );
}
