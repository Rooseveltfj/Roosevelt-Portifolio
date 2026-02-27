import { Github, Linkedin } from "lucide-react";
import { WhatsAppIcon } from "@/components/icons/WhatsAppIcon";
import { useLanguage } from "@/contexts/LanguageContext";

const Footer = () => {
  const { t } = useLanguage();
  return (
  <footer className="border-t border-border py-8">
    <div className="section-container flex flex-col sm:flex-row items-center justify-between gap-4">
      <p className="text-sm text-muted-foreground">
        © {new Date().getFullYear()} Roosevelt Franklin. {t.footer.madeWith}
      </p>
      <div className="flex items-center gap-4 text-muted-foreground">
        {[
          { icon: Github, href: "https://github.com/Rooseveltfj", label: "GitHub" },
          { icon: Linkedin, href: "https://www.linkedin.com/in/rooseveltfj/", label: "LinkedIn" },
          { icon: WhatsAppIcon, href: "https://wa.me/", label: "WhatsApp" },
        ].map(({ icon: Icon, href, label }) => (
          <a
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={label}
            className="hover:text-primary transition-colors"
          >
            <Icon size={16} />
          </a>
        ))}
      </div>
    </div>
  </footer>
  );
};

export default Footer;