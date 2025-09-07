import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { QrCode, ExternalLink } from 'lucide-react';

export function StickyBar() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY;
      setIsVisible(scrolled > 500);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleTelegramClick = () => {
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    const botLink = "{{TG_BOT_LINK}}"; // Placeholder for actual bot link
    
    if (isMobile) {
      window.open(`tg://resolve?domain=your_bot_name`, '_blank');
    } else {
      window.open(botLink, '_blank');
    }
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-surface-graphite/95 backdrop-blur-lg border-t border-ember-500/20 p-4">
      <div className="container mx-auto flex items-center justify-between max-w-4xl">
        <div className="hidden md:block">
          <div className="text-sm text-text-hero font-medium">
            Sunset Ember — дисциплина с деньгами на кону
          </div>
          <div className="text-xs text-text-dim">
            Тёплые напоминания, честные правила
          </div>
        </div>
        
        <div className="flex items-center space-x-3 flex-1 md:flex-none justify-center md:justify-end">
          <Button
            onClick={handleTelegramClick}
            className="btn-primary flex-1 md:flex-none"
          >
            <ExternalLink className="w-4 h-4 mr-2" />
            Начать челлендж
          </Button>
          
          <Button
            variant="outline"
            size="icon"
            className="btn-ghost hidden md:inline-flex"
            title="QR для телефона"
          >
            <QrCode className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </div>
  );
}