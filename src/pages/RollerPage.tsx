import { ProductLayout } from '../components/ProductLayout';
import { SectionHeading } from '../components/SectionHeading';
import { Shield, Sun, Ruler, Palette, Wind, Layers } from 'lucide-react';
import { motion } from 'motion/react';

export const RollerPage = () => {
  return (
    <ProductLayout 
      title="Рулонные шторы"
      subtitle="Практичность, стиль и надежная защита от солнца. Более 500 видов тканей — от прозрачных до полного Blackout."
      seoDescription="Купить рулонные шторы под заказ. Ткани Blackout (блэкаут), день-ночь. Защита от солнца и посторонних глаз. Замер и установка жалюзи."
      image="/images/roll.png"
      badge="Популярный выбор"
    >
      <section className="py-16 md:py-24 bg-brand-surface">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeading 
            title="Почему выбирают рулонные шторы?"
            subtitle="Лаконичное решение для современного дома и офиса"
          />
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
            {[
              { icon: <Shield />, title: "Защита мебели", text: "Специальные покрытия отражают UV-лучи, предотвращая выгорание предметов интерьера." },
              { icon: <Layers />, title: "Ткани Blackout", text: "100% блокировка света для идеального сна в любое время суток." },
              { icon: <Palette />, title: "Огромный выбор", text: "Богатая палитра цветов и текстур под любой дизайн интерьера." },
              { icon: <Wind />, title: "Пылеотталкивание", text: "Антистатическая пропитка исключает оседание пыли и облегчает уход." },
              { icon: <Ruler />, title: "Компактность", text: "Минимально занимаемое место на окне, оставляя подоконник свободным." },
              { icon: <Sun />, title: "Регулировка света", text: "Легко настроить нужный уровень освещенности одним движением." }
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

      <section className="py-16 md:py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          <div>
            <SectionHeading 
              badge="Качество"
              title="Типы систем"
              subtitle="Подберем оптимальный механизм под ваши задачи"
            />
            <ul className="space-y-6">
              <li className="flex gap-4 items-start">
                <div className="mt-1 w-5 h-5 rounded-full bg-brand-primary flex items-center justify-center text-white text-[10px] font-bold">1</div>
                <div>
                  <h4 className="font-bold mb-1">Свободновисящие</h4>
                  <p className="text-sm text-brand-text/60">Классический вариант для перекрытия всего проема окна.</p>
                </div>
              </li>
              <li className="flex gap-4 items-start">
                <div className="mt-1 w-5 h-5 rounded-full bg-brand-primary flex items-center justify-center text-white text-[10px] font-bold">2</div>
                <div>
                  <h4 className="font-bold mb-1">Кассетные (Uni)</h4>
                  <p className="text-sm text-brand-text/60">Крепятся на каждую створку. Ткань прячется в короб, а направляющие исключают зазоры.</p>
                </div>
              </li>
              <li className="flex gap-4 items-start">
                <div className="mt-1 w-5 h-5 rounded-full bg-brand-primary flex items-center justify-center text-white text-[10px] font-bold">3</div>
                <div>
                  <h4 className="font-bold mb-1">День-Ночь (Зебра)</h4>
                  <p className="text-sm text-brand-text/60">Двойное полотно с чередующимися полосами для максимально точной настройки света.</p>
                </div>
              </li>
            </ul>
          </div>
          <div className="relative">
            <div className="rounded-3xl overflow-hidden shadow-2xl relative z-10">
              <img src="/images/roll.png" alt="Рулонные шторы в интерьере" loading="lazy" className="w-full transition-all duration-700" />
            </div>
          </div>
        </div>
      </section>
    </ProductLayout>
  );
};
