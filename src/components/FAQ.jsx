import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus, HelpCircle, MessageCircle } from 'lucide-react';

const FAQItem = ({ question, answer, isOpen, toggle }) => (
  <div className="border-b border-white/5 py-4">
    <button 
      onClick={toggle}
      className="flex items-center justify-between w-full text-left group transition-all"
    >
      <span className={`text-lg font-bold transition-colors ${isOpen ? 'text-blue-400' : 'text-slate-200 group-hover:text-blue-300'}`}>
        {question}
      </span>
      <div className={`w-8 h-8 rounded-lg flex items-center justify-center transition-all ${isOpen ? 'bg-blue-600 text-white' : 'bg-slate-800 text-slate-500'}`}>
        {isOpen ? <Minus size={18} /> : <Plus size={18} />}
      </div>
    </button>
    
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          className="overflow-hidden"
        >
          <p className="text-slate-400 mt-4 leading-relaxed pb-2 italic font-medium">
            {answer}
          </p>
        </motion.div>
      )}
    </AnimatePresence>
  </div>
);

const FAQ = () => {
  const mainLink = "https://lbgame777.xyz/2xn84Y";
  const [openIndex, setOpenIndex] = React.useState(0);

  const faqs = [
    {
      question: "Как найти актуальное рабочее зеркало лакибир?",
      answer: "Самый простой способ найти рабочее зеркало лакибир — это наш официальный Telegram-бот. Мы обновляем ссылки мгновенно, чтобы вы всегда имели доступ к luckybear казино."
    },
    {
      question: "Как работает lucky bear телеграм бот?",
      answer: "Лаки бир бот — это полноценный доступ к казино прямо в вашем Telegram. Вы можете регистрироваться, пополнять баланс и играть в lucky bear слоты без необходимости переходить на сайт."
    },
    {
      question: "Как получить lucky bear промокод или купон?",
      answer: "Промокоды lucky bear регулярно публикуются в нашем официальном канале. Также вы можете получить купон lucky bear, обратившись в службу поддержки через лакибир тг."
    },
    {
      question: "Безопасно ли играть в luckybear casino на деньги?",
      answer: "Да, luckybear casino официальный сайт использует передовые технологии шифрования. Все выплаты гарантированы, а игровые автоматы luckybear casino проходят регулярную проверку честности."
    },
    {
      question: "Как пройти лаки бир регистрация?",
      answer: "Вы можете пройти регистрацию через lucky bear казино официальный сайт или наш бот. Лаки бир официальный сайт регистрация занимает меньше минуты и требует только минимальные данные."
    },
    {
      question: "Есть ли у luckybear casino мобильная версия?",
      answer: "Конечно! Сайт luckybear casino идеально оптимизирован для всех типов мобильных устройств. Вы можете играть онлайн в лаки бир казино в любом месте и в любое время."
    }
  ];

  return (
    <section id="faq" className="py-24 bg-slate-900/30">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-500/10 border border-blue-500/20 rounded-full text-blue-400 text-sm font-bold mb-4">
            <HelpCircle size={16} />
            <span>Частые вопросы</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-black text-white mb-6">
            FAQ по <span className="text-blue-500 italic">Lucky Bear</span>
          </h2>
          <p className="text-slate-400 text-lg">
            Узнайте всё о <span className="text-white font-semibold">luckybear casino вход</span>, бонусах и работе нашего бота. 
            Мы собрали ответы на самые популярные запросы игроков.
          </p>
        </div>
        
        <div className="glass-morphism rounded-3xl p-8 md:p-12 border border-white/5 shadow-2xl">
          {faqs.map((faq, index) => (
            <FAQItem 
              key={index} 
              {...faq} 
              isOpen={openIndex === index} 
              toggle={() => setOpenIndex(openIndex === index ? -1 : index)} 
            />
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-slate-500 text-sm mb-6 uppercase tracking-widest font-bold">
            Не нашли ответ? Напишите нам в поддержку
          </p>
          <a href={mainLink} className="btn-secondary inline-flex items-center gap-2 px-8 py-4 text-lg font-black uppercase shadow-lg shadow-blue-500/10 transition-all hover:scale-105 active:scale-95">
            <MessageCircle size={22} className="text-blue-400" />
            Лакибир ТГ Поддержка
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
