import { CheckCircle2, Gift, PackageOpen } from 'lucide-react';

const bonusItems = [
  'Entrevistas Revelação',
  'Guia do Vita Instantâneo',
  'O Código do Flerte (AudioBook)',
  'Checklist',
  'Simulações Reais',
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
              </div>
            </div>
          </div>
        </div>

        <div>
          <div className="mb-4 flex items-center gap-2">
            <Gift className="h-5 w-5 text-foreground" />
            <h4 className="text-sm font-bold uppercase tracking-[0.24em] text-muted-foreground">BÔNUS:</h4>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            {bonusItems.map((item) => (
              <div
                key={item}
                className="flex items-start gap-3 rounded-xl border border-border bg-background p-4 transition-transform duration-200 hover:-translate-y-0.5"
              >
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-foreground" />
                <span className="text-sm font-medium leading-relaxed text-foreground sm:text-base">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default OfferIncludes;
