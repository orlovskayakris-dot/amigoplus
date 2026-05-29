import { motion } from 'motion/react';
import { Header } from './Header';
import { Footer } from './Footer';
import { SectionHeading } from './SectionHeading';
import { ShieldCheck, Smartphone } from 'lucide-react';
import { ReactNode } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ContactForm } from './ContactForm';
import { SEO } from './SEO';

interface ProductLayoutProps {
  title: string;
  subtitle: string;
  image: string;
  badge: string;
  seoDescription?: string;
  children?: ReactNode;
}

export const ProductLayout = ({ title, subtitle, image, badge, seoDescription, children }: ProductLayoutProps) => {
  const location = useLocation();
  const currentUrl = `https://amigoplus.by${location.pathname}`;

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Главная",
        "item": "https://amigoplus.by"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": title,
        "item": currentUrl
      }
    ]
  };

  return (
    <div className="flex flex-col min-h-screen selection:bg-brand-primary selection:text-white bg-brand-surface">
      <SEO 
        title={`${title} | АМИГО ПЛЮС`}
        description={seoDescription || subtitle}
        image={image}
        url={currentUrl}
        type="article"
        structuredData={breadcrumbSchema}
        preloadImage={image}
      />
      <Header />
      
      {/* Product Hero */}
      <section className="relative h-[60vh] min-h-[400px] sm:min-h-[500px] flex items-center overflow-hidden">
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center"
          style={{ 
            backgroundImage: `linear-gradient(rgba(45, 55, 72, 0.7), rgba(45, 55, 72, 0.7)), url('${image}')` 
          }}
        />
        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl text-brand-surface mt-24"
          >
            <span className="inline-block px-4 py-1 bg-brand-primary rounded-full text-[10px] font-bold uppercase tracking-widest mb-6 text-white">
              {badge}
            </span>
            <h1 className="text-4xl lg:text-7xl font-display font-extrabold mb-6 leading-tight text-brand-surface">
              {title}
            </h1>
            <p className="text-xl text-brand-surface/80 leading-relaxed max-w-2xl mb-10">
              {subtitle}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content Area */}
      <main className="flex-1">
        {children}
      </main>

      {/* CTA Section (Shared) */}
      <section id="consult" className="py-16 md:py-24 bg-brand-surface scroll-mt-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
           <div className="terracotta-soft p-8 md:p-12 lg:p-16 rounded-3xl md:rounded-[48px] border border-white shadow-2xl relative overflow-hidden">
              <div className="relative z-10 max-w-4xl mx-auto text-center">
                 <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-display font-extrabold mb-6 sm:mb-8 leading-tight">Получить консультацию</h2>
                 <p className="text-base sm:text-lg text-brand-text mb-10 sm:mb-12 max-w-xl mx-auto">Мы перезвоним вам, поможем с выбором и проконсультируем по всем техническим особенностям.</p>
                 
                 <ContactForm page={title} />
              </div>
           </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};
