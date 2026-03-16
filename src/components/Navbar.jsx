import React from 'react';
import { Menu, X, Play, Shield, MessageCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  const mainLink = "https://lbgame777.xyz/2xn84Y";

  return (
    <nav className="fixed top-0 left-0 w-full z-50 glass-morphism border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center">
            <a href="#hero" className="flex-shrink-0 flex items-center gap-3 group">
              <div className="w-12 h-12 relative">
                <div className="absolute inset-0 bg-blue-500/20 blur-lg rounded-full group-hover:bg-blue-500/40 transition-all"></div>
                <img src="/logo.svg" alt="Lucky Bear Logo" className="w-full h-full object-contain relative z-10 drop-shadow-2xl" loading="eager" />
              </div>
              <span className="text-2xl font-black tracking-tighter text-white">
                LUCKY<span className="text-blue-500 italic">BEAR</span>
              </span>
            </a>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <a href="#hero" className="text-slate-300 hover:text-white px-3 py-2 text-sm font-medium transition-colors">Главная</a>
              <a href="#features" className="text-slate-300 hover:text-white px-3 py-2 text-sm font-medium transition-colors">Преимущества</a>
              <a href="#games" className="text-slate-300 hover:text-white px-3 py-2 text-sm font-medium transition-colors">Слоты</a>
              <a href="#payments" className="text-slate-300 hover:text-white px-3 py-2 text-sm font-medium transition-colors">Выплаты</a>
              <a href="#faq" className="text-slate-300 hover:text-white px-3 py-2 text-sm font-medium transition-colors">FAQ</a>
            </div>
          </div>

          <div className="hidden md:flex items-center gap-4">
            <a 
              href={mainLink}
              className="flex items-center gap-2 px-4 py-2 bg-slate-800 hover:bg-slate-700 rounded-lg text-sm font-bold transition-all border border-slate-700"
            >
              <MessageCircle size={18} className="text-blue-400" />
              <span>ТГ Бот</span>
            </a>
            <motion.a 
              href={mainLink}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-2 bg-gradient-to-r from-blue-600 to-blue-400 hover:from-blue-500 hover:to-blue-300 rounded-lg text-sm font-black uppercase tracking-wider transition-all shadow-lg shadow-blue-500/30 text-white"
            >
              Регистрация
            </motion.a>
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden glass-morphism border-b border-white/5 overflow-hidden"
          >
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <a href="#hero" className="block text-slate-300 hover:text-white px-3 py-2 text-base font-medium">Главная</a>
              <a href="#features" className="block text-slate-300 hover:text-white px-3 py-2 text-base font-medium">Преимущества</a>
              <a href="#games" className="block text-slate-300 hover:text-white px-3 py-2 text-base font-medium">Слоты</a>
              <a href="#payments" className="block text-slate-300 hover:text-white px-3 py-2 text-base font-medium">Выплаты</a>
              <a href="#faq" className="block text-slate-300 hover:text-white px-3 py-2 text-base font-medium">FAQ</a>
              <div className="pt-4 flex flex-col gap-3 px-3 pb-6">
                <a href={mainLink} className="flex items-center justify-center gap-2 px-4 py-3 bg-slate-800 rounded-xl font-bold">
                  <MessageCircle size={20} className="text-blue-400" />
                  Lucky Bear Бот
                </a>
                <a href={mainLink} className="px-4 py-4 bg-gradient-to-r from-blue-600 to-blue-400 rounded-xl font-black text-center text-white uppercase tracking-wider shadow-lg shadow-blue-500/20">
                  Лаки Бир Регистрация
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
