import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Phone, Menu, X } from 'lucide-react';

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const isHome = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // For subpages, we might always want it to be "scrolled" (on white background) or handled differently.
  // But let's keep the user's logic: if on top and home, transparent.
  const headerClass = (isScrolled || !isHome)
    ? 'glass py-3 shadow-lg' 
    : 'bg-transparent py-6';
  
  const textClass = (isScrolled || !isHome) ? 'text-brand-header' : 'text-white';

  return (
    <>
      <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${headerClass}`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <Link to="/" className="flex items-center gap-2">
            <div className={`w-10 h-10 cta-gradient rounded-xl flex flex-shrink-0 items-center justify-center text-white font-black text-xl shadow-lg transition-transform ${isScrolled ? 'scale-90' : ''}`}>A</div>
            <span className={`hidden min-[400px]:inline font-display font-extrabold text-xl tracking-tighter ${textClass}`}>АМИГО ПЛЮС</span>
          </Link>

          <nav className={`hidden lg:flex items-center gap-8 text-[13px] font-bold uppercase tracking-widest ${textClass}`}>
            <Link to="/#catalog" className="hover:text-brand-primary transition-colors focus:outline-none focus:text-brand-primary">Каталог</Link>
            <Link to="/#smart" className="hover:text-brand-primary transition-colors focus:outline-none focus:text-brand-primary">Умный дом</Link>
            <Link to="/#metal" className="hover:text-brand-primary transition-colors focus:outline-none focus:text-brand-primary">Металл</Link>
            <Link to="/#contact" className="hover:text-brand-primary transition-colors focus:outline-none focus:text-brand-primary">Контакты</Link>
          </nav>

          <div className="flex items-center gap-2 sm:gap-6">
            <a href="tel:+375298156093" className={`flex items-center gap-1.5 font-display font-extrabold text-[12px] sm:text-xl focus:outline-none focus:text-brand-primary transition-colors ${isScrolled || !isHome ? 'text-brand-header' : 'text-white drop-shadow-sm'}`}>
              <Phone className="w-4 h-4 sm:w-5 sm:h-5 text-brand-primary flex-shrink-0" />
              <span>+375 (29) 815-60-93</span>
            </a>
            <button 
              onClick={() => {
                if (isHome) {
                  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                } else {
                  const el = document.getElementById('consult');
                  if (el) {
                    el.scrollIntoView({ behavior: 'smooth' });
                  } else {
                    navigate('/#contact');
                  }
                }
              }}
              className="hidden md:block px-8 py-3.5 bg-brand-primary/80 backdrop-blur-md border-2 border-brand-primary/70 text-white rounded-full text-sm font-bold uppercase tracking-widest transition-all shadow-xl hover:bg-brand-primary hover:border-brand-primary hover:scale-105 active:scale-95 cursor-pointer focus:outline-none focus:ring-4 focus:ring-brand-primary/50"
            >
              Заказать замер
            </button>
            <button aria-label="Открыть мобильное меню" onClick={() => setMobileMenu(!mobileMenu)} className={`${textClass} lg:hidden p-2`}>
              <Menu className="w-8 h-8" />
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {mobileMenu && (
          <motion.div 
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            className="fixed inset-0 z-100 bg-brand-header p-10 flex flex-col items-center justify-center gap-8 text-white uppercase font-display font-bold tracking-[0.2em]"
          >
            <button aria-label="Закрыть меню" onClick={() => setMobileMenu(false)} className="absolute top-10 right-10 p-2 border border-white/20 rounded-full focus:outline-none focus:ring-2 focus:ring-white"><X /></button>
            <Link to="/#catalog" className="text-center" onClick={(e) => {
              setMobileMenu(false);
              if (isHome) {
                e.preventDefault();
                document.getElementById('catalog')?.scrollIntoView({ behavior: 'smooth' });
              }
            }}>Каталог</Link>
            <Link to="/#smart" className="text-center" onClick={(e) => {
              setMobileMenu(false);
              if (isHome) {
                e.preventDefault();
                document.getElementById('smart')?.scrollIntoView({ behavior: 'smooth' });
              }
            }}>Умный дом</Link>
            <Link to="/#metal" className="text-center leading-snug" onClick={(e) => {
              setMobileMenu(false);
              if (isHome) {
                e.preventDefault();
                document.getElementById('metal')?.scrollIntoView({ behavior: 'smooth' });
              }
            }}>Металлическая<br className="sm:hidden" /> мебель</Link>
            <Link to="/#contact" className="text-center" onClick={(e) => {
              setMobileMenu(false);
              if (isHome) {
                e.preventDefault();
                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
              }
            }}>Контакты</Link>
            <a href="tel:+375298156093" className="mt-8 flex items-center gap-3 text-brand-primary text-xl">
              <Phone className="w-6 h-6" />
              +375 (29) 815-60-93
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
