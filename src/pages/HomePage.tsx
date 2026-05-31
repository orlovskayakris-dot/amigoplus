import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Link } from 'react-router-dom';
import { 
  Ruler, 
  Smartphone, 
  Mic, 
  Sun, 
  VolumeX, 
  ShieldCheck, 
  Zap, 
  Clock, 
  ChevronRight, 
  Star,
  ArrowRight,
  Calculator,
  Archive,
  Factory,
  Shield,
  Box,
  Settings,
  Stethoscope,
  Loader2,
  CheckCircle2
} from 'lucide-react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { SectionHeading } from '../components/SectionHeading';

import { ContactForm } from '../components/ContactForm';
import { SEO } from '../components/SEO';

const CATALOG = [
  {
    title: "Электрокарнизы и Умные шторы",
    tag: "ФЛАГМАН",
    img: "/images/smart.webp",
    path: "/electro",
    features: ["Интеграция с Алисой", "Управление со смартфона", "Бесшумные моторы (<15 дБ)"]
  },
  {
    title: "Рулонные шторы",
    tag: "ПОПУЛЯРНОЕ",
    img: "/images/roll.webp",
    path: "/roller",
    features: ["Ткани Blackout 100%", "Защита от выгорания мебели", "Многообразие стилей и форм"]
  },
  {
    title: "Жалюзи всех видов",
    tag: "КЛАССИКА",
    img: "/images/blind.webp",
    path: "/blinds",
    features: ["Алюминий, дерево, пластик", "Легкая очистка", "Точная регулировка света"]
  },
  {
    title: "Шторы Плиссе и Римские",
    tag: "ЭЛЕГАНТНОСТЬ",
    img: "/images/pleats.webp",
    path: "/pleats",
    features: ["Для нестандартных окон", "Уникальные ткани", "Элегантный дизайн"]
  },
  {
    title: "Металлическая мебель",
    tag: "НА ЗАКАЗ",
    img: "/images/metal.webp",
    path: "/metal",
    features: ["Стеллажи и шкафы", "Технологическая мебель", "Покраска в любой цвет"]
  }
];

export const HomePage = () => {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "АМИГО ПЛЮС",
    "url": "https://amigoplus.by",
    "logo": "https://amigoplus.by/favicon.svg",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+375 29 815-60-93",
      "contactType": "customer service",
      "areaServed": "BY",
      "availableLanguage": "Russian"
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <SEO 
        title="Солнцезащитные системы и умные шторы в Беларуси | АМИГО ПЛЮС"
        description="Заказать жалюзи, рулонные шторы и электрокарнизы от производителя АМИГО ПЛЮС. Качество с 2002 года. Замер и установка. Производство в Новополоцке."
        keywords="жалюзи, электрокарнизы, рулонные шторы, шторы плиссе, купить жалюзи, белорусский производитель, Амиго Плюс"
        url="https://amigoplus.by"
        structuredData={organizationSchema}
        type="website"
      />
      <Header />
      
      <main className="flex-1">
      {/* HERO SECTION */}
      <section className="relative min-h-[100vh] lg:min-h-[700px] flex items-center overflow-hidden pt-24 lg:pt-28 pb-16">
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center"
          style={{ 
            backgroundImage: `linear-gradient(90deg, rgba(45, 55, 72, 0.85) 0%, rgba(45, 55, 72, 0.4) 50%, rgba(45, 55, 72, 0.1) 100%), url('/images/main-image.webp')` 
          }}
        />

        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-2xl text-brand-surface py-8"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-brand-primary text-white rounded-full text-[10px] sm:text-[10px] font-bold uppercase tracking-widest mb-8">
              <Star className="w-3 h-3 fill-current" />
              Производство с 2002 года
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-display font-extrabold mb-8 leading-[1.05] tracking-tighter text-balance text-brand-surface">
              Умные шторы и жалюзи, <br/> <span className="text-brand-primary">которые создают уют</span>
            </h1>
            <p className="text-base sm:text-lg lg:text-xl text-brand-surface/80 mb-12 max-w-lg leading-relaxed font-medium">
              От классических рулонных штор до бесшумных электрокарнизов. Изготовим точно по вашим размерам специально для вашего дома.
            </p>
            
            <div className="flex flex-col sm:flex-row flex-wrap gap-4">
              <a 
                href="#contact"
                className="w-full sm:w-auto px-6 sm:px-10 py-5 cta-gradient text-white font-bold uppercase tracking-widest rounded-2xl shadow-2xl flex items-center justify-center gap-3 hover:scale-105 transition-transform active:scale-95 group cursor-pointer"
              >
                <Calculator className="w-5 h-5 group-hover:rotate-12 transition-transform" />
                Рассчитать стоимость
              </a>
              <a 
                href="#contact"
                className="w-full sm:w-auto px-6 sm:px-10 py-5 bg-white/10 backdrop-blur-sm text-white font-bold uppercase tracking-widest rounded-2xl border border-white/40 hover:bg-white/20 transition-all flex items-center justify-center gap-2 cursor-pointer shadow-xl"
              >
                Заказать замер 
              </a>
            </div>
          </motion.div>
        </div>

        {/* FLOATING CARD */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="absolute right-10 bottom-10 z-20 hidden lg:block"
        >
          <div className="glass p-6 rounded-[32px] max-w-[220px] shadow-2xl border border-white/30 backdrop-blur-xl">
             <div className="w-full aspect-square rounded-2xl overflow-hidden mb-4 bg-brand-surface">
               <img src="/images/smart.webp" alt="Умный пульт управления" loading="lazy" className="w-full h-full object-cover" />
             </div>
             <p className="text-sm font-bold text-brand-header leading-tight">Интеграция с Алисой и умным домом</p>
          </div>
        </motion.div>
      </section>

      {/* CATALOG SECTION */}
      <section id="catalog" className="py-16 md:py-24 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeading 
            badge="Весь ассортимент" 
            title="Каталог солнцезащитных систем премиум-класса" 
            subtitle="Каждое изделие проходит 3 этапа контроля качества перед установкой."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {CATALOG.map((item, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="group bg-brand-surface rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-700 border border-black/5 flex flex-col"
              >
                <div className="aspect-[3/4] overflow-hidden relative">
                  <img src={item.img} alt={item.title} loading="lazy" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" referrerPolicy="no-referrer" />
                  <div className="absolute top-6 left-6 px-4 h-7 glass text-brand-header text-[9px] font-bold uppercase tracking-widest rounded-full flex items-center justify-center">{item.tag}</div>
                </div>
                <div className="p-6 sm:p-8 flex-1 flex flex-col">
                  <h3 className="text-xl sm:text-2xl mb-6 flex-shrink-0 min-h-[3.5rem] flex items-start">{item.title}</h3>
                  <ul className="space-y-3 mb-8 text-sm flex-1">
                    {item.features.map((f, i) => (
                      <li key={i} className="flex items-center gap-3">
                        <div className="w-5 h-5 rounded-full bg-brand-primary/5 text-brand-primary flex items-center justify-center flex-shrink-0"><ArrowRight className="w-3 h-3" /></div>
                        <span className="text-brand-text font-medium">{f}</span>
                      </li>
                    ))}
                  </ul>
                  <Link to={item.path} className="w-full py-4 border-2 border-brand-primary/10 rounded-2xl text-sm font-bold text-brand-primary uppercase tracking-widest flex items-center justify-center gap-2 group-hover:bg-brand-primary group-hover:text-white transition-all mt-auto">
                    Подробнее <ChevronRight className="w-4 h-4" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SMART SECTION */}
      <section id="smart" className="py-16 md:py-24 lg:py-32 bg-brand-header text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-brand-primary/10 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2 pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-6 relative z-10 grid lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="hidden lg:block relative"
          >
            <div className="rounded-3xl overflow-hidden shadow-2xl relative z-10 border border-white/10">
              <img src="/images/electro.webp" alt="Умный дом" loading="lazy" className="w-full" />
            </div>
          </motion.div>

          <div className="max-w-xl">
             <SectionHeading 
               badge="Инновации 2026" 
               title="Будущее уже здесь: Электрокарнизы для умного дома" 
               subtitle="Забудьте про ручное управление шторами. Настройте сценарии под ваш ритм жизни и наслаждайтесь комфортом."
               light
             />
             
             <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
                <div className="flex flex-col gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center text-brand-secondary border border-white/10"><Smartphone /></div>
                   <h3 className="text-lg text-white font-bold">Управление из любой точки мира</h3>
                </div>
                <div className="flex flex-col gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center text-brand-secondary border border-white/10"><Mic /></div>
                   <h3 className="text-lg text-white font-bold">Голосовое управление (Алиса, Siri)</h3>
                </div>
                <div className="flex flex-col gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center text-brand-secondary border border-white/10"><Sun /></div>
                   <h3 className="text-lg text-white font-bold">Сценарии "Пробуждение" по рассвету</h3>
                </div>
                <div className="flex flex-col gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center text-brand-secondary border border-white/10"><VolumeX /></div>
                   <h3 className="text-lg text-white font-bold">Абсолютно бесшумные моторы</h3>
                </div>
             </div>
             
             <a 
               href="#contact"
               className="inline-flex items-center justify-center mt-16 px-12 py-5 cta-gradient text-white font-bold rounded-2xl uppercase tracking-[0.2em] text-xs shadow-2xl shadow-brand-primary/20 hover:scale-105 active:scale-95 transition-all cursor-pointer"
             >
               Подобрать систему
             </a>
          </div>
        </div>
      </section>

      {/* METAL FURNITURE SECTION */}
      <section id="metal" className="py-16 md:py-24 lg:py-32 bg-brand-surface overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="order-2 lg:order-1"
            >
              <SectionHeading 
                badge="Металлическая мебель в Новополоцке" 
                title="Надежная металлическая мебель для бизнеса и дома" 
                subtitle="Долговечные решения для хранения. От архивных стеллажей до надежных сейфов и гардеробных шкафов. Устойчивы к износу, влаге и механическим повреждениям."
                accent
              />
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
                {[
                  { name: "Архивные и бухгалтерские шкафы", icon: <Archive className="w-4 h-4" /> },
                  { name: "Складские и торговые стеллажи", icon: <Factory className="w-4 h-4" /> },
                  { name: "Сейфы (взломостойкие)", icon: <Shield className="w-4 h-4" /> },
                  { name: "Гардеробные (локеры)", icon: <Box className="w-4 h-4" /> },
                  { name: "Верстаки и шкафы", icon: <Settings className="w-4 h-4" /> },
                  { name: "Медицинская мебель", icon: <Stethoscope className="w-4 h-4" /> }
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-4 group">
                    <div className="w-10 h-10 rounded-xl bg-brand-secondary/10 flex items-center justify-center text-brand-secondary group-hover:bg-brand-primary group-hover:text-white transition-all shadow-sm">
                      {item.icon}
                    </div>
                    <span className="text-brand-header font-bold text-sm tracking-tight">{item.name}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-col gap-6 mb-10">
                <p className="text-[10px] font-bold uppercase tracking-widest text-brand-text/40">Полимерно-порошковое покрытие. Гарантия качества. Возможна поставка оптом.</p>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="order-1 lg:order-2 relative"
            >
              <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl border border-white/40 aspect-[4/5] lg:aspect-auto">
                <img 
                  src="/images/metal2.webp" 
                  alt="Металлическая мебель для офиса и склада" 
                  loading="lazy"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute right-6 bottom-6 glass p-8 rounded-[32px] z-20 shadow-xl border border-white/40 max-w-[200px]">
                <p className="text-4xl font-black mb-1 text-brand-primary tracking-tighter">20+ лет</p>
                <p className="text-[10px] font-bold uppercase tracking-widest text-brand-header/50 leading-tight">Опыта работы с корпоративными клиентами</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section id="contact" className="py-16 md:py-24 relative overflow-hidden bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
           <div className="terracotta-soft p-8 md:p-12 lg:p-16 rounded-3xl md:rounded-[48px] border border-white shadow-2xl relative overflow-hidden">
              <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-brand-primary/5 rounded-full blur-[100px]" />
              
              <div className="relative z-10 max-w-4xl mx-auto text-center">
                 <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-display font-extrabold mb-8 leading-tight">Привезем персональную подборку образцов к вам домой</h2>
                 <p className="text-lg text-brand-text mb-16 max-w-xl mx-auto">Поделитесь контактами — мы свяжемся с вами в кратчайшие сроки, проконсультируем и согласуем время замера.</p>
                 
                 <ContactForm page="Главная страница" />
              </div>
           </div>
        </div>
      </section>

      {/* STRENGTHS SECTION */}
      <section className="py-16 md:py-24 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-8 lg:gap-16">
          <div className="flex flex-col gap-6">
            <div className="w-16 h-16 flex-shrink-0 rounded-[24px] bg-brand-primary/5 flex items-center justify-center text-brand-primary"><Ruler /></div>
             <h3 className="text-2xl">Точный замер</h3>
             <p className="text-brand-text/60">Мастер приедет на объект со всем необходимым оборудованием и каталогами. Проведем точные замеры и подберем решение, идеально подходящее вашему интерьеру.</p>
          </div>
          <div className="flex flex-col gap-6">
            <div className="w-16 h-16 flex-shrink-0 rounded-[24px] bg-brand-primary/5 flex items-center justify-center text-brand-primary"><Zap /></div>
             <h3 className="text-2xl">Быстрый монтаж</h3>
             <p className="text-brand-text/60">Весь цикл в наших руках. Гарантируем надежную и безупречную интеграцию систем.</p>
          </div>
          <div className="flex flex-col gap-6">
            <div className="w-16 h-16 flex-shrink-0 rounded-[24px] bg-brand-primary/5 flex items-center justify-center text-brand-primary"><Clock /></div>
             <h3 className="text-2xl">Сервис 24/7</h3>
             <p className="text-brand-text/60">Гарантийное и постгарантийное обслуживание. Мы всегда на связи, чтобы ваш дом оставался комфортным.</p>
          </div>
        </div>
      </section>
      </main>

      <Footer />
    </div>
  );
};
