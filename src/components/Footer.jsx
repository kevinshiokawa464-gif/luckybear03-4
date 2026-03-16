import React from 'react';
import { MessageCircle, Shield, Gift, Zap, Play } from 'lucide-react';

const Footer = () => {
  const mainLink = "https://lbgame777.xyz/2xn84Y";

  return (
    <footer className="bg-slate-950 pt-20 pb-12 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 relative">
                <div className="absolute inset-0 bg-blue-600/20 blur-lg rounded-full"></div>
                <img src="/logo.svg" alt="Lucky Bear" className="w-full h-full object-contain relative z-10" />
              </div>
              <span className="text-2xl font-black tracking-tighter text-white">
                LUCKY<span className="text-blue-500 italic">BEAR</span>
              </span>
            </div>
            <p className="text-slate-500 text-sm leading-relaxed mb-6">
              Лакибир казино — это современная игровая платформа с уникальным доступом через Telegram-бот. 
              Играйте в слоты онлайн на официальном сайте или через зеркало.
            </p>
            <div className="flex gap-4">
              <a href={mainLink} className="w-10 h-10 bg-slate-900 border border-white/5 rounded-lg flex items-center justify-center text-blue-400 hover:bg-blue-600 hover:text-white transition-all">
                <MessageCircle size={20} />
              </a>
              {/* Add more social links if needed */}
            </div>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-wider text-sm">Навигация</h4>
            <ul className="space-y-4 text-slate-500 text-sm">
              <li><a href="#hero" className="hover:text-blue-400 transition-colors">Главная</a></li>
              <li><a href="#features" className="hover:text-blue-400 transition-colors">Преимущества</a></li>
              <li><a href="#games" className="hover:text-blue-400 transition-colors">Слоты</a></li>
              <li><a href="#faq" className="hover:text-blue-400 transition-colors">FAQ</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-wider text-sm">Сервис и Поддержка</h4>
            <ul className="space-y-4 text-slate-500 text-sm">
              <li><a href={mainLink} className="hover:text-blue-400 transition-colors font-bold text-slate-300">Лакибир бот</a></li>
              <li><a href={mainLink} className="hover:text-blue-400 transition-colors font-bold text-slate-300">Регистрация</a></li>
              <li><a href={mainLink} className="hover:text-blue-400 transition-colors">Вход в аккаунт</a></li>
              <li><a href={mainLink} className="hover:text-blue-400 transition-colors">Рабочее зеркало</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-wider text-sm">Лицензия</h4>
            <div className="flex items-center gap-3 mb-4">
              <Shield size={24} className="text-blue-500/50" />
              <div className="text-xs text-slate-500">
                Лицензированное казино Curacao. Все игры сертифицированы.
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Zap size={24} className="text-blue-500/50" />
              <div className="text-xs text-slate-500">
                Безопасные транзакции и мгновенные выплаты.
              </div>
            </div>
          </div>
        </div>
        
        {/* SEO Keywords Footer Text Section - Important for Yandex/SEO */}
        <div className="border-t border-white/5 pt-12 mb-12">
          <div className="text-[10px] text-slate-800 leading-relaxed text-justify uppercase tracking-widest font-medium opacity-50">
            lucky bear казино, лаки бир казино, лаки бир бот, lucky bear телеграм бот, lucky bear бот, casino lucky bear, lucky bear промокод, купон lucky bear, lucky bear bot, lucky bear отзывы, лакибир казино, luckybear казино, luckybear бонусы, лакибир бонусы, лакибир официальный сайт, лакибир слоты, рабочее зеркало лакибир, лакибир тг, luckybear tg, luckybear casino, промокод luckybear, luckybear партнерская программа, luckybear bot, luckybear сайт, luckybear играть, лакибир играть, лакибир бот, luckybear бот, lucky bear casino, казино лаки бир, casino luckybear, казино лакибир, luckybear casino мобильная версия, luckybear casino официальный сайт, лаки бир casino, игровые автоматы luckybear casino, luckybear casino официальный, сайт luckybear casino, казино luckybear, luckybear casino на деньги, лаки беар казино, luckybear casino вход, luckybear casino играть, luckybear casino играть онлайн, лаки бир казино официальный сайт, lucky bear казино официальный сайт, рабочее зеркало lucky bear, лаки бир рабочее зеркало, lucky bear вход, лаки бир вход, lucky bear регистрация, лаки бир регистрация, лаки бир казино зеркало, lucky bear казино зеркало, казино lucky bear, gambling lucky bear, lucky bear казино вход, lucky bear casino вход, lakibir казино, лакибеар казино вход, лаки беар казино регистрация, laki bir casino, лайки бир казино, медведь казино lucky bear, казино с логотипом медведя, лаки бир официальный сайт регистрация, luckybear игровые автоматы, лакибир игровые автоматы, рабочее зеркало лаки бир, lucky bear официальный сайт, лаки бир официальный сайт, lucky bear слоты, лаки бир слоты, казино лакибир регистрация, казино luckybear регистрация, лакибир казино мобильная версия, lucky bear казино онлайн, лаки бир казино онлайн, luckybear вход, лакибир вход.
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pt-12 border-t border-white/5">
          <div className="text-slate-600 text-[10px] uppercase tracking-widest font-bold">
            © 2026 LuckyBear Casino. Все права защищены. 18+ Играйте ответственно.
          </div>
          <div className="flex gap-6">
            <a href={mainLink} className="text-slate-600 hover:text-slate-400 text-xs transition-colors">Правила</a>
            <a href={mainLink} className="text-slate-600 hover:text-slate-400 text-xs transition-colors">Конфиденциальность</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
