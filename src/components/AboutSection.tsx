import { Code2, Gauge, Layout, Layers } from "lucide-react";
import ScrollReveal from "./ScrollReveal";
import SectionHeading from "./SectionHeading";
import { useLanguage } from "@/contexts/LanguageContext";

const AboutSection = () => {
  const { t } = useLanguage();
  const highlights = [
    { icon: Layout, title: t.about.highlight1Title, desc: t.about.highlight1Desc },
    { icon: Code2, title: t.about.highlight2Title, desc: t.about.highlight2Desc },
    { icon: Gauge, title: t.about.highlight3Title, desc: t.about.highlight3Desc },
    { icon: Layers, title: t.about.highlight4Title, desc: t.about.highlight4Desc },
  ];
  return (
  <section id="about" className="section-padding">
    <div className="section-container">
      <SectionHeading label={t.about.label} title={t.about.title} />

      <div className="grid md:grid-cols-2 gap-12 items-start">
        <ScrollReveal>
          <div className="space-y-5 text-text-secondary leading-relaxed text-lg">
            <p>{t.about.p1}</p>
            <p>{t.about.p2}</p>
            <div className="flex flex-wrap gap-3 pt-2">
              {["React", "TypeScript", "Next.js", "Tailwind CSS", "Node.js"].map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 text-sm font-mono rounded-md bg-secondary text-secondary-foreground border border-border/50"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {highlights.map(({ icon: Icon, title, desc }, i) => (
            <ScrollReveal key={title} delay={i * 0.1}>
              <div className="glass-card p-6 group hover:border-primary/30 transition-colors duration-300">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <Icon size={20} className="text-primary" />
                </div>
                <h3 className="font-semibold mb-1">{title}</h3>
                <p className="text-sm text-muted-foreground">{desc}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </div>
  </section>
  );
};

export default AboutSection;