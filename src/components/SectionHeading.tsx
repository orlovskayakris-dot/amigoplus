import { motion } from 'motion/react';

interface SectionHeadingProps {
  badge?: string;
  title: string;
  subtitle?: string;
  light?: boolean;
  accent?: boolean;
}

export const SectionHeading = ({ badge, title, subtitle, light = false, accent = false }: SectionHeadingProps) => (
  <div className="max-w-3xl mb-16">
    {badge && (
      <span className={`inline-block px-4 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest mb-4 ${light ? 'bg-white/10 text-white' : accent ? 'bg-brand-primary text-white shadow-lg' : 'bg-brand-primary/10 text-brand-primary'}`}>
        {badge}
      </span>
    )}
    <h2 className={`text-4xl lg:text-5xl mb-6 leading-tight ${light ? 'text-white' : 'text-brand-header'}`}>
      {title}
    </h2>
    {subtitle && (
      <p className={`text-lg ${light ? 'text-white/60' : 'text-brand-text'}`}>
        {subtitle}
      </p>
    )}
  </div>
);
