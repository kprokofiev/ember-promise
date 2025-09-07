import { useState } from 'react';
import { Slider } from '@/components/ui/slider';

interface StakeSliderProps {
  onStakeChange?: (value: number) => void;
}

export function StakeSlider({ onStakeChange }: StakeSliderProps) {
  const [stake, setStake] = useState([1000]);

  const handleChange = (value: number[]) => {
    setStake(value);
    onStakeChange?.(value[0]);
  };

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('ru-RU', {
      style: 'currency',
      currency: 'RUB',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount);
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <label className="text-sm font-medium text-text-dim">Ставка</label>
        <div className="text-2xl font-bold text-ember-500 font-mono">
          {formatCurrency(stake[0])}
        </div>
      </div>
      
      <div className="space-y-2">
        <Slider
          value={stake}
          onValueChange={handleChange}
          max={5000}
          min={100}
          step={100}
          className="stake-slider"
        />
        
        <div className="flex justify-between text-xs text-text-muted">
          <span>₽100</span>
          <span>₽5,000</span>
        </div>
      </div>
      
      <div className="text-xs text-text-dim">
        При провале сумма уйдёт на благотворительность или другу-антагонисту
      </div>
    </div>
  );
}