import { Quote } from "lucide-react";
import ScrollReveal from "./ScrollReveal";
import SectionHeading from "./SectionHeading";
import { useLanguage } from "@/contexts/LanguageContext";

const testimonialNames = [
  { name: "Sarah Chen", role: "Product Manager, TechVault" },
  { name: "Marcus Wright", role: "CEO, PixelWave Agency" },
  { name: "Elena Kowalski", role: "Lead Designer, StartUp Labs" },
];

const TestimonialsSection = () => {
  const { t } = useLanguage();
  const testimonials = [
    { quote: t.testimonials.t1Quote, ...testimonialNames[0] },
    { quote: t.testimonials.t2Quote, ...testimonialNames[1] },
    { quote: t.testimonials.t3Quote, ...testimonialNames[2] },
  ];
  return (
  <section id="testimonials" className="section-padding">
    <div className="section-container">
      <SectionHeading
        label={t.testimonials.label}
        title={t.testimonials.title}
        description={t.testimonials.description}
      />

      <div className="grid md:grid-cols-3 gap-6">
        {testimonials.map((testimonial, i) => (
          <ScrollReveal key={i} delay={i * 0.1}>
            <div className="glass-card p-6 h-full flex flex-col">
              <Quote size={24} className="text-primary/40 mb-4" />
              <p className="text-text-secondary leading-relaxed mb-6 flex-1 italic">
                "{testimonial.quote}"
              </p>
              <div>
                <p className="font-semibold text-sm">{testimonial.name}</p>
                <p className="text-xs text-muted-foreground">{testimonial.role}</p>
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </div>
  </section>
  );
};

export default TestimonialsSection;