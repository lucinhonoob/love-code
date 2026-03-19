import { CheckCircle2, X } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

interface Notification {
  id: number;
  name: string;
  time: string;
}

const firstNames = [
  'Carlos', 'Rafael', 'Lucas', 'André', 'Bruno', 'Felipe', 'Gustavo',
  'Henrique', 'João', 'Matheus', 'Paulo', 'Ricardo', 'Roberto', 'Rodrigo',
  'Sergio', 'Tiago', 'Vinicius', 'Wagner', 'Xavier', 'Yuri'
];

const lastNames = [
  'Silva', 'Santos', 'Oliveira', 'Souza', 'Costa', 'Ferreira', 'Gomes',
  'Martins', 'Alves', 'Rocha', 'Pereira', 'Carvalho', 'Ribeiro', 'Monteiro',
  'Barbosa', 'Machado', 'Neves', 'Pinto', 'Ramos', 'Tavares'
];

const PurchaseNotification = () => {
  const [notifications, setNotifications] = useState<Notification[]>([]);
  const nextIdRef = useRef(0);

  useEffect(() => {
    const interval = window.setInterval(() => {
      const randomFirstName = firstNames[Math.floor(Math.random() * firstNames.length)];
      const randomLastName = lastNames[Math.floor(Math.random() * lastNames.length)];
      const randomMinutes = Math.floor(Math.random() * 45) + 1;

      const newNotification: Notification = {
        id: nextIdRef.current,
        name: `${randomFirstName} ${randomLastName.charAt(0)}.`,
        time: `${randomMinutes}min atrás`,
      };

      nextIdRef.current += 1;
      setNotifications((prev) => [newNotification, ...prev].slice(0, 3));
    }, 80000);

    return () => window.clearInterval(interval);
  }, []);

  const removeNotification = (id: number) => {
    setNotifications((prev) => prev.filter((notif) => notif.id !== id));
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 space-y-3 pointer-events-none">
      {notifications.map((notification) => (
        <div
          key={notification.id}
          className="pointer-events-auto max-w-xs animate-in slide-in-from-right-5 fade-in rounded-lg border border-green-200 bg-white p-4 shadow-lg dark:border-green-900 dark:bg-slate-900"
        >
          <div className="flex items-start gap-3">
            <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-green-600" />
            <div className="min-w-0 flex-1">
              <p className="text-sm font-semibold text-foreground">
                {notification.name} comprou!
              </p>
              <p className="text-xs text-muted-foreground">
                {notification.time}
              </p>
            </div>
            <button
              onClick={() => removeNotification(notification.id)}
              className="shrink-0 text-muted-foreground transition-colors hover:text-foreground"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PurchaseNotification;
