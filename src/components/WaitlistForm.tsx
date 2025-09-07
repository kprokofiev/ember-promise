import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Checkbox } from '@/components/ui/checkbox';
import { toast } from '@/hooks/use-toast';
import { Mail, User, CheckCircle } from 'lucide-react';

export function WaitlistForm() {
  const [formData, setFormData] = useState({
    email: '',
    username: '',
    agreed: false
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.email || !formData.agreed) {
      toast({
        title: "Ошибка",
        description: "Пожалуйста, заполните email и согласитесь с условиями",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      setIsSuccess(true);
      toast({
        title: "Успешно!",
        description: "Вы записаны в ранний доступ. Скоро напишем!",
      });
    } catch (error) {
      toast({
        title: "Ошибка",
        description: "Что-то пошло не так. Попробуйте ещё раз.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSuccess) {
    return (
      <div className="bg-surface-graphite rounded-xl p-8 text-center space-y-4">
        <div className="w-16 h-16 bg-ok-mint/10 rounded-full flex items-center justify-center mx-auto">
          <CheckCircle className="w-8 h-8 text-ok-mint" />
        </div>
        <h3 className="text-xl font-bold text-text-hero">Готово! 🎉</h3>
        <p className="text-text-dim">
          Вы в списке раннего доступа. Скоро напишем в Telegram с промокодом на скидку 40%.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="bg-surface-graphite rounded-xl p-8 space-y-6">
      <div className="text-center space-y-2">
        <h3 className="text-xl font-bold text-text-hero">Записаться в ранний доступ</h3>
        <p className="text-text-dim">-40% комиссии, приоритет фич, приват-чат</p>
      </div>
      
      <div className="space-y-4">
        <div className="relative">
          <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-text-dim" />
          <Input
            type="email"
            placeholder="your@email.com"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className="pl-10 bg-surface-elevated border-surface-elevated text-text-hero placeholder:text-text-muted"
            required
          />
        </div>
        
        <div className="relative">
          <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-text-dim" />
          <Input
            type="text"
            placeholder="@username (необязательно)"
            value={formData.username}
            onChange={(e) => setFormData({ ...formData, username: e.target.value })}
            className="pl-10 bg-surface-elevated border-surface-elevated text-text-hero placeholder:text-text-muted"
          />
        </div>
        
        <div className="flex items-start space-x-3">
          <Checkbox
            checked={formData.agreed}
            onCheckedChange={(checked) => setFormData({ ...formData, agreed: checked === true })}
            className="mt-1"
          />
          <label className="text-sm text-text-dim leading-relaxed">
            Согласен с{' '}
            <a href="#" className="text-ember-500 hover:text-ember-600 underline">
              политикой обработки данных
            </a>{' '}
            и{' '}
            <a href="#" className="text-ember-500 hover:text-ember-600 underline">
              условиями сервиса
            </a>
          </label>
        </div>
      </div>
      
      <Button
        type="submit"
        disabled={isSubmitting}
        className="w-full btn-primary"
      >
        {isSubmitting ? 'Записываем...' : 'Получить ранний доступ'}
      </Button>
    </form>
  );
}