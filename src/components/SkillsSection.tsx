import ScrollReveal from "./ScrollReveal";
import SectionHeading from "./SectionHeading";
import { useLanguage } from "@/contexts/LanguageContext";

const categoriesConfig = [
  { titleKey: "cat1" as const, skills: [{ name: "React", level: 95 }, { name: "Next.js", level: 85 }, { name: "Vue.js", level: 75 }, { name: "TypeScript", level: 90 }] },
  { titleKey: "cat2" as const, skills: [{ name: "Tailwind CSS", level: 95 }, { name: "CSS3 / Sass", level: 90 }, { name: "Framer Motion", level: 80 }, { name: "Figma", level: 75 }] },
  { titleKey: "cat3" as const, skills: [{ name: "Web Vitals", level: 90 }, { name: "Webpack / Vite", level: 85 }, { name: "tests", level: 80 }, { name: "CI/CD", level: 75 }] },
  { titleKey: "cat4" as const, skills: [{ name: "REST / GraphQL", level: 85 }, { name: "Git", level: 95 }, { name: "Node.js", level: 75 }, { name: "Docker", level: 65 }] },
];

const SkillsSection = () => {
  const { t } = useLanguage();
  const categories = categoriesConfig.map((cat) => ({
    title: t.skills[cat.titleKey],
    skills: cat.skills.map((s) => ({ name: s.name === "tests" ? t.skills.tests : s.name, level: s.level })),
  }));
  return (
  <section id="skills" className="section-padding">
    <div className="section-container">
      <SectionHeading
        label={t.skills.label}
        title={t.skills.title}
        description={t.skills.description}
      />

      <div className="grid md:grid-cols-2 gap-6">
        {categories.map((cat, ci) => (
          <ScrollReveal key={cat.title} delay={ci * 0.1}>
            <div className="glass-card p-6">
              <h3 className="font-semibold text-lg mb-5">{cat.title}</h3>
              <div className="space-y-4">
                {cat.skills.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between text-sm mb-1.5">
                      <span className="font-mono text-secondary-foreground">{skill.name}</span>
                      <span className="text-muted-foreground">{skill.level}%</span>
                    </div>
                    <div className="h-1.5 rounded-full bg-secondary overflow-hidden">
                      <div
                        className="h-full rounded-full bg-gradient-to-r from-primary to-[hsl(260_80%_60%)] transition-all duration-1000"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </div>
  </section>
  );
};

export default SkillsSection;