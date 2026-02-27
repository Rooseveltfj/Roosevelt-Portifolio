import { motion } from "framer-motion";
import { ArrowDown, Github, Linkedin, Twitter } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const HeroSection = () => {
  const { t } = useLanguage();
  return (
  <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
    <div className="absolute inset-0 grid-pattern opacity-40" />
    <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-primary/5 blur-[120px] animate-glow-pulse" />
    <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full bg-[hsl(260_80%_60%/0.05)] blur-[100px] animate-glow-pulse" style={{ animationDelay: "1.5s" }} />

    <div className="section-container relative z-10 text-center">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
      >
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-border/50 bg-secondary/50 backdrop-blur mb-8">
          <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
          <span className="text-sm text-muted-foreground">{t.hero.badge}</span>
        </div>

        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] mb-6 tracking-tight">
          {t.hero.title1}
          <br />
          <span className="glow-text">{t.hero.title2}</span>
          <br />
          {t.hero.title3}
        </h1>

        <p className="text-text-secondary text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
          {t.hero.subtitle}
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
          <a
            href="#projects"
            className="px-8 py-3.5 rounded-lg bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-all hover:shadow-[0_0_30px_hsl(217_91%_60%/0.3)]"
          >
            {t.hero.viewProjects}
          </a>
          <a
            href="#contact"
            className="px-8 py-3.5 rounded-lg border border-border hover:border-primary/50 text-foreground font-medium transition-all hover:bg-secondary/50"
          >
            {t.hero.contactMe}
          </a>
        </div>

        <div className="flex items-center justify-center gap-5 text-muted-foreground">
          {[
            { icon: Github, href: "https://github.com", label: "GitHub" },
            { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
            { icon: Twitter, href: "https://twitter.com", label: "Twitter" },
          ].map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="hover:text-primary transition-colors duration-200"
            >
              <Icon size={20} />
            </a>
          ))}
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <a href="#about" aria-label={t.hero.scrollDown}>
          <ArrowDown size={20} className="text-muted-foreground animate-float" />
        </a>
      </motion.div>
    </div>
  </section>
  );
};

export default HeroSection;