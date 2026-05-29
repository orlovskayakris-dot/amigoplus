import { useState } from 'react';
import { Loader2, CheckCircle2 } from 'lucide-react';
import { PrivacyModal } from './PrivacyModal';

interface ContactFormProps {
  page: string;
}

export const ContactForm = ({ page }: ContactFormProps) => {
  const [formData, setFormData] = useState({ name: '', phone: '+375 ', message: '' });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [isPrivacyOpen, setIsPrivacyOpen] = useState(false);
  const [agreed, setAgreed] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    
    try {
      const response = await fetch('/contact.php', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          page
        }),
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', phone: '+375 ', message: '' });
        setAgreed(false);
        setTimeout(() => setStatus('idle'), 5000);
      } else {
        setStatus('error');
      }
    } catch (error) {
      setStatus('error');
    }
  };

  return (
    <form className="flex flex-col gap-4 max-w-2xl mx-auto w-full" onSubmit={handleSubmit}>
      <div className="flex flex-col md:flex-row gap-4">
        <div className="flex-1">
          <label htmlFor={`name-${page}`} className="sr-only">Ваше имя</label>
          <input 
            id={`name-${page}`}
            type="text" 
            name="name"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            placeholder="Ваше имя" 
            required
            minLength={1}
            maxLength={100}
            onInvalid={(e) => (e.target as HTMLInputElement).setCustomValidity('Пожалуйста, введите ваше имя')}
            onInput={(e) => (e.target as HTMLInputElement).setCustomValidity('')}
            className="w-full px-8 py-5 bg-white rounded-[24px] border-none focus:ring-2 focus:ring-brand-primary text-brand-header font-bold text-lg shadow-inner outline-none disabled:opacity-50"
            disabled={status === 'loading'}
          />
        </div>
        <div className="flex-1 relative flex items-center">
          <label htmlFor={`phone-${page}`} className="sr-only">Номер телефона</label>
          <span className="absolute left-8 text-brand-header font-bold text-lg pointer-events-none opacity-50">+375</span>
          <input 
            id={`phone-${page}`}
            type="tel" 
            name="phone"
            value={formData.phone === '+375 ' ? '' : formData.phone.replace('+375 ', '')}
            onChange={(e) => {
              let val = e.target.value;
              val = val.replace(/\+375/g, '');
              val = val.replace(/\D/g, '');
              if (val.startsWith('375')) val = val.substring(3);
              else if (val.startsWith('80')) val = val.substring(2);
              val = val.substring(0, 9);
              setFormData({ ...formData, phone: '+375 ' + val });
            }}
            placeholder="(__) ___-__-__" 
            required
            pattern="\d{9}"
            onInvalid={(e) => (e.target as HTMLInputElement).setCustomValidity('Пожалуйста, введите корректный номер телефона (9 цифр)')}
            onInput={(e) => (e.target as HTMLInputElement).setCustomValidity('')}
            className="w-full pl-22 pr-8 py-5 bg-white rounded-[24px] border-none focus:ring-2 focus:ring-brand-primary text-brand-header font-bold text-lg shadow-inner outline-none disabled:opacity-50"
            disabled={status === 'loading'}
          />
        </div>
      </div>
      <div>
        <label htmlFor={`message-${page}`} className="sr-only">Ваше сообщение</label>
        <textarea 
          id={`message-${page}`}
          name="message"
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          placeholder="Что вас интересует?"
          rows={3}
          className="w-full px-8 py-5 bg-white rounded-[24px] border-none focus:ring-2 focus:ring-brand-primary text-brand-header font-bold text-lg shadow-inner outline-none disabled:opacity-50 resize-none"
          disabled={status === 'loading'}
        />
      </div>
      
      <div className="flex items-start gap-3 px-2 text-left w-full">
        <input 
          type="checkbox" 
          id={`privacy-${page}`}
          required 
          checked={agreed}
          onChange={(e) => setAgreed(e.target.checked)}
          className="mt-1 w-5 h-5 flex-shrink-0 rounded border-gray-300 text-brand-primary focus:ring-brand-primary cursor-pointer accent-brand-primary"
        />
        <div className="text-sm text-brand-text/70 text-left block w-full leading-snug">
          <label htmlFor={`privacy-${page}`} className="cursor-pointer">
            Я согласен(на) на обработку персональных данных и принимаю{' '}
          </label>
          <button 
            type="button" 
            onClick={() => setIsPrivacyOpen(true)}
            className="underline hover:text-brand-primary cursor-pointer focus:outline-none text-left"
          >
            Политику конфиденциальности
          </button>.
        </div>
      </div>

      <button 
        type="submit"
        disabled={status === 'loading'}
        className="w-full py-5 cta-gradient text-white font-bold uppercase tracking-widest rounded-[24px] shadow-2xl flex items-center justify-center gap-2 disabled:opacity-70"
      >
        {status === 'loading' ? (
          <>
            <Loader2 className="w-5 h-5 animate-spin" />
            Отправка...
          </>
        ) : status === 'success' ? (
          <>
            <CheckCircle2 className="w-5 h-5" />
            Отправлено!
          </>
        ) : (
          'Отправить'
        )}
      </button>
      {status === 'success' && (
        <p className="text-green-500 font-bold text-center">Ваше сообщение успешно отправлено</p>
      )}
      {status === 'error' && (
        <p className="text-red-500 font-bold text-sm text-center">Произошла ошибка. Попробуйте еще раз.</p>
      )}

      <PrivacyModal isOpen={isPrivacyOpen} onClose={() => setIsPrivacyOpen(false)} />
    </form>
  );
};
