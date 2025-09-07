import { useState } from 'react';

interface ModeToggleProps {
  onModeChange?: (mode: 'soft' | 'hard') => void;
}

export function ModeToggle({ onModeChange }: ModeToggleProps) {
  const [mode, setMode] = useState<'soft' | 'hard'>('soft');

  const handleModeChange = (newMode: 'soft' | 'hard') => {
    setMode(newMode);
    onModeChange?.(newMode);
  };

  return (
    <div className="space-y-3">
      <label className="text-sm font-medium text-text-dim">Режим проверки</label>
      
      <div className="flex space-x-1 p-1 bg-surface-elevated rounded-xl">
        <button
          onClick={() => handleModeChange('soft')}
          className={`tab flex-1 ${mode === 'soft' ? 'active' : ''}`}
        >
          Soft
        </button>
        <button
          onClick={() => handleModeChange('hard')}
          className={`tab flex-1 ${mode === 'hard' ? 'active' : ''}`}
        >
          Hard
        </button>
      </div>
      
      <div className="text-xs text-text-dim">
        {mode === 'soft' 
          ? 'Самоотчёт: просто отметишь "Сделал"'
          : 'Код дня + фото/видео доказательство'
        }
      </div>
    </div>
  );
}