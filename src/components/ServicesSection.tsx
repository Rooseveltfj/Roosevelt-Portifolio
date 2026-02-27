import { Globe, Layers, Rocket, Smartphone } from "lucide-react";
import ScrollReveal from "./ScrollReveal";
import SectionHeading from "./SectionHeading";
import { useLanguage } from "@/contexts/LanguageContext";

const serviceConfig = [
  { icon: Globe, key: "s1" as const },
  { icon: Layers, key: "s2" as const },
  { icon: Rocket, key: "s3" as const },
  { icon: Smartphone, key: "s4" as const },
];

const ServicesSection = () => {
  const { t } = useLanguage();
  const services = serviceConfig.map(({ icon, key }) => ({
    icon,
    title: t.services[`${key}Title`],
    desc: t.services[`${key}Desc`],
  }));
  return (
  <section id="services" className="section-padding">
    <div className="section-container">
      <SectionHeading
        label={t.services.label}
        title={t.services.title}
        description={t.services.description}
      />

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {services.map(({ icon: Icon, title, desc }, i) => (
          <ScrollReveal key={title} delay={i * 0.1}>
            <div className="glass-card p-6 text-center group hover:border-primary/30 transition-colors duration-300 h-full">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                <Icon size={22} className="text-primary" />
              </div>
              <h3 className="font-semibold mb-2">{title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{desc}</p>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </div>
  </section>
  );
};

export default ServicesSection;