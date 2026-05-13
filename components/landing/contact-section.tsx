"use client";

import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Mail, Github, Linkedin, Twitter, MapPin, Send } from "lucide-react";

const socialLinks = [
  {
    name: "GitHub",
    href: "https://github.com/montoyaian",
    icon: Github,
    username: "@montoyaian",
  },
  {
    name: "LinkedIn",
    href: "https://linkedin.com/in/ian-montoya-5b7767323",
    icon: Linkedin,
    username: "in/ian-montoya-5b7767323",
  },
  {
    name: "Email",
    href: "mailto:montoyaian670@gmail.com",
    icon: Mail,
    username: "montoyaian670@gmail.com",
  },
];

export function ContactSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePosition({
      x: ((e.clientX - rect.left) / rect.width) * 100,
      y: ((e.clientY - rect.top) / rect.height) * 100,
    });
  };

  return (
    <section id="contacto" ref={sectionRef} className="relative py-24 lg:py-32 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div
          className={`relative border border-foreground transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
          onMouseMove={handleMouseMove}
        >
          {/* Spotlight effect */}
          <div 
            className="absolute inset-0 opacity-10 pointer-events-none transition-opacity duration-300"
            style={{
              background: `radial-gradient(600px circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(255,255,255,0.15), transparent 40%)`
            }}
          />
          
          <div className="relative z-10 px-8 lg:px-16 py-16 lg:py-24">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              {/* Left content */}
              <div>
                <span className="inline-flex items-center gap-3 text-sm font-mono text-muted-foreground mb-6">
                  <span className="w-8 h-px bg-foreground/30" />
                  Contacto
                </span>

                <h2 className="text-5xl md:text-6xl lg:text-7xl font-display tracking-tight mb-8 leading-[0.95]">
                  Trabajemos
                  <br />
                  <span className="text-muted-foreground">juntos.</span>
                </h2>

                <p className="text-xl text-muted-foreground mb-8 leading-relaxed max-w-lg">
                  Estoy abierto a nuevas oportunidades, proyectos freelance 
                  o simplemente una conversacion sobre tecnologia. 
                  No dudes en contactarme.
                </p>

                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-12">
                  <MapPin className="w-4 h-4" />
                  <span>Disponible para trabajo remoto</span>
                </div>

                {/* Primary CTA */}
                <Button
                  size="lg"
                  className="bg-foreground hover:bg-foreground/90 text-background px-8 h-14 text-base rounded-full group"
                  asChild
                >
                  <a href="mailto:montoyaian670@gmail.com">
                    Enviar mensaje
                    <Send className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                  </a>
                </Button>
              </div>

              {/* Right - Social Links Grid */}
              <div className="grid grid-cols-2 gap-4">
                {socialLinks.map((link, index) => {
                  const Icon = link.icon;
                  return (
                    <a
                      key={link.name}
                      href={link.href}
                      target={link.name !== "Email" ? "_blank" : undefined}
                      rel={link.name !== "Email" ? "noopener noreferrer" : undefined}
                      className={`group relative p-6 border transition-all duration-500 ${
                        hoveredLink === link.name 
                          ? "border-foreground bg-foreground/[0.04] scale-[1.02]" 
                          : "border-foreground/10 hover:border-foreground/30"
                      } ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
                      style={{ transitionDelay: `${index * 100 + 300}ms` }}
                      onMouseEnter={() => setHoveredLink(link.name)}
                      onMouseLeave={() => setHoveredLink(null)}
                    >
                      <Icon className={`w-6 h-6 mb-4 transition-colors ${
                        hoveredLink === link.name ? "text-foreground" : "text-muted-foreground"
                      }`} />

                      <h3 className="font-medium mb-1 group-hover:translate-x-1 transition-transform duration-300">
                        {link.name}
                      </h3>
                      <p className="text-sm text-muted-foreground font-mono">
                        {link.username}
                      </p>

                      {/* Arrow indicator */}
                      <div className={`absolute top-6 right-6 transition-all duration-300 ${
                        hoveredLink === link.name 
                          ? "opacity-100 translate-x-0" 
                          : "opacity-0 -translate-x-2"
                      }`}>
                        <span className="text-muted-foreground">&rarr;</span>
                      </div>

                      {/* Bottom line animation */}
                      <div className="absolute bottom-0 left-0 right-0 h-px bg-foreground/20 overflow-hidden">
                        <div className={`h-full bg-foreground transition-all duration-500 ${
                          hoveredLink === link.name ? "w-full" : "w-0"
                        }`} />
                      </div>
                    </a>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Decorative corners */}
          <div className="absolute top-0 right-0 w-32 h-32 border-b border-l border-foreground/10" />
          <div className="absolute bottom-0 left-0 w-32 h-32 border-t border-r border-foreground/10" />
        </div>
      </div>
    </section>
  );
}
