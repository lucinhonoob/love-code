import { Clock } from 'lucide-react';
import { useState, useEffect } from 'react';

const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState<{
    hours: number;
    minutes: number;
    seconds: number;
  }>({ hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const calculateTimeLeft = () => {
      // Calculate time until midnight
      const now = new Date();
      const tomorrow = new Date(now);
      tomorrow.setDate(tomorrow.getDate() + 1);
      tomorrow.setHours(0, 0, 0, 0);

      const difference = tomorrow.getTime() - now.getTime();

      if (difference > 0) {
        setTimeLeft({
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (num: number) => String(num).padStart(2, '0');

  return (
    <div className="bg-gradient-to-r from-red-600 to-red-700 text-white rounded-2xl p-6 my-8 border-2 border-red-500 shadow-lg">
      <div className="flex items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <Clock className="w-6 h-6 animate-pulse" />
          <div>
            <p className="text-sm font-bold opacity-90 uppercase tracking-wide">
              ⏰ Oferta Expira Em:
            </p>
            <p className="text-xs opacity-75">
              Após a meia-noite, o preço especial desaparece
            </p>
          </div>
        </div>

        <div className="flex gap-2 bg-black/30 rounded-lg p-3">
          <div className="text-center">
            <div className="text-2xl md:text-3xl font-black tabular-nums">
              {formatTime(timeLeft.hours)}
            </div>
            <div className="text-xs font-bold opacity-75 uppercase">Horas</div>
          </div>

          <div className="text-2xl md:text-3xl font-black opacity-50">:</div>

          <div className="text-center">
            <div className="text-2xl md:text-3xl font-black tabular-nums">
              {formatTime(timeLeft.minutes)}
            </div>
            <div className="text-xs font-bold opacity-75 uppercase">Min</div>
          </div>

          <div className="text-2xl md:text-3xl font-black opacity-50">:</div>

          <div className="text-center">
            <div className="text-2xl md:text-3xl font-black tabular-nums">
              {formatTime(timeLeft.seconds)}
            </div>
            <div className="text-xs font-bold opacity-75 uppercase">Seg</div>
          </div>
        </div>
      </div>

      {/* Animated warning bar */}
      <div className="mt-4 h-1 bg-white/20 rounded-full overflow-hidden">
        <div
          className="h-full bg-white animate-pulse"
          style={{
            width: `${((timeLeft.hours * 3600 + timeLeft.minutes * 60 + timeLeft.seconds) / 86400) * 100}%`,
          }}
        />
      </div>
    </div>
  );
};

export default CountdownTimer;
