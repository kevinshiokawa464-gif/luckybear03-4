import React from 'react';
import { motion } from 'framer-motion';
import { Play, Zap, Shield, Gift } from 'lucide-react';

const Hero = () => {
  const mainLink = "https://lbgame777.xyz/2xn84Y";

  return (
    <section id="hero" className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, type: "spring" }}
            className="w-32 h-32 md:w-48 md:h-48 mb-8 relative"
          >
            <div className="absolute inset-0 bg-blue-600/30 blur-[40px] rounded-full animate-pulse"></div>
            <img src="/logo.svg" alt="Lucky Bear" className="w-full h-full object-contain relative z-10 drop-shadow-[0_0_30px_rgba(37,99,235,0.4)]" loading="eager" />
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full text-blue-400 text-sm font-bold mb-8"
          >
            <span>🔥 ЗАБЕРИ СВОЙ БОНУС ПРЯМО СЕЙЧАС! 🚀</span>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl lg:text-9xl font-black text-white leading-[1.1] mb-8 tracking-tighter"
          >
            LUCKY BEAR <br />
            <span className="text-blue-500 italic">ЛАКИ БИР</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-lg md:text-2xl text-slate-400 mb-12 max-w-3xl font-medium"
          >
            Официальный сайт • Вход и Регистрация • <span className="text-white">RTP до 98%</span>
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-6 w-full max-w-2xl justify-center"
          >
            <motion.a 
              href={mainLink}
              whileHover={{ scale: 1.05, boxShadow: "0 20px 40px -10px rgba(37, 99, 235, 0.5)" }}
              whileTap={{ scale: 0.95 }}
              className="relative group overflow-hidden bg-gradient-to-r from-blue-600 to-blue-400 p-1 rounded-2xl flex-1 transition-all"
            >
              <div className="bg-slate-950 group-hover:bg-transparent transition-colors rounded-[14px] py-6 flex items-center justify-center gap-3">
                <Play fill="currentColor" size={28} className="text-blue-500 group-hover:text-white transition-colors" />
                <span className="text-2xl font-black text-white uppercase tracking-tighter">ИГРАТЬ СЕЙЧАС</span>
              </div>
            </motion.a>

            <motion.a 
              href={mainLink}
              whileHover={{ scale: 1.05, boxShadow: "0 20px 40px -10px rgba(59, 130, 246, 0.3)" }}
              whileTap={{ scale: 0.95 }}
              className="bg-blue-600 hover:bg-blue-500 text-white rounded-2xl flex-1 py-6 flex items-center justify-center gap-3 shadow-xl shadow-blue-900/20 transition-all border border-blue-400/30"
            >
              <Zap size={28} fill="currentColor" />
              <span className="text-2xl font-black uppercase tracking-tighter">РЕГИСТРАЦИЯ</span>
            </motion.a>
          </motion.div>

          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 w-full max-w-4xl">
            {[
              { label: "Бонус", val: "+600%", color: "text-blue-500" },
              { label: "Игр", val: "3000+", color: "text-white" },
              { label: "Вывод", val: "15 мин", color: "text-white" },
              { label: "RTP", val: "98%", color: "text-blue-500" }
            ].map((stat, i) => (
              <div key={i} className="bg-white/5 border border-white/5 p-4 rounded-2xl text-center backdrop-blur-sm">
                <div className={`text-2xl md:text-3xl font-black ${stat.color} mb-1 tracking-tighter`}>{stat.val}</div>
                <div className="text-[10px] text-slate-500 uppercase font-bold tracking-widest">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full -z-10 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-600/10 blur-[150px] rounded-full" />
      </div>
    </section>
  );
};

export default Hero;
