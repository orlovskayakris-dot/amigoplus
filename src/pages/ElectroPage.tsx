import { ProductLayout } from '../components/ProductLayout';
import { SectionHeading } from '../components/SectionHeading';
import { Smartphone, Mic, Sun, VolumeX, ShieldCheck, Zap } from 'lucide-react';
import { motion } from 'motion/react';

export const ElectroPage = () => {
  return (
    <ProductLayout 
      title="Электрокарнизы и Умные шторы"
      subtitle="Инновационные решения для автоматизации окон. Бесшумные моторы, управление голосом и смартфоном."
      seoDescription="Автоматические шторы с интеграцией Яндекс Алиса. Бесшумные электрокарнизы для умного дома по индивидуальным размерам. Управление со смартфона."
      image="/images/smart.webp"
      badge="Флагманские технологии"
    >
      <section className="py-16 md:py-24 bg-brand-surface">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeading 
            title="Преимущества автоматизации"
            subtitle="Почему стоит выбрать электрокарнизы от АМИГО ПЛЮС"
          />
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
            {[
              { icon: <Smartphone />, title: "Удаленное управление", text: "Открывайте и закрывайте шторы из любой точки мира через мобильное приложение." },
              { icon: <Mic />, title: "Голосовое управление", text: "Полная интеграция с Яндекс.Алисой, Apple HomeKit и Google Home." },
              { icon: <Sun />, title: "Сценарии по расписанию", text: "Настройте автоматическое открытие при восходе солнца или закрытие в сумерки." },
              { icon: <VolumeX />, title: "Бесшумность", text: "Используем моторы с уровнем шума менее 15 дБ — тише шепота." },
              { icon: <Zap />, title: "Автономность", text: "Возможность установки систем на аккумуляторах без подведения проводки." },
              { icon: <ShieldCheck />, title: "Надежность", text: "Гарантия на приводы до 5 лет. Ресурс работы более 15 лет." }
            ].map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-6 sm:p-8 rounded-3xl bg-white border border-black/5"
              >
                <div className="w-12 h-12 rounded-2xl bg-brand-primary/10 flex items-center justify-center text-brand-primary mb-6">
                  {item.icon}
                </div>
                <h3 className="text-xl mb-4">{item.title}</h3>
                <p className="text-brand-text/70 text-sm leading-relaxed">{item.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center">
          <div className="rounded-3xl overflow-hidden shadow-2xl border border-white">
            <img src="/images/electro.webp" alt="Умные электрошторы" loading="lazy" className="w-full" />
          </div>
          <div>
            <SectionHeading 
              badge="Технологии"
              title="Разнообразие систем"
              subtitle="Мы предлагаем решения для любых типов окон и интерьеров."
            />
            <div className="space-y-6">
              <div className="flex gap-6 p-6 bg-white rounded-3xl shadow-sm">
                <div className="text-brand-primary font-bold text-2xl">01</div>
                <div>
                  <h4 className="text-lg font-bold mb-2">Раздвижные электрокарнизы</h4>
                  <p className="text-sm text-brand-text/60">Для классических штор и портьер. Плавный старт и стоп, функция Touch Motion.</p>
                </div>
              </div>
              <div className="flex gap-6 p-6 bg-white rounded-3xl shadow-sm">
                <div className="text-brand-primary font-bold text-2xl">02</div>
                <div>
                  <h4 className="text-lg font-bold mb-2">Рулонные электрошторы</h4>
                  <p className="text-sm text-brand-text/60">Компактные системы для точечного управления светом. Идеально для спален и кинозалов.</p>
                </div>
              </div>
              <div className="flex gap-6 p-6 bg-white rounded-3xl shadow-sm">
                <div className="text-brand-primary font-bold text-2xl">03</div>
                <div>
                  <h4 className="text-lg font-bold mb-2">Римские электрошторы</h4>
                  <p className="text-sm text-brand-text/60">Сочетание классической элегантности и современного комфорта управления.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </ProductLayout>
  );
};
