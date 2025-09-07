import { useEffect, useState } from 'react';

interface CountdownRingProps {
  deadline: Date;
  size?: number;
  strokeWidth?: number;
}

export function CountdownRing({ deadline, size = 120, strokeWidth = 8 }: CountdownRingProps) {
  const [timeLeft, setTimeLeft] = useState<{
    hours: number;
    minutes: number;
    seconds: number;
    percentage: number;
  }>({ hours: 0, minutes: 0, seconds: 0, percentage: 0 });

  useEffect(() => {
    const updateTimer = () => {
      const now = new Date().getTime();
      const deadlineTime = deadline.getTime();
      const diff = deadlineTime - now;

      if (diff > 0) {
        const hours = Math.floor(diff / (1000 * 60 * 60));
        const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((diff % (1000 * 60)) / 1000);
        
        // Calculate percentage based on 24 hours
        const totalSeconds = 24 * 60 * 60;
        const remainingSeconds = hours * 3600 + minutes * 60 + seconds;
        const percentage = (remainingSeconds / totalSeconds) * 100;

        setTimeLeft({ hours, minutes, seconds, percentage });
      } else {
        setTimeLeft({ hours: 0, minutes: 0, seconds: 0, percentage: 0 });
      }
    };

    updateTimer();
    const interval = setInterval(updateTimer, 1000);

    return () => clearInterval(interval);
  }, [deadline]);

  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const strokeDasharray = `${circumference} ${circumference}`;
  const strokeDashoffset = circumference - (timeLeft.percentage / 100) * circumference;

  return (
    <div className="relative inline-flex items-center justify-center">
      <svg
        width={size}
        height={size}
        className="transform -rotate-90"
      >
        {/* Background circle */}
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke="hsl(var(--surface-elevated))"
          strokeWidth={strokeWidth}
          fill="transparent"
        />
        {/* Progress circle */}
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke="hsl(var(--ember-500))"
          strokeWidth={strokeWidth}
          fill="transparent"
          strokeDasharray={strokeDasharray}
          strokeDashoffset={strokeDashoffset}
          strokeLinecap="round"
          className="countdown-ring transition-all duration-300"
        />
      </svg>
      
      {/* Time display */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
        <div className="text-lg font-bold text-ember-500 font-mono">
          {timeLeft.hours.toString().padStart(2, '0')}:
          {timeLeft.minutes.toString().padStart(2, '0')}:
          {timeLeft.seconds.toString().padStart(2, '0')}
        </div>
        <div className="text-xs text-text-dim mt-1">до дедлайна</div>
      </div>
    </div>
  );
}