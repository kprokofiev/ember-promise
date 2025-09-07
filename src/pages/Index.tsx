import { Button } from '@/components/ui/button';
import { InteractiveDemo } from '@/components/InteractiveDemo';
import { WaitlistForm } from '@/components/WaitlistForm';
import { FAQ } from '@/components/FAQ';
import { StickyBar } from '@/components/StickyBar';
import { 
  Target, 
  Heart, 
  Shield, 
  Zap, 
  Clock, 
  DollarSign, 
  ExternalLink,
  QrCode,
  CheckCircle,
  Smartphone,
  Camera,
  TrendingUp,
  Bell,
  MessageSquare,
  BarChart
} from 'lucide-react';
import heroImage from '@/assets/hero-sunset.jpg';

const Index = () => {
  const handleTelegramClick = () => {
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    const botLink = "{{TG_BOT_LINK}}";
    
    if (isMobile) {
      window.open(`tg://resolve?domain=your_bot_name`, '_blank');
    } else {
      window.open(botLink, '_blank');
    }
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-ember-500/5 via-transparent to-rose-glow/5"></div>
        
        <div className="container mx-auto px-6 relative">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center max-w-7xl mx-auto">
            {/* Left side - Content */}
            <div className="space-y-8 animate-fade-in">
              <div className="space-y-6">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-text-hero leading-tight">
                  Поставь цель.{' '}
                  <span className="bg-gradient-to-r from-ember-500 to-sun-gold bg-clip-text text-transparent">
                    Держи слово.
                  </span>{' '}
                  Или заплати.
                </h1>
                
                <p className="text-xl text-text-dim leading-relaxed max-w-2xl">
                  Тёплая дисциплина без токсичности. Мини-аппа в Telegram с автосписанием при провале. 
                  Деньги — в добро, другу или сервису.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  onClick={handleTelegramClick}
                  className="btn-primary text-lg px-8 py-4"
                >
                  <ExternalLink className="w-5 h-5 mr-2" />
                  Начать челлендж в Telegram
                </Button>
                
                <Button
                  variant="outline"
                  className="btn-ghost text-lg px-8 py-4"
                  onClick={() => document.getElementById('waitlist')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Записаться в ранний доступ
                </Button>
              </div>
              
              <div className="hidden lg:flex items-center space-x-4 text-sm text-text-dim">
                <QrCode className="w-5 h-5" />
                <span>Наведи камеру телефона для быстрого перехода в Telegram</span>
              </div>
            </div>
            
            {/* Right side - Interactive Demo */}
            <div className="flex justify-center lg:justify-end">
              <InteractiveDemo />
            </div>
          </div>
        </div>
      </section>

      {/* USP Cards */}
      <section className="py-20 bg-surface-graphite/30">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            <div className="card-ember text-center space-y-4">
              <div className="w-12 h-12 bg-ember-500/10 rounded-xl mx-auto flex items-center justify-center">
                <Heart className="w-6 h-6 text-ember-500" />
              </div>
              <h3 className="text-lg font-semibold text-text-hero">Деньги не пропадают</h3>
              <p className="text-text-dim text-sm">
                При провале средства идут на благотворительность, другу-антагонисту или комиссию сервиса
              </p>
            </div>
            
            <div className="card-ember text-center space-y-4">
              <div className="w-12 h-12 bg-ember-500/10 rounded-xl mx-auto flex items-center justify-center">
                <Shield className="w-6 h-6 text-ember-500" />
              </div>
              <h3 className="text-lg font-semibold text-text-hero">Прозрачно и законно</h3>
              <p className="text-text-dim text-sm">
                Напоминания, фискальные чеки, система апелляций. Всё по 54-ФЗ и 152-ФЗ
              </p>
            </div>
            
            <div className="card-ember text-center space-y-4">
              <div className="w-12 h-12 bg-ember-500/10 rounded-xl mx-auto flex items-center justify-center">
                <Zap className="w-6 h-6 text-ember-500" />
              </div>
              <h3 className="text-lg font-semibold text-text-hero">Гибко</h3>
              <p className="text-text-dim text-sm">
                Частота daily/weekly, grace-окна, лимиты списаний, эскалация ставки с капом
              </p>
            </div>
            
            <div className="card-ember text-center space-y-4">
              <div className="w-12 h-12 bg-ember-500/10 rounded-xl mx-auto flex items-center justify-center">
                <Target className="w-6 h-6 text-ember-500" />
              </div>
              <h3 className="text-lg font-semibold text-text-hero">Без токсичности</h3>
              <p className="text-text-dim text-sm">
                Поддержка вместо травли, инкогнито-режим, тёплые напоминания
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-text-hero">
              Как это работает
            </h2>
            <p className="text-text-dim text-lg max-w-2xl mx-auto">
              Простой и честный процесс — никаких скрытых условий
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="text-center space-y-6">
              <div className="w-16 h-16 bg-ember-500/10 rounded-2xl mx-auto flex items-center justify-center">
                <span className="text-2xl font-bold text-ember-500">1</span>
              </div>
              <div className="space-y-3">
                <h3 className="text-xl font-semibold text-text-hero">Задай цель и ставку</h3>
                <p className="text-text-dim">
                  Выбери цель, сумму и привяжи карту. Первый платёж через 3-DS, далее по токену
                </p>
              </div>
            </div>
            
            <div className="text-center space-y-6">
              <div className="w-16 h-16 bg-ember-500/10 rounded-2xl mx-auto flex items-center justify-center">
                <span className="text-2xl font-bold text-ember-500">2</span>
              </div>
              <div className="space-y-3">
                <h3 className="text-xl font-semibold text-text-hero">Чек-ин до дедлайна</h3>
                <p className="text-text-dim">
                  Отметь "Сделал" или приложи фото/код дня в Hard-режиме
                </p>
              </div>
            </div>
            
            <div className="text-center space-y-6">
              <div className="w-16 h-16 bg-ember-500/10 rounded-2xl mx-auto flex items-center justify-center">
                <span className="text-2xl font-bold text-ember-500">3</span>
              </div>
              <div className="space-y-3">
                <h3 className="text-xl font-semibold text-text-hero">Последний звонок</h3>
                <p className="text-text-dim">
                  Нет ответа — предупреждение, затем списание и фискальный чек
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 bg-surface-graphite/30">
        <div className="container mx-auto px-6">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-text-hero">
              Фичи для настоящих челленджей
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {[
              { icon: Camera, title: 'Код дня + OCR/ASR', desc: 'Hard-режим с фото/видео доказательствами' },
              { icon: TrendingUp, title: 'Эскалация ставки', desc: 'Повышение суммы за повторные провалы с капом' },
              { icon: DollarSign, title: 'Выбор получателя', desc: 'Фонд, друг-антагонист или комиссия сервиса' },
              { icon: Bell, title: 'Умные напоминания', desc: 'За 120/30/5 минут до дедлайна' },
              { icon: MessageSquare, title: 'Апелляции 24ч', desc: 'Возможность оспорить списание' },
              { icon: BarChart, title: 'Публичный леджер', desc: 'Прозрачность донатов (опционально)' }
            ].map((feature, i) => (
              <div key={i} className="card-ember space-y-4">
                <div className="w-10 h-10 bg-ember-500/10 rounded-lg flex items-center justify-center">
                  <feature.icon className="w-5 h-5 text-ember-500" />
                </div>
                <div>
                  <h3 className="font-semibold text-text-hero mb-2">{feature.title}</h3>
                  <p className="text-text-dim text-sm">{feature.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Early Access Offer */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center px-4 py-2 bg-ember-500/10 rounded-full text-ember-500 text-sm font-medium">
                🔥 Ранний доступ
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-text-hero">
                Присоединяйся к бета-тестерам
              </h2>
              <p className="text-text-dim text-lg max-w-2xl mx-auto">
                -40% комиссии на старте, приоритет в разработке фич, закрытый чат с основателями
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                onClick={handleTelegramClick}
                className="btn-primary text-lg px-8 py-4"
              >
                <ExternalLink className="w-5 h-5 mr-2" />
                Начать в Telegram
              </Button>
              
              <Button
                variant="outline"
                className="btn-ghost text-lg px-8 py-4"
                onClick={() => document.getElementById('waitlist')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Получить ранний доступ
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <FAQ />

      {/* Waitlist Form */}
      <section id="waitlist" className="py-20 bg-surface-graphite/30">
        <div className="container mx-auto px-6">
          <div className="max-w-md mx-auto">
            <WaitlistForm />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-surface-elevated">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-text-hero font-semibold">
              Sunset Ember
            </div>
            
            <div className="flex items-center space-x-6 text-sm text-text-dim">
              <a href="#" className="hover:text-ember-500 transition-colors">Политика</a>
              <a href="#" className="hover:text-ember-500 transition-colors">Условия</a>
              <a href="https://t.me/washedpeak" className="hover:text-ember-500 transition-colors">
                @washedpeak
              </a>
            </div>
          </div>
        </div>
      </footer>

      <StickyBar />
    </div>
  );
};

export default Index;
