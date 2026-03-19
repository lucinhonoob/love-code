import { ArrowRight, CheckCircle2, ShieldCheck, Zap } from 'lucide-react';
import { MouseEvent, useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import TopBar from '@/components/TopBar';
import VideoPlayer from '@/components/VideoPlayer';
import ScenarioCard from '@/components/ScenarioCard';
import Testimonials from '@/components/Testimonials';
import FAQ from '@/components/FAQ';
import CountdownTimer from '@/components/CountdownTimer';
import PurchaseNotification from '@/components/PurchaseNotification';
import DelayedVideoOffer from '@/components/DelayedVideoOffer';
import OfferIncludes from '@/components/OfferIncludes';
import confetti from 'canvas-confetti';

const Index = () => {
  const checkoutUrl = 'https://pay.cakto.com.br/3fcmq6k_804816';
  const [showVideoOffer, setShowVideoOffer] = useState(false);

  useEffect(() => {
    const timer = window.setTimeout(() => {
      setShowVideoOffer(true);
    }, 120000);

    return () => window.clearTimeout(timer);
  }, []);

  const handleCheckoutClick = (event: MouseEvent<HTMLAnchorElement>) => {
    confetti({
      particleCount: 150,
      spread: 80,
      origin: { y: 0.6 },
      colors: ['#16a34a', '#22c55e', '#4ade80', '#fbbf24', '#f59e0b'],
    });

    if (event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) {
      return;
    }

    event.preventDefault();
    window.location.assign(checkoutUrl);
  };

  return (
    <div className="min-h-screen bg-background text-foreground font-sans selection:bg-red-100 selection:text-red-900">
      <TopBar />

      <main className="max-w-[800px] mx-auto px-4 sm:px-5 pt-8 sm:pt-12 pb-16 sm:pb-24">
        <header className="mb-8 flex flex-col items-center text-center sm:mb-10">
          <h1 className="mb-4 text-2xl font-extrabold leading-[1.1] tracking-[-0.02em] text-balance sm:mb-6 sm:text-3xl md:text-4xl lg:text-[42px]">
            Atenção: Se você busca conselhos amorosos com homens, está fadado ao fracasso...
          </h1>

          <h2 className="mb-3 text-lg font-semibold leading-snug text-muted-foreground text-balance sm:mb-4 sm:text-xl md:text-2xl">
            Quer que ela corra atrás de você? Então pare de fazer esta única coisa...
          </h2>

          <p className="mb-6 max-w-[700px] text-sm text-muted-foreground text-pretty sm:mb-8 sm:text-base md:text-lg">
            A maioria dos homens aprende a fazer isso — e isso acaba com a atração instantaneamente. Você descobrirá como despertar o desejo instantaneamente.
          </p>

          <VideoPlayer />
          {showVideoOffer && <DelayedVideoOffer checkoutUrl={checkoutUrl} onCtaClick={handleCtaClick} />}

          <p className="mt-4 flex items-center gap-1.5 text-xs font-medium text-muted-foreground sm:text-sm">
            <span className="h-2 w-2 rounded-full bg-topbar animate-pulse" />
            ATENÇÃO! Esta apresentação poderá ser removida a qualquer momento...
          </p>
        </header>

        <CountdownTimer />

        <article className="mx-auto max-w-[700px] space-y-5 text-base leading-[1.7] text-foreground/90 sm:space-y-6 sm:text-lg">
          <p>
            É um mito completo que você precise ser bonito, rico ou ter um corpo de modelo para atrair mulheres incrivelmente lindas.
          </p>

          <p>
            Na verdade, se você tentar usar dinheiro ou aparência para impressioná-la, você ativa o que os psicólogos chamam de{' '}
            <strong>"Escudo Anti-Atração"</strong>. Ela instantaneamente coloca você na categoria de{' '}
            <em>"provedor"</em> ou <em>"fã"</em>, e não na categoria de amante.
          </p>

          <p>
            O que poucas pessoas entendem é que a atração feminina não é lógica. Ela é puramente emocional e biológica. Quando você sabe como apertar os botões certos no cérebro dela, toda garota secretamente anseia por "andar" naquela montanha-russa ;)
          </p>

          <div className="my-8 space-y-3 sm:my-12 sm:space-y-4">
            <h3 className="mb-4 text-lg font-bold text-foreground sm:mb-6 sm:text-xl">
              Você se identifica com algum destes 3 cenários?
            </h3>

            <ScenarioCard
              number="1"
              title="O 'Cara Bonzinho' Ignorado"
              description="Você é sempre educado, paga a conta, escuta os problemas dela... e no final, ela diz que te vê 'apenas como um grande amigo' enquanto sai com o cara que a ignora."
            />

            <ScenarioCard
              number="2"
              title="O Ansioso do WhatsApp"
              description="A conversa começa bem, mas logo você se pega checando o celular a cada 5 minutos. Você manda mensagens longas e ela responde com um frio 'haha' ou 'legal'."
            />

            <ScenarioCard
              number="3"
              title="O Paralisação Total"
              description="Você vê uma mulher atraente, sabe exatamente o que gostaria de dizer, mas seu cérebro congela. O momento passa e você volta para casa frustrado consigo mesmo."
            />
          </div>

          <p>
            Se você disse "sim" para qualquer um desses cenários, a culpa não é sua. A sociedade ensinou os homens a agirem exatamente da maneira que <strong>desliga</strong> a atração feminina.
          </p>

          <div className="my-6 rounded-xl border border-border bg-muted/50 p-4 sm:my-8 sm:p-6">
            <h4 className="mb-3 flex items-center gap-2 text-lg font-bold sm:mb-4 sm:text-xl">
              <Zap className="h-5 w-5 fill-current text-topbar" />
              O que você vai aprender hoje:
            </h4>
            <ul className="space-y-3">
              {[
                "Como ativar o 'Gatilho da Obsessão' no cérebro dela",
                "A técnica da 'Montanha-Russa Emocional' para nunca mais ser o amigo",
                'O erro #1 que 99% dos homens cometem no primeiro encontro',
                'Como fazer ela visualizar um futuro romântico com você em minutos'
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-sm sm:text-base">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-green-600" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <p>
            Existe uma "falha" neste sistema. Uma técnica simples de comunicação que subverte essa lógica e faz com que ela passe a investir em você. Assista ao vídeo acima até o final para descobrir como ativar isso hoje mesmo.
          </p>

          <OfferIncludes />

          <div className="flex flex-col items-center gap-4 pt-6 pb-4 sm:pt-8">
            <Button
              variant="cta"
              size="xl"
              className="w-full px-8 py-7 text-lg font-bold shadow-cta transition-all hover:shadow-cta-hover sm:w-auto sm:px-12 sm:py-8 sm:text-xl animate-bounce"
              asChild
            >
              <a href={checkoutUrl} onClick={handleCtaClick}>
                QUERO ACESSO AO MÉTODO AGORA
                <ArrowRight className="ml-2 h-5 w-5 sm:h-6 sm:w-6" />
              </a>
            </Button>

            <div className="mt-4 flex flex-wrap justify-center gap-4 sm:gap-6">
              <div className="flex items-center gap-1.5 text-xs text-muted-foreground sm:text-sm">
                <ShieldCheck className="h-4 w-4 text-green-600" />
                Compra 100% Segura
              </div>
              <div className="flex items-center gap-1.5 text-xs text-muted-foreground sm:text-sm">
                <CheckCircle2 className="h-4 w-4 text-green-600" />
                Acesso Imediato
              </div>
            </div>
          </div>
        </article>

        <Testimonials />
        <FAQ />

        <div className="mx-auto mt-12 max-w-[700px] border-t border-border pt-8 text-center sm:mt-16 sm:pt-12">
          <div className="mb-6 inline-block rounded-full border-2 border-dashed border-muted-foreground/30 bg-background p-4">
            <span className="text-3xl font-bold">7</span>
            <span className="block text-[10px] font-bold uppercase tracking-widest">Dias de Garantia</span>
          </div>
          <h3 className="mb-4 text-lg font-bold sm:text-xl">Risco Zero para Você</h3>
          <p className="mx-auto mb-6 max-w-[600px] text-sm text-muted-foreground sm:mb-8 sm:text-base">
            Se em até 7 dias você não sentir que sua vida amorosa mudou completamente, basta enviar um e-mail e devolvemos 100% do seu investimento. Sem perguntas, sem letras miúdas.
          </p>

          <Button
            variant="cta"
            size="xl"
            className="w-full px-8 py-5 text-base font-bold shadow-cta transition-all hover:shadow-cta-hover sm:w-auto sm:px-10 sm:py-6 sm:text-lg"
            asChild
          >
            <a href={checkoutUrl} onClick={handleCtaClick}>
              SIM, QUERO COMEÇAR AGORA
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
          </Button>
        </div>
      </main>

      <footer className="border-t border-border bg-muted py-8 sm:py-12">
        <div className="mx-auto max-w-[800px] space-y-4 px-4 text-center text-xs text-muted-foreground sm:px-5">
          <p>© 2026 Love Code - Todos os direitos reservados.</p>
          <p>
            Este site não faz parte do site do Facebook ou do Facebook Inc. Além disso, este site NÃO é endossado pelo Facebook de nenhuma maneira. FACEBOOK é uma marca comercial da FACEBOOK, Inc.
          </p>
          <div className="flex justify-center gap-4 underline">
            <a href="#">Termos de Uso</a>
            <a href="#">Privacidade</a>
          </div>
        </div>
      </footer>

      <PurchaseNotification />
    </div>
  );
};

export default Index;

