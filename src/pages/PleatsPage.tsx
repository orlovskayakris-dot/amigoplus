import { ProductLayout } from '../components/ProductLayout';
import { SectionHeading } from '../components/SectionHeading';
import { Palette, Ruler, Layout, Star, Droplets, Sun } from 'lucide-react';
import { motion } from 'motion/react';

export const PleatsPage = () => {
  return (
    <ProductLayout 
      title="Шторы Плиссе и Римские"
      subtitle="Изысканное решение для окон любой формы. Плиссированная ткань и классические складки для утонченного интерьера."
      seoDescription="Элегантные шторы шторы-плиссе и римские шторы для любых, включая нестандартные и мансардные, окон. Индивидуальный пошив под заказ."
      image="/images/pleats.webp"
      badge="Элегантность и стиль"
    >
      <section className="py-16 md:py-24 bg-brand-surface">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeading 
            title="Эстетика и функциональность"
            subtitle="Уникальные особенности плиссе и римских штор"
          />
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
            {[
              { icon: <Layout />, title: "Сложные формы", text: "Единственное решение для арочных, трапециевидных и треугольных окон." },
              { icon: <Ruler />, title: "Двустороннее открытие", text: "Системы 'вверх-вниз' позволяют закрывать любую часть окна — сверху, снизу или посередине." },
              { icon: <Palette />, title: "Ткани Duo", text: "Двухслойные ткани 'соты' скрывают шнуры и обеспечивают дополнительную теплоизоляцию." },
              { icon: <Star />, title: "Дизайнерские ткани", text: "Специальная коллекция фактурных и жаккардовых тканей для премиальных интерьеров." },
              { icon: <Droplets />, title: "Легкий уход", text: "Многие виды тканей плиссе можно стирать вручную." },
              { icon: <Sun />, title: "Светоотражение", text: "Напыление на внешней стороне эффективно защищает от перегрева." }
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
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center">
          <div>
            <SectionHeading 
              badge="Детали"
              title="Римские шторы"
              subtitle="Традиции в современном прочтении"
            />
            <p className="text-brand-text/70 mb-8 leading-relaxed">
              Римские шторы — это воплощение домашнего уюта. При подъеме они образуют мягкие горизонтальные складки, которые ложатся друг на друга. Мы используем только качественные карнизные системы, которые обеспечивают плавность и легкость хода.
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 bg-white rounded-2xl text-center">
                 <p className="text-brand-primary font-black text-2xl">500+</p>
                 <p className="text-[10px] font-bold uppercase tracking-widest opacity-40">Вариантов тканей</p>
              </div>
              <div className="p-4 bg-white rounded-2xl text-center">
                 <p className="text-brand-primary font-black text-2xl">3 дня</p>
                 <p className="text-[10px] font-bold uppercase tracking-widest opacity-40">Срок пошива</p>
              </div>
            </div>
          </div>
          <div className="relative">
             <img src="/images/pleats.webp" alt="Шторы Плиссе" loading="lazy" className="rounded-3xl shadow-2xl w-full" />
          </div>
        </div>
      </section>
    </ProductLayout>
  );
};
