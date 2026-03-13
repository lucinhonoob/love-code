import { CheckCircle2, X } from 'lucide-react';
import { useState, useEffect } from 'react';

interface Notification {
  id: number;
  name: string;
  time: string;
}

const PurchaseNotification = () => {
  const [notifications, setNotifications] = useState<Notification[]>([]);
  const [nextId, setNextId] = useState(0);

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

  const cities = [
    'São Paulo', 'Rio de Janeiro', 'Belo Horizonte', 'Brasília', 'Salvador',
    'Fortaleza', 'Manaus', 'Curitiba', 'Recife', 'Porto Alegre', 'Goiânia',
    'Belém', 'Guarulhos', 'Campinas', 'São Gonçalo', 'Maceió', 'Duque de Caxias'
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      const randomFirstName = firstNames[Math.floor(Math.random() * firstNames.length)];
      const randomLastName = lastNames[Math.floor(Math.random() * lastNames.length)];
      const randomCity = cities[Math.floor(Math.random() * cities.length)];
      const randomMinutes = Math.floor(Math.random() * 45) + 1;

      const newNotification: Notification = {
        id: nextId,
        name: `${randomFirstName} ${randomLastName.charAt(0)}.`,
        time: `${randomMinutes}min atrás`,
      };

      setNotifications(prev => [newNotification, ...prev].slice(0, 3));
      setNextId(prev => prev + 1);
    }, 50000); // 50 segundos

    return () => clearInterval(interval);
  }, [nextId]);

  const removeNotification = (id: number) => {
    setNotifications(prev => prev.filter(notif => notif.id !== id));
  };

  return (
    <div className="fixed bottom-6 right-6 space-y-3 pointer-events-none z-50">
      {notifications.map((notification) => (
        <div
          key={notification.id}
          className="bg-white dark:bg-slate-900 rounded-lg shadow-lg p-4 border border-green-200 dark:border-green-900 animate-in slide-in-from-right-5 fade-in pointer-events-auto max-w-xs"
        >
          <div className="flex items-start gap-3">
            <CheckCircle2 className="w-5 h-5 text-green-600 shrink-0 mt-0.5" />
            <div className="flex-1 min-w-0">
              <p className="text-sm font-semibold text-foreground">
                {notification.name} comprou!
              </p>
              <p className="text-xs text-muted-foreground">
                {notification.time}
              </p>
            </div>
            <button
              onClick={() => removeNotification(notification.id)}
              className="text-muted-foreground hover:text-foreground shrink-0 transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PurchaseNotification;
