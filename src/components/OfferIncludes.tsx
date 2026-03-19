import { CheckCircle2, Gift, PackageOpen } from 'lucide-react';

const bonusItems = [
  {
    title: 'Entrevistas Revelação',
    description: 'Conversas reais com mulheres sobre o que realmente as atrai em um homem.',
    price: 'R$ 147',
  },
  {
    title: 'Guia do Vita Instantâneo',
    description: 'Como transformar seu perfil em um imã de matches em menos de 24 horas.',
    price: 'R$ 97',
  },
  {
    title: 'O Código do Flerte (AudioBook)',
    description: 'Versão em áudio para você aprender enquanto dirige ou treina.',
    price: 'R$ 67',
  },
  {
    title: 'Checklist da Abordagem',
    description: 'O passo a passo exato do que dizer desde o "oi" até o encontro.',
    price: 'R$ 47',
  },
  {
    title: 'Simulações Reais',
    description: 'Exemplos práticos de conversas no WhatsApp comentadas passo a passo.',
    price: 'R$ 197',
  },
];

const OfferIncludes = () => {
  return (
    <section className="my-8 sm:my-12" aria-labelledby="offer-includes-title">
      <div className="rounded-2xl border border-border bg-card p-5 shadow-card-subtle sm:p-8">
        <div className="mb-6 sm:mb-8">
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.28em] text-muted-foreground">
            O QUE VOCÊ VAI RECEBER
          </p>

          <div className="rounded-xl border border-border bg-background p-4 sm:p-5">
            <div className="flex items-start gap-3 sm:gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-secondary text-secondary-foreground sm:h-12 sm:w-12">
                <PackageOpen className="h-5 w-5 sm:h-6 sm:w-6" />
              </div>
              <div>
                <h3 id="offer-includes-title" className="text-xl font-extrabold tracking-tight text-foreground sm:text-2xl">
                  O Código do Flerte
                </h3>
                <p className="text-sm text-muted-foreground">O método completo para dominar a arte da sedução.</p>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div className="mb-4 flex items-center gap-2">
            <Gift className="h-5 w-5 text-foreground" />
            <h4 className="text-sm font-bold uppercase tracking-[0.24em] text-muted-foreground">BÔNUS EXCLUSIVOS:</h4>
          </div>

          <div className="grid gap-3">
            {bonusItems.map((item) => (
              <div
                key={item.title}
                className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 rounded-xl border border-border bg-background p-4 transition-transform duration-200 hover:-translate-y-0.5"
              >
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-green-600" />
                  <div>
                    <span className="block text-sm font-bold leading-relaxed text-foreground sm:text-base">{item.title}</span>
                    <span className="block text-xs text-muted-foreground sm:text-sm">{item.description}</span>
                  </div>
                </div>
                <div className="flex items-center gap-2 self-end sm:self-center">
                  <span className="text-xs text-muted-foreground line-through">{item.price}</span>
                  <span className="text-xs font-bold text-green-600 uppercase tracking-wider">Grátis</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default OfferIncludes;
