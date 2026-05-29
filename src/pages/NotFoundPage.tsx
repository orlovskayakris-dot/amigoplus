import { Link } from 'react-router-dom';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { SEO } from '../components/SEO';
import { Home } from 'lucide-react';

export function NotFoundPage() {
  return (
    <>
      <SEO 
        title="Страница не найдена - АМИГО ПЛЮС"
        description="К сожалению, запрашиваемая страница не существует."
      />
      <div className="min-h-screen flex flex-col bg-brand-surface font-sans text-brand-text">
        <Header />
        
        <main className="flex-grow flex items-center justify-center pt-32 pb-24 px-6 relative">
          {/* BACKGROUND EFFECTS */}
          <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
            <div className="absolute top-[20%] left-[10%] w-96 h-96 bg-brand-primary/10 rounded-full blur-[120px]" />
            <div className="absolute bottom-[20%] right-[10%] w-80 h-80 bg-brand-accent/10 rounded-full blur-[100px]" />
          </div>

          <div className="max-w-2xl mx-auto w-full text-center relative z-10">
            <h1 className="text-9xl md:text-[150px] font-display font-extrabold text-brand-primary/20 leading-none mb-4 tracking-tighter select-none">
              404
            </h1>
            <div className="relative -mt-16 sm:-mt-24 mb-8">
              <h2 className="text-3xl md:text-5xl font-display font-extrabold leading-tight">
                Ой! Эта страница потерялась
              </h2>
            </div>
            <p className="text-lg md:text-xl text-brand-text/70 mb-12 max-w-lg mx-auto">
              Возможно она была перемещена, или вы просто опечатались в адресе. Давайте вернемся назад.
            </p>
            <Link 
              to="/"
              className="inline-flex px-8 py-5 cta-gradient text-white font-bold uppercase tracking-widest rounded-2xl shadow-xl hover:scale-105 transition-transform active:scale-95 items-center justify-center gap-3"
            >
              <Home className="w-5 h-5" />
              На главную страницу
            </Link>
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
}
