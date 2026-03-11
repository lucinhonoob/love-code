import { AlertTriangle } from 'lucide-react';

const TopBar = () => {
  return (
    <div className="bg-topbar text-topbar-foreground px-4 py-3 text-center shadow-sm">
      <p className="text-sm md:text-base font-bold tracking-wide flex items-center justify-center gap-2">
        <AlertTriangle className="w-5 h-5 opacity-80" aria-hidden="true" />
        AVISO: O conteúdo desta página é extremamente sensível e poderá ser removido à meia-noite de 11 de março de 2026.
      </p>
    </div>
  );
};

export default TopBar;
