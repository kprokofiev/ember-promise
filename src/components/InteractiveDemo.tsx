import { useState } from 'react';
import { StakeSlider } from './StakeSlider';
import { ModeToggle } from './ModeToggle';
import { CountdownRing } from './CountdownRing';
import { FailureModal } from './FailureModal';
import { Button } from '@/components/ui/button';

export function InteractiveDemo() {
  const [stake, setStake] = useState(1000);
  const [mode, setMode] = useState<'soft' | 'hard'>('soft');
  
  // Today at 22:00
  const todayDeadline = new Date();
  todayDeadline.setHours(22, 0, 0, 0);
  if (todayDeadline < new Date()) {
    todayDeadline.setDate(todayDeadline.getDate() + 1);
  }

  return (
    <div className="card-ember space-y-6 max-w-md">
      <div className="text-center space-y-2">
        <h3 className="text-lg font-semibold text-text-hero">Настрой свой челлендж</h3>
        <p className="text-sm text-text-dim">Попробуй интерактивную демку</p>
      </div>
      
      <div className="flex justify-center">
        <CountdownRing deadline={todayDeadline} />
      </div>
      
      <div className="space-y-6">
        <StakeSlider onStakeChange={setStake} />
        <ModeToggle onModeChange={setMode} />
      </div>
      
      <div className="pt-4 border-t border-surface-elevated">
        <FailureModal>
          <Button 
            variant="outline" 
            className="w-full btn-ghost hover:bg-ember-500/10 hover:border-ember-500/50"
          >
            🔥 Смоделировать провал
          </Button>
        </FailureModal>
      </div>
      
      <div className="text-xs text-text-muted text-center">
        При провале {stake.toLocaleString('ru-RU')} ₽ уйдут на благотворительность
      </div>
    </div>
  );
}