import { useState, FormEvent } from "react";
import { Mail, MapPin, Send } from "lucide-react";
import ScrollReveal from "./ScrollReveal";
import SectionHeading from "./SectionHeading";
import { toast } from "sonner";
import { useLanguage } from "@/contexts/LanguageContext";

const ContactSection = () => {
  const { t } = useLanguage();
  const [sending, setSending] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSending(true);
    setTimeout(() => {
      setSending(false);
      toast.success(t.contact.successToast);
      (e.target as HTMLFormElement).reset();
    }, 1000);
  };

  return (
    <section id="contact" className="section-padding">
      <div className="section-container">
        <SectionHeading
          label={t.contact.label}
          title={t.contact.title}
          description={t.contact.description}
        />

        <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          <ScrollReveal>
            <div className="space-y-6">
              <p className="text-text-secondary leading-relaxed">
                {t.contact.intro}
              </p>

              <div className="space-y-4">
                <div className="flex items-center gap-3 text-sm">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Mail size={18} className="text-primary" />
                  </div>
                  <div>
                    <p className="text-muted-foreground text-xs">{t.contact.email}</p>
                    <p className="text-foreground">roosevelt.jr.dev@hotmail.com</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <MapPin size={18} className="text-primary" />
                  </div>
                  <div>
                    <p className="text-muted-foreground text-xs">{t.contact.location}</p>
                    <p className="text-foreground">{t.contact.locationValue}</p>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.15}>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="text-sm text-muted-foreground mb-1 block">{t.contact.name}</label>
                <input
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-3 rounded-lg bg-secondary border border-border text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                  placeholder={t.contact.namePlaceholder}
                />
              </div>
              <div>
                <label htmlFor="email" className="text-sm text-muted-foreground mb-1 block">{t.contact.email}</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  className="w-full px-4 py-3 rounded-lg bg-secondary border border-border text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                  placeholder={t.contact.emailPlaceholder}
                />
              </div>
              <div>
                <label htmlFor="message" className="text-sm text-muted-foreground mb-1 block">{t.contact.message}</label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg bg-secondary border border-border text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all resize-none"
                  placeholder={t.contact.messagePlaceholder}
                />
              </div>
              <button
                type="submit"
                disabled={sending}
                className="w-full flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-all disabled:opacity-50 hover:shadow-[0_0_30px_hsl(217_91%_60%/0.3)]"
              >
                <Send size={16} />
                {sending ? t.contact.sending : t.contact.send}
              </button>
            </form>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;