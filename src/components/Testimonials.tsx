import { Star } from 'lucide-react';

interface Testimonial {
  name: string;
  role: string;
  content: string;
  rating: number;
}

const Testimonials = () => {
  const testimonials: Testimonial[] = [
    {
      name: "Carlos M.",
      role: "São Paulo, SP",
      content: "Nunca pensei que uma técnica tão simples pudesse mudar tudo. Em 2 semanas, a garota que eu achava que tinha perdido começou a me procurar. Incrível!",
      rating: 5,
    },
    {
      name: "Rafael T.",
      role: "Rio de Janeiro, RJ",
      content: "Eu era o típico 'cara bonzinho' que era sempre colocado na friendzone. Depois de aplicar o método, percebi a mudança na forma como as mulheres me tratam.",
      rating: 5,
    },
    {
      name: "Lucas P.",
      role: "Belo Horizonte, MG",
      content: "A parte sobre o 'Gatilho da Obsessão' foi revolucionária. Minha namorada agora é ela que quer estar comigo o tempo todo. Recomendo demais!",
      rating: 5,
    },
  ];

  return (
    <section className="my-16 py-12 border-t border-b border-border">
      <div className="max-w-[700px] mx-auto">
        <h3 className="text-2xl font-bold text-center mb-12">O que os homens estão dizendo:</h3>
        
        <div className="grid grid-cols-1 gap-6">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-card p-6 rounded-xl border border-border hover:border-topbar/50 transition-colors"
            >
              {/* Rating Stars */}
              <div className="flex gap-1 mb-3">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star 
                    key={i} 
                    className="w-4 h-4 fill-topbar text-topbar" 
                  />
                ))}
              </div>

              {/* Testimonial Text */}
              <p className="text-foreground mb-4 leading-relaxed italic">
                "{testimonial.content}"
              </p>

              {/* Author */}
              <div>
                <p className="font-bold text-foreground">{testimonial.name}</p>
                <p className="text-sm text-muted-foreground">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
