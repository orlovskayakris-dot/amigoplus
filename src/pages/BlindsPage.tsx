import { ProductLayout } from '../components/ProductLayout';
import { SectionHeading } from '../components/SectionHeading';
import { Sun, Shield, Settings, Sliders, Box, Droplets } from 'lucide-react';
import { motion } from 'motion/react';

export const BlindsPage = () => {
  return (
    <ProductLayout 
      title="Жалюзи всех видов"
      subtitle="Классика светозащиты в современном исполнении. Алюминий, дерево и пластик для любого интерьера."
      seoDescription="Жалюзи горизонтальные и вертикальные: алюминиевые, деревянные и пластиковые жалюзи для дома и офиса. Изготовление по вашим размерам с гарантией."
      image="/images/blind.webp"
      badge="Классические системы"
    >
      <section className="py-16 md:py-24 bg-brand-surface">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeading 
            title="Точный контроль света"
            subtitle="Преимущества использования классических жалюзи"
          />
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
            {[
              { icon: <Sliders />, title: "Угол наклона", text: "Плавная регулировка ламелей позволяет направлять свет в нужную сторону." },
              { icon: <Droplets />, title: "Влагостойкость", text: "Алюминиевые и пластиковые модели идеальны для кухонь и ванных комнат." },
              { icon: <Settings />, title: "Ремонтопригодность", text: "Легкая замена отдельных элементов в случае повреждения." },
              { icon: <Box />, title: "Материалы", text: "От экологичного дерева и бамбука до практичного алюминия." },
              { icon: <Sun />, title: "УФ-защита", text: "Надежно блокируют солнечные лучи, сохраняя прохладу в помещении." },
              { icon: <Shield />, title: "Долговечность", text: "Устойчивы к деформации и сохраняют первоначальный вид годами." }
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
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeading 
            badge="Коллекция"
            title="Виды жалюзи"
            subtitle="Выберите формат, который подходит вашим окнам"
          />
          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-8 bg-white rounded-3xl shadow-sm border border-black/5">
              <h4 className="text-2xl mb-4 font-bold">Горизонтальные</h4>
              <p className="text-brand-text/60 mb-6 font-medium leading-relaxed">Самый популярный вид. Компактно крепятся на створку, не мешают открытию окна. Идеальны для офисов и кухонь.</p>
              <div className="aspect-[16/13] rounded-2xl bg-brand-surface overflow-hidden group/img relative">
                
                <img src="/images/blind1.webp?v=2" alt="Горизонтальные жалюзи" loading="lazy" className="w-full h-full object-cover group-hover/img:scale-110 transition-transform duration-700" referrerPolicy="no-referrer" />
              </div>
            </div>
            <div className="p-8 bg-white rounded-3xl shadow-sm border border-black/5">
              <h4 className="text-2xl mb-4 font-bold">Вертикальные</h4>
              <p className="text-brand-text/60 mb-6 font-medium leading-relaxed">Зрительно увеличивают высоту потолков. Отлично подходят для больших панорамных окон и разделения пространства.</p>
              <div className="aspect-[16/13] rounded-2xl bg-brand-surface overflow-hidden group/img relative">
                 
                 <img src="/images/vertical1.webp?v=2" alt="Вертикальные жалюзи" loading="lazy" className="w-full h-full object-cover group-hover/img:scale-110 transition-transform duration-700" referrerPolicy="no-referrer" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </ProductLayout>
  );
};
