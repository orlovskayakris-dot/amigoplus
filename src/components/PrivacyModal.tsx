import { X } from 'lucide-react';
import { useEffect } from 'react';

interface PrivacyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const PrivacyModal = ({ isOpen, onClose }: PrivacyModalProps) => {
  // Блокируем скролл страницы, когда открыто модальное окно
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    if (isOpen) {
      document.body.style.overflow = 'hidden';
      document.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-brand-header/60 backdrop-blur-sm transition-opacity" 
      onClick={onClose}
    >
      <div 
        className="bg-brand-surface rounded-[32px] w-full max-w-3xl max-h-[85vh] flex flex-col shadow-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-200" 
        onClick={(e) => e.stopPropagation()}
      >
        {/* Шапка модалки */}
        <div className="flex justify-between items-center p-6 sm:p-8 border-b border-black/5">
          <h2 className="text-2xl sm:text-3xl font-bold font-display text-brand-header tracking-tight">Политика конфиденциальности</h2>
          <button 
            onClick={onClose} 
            className="p-2 hover:bg-black/5 rounded-full transition-colors text-brand-text/50 hover:text-brand-header"
            aria-label="Закрыть"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Текст политики */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6 text-brand-text/80 text-sm sm:text-base leading-relaxed">
          <p>
            Настоящая Политика конфиденциальности разработана в соответствии с Законом Республики Беларусь от 07.05.2021 № 99-З 
            «О защите персональных данных» и определяет порядок обработки персональных данных и меры по обеспечению безопасности 
            персональных данных в проекте АМИГО ПЛЮС (далее — Оператор).
          </p>

          <div>
            <h3 className="font-bold text-brand-header text-lg mb-2">1. Общие положения</h3>
            <p>1.1. Оператор ставит своей важнейшей целью и условием осуществления своей деятельности соблюдение прав и свобод человека и гражданина при обработке его персональных данных, в том числе защиты прав на неприкосновенность частной жизни, личную и семейную тайну.</p>
            <p>1.2. Настоящая политика Оператора в отношении обработки персональных данных применяется ко всей информации, которую Оператор может получить о посетителях данного веб-сайта.</p>
          </div>

          <div>
            <h3 className="font-bold text-brand-header text-lg mb-2">2. Какие данные мы собираем</h3>
            <p>Оператор может обрабатывать следующие персональные данные Пользователя:</p>
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li>Имя;</li>
              <li>Номер контактного телефона.</li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-brand-header text-lg mb-2">3. Цели обработки персональных данных</h3>
            <p>3.1. Цель обработки персональных данных Пользователя — предоставление клиенту бесплатной консультации, расчет стоимости услуг, а также уточнение деталей заявки путем совершения телефонного звонка менеджером.</p>
            <p>3.2. Оператор не использует персональные данные для рассылки спама или нежелательных рекламных сообщений.</p>
          </div>

          <div>
            <h3 className="font-bold text-brand-header text-lg mb-2">4. Хранение и передача персональных данных</h3>
            <p>4.1. Безопасность персональных данных, которые обрабатываются Оператором, обеспечивается путем реализации правовых, организационных и технических мер, необходимых для выполнения в полном объеме требований действующего законодательства.</p>
            <p>4.2. Оператор обеспечивает сохранность персональных данных и принимает все возможные меры, исключающие доступ к персональным данным неуполномоченных лиц.</p>
            <p>4.3. Персональные данные Пользователя никогда, ни при каких условиях не будут переданы третьим лицам, за исключением случаев, связанных с исполнением действующего законодательства Республики Беларусь.</p>
          </div>

          <div>
            <h3 className="font-bold text-brand-header text-lg mb-2">5. Права пользователя</h3>
            <p>Пользователь имеет право в любой момент отозвать свое согласие на обработку персональных данных, а также запросить их удаление или изменение. Для этого достаточно сообщить о своем решении сотруднику Оператора по контактным телефонам, указанным на сайте.</p>
          </div>
        </div>

        {/* Подвал модалки */}
        <div className="p-6 sm:p-8 border-t border-black/5 bg-white flex justify-end">
          <button 
            type="button" 
            onClick={onClose} 
            className="px-8 py-4 bg-brand-header text-white font-bold uppercase tracking-widest rounded-2xl hover:bg-opacity-90 transition-all shadow-md active:scale-95"
          >
            Я ознакомлен(а)
          </button>
        </div>
      </div>
    </div>
  );
};
