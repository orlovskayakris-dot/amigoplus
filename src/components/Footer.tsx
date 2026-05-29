import { Link } from 'react-router-dom';
import { ChevronRight, Instagram } from 'lucide-react';
import { useState } from 'react';
import { PrivacyModal } from './PrivacyModal';

export const Footer = () => {
  const [isPrivacyOpen, setIsPrivacyOpen] = useState(false);

  return (
    <footer className="py-20 bg-brand-header text-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-8">
              <div className="w-10 h-10 cta-gradient rounded-xl flex items-center justify-center text-white font-black text-xl shadow-lg">A</div>
              <span className="font-display font-extrabold text-xl tracking-tighter">АМИГО ПЛЮС</span>
            </div>
            <p className="text-white/40 text-sm leading-relaxed font-medium">
              Ведущий производитель солнцезащитных систем в Беларуси. Создаем комфорт в домах с 2002 года.
            </p>
          </div>

          <div>
            <h5 className="font-display font-bold text-xs uppercase tracking-[0.3em] mb-8 text-brand-primary">Контакты</h5>
            <div className="flex flex-col gap-4 text-sm font-medium">
              <a href="tel:+375214506093" className="hover:text-brand-primary transition-colors">+375 (214) 506-093</a>
              <a href="tel:+375298156093" className="hover:text-brand-primary transition-colors">+375 (29) 815-60-93 (МТС)</a>
              <a href="tel:+375296556093" className="hover:text-brand-primary transition-colors">+375 (29) 655-60-93</a>
              <p className="text-white/60">г. Витебская область, г.Новополоцк, ул. Я.Коласа, д.14-1</p>
              <p className="text-white/30 uppercase text-[10px] tracking-widest font-bold">Регистрация в торговом реестре: №179127 от 29.01.2015</p>
            </div>
          </div>

          <div>
            <h5 className="font-display font-bold text-xs uppercase tracking-[0.3em] mb-8 text-brand-primary">Продукция</h5>
            <div className="flex flex-col gap-4 text-sm font-medium text-white/60">
               <Link to="/electro" className="hover:text-white transition-colors">Электрокарнизы</Link>
               <Link to="/roller" className="hover:text-white transition-colors">Рулонные шторы</Link>
               <Link to="/metal" className="hover:text-white transition-colors">Металлическая мебель</Link>
               <Link to="/blinds" className="hover:text-white transition-colors">Жалюзи</Link>
            </div>
          </div>

          <div>
            <h5 className="font-display font-bold text-xs uppercase tracking-[0.3em] mb-8 text-brand-secondary"> соцсети</h5>
            <div className="flex gap-4">
               <a 
                 href="https://www.instagram.com/amigo_plus/" 
                 target="_blank" 
                 rel="noopener noreferrer"
                 aria-label="Instagram"
                 className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/40 hover:border-brand-primary hover:text-white transition-all shadow-sm focus:outline-none focus:border-brand-primary focus:text-white focus:ring-2 focus:ring-brand-primary"
               >
                 <Instagram size={18} />
               </a>
            </div>
          </div>
        </div>

        <div className="pt-10 border-t border-white/5 flex flex-col sm:flex-row justify-between items-center gap-6">
           <p className="text-[11px] font-bold text-white/20 uppercase tracking-[0.4em]">© 2002–2026 AMIGO PLUS</p>
           <button 
             onClick={() => setIsPrivacyOpen(true)} 
             className="text-sm text-white/40 hover:text-white transition-colors focus:outline-none focus:underline"
           >
             Политика конфиденциальности
           </button>
        </div>
      </div>
      <PrivacyModal isOpen={isPrivacyOpen} onClose={() => setIsPrivacyOpen(false)} />
    </footer>
  );
};
