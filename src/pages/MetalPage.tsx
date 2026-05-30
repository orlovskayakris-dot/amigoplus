import { ProductLayout } from '../components/ProductLayout';
import { SectionHeading } from '../components/SectionHeading';
import { Archive, Factory, Shield, Box, Settings, Stethoscope, FileText, CheckCircle2 } from 'lucide-react';
import { motion } from 'motion/react';

export const MetalPage = () => {
  return (
    <ProductLayout 
      title="Металлическая мебель"
      subtitle="Профессиональные решения для хранения. Долговечная и надежная мебель для офисов, складов и медицинских учреждений."
      seoDescription="Производство металлической мебели: архивные шкафы, стеллажи, сейфы для офиса и склада. Долговечность и качество. Оптовые поставки АМИГО ПЛЮС."
      image="/images/metal.webp"
      badge="Надежность и порядок"
    >
      <section className="py-16 md:py-24 bg-brand-surface">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeading 
            title="Широкий ассортимент"
            subtitle="Мебель, разработанная для интенсивной эксплуатации"
          />
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12 mb-20">
            {[
              { icon: <Archive />, title: "Архивные шкафы", text: "Оптимальное решение для хранения документов в папках Корона или подвесных системах." },
              { icon: <Factory />, title: "Стеллажи", text: "Легкие и грузовые системы для складов, гаражей и офисных архивов." },
              { icon: <Shield />, title: "Сейфы", text: "Взломостойкие и огнестойкие модели для защиты ценностей и документов." },
              { icon: <Box />, title: "Гардеробные шкафы", text: "Локеры для раздевалок в спортклубах, на производствах и в офисах." },
              { icon: <Settings />, title: "Производственная мебель", text: "Верстаки, инструментальные шкафы и тележки для мастерских." },
              { icon: <Stethoscope />, title: "Медицинская мебель", text: "Шкафы, тумбы и столы, соответствующие строгим гигиеническим нормам." }
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
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          <div>
            <SectionHeading 
              badge="Комплекс"
              title="Комплексное оснащение"
              subtitle="Проектируем системы хранения «под ключ»"
            />
            <p className="text-brand-text/70 mb-8 leading-relaxed">
              Мы осуществляем не только поставку мебели, но и профессиональный расчет систем хранения. Наши специалисты помогут рассчитать нагрузку на полки, подобрать оптимальную конфигурацию стеллажей и организовать пространство максимально эффективно.
            </p>
            <div className="space-y-4">
              {['Порошковое покрытие (любой цвет RAL)', 'Сертифицированная сталь', 'Быстрая сборка и доставка', 'Гарантия от производителя'].map((text, i) => (
                <div key={i} className="flex items-center gap-3 text-sm font-bold text-brand-header">
                  <div className="w-5 h-5 rounded-full bg-brand-primary/10 flex items-center justify-center text-brand-primary">
                    <CheckCircle2 className="w-3 h-3" />
                  </div>
                  <span>{text}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <div className="rounded-3xl overflow-hidden shadow-2xl">
              <img src="/images/metal2.webp" alt="Металлическая мебель в интерьере" loading="lazy" className="w-full" />
            </div>
          </div>
        </div>
      </section>
    </ProductLayout>
  );
};
