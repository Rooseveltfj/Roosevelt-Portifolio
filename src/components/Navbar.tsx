import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Languages } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const navLinksConfig = [
  { key: "about" as const, href: "#about" },
  { key: "skills" as const, href: "#skills" },
  { key: "projects" as const, href: "#projects" },
  { key: "experience" as const, href: "#experience" },
  { key: "contact" as const, href: "#contact" },
];

const Navbar = () => {
  const { t, lang, toggleLang } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50);
      const total = document.documentElement.scrollHeight - window.innerHeight;
      setScrollProgress(total > 0 ? (window.scrollY / total) * 100 : 0);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navLinks = navLinksConfig.map(({ key, href }) => ({
    label: t.nav[key],
    href,
  }));

  const translateLabel = lang === "pt" ? t.nav.translateTo : t.nav.translateToPt;

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? "bg-background/80 backdrop-blur-xl border-b border-border/50" : ""
        }`}
      >
        <nav className="section-container flex items-center justify-between h-16">
          <a href="#" className="font-bold text-lg tracking-tight">
            <span className="glow-text">Roosevelt</span>
            <span className="text-muted-foreground">Franklin</span>
          </a>

          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
            <button
              onClick={toggleLang}
              className="p-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-secondary/80 transition-colors duration-200"
              title={translateLabel}
              aria-label={translateLabel}
            >
              <Languages size={20} className="shrink-0" />
            </button>
            <a
              href="#contact"
              className="text-sm px-4 py-2 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
            >
              {t.nav.hireMe}
            </a>
          </div>

          <div className="flex items-center gap-1 md:hidden">
            <button
              onClick={toggleLang}
              className="p-2 rounded-lg text-foreground hover:bg-secondary/80 transition-colors"
              title={translateLabel}
              aria-label={translateLabel}
            >
              <Languages size={20} />
            </button>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="p-2 text-foreground"
              aria-label={t.nav.openMenu}
            >
              {mobileOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </nav>

        <div
          className="h-[2px] bg-primary/80 transition-all duration-150"
          style={{ width: `${scrollProgress}%` }}
        />
      </motion.header>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-background/95 backdrop-blur-xl flex flex-col items-center justify-center gap-6"
          >
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="text-2xl font-medium text-foreground hover:text-primary transition-colors"
              >
                {link.label}
              </a>
            ))}
            <button
              onClick={() => {
                toggleLang();
                setMobileOpen(false);
              }}
              className="flex items-center gap-2 text-2xl font-medium text-foreground hover:text-primary transition-colors"
            >
              <Languages size={24} />
              {translateLabel}
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
