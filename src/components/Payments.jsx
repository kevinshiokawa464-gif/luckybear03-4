import React from 'react';
import { motion } from 'framer-motion';
import { CreditCard, Wallet, Smartphone, Landmark, Coins, Zap, Shield } from 'lucide-react';

const Payments = () => {
  const methods = [
    { name: "Visa / Mastercard", icon: <CreditCard className="text-blue-400" /> },
    { name: "МИР / СБП (QR)", icon: <Smartphone className="text-blue-400" /> },
    { name: "Piastrix / FKWallet", icon: <Wallet className="text-blue-400" /> },
    { name: "Tether USDT", icon: <Coins className="text-blue-400" /> },
    { name: "Bitcoin / ETH / LTC", icon: <Coins className="text-blue-400" /> },
    { name: "Binance Pay", icon: <Zap className="text-blue-400" /> }
  ];

  return (
    <section id="payments" className="py-24 bg-slate-900/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-black text-white mb-6 uppercase tracking-tighter">
            МГНОВЕННЫЙ <span className="text-blue-500 italic">ВЫВОД ВЫИГРЫША</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg">
            Забудь про ожидание! В <span className="text-white font-semibold">Lucky Bear</span> выигрыши прилетают 
            на твой счет со скоростью света. Без лимитов и комиссий.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6">
          {methods.map((method, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.05 }}
              viewport={{ once: true }}
              className="bg-white/5 border border-white/5 p-6 rounded-2xl flex flex-col items-center gap-4 hover:bg-white/10 transition-all group"
            >
              <div className="w-12 h-12 bg-blue-500/10 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                {method.icon}
              </div>
              <div className="text-[10px] md:text-xs font-black text-white text-center uppercase tracking-widest leading-tight">
                {method.name}
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 grid md:grid-cols-3 gap-8">
          <div className="bg-slate-900/50 p-8 rounded-3xl border border-white/5">
            <h4 className="text-white font-black mb-4 uppercase tracking-widest">ПОПОЛНИТЬ СЧЕТ</h4>
            <ul className="space-y-3 text-sm text-slate-400">
              <li className="flex justify-between"><span>Минимум:</span> <span className="text-white font-bold">300 ₽</span></li>
              <li className="flex justify-between"><span>Скорость:</span> <span className="text-white font-bold">0 сек</span></li>
              <li className="flex justify-between"><span>Комиссия:</span> <span className="text-white font-bold">0%</span></li>
            </ul>
          </div>
          <div className="bg-slate-900/50 p-8 rounded-3xl border border-white/5">
            <h4 className="text-white font-black mb-4 uppercase tracking-widest">ВЫВЕСТИ ДЕНЬГИ</h4>
            <ul className="space-y-3 text-sm text-slate-400">
              <li className="flex justify-between"><span>Крипто-вывод:</span> <span className="text-white font-bold">15 мин</span></li>
              <li className="flex justify-between"><span>Банк РФ:</span> <span className="text-white font-bold">от 30 мин</span></li>
              <li className="flex justify-between"><span>Статус:</span> <span className="text-blue-500 font-bold italic">БЕЗ ЛИМИТОВ</span></li>
            </ul>
          </div>
          <div className="bg-blue-600/10 p-8 rounded-3xl border border-blue-500/20 flex flex-col justify-center">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 bg-blue-600 rounded-2xl flex items-center justify-center">
                <Shield className="text-white" />
              </div>
              <div>
                <div className="text-white font-black uppercase tracking-tighter">Безопасность</div>
                <div className="text-[10px] text-blue-400 uppercase font-bold">Лицензионный софт</div>
              </div>
            </div>
            <p className="text-sm text-slate-400 leading-relaxed">
              Мы используем современные протоколы шифрования для защиты ваших данных и транзакций.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Payments;
