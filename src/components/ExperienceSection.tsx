import ScrollReveal from "./ScrollReveal";
import SectionHeading from "./SectionHeading";
import { useLanguage } from "@/contexts/LanguageContext";

const jobKeys = ["job1", "job2", "job3", "job4"] as const;
const jobTech: Record<string, string[]> = {
  job1: ["React", "TypeScript", "Tailwind", "Vite"],
  job2: ["Next.js", "Vue.js", "Sass", "Storybook"],
  job3: ["React", "CSS3", "JavaScript", "Git"],
  job4: ["HTML", "CSS", "JavaScript", "WordPress"],
};

const ExperienceSection = () => {
  const { t } = useLanguage();
  const timeline = jobKeys.map((key) => ({
    period: t.experience[`${key}Period`],
    title: t.experience[`${key}Title`],
    company: t.experience[`${key}Company`],
    description: t.experience[`${key}Desc`],
    tech: jobTech[key],
  }));
  return (
  <section id="experience" className="section-padding">
    <div className="section-container">
      <SectionHeading
        label={t.experience.label}
        title={t.experience.title}
        description={t.experience.description}
      />

      <div className="max-w-3xl mx-auto relative">
        <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-border -translate-x-1/2 hidden md:block" />

        {timeline.map((item, i) => (
          <ScrollReveal key={i} delay={i * 0.1}>
            <div className={`relative flex flex-col md:flex-row gap-6 mb-12 ${i % 2 === 0 ? "md:flex-row-reverse" : ""}`}>
              <div className="hidden md:block absolute left-1/2 top-6 w-3 h-3 rounded-full bg-primary -translate-x-1/2 ring-4 ring-background" />

              <div className="md:w-1/2" />

              <div className="md:w-1/2">
                <div className="glass-card p-6 hover:border-primary/30 transition-colors duration-300">
                  <span className="font-mono text-xs text-primary mb-1 block">{item.period}</span>
                  <h3 className="font-semibold text-lg">{item.title}</h3>
                  <p className="text-sm text-muted-foreground mb-3">{item.company}</p>
                  <p className="text-sm text-text-secondary leading-relaxed mb-3">{item.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {item.tech.map((tech) => (
                      <span key={tech} className="px-2 py-0.5 text-xs font-mono rounded bg-secondary text-secondary-foreground">
                        {tech}
                      </span>
                    ))}
                  </div>
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

export default ExperienceSection;