import React from 'react';
import { motion } from 'framer-motion';
import { Play, Sparkles, Zap, Trophy } from 'lucide-react';

const Games = () => {
  const mainLink = "https://lbgame777.xyz/2xn84Y";

  const gameFormats = [
    { name: "СЛОТЫ", icon: <Sparkles className="text-yellow-400" />, pop: "95%", desc: "Классика и 3D-новинки" },
    { name: "LIVE ШОУ", icon: <Trophy className="text-blue-400" />, pop: "88%", desc: "Атмосфера реального казино" },
    { name: "CRASH ИГРЫ", icon: <Zap className="text-red-400" />, pop: "92%", desc: "Aviator, JetX и другие" }
  ];

  return (
    <section id="games" className="py-24 relative overflow-hidden bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-black text-white mb-6 uppercase tracking-tighter">
            ВЫБЕРИ СВОЙ <span className="text-blue-500 italic">ФОРМАТ ПОБЕДЫ</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg">
            В <span className="text-white font-semibold">Lucky Bear</span> собрано всё самое горячее: 
            от легендарных слотов до эксклюзивных новинок.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {gameFormats.map((format, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="bg-slate-900/50 border border-white/5 p-8 rounded-[32px] hover:border-blue-500/30 transition-all group relative overflow-hidden"
            >
              <div className="relative z-10 text-center">
                <div className="w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  {format.icon}
                </div>
                <div className="text-3xl font-black text-white mb-4">{format.name}</div>
                <p className="text-slate-400 mb-8">{format.desc}</p>
                <a href={mainLink} className="btn-primary w-full inline-block">ИГРАТЬ</a>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="p-8 md:p-12 bg-blue-600 rounded-[40px] relative overflow-hidden group text-center">
          <div className="relative z-10">
            <h3 className="text-3xl md:text-5xl font-black text-white mb-4 tracking-tighter">ТВОЙ КРУПНЫЙ ВЫИГРЫШ <br /> ЖДЕТ ТЕБЯ В ЛАКИ БИР!</h3>
            <p className="text-blue-100 font-medium opacity-80 mb-8 text-xl">Официальный софт • Проверка честности • RTP до 98%</p>
            <a href={mainLink} className="px-12 py-6 bg-white text-blue-600 rounded-2xl font-black text-2xl hover:shadow-2xl transition-all transform hover:scale-105 active:scale-95 inline-block">
              ИГРАТЬ СЕЙЧАС 🎰
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Games;
