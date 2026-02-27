import { ExternalLink, Github } from "lucide-react";
import ScrollReveal from "./ScrollReveal";
import SectionHeading from "./SectionHeading";
import { useLanguage } from "@/contexts/LanguageContext";

const projectList = [
  { key: "proj1" as const, tech: ["React", "TypeScript", "D3.js", "Tailwind"], color: "from-blue-500/20 to-cyan-500/20" },
  { key: "proj2" as const, tech: ["Next.js", "Prisma", "Stripe", "Vercel"], color: "from-emerald-500/20 to-teal-500/20" },
  { key: "proj3" as const, tech: ["React", "WebSocket", "Redis", "PostgreSQL"], color: "from-violet-500/20 to-purple-500/20" },
  { key: "proj4" as const, tech: ["Vue.js", "OpenAPI", "Monaco", "Node.js"], color: "from-orange-500/20 to-amber-500/20" },
  { key: "proj5" as const, tech: ["React", "Chart.js", "PWA", "Firebase"], color: "from-rose-500/20 to-pink-500/20" },
  { key: "proj6" as const, tech: ["React", "Node.js", "Docker", "AWS"], color: "from-sky-500/20 to-indigo-500/20" },
];

const ProjectsSection = () => {
  const { t } = useLanguage();
  const projects = projectList.map(({ key, tech, color }) => ({
    title: t.projects[`${key}Title`],
    description: t.projects[`${key}Desc`],
    challenge: t.projects[`${key}Challenge`],
    tech,
    color,
  }));
  return (
  <section id="projects" className="section-padding">
    <div className="section-container">
      <SectionHeading
        label={t.projects.label}
        title={t.projects.title}
        description={t.projects.description}
      />

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, i) => (
          <ScrollReveal key={project.title} delay={i * 0.08}>
            <div className="glass-card group h-full flex flex-col overflow-hidden hover:border-primary/30 transition-all duration-300">
              <div className={`h-40 bg-gradient-to-br ${project.color} flex items-center justify-center relative overflow-hidden`}>
                <div className="font-mono text-sm text-foreground/60 px-4 py-2 rounded-lg bg-background/50 backdrop-blur">
                  {project.title}
                </div>
              </div>

              <div className="p-6 flex flex-col flex-1">
                <h3 className="text-lg font-semibold mb-2">{project.title}</h3>
                <p className="text-sm text-muted-foreground mb-3 leading-relaxed">{project.description}</p>

                <div className="text-xs text-text-secondary mb-4 italic">
                  <span className="text-primary font-medium not-italic">{t.projects.challenge}</span> {project.challenge}
                </div>

                <div className="flex flex-wrap gap-2 mb-5 mt-auto">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-0.5 text-xs font-mono rounded bg-secondary text-secondary-foreground"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3">
                  <a
                    href="#"
                    className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    <ExternalLink size={14} /> {t.projects.liveDemo}
                  </a>
                  <a
                    href="#"
                    className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    <Github size={14} /> {t.projects.code}
                  </a>
                </div>
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </div>
  </section>
  );
};

export default ProjectsSection;