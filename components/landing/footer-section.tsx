"use client";

import { ArrowUpRight } from "lucide-react";

const footerLinks = {
  Portfolio: [
    { name: "Experiencia", href: "#experiencia" },
    { name: "Proyectos", href: "#proyectos" },
    { name: "Skills", href: "#skills" },
    { name: "Educacion", href: "#educacion" },
  ],
  Social: [
    { name: "GitHub", href: "https://github.com/montoyaian", external: true },
    { name: "LinkedIn", href: "https://linkedin.com/in/ian-montoya-5b7767323", external: true },
    { name: "Email", href: "mailto:montoyaian670@gmail.com", external: true },
  ],
};

const socialLinks = [
  { name: "GitHub", href: "https://github.com/montoyaian" },
  { name: "LinkedIn", href: "https://linkedin.com/in/ian-montoya-5b7767323" },
  { name: "Email", href: "mailto:montoyaian670@gmail.com" },
];

export function FooterSection() {
  return (
    <footer className="relative bg-black">
      {/* Panoramic banner image */}
      <div className="relative w-full h-[280px] md:h-[340px] overflow-hidden">
        <img
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Upscaled%20Image%20%2810%29-UnDKstODkIENp5xqTYUEpt0Sm8tNOw.png"
          alt="Bioluminescent landscape"
          className="w-full h-full object-cover object-center"
        />
        {/* Gradient fade to black at bottom */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black" />
        {/* Subtle dark vignette on sides */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-black/40" />
      </div>

      {/* Footer content */}
      <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-12">
        {/* Main Footer */}
        <div className="py-16 lg:py-20">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 lg:gap-8">
            {/* Brand Column */}
            <div className="col-span-2">
              <a href="#inicio" className="inline-flex items-center gap-2 mb-6">
                <span className="text-2xl font-display text-white">IM</span>
                <span className="text-xs text-white/40 font-mono">DEV</span>
              </a>

              <p className="text-white/50 leading-relaxed mb-8 max-w-xs text-sm">
                Full Stack Developer apasionado por crear soluciones digitales 
                innovadoras y escalables.
              </p>

              {/* Social Links */}
              <div className="flex gap-6">
                {socialLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-white/40 hover:text-white transition-colors flex items-center gap-1 group"
                  >
                    {link.name}
                    <ArrowUpRight className="w-3 h-3 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                  </a>
                ))}
              </div>
            </div>

            {/* Link Columns */}
            {Object.entries(footerLinks).map(([title, links]) => (
              <div key={title}>
                <h3 className="text-sm font-medium text-white mb-6">{title}</h3>
                <ul className="space-y-4">
                  {links.map((link) => (
                    <li key={link.name}>
                      <a
                        href={link.href}
                        target={"external" in link && link.external ? "_blank" : undefined}
                        rel={"external" in link && link.external ? "noopener noreferrer" : undefined}
                        className="text-sm text-white/40 hover:text-white transition-colors inline-flex items-center gap-1"
                      >
                        {link.name}
                        {"external" in link && link.external && (
                          <ArrowUpRight className="w-3 h-3" />
                        )}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-white/30">
            &copy; {new Date().getFullYear()} Ian Carlos Montoya Carmona. Todos los derechos reservados.
          </p>

          <div className="flex items-center gap-4 text-sm text-white/30">
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#22c55e]" />
              Disponible para proyectos
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
