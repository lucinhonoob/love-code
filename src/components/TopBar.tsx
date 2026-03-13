import { AlertTriangle, Users } from 'lucide-react';
import { useState, useEffect } from 'react';

const TopBar = () => {
  const [currentDate, setCurrentDate] = useState<string>('');
  const [visitorCount, setVisitorCount] = useState<number>(0);

  useEffect(() => {
    // Update date dynamically
    const updateDate = () => {
      const tomorrow = new Date();
      tomorrow.setDate(tomorrow.getDate() + 1);
      tomorrow.setHours(0, 0, 0, 0);
      
      const day = tomorrow.getDate();
      const month = tomorrow.getMonth() + 1;
      const year = tomorrow.getFullYear();
      
      setCurrentDate(`${day} de março de ${year}`);
    };

    updateDate();

    // Simulate visitor count with random variations
    const initialCount = Math.floor(Math.random() * (450 - 350 + 1)) + 350;
    setVisitorCount(initialCount);

    const visitorInterval = setInterval(() => {
      setVisitorCount(prev => {
        const change = Math.floor(Math.random() * 5) - 1; // -1 to +3
        return Math.max(prev + change, 300);
      });
    }, 8000);

    return () => clearInterval(visitorInterval);
  }, []);

  return (
    <div className="bg-topbar text-topbar-foreground px-4 py-3 text-center shadow-sm">
      <div className="space-y-2">
        <p className="text-sm md:text-base font-bold tracking-wide flex items-center justify-center gap-2">
          <AlertTriangle className="w-5 h-5 opacity-80" aria-hidden="true" />
          AVISO: O conteúdo desta página é extremamente sensível e poderá ser removido à meia-noite de {currentDate}.
        </p>
        
        <p className="text-xs md:text-sm font-semibold flex items-center justify-center gap-2 opacity-90">
          <Users className="w-4 h-4" />
          <span className="inline-block min-w-[80px]">
            {visitorCount} pessoas estão vendo agora
          </span>
        </p>
      </div>
    </div>
  );
};

export default TopBar;
