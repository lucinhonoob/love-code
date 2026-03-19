import { ArrowRight } from 'lucide-react';

import { Button } from '@/components/ui/button';

interface DelayedVideoOfferProps {
  checkoutUrl: string;
}

const DelayedVideoOffer = ({ checkoutUrl }: DelayedVideoOfferProps) => {
  return (
    <div className="mt-5 w-full max-w-[760px] animate-in fade-in zoom-in-95 duration-700" aria-live="polite">
      <div className="rounded-2xl border border-border bg-card p-4 shadow-card-hover sm:p-6">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="space-y-3 text-left">
            <span className="inline-flex w-fit items-center rounded-full border border-border bg-secondary px-3 py-1 text-xs font-bold uppercase tracking-[0.18em] text-secondary-foreground motion-safe:animate-pulse">
              Desconto liberado agora
            </span>

            <div className="flex flex-wrap items-end gap-3">
              <span className="text-sm font-semibold text-muted-foreground line-through sm:text-base">
                R$ 47,00
              </span>
              <span className="text-3xl font-extrabold leading-none tracking-tight text-foreground sm:text-4xl">
                R$ 37,00
              </span>
              <span className="rounded-full border border-border bg-background px-3 py-1 text-xs font-bold uppercase tracking-[0.16em] text-foreground">
                21% OFF
              </span>
            </div>

            <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">
              Oferta especial liberada para você logo abaixo do vídeo. Garanta o acesso com desconto antes que saia do ar.
            </p>
          </div>

          <Button
            variant="cta"
            size="lg"
            className="w-full font-bold sm:w-auto sm:px-8 motion-safe:animate-pulse"
            asChild
          >
            <a href={checkoutUrl}>
              QUERO O DESCONTO
              <ArrowRight className="h-5 w-5" />
            </a>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default DelayedVideoOffer;
