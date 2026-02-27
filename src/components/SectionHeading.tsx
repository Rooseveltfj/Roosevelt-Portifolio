import ScrollReveal from "./ScrollReveal";

interface SectionHeadingProps {
  label: string;
  title: string;
  description?: string;
}

const SectionHeading = ({ label, title, description }: SectionHeadingProps) => (
  <ScrollReveal className="mb-16 text-center">
    <span className="font-mono text-sm tracking-widest text-primary uppercase mb-3 block">
      {label}
    </span>
    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-balance">
      {title}
    </h2>
    {description && (
      <p className="text-text-secondary max-w-2xl mx-auto text-lg">
        {description}
      </p>
    )}
  </ScrollReveal>
);

export default SectionHeading;
