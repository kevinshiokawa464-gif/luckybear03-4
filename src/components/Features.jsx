import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Zap, Gift, MessageCircle, Laptop, Smartphone } from 'lucide-react';

const Features = () => {
  const mainLink = "https://lbgame777.xyz/2xn84Y";
  const features = [
    {
      icon: <MessageCircle className="text-blue-400" />,
      title: "Lucky Bear Бот",
      description: "Уникальный лаки бир бот в Telegram. Мгновенная регистрация и доступ к играм прямо в мессенджере.",
      keyword: "lucky bear bot"
    },
    {
      icon: <Zap className="text-blue-400" />,
      title: "Рабочее Зеркало",
      description: "Актуальное рабочее зеркало лакибир доступно 24/7. Забудьте о блокировках и наслаждайтесь игрой.",
      keyword: "рабочее зеркало лаки бир"
    },
    {
      icon: <Gift className="text-blue-400" />,
      title: "Бонусы и Промокоды",
      description: "Получите эксклюзивный luckybear промокод при регистрации. Лакибир бонусы для всех новых игроков.",
      keyword: "luckybear бонусы"
    },
    {
      icon: <Smartphone className="text-blue-400" />,
      title: "Мобильная Версия",
      description: "Luckybear casino мобильная версия идеально работает на любом смартфоне. Играйте где угодно.",
      keyword: "luckybear casino мобильная версия"
    },
    {
      icon: <Shield className="text-blue-400" />,
      title: "Надежность",
      description: "Luckybear casino официальный сайт гарантирует безопасность ваших данных и быстрые выплаты.",
      keyword: "luckybear casino официальный"
    },
    {
      icon: <Laptop className="text-blue-400" />,
      title: "Игровые Автоматы",
      description: "Огромный выбор: игровые автоматы luckybear casino от ведущих провайдеров мира.",
      keyword: "игровые автоматы luckybear casino"
    }
  ];

  return (
    <section id="features" className="py-24 bg-slate-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-black text-white mb-6 uppercase tracking-tighter">
            Почему выбирают <span className="text-blue-500 italic">Лаки Бир</span>?
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg leading-relaxed">
            <span className="text-white font-bold">Lucky Bear</span> — это более <span className="text-blue-500 font-bold">3000 лицензионных игр</span> с отдачей (RTP) до 98%. 
            Наше <span className="text-white font-bold">рабочее зеркало лаки бир</span> доступно 24/7, обеспечивая стабильный доступ к азарту.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="card group"
            >
              <div className="w-14 h-14 bg-blue-500/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-inner shadow-blue-500/5">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
              <p className="text-slate-400 leading-relaxed mb-4">{feature.description}</p>
              <span className="text-[10px] text-slate-600 uppercase tracking-widest font-bold">#{feature.keyword}</span>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-20 p-8 md:p-12 glass-morphism rounded-3xl border border-blue-500/20 text-center">
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">Готовы начать игру в Лаки Бир Казино?</h3>
          <p className="text-slate-400 mb-8 max-w-3xl mx-auto">
            Регистрируйтесь через <span className="text-blue-400 font-semibold">лаки бир официальный сайт регистрация</span> 
            и получите доступ к эксклюзивным турнирам и акциям. Наша <span className="text-blue-400 font-semibold">luckybear партнерская программа</span> 
            также открыта для новых партнеров.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <motion.a 
              href={mainLink}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-primary w-full sm:w-auto px-10 py-5 text-xl font-black uppercase shadow-2xl shadow-blue-500/20"
            >
              Лакибир играть сейчас
            </motion.a>
            <motion.a 
              href={mainLink}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-secondary w-full sm:w-auto px-10 py-5 text-xl font-black uppercase"
            >
              Запустить luckybear bot
            </motion.a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
