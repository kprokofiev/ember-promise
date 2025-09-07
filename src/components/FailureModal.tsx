import { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { CountdownRing } from './CountdownRing';
import { AlertCircle, Clock } from 'lucide-react';

interface FailureModalProps {
  children: React.ReactNode;
}

export function FailureModal({ children }: FailureModalProps) {
  const [isOpen, setIsOpen] = useState(false);
  
  // Create a deadline 5 minutes from now for demo
  const deadline = new Date(Date.now() + 5 * 60 * 1000);

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      
      <DialogContent className="sm:max-w-md bg-surface-graphite border-2 border-ember-500/30">
        <DialogHeader className="text-center space-y-4">
          <div className="mx-auto w-16 h-16 bg-ember-500/10 rounded-full flex items-center justify-center">
            <AlertCircle className="w-8 h-8 text-ember-500" />
          </div>
          
          <DialogTitle className="text-2xl font-bold text-text-hero">
            Последнее предупреждение
          </DialogTitle>
          
          <p className="text-text-dim">
            Время на выполнение цели истекает. Через 5 минут произойдёт автосписание.
          </p>
        </DialogHeader>
        
        <div className="flex flex-col items-center space-y-6 py-6">
          <CountdownRing deadline={deadline} size={140} />
          
          <div className="bg-surface-elevated rounded-xl p-4 w-full">
            <div className="flex items-center space-x-3 text-sm">
              <Clock className="w-4 h-4 text-ember-500" />
              <div>
                <div className="font-medium text-text-hero">Цель: 10,000 шагов</div>
                <div className="text-text-dim">Ставка: 1,000 ₽ → Фонд "Подари жизнь"</div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-2 gap-3">
          <Button 
            variant="outline" 
            onClick={() => setIsOpen(false)}
            className="btn-ghost"
          >
            Я сделал!
          </Button>
          <Button 
            onClick={() => setIsOpen(false)}
            className="btn-primary"
          >
            Списать деньги
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}