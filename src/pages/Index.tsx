import { ArrowRight, CheckCircle2, ShieldCheck, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import TopBar from '@/components/TopBar';
import VideoPlayer from '@/components/VideoPlayer';
import ScenarioCard from '@/components/ScenarioCard';
import Testimonials from '@/components/Testimonials';
import FAQ from '@/components/FAQ';

const Index = () => {
  const checkoutUrl = "https://pay.cakto.com.br/3fcmq6k_804816";

  const handleCheckout = () => {
    window.location.href = checkoutUrl;
  };

  return (
    <div className="min-h-screen bg-background text-foreground font-sans selection:bg-red-100 selection:text-red-900">
      <TopBar />

      <main className="max-w-[800px] mx-auto px-5 pt-12 pb-24">
        {/* HERO */}
        <header className="text-center mb-10 flex flex-col items-center">
          <h1 className="text-3xl md:text-4xl lg:text-[42px] font-extrabold leading-[1.1] tracking-[-0.02em] text-balance mb-6">
            Atenção: Se você busca conselhos amorosos com homens, está fadada ao fracasso...
          </h1>

          <h2 className="text-xl md:text-2xl font-semibold text-muted-foreground leading-snug text-balance mb-4">
            Quer que ela corra atrás de você? Então pare de fazer esta única coisa...
          </h2>

          <p className="text-base md:text-lg text-muted-foreground max-w-[700px] mb-8 text-pretty">
            A maioria dos homens aprende a fazer isso — e isso acaba com a atração instantaneamente. Neste treinamento gratuito, você descobrirá como despertar o desejo instantaneamente.
          </p>

          <VideoPlayer />

          <p className="text-sm font-medium text-muted-foreground mt-4 flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-topbar animate-pulse" />
            ATENÇÃO! Esta apresentação poderá ser removida a qualquer momento...
          </p>
        </header>

        {/* CORPO DA COPY */}
        <article className="max-w-[700px] mx-auto text-lg leading-[1.7] text-foreground/90 space-y-6">
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

          {/* 3 CENÁRIOS */}
          <div className="my-12 space-y-4">
            <h3 className="text-xl font-bold text-foreground mb-6">
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

          <div className="bg-muted/50 p-6 rounded-xl border border-border my-8">
            <h4 className="font-bold text-xl mb-4 flex items-center gap-2">
              <Zap className="text-topbar w-5 h-5 fill-current" />
              O que você vai aprender hoje:
            </h4>
            <ul className="space-y-3">
              {[
                "Como ativar o 'Gatilho da Obsessão' no cérebro dela",
                "A técnica da 'Montanha-Russa Emocional' para nunca mais ser o amigo",
                "O erro #1 que 99% dos homens cometem no primeiro encontro",
                "Como fazer ela visualizar um futuro romântico com você em minutos"
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-base">
                  <CheckCircle2 className="text-green-600 w-5 h-5 mt-0.5 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <p>
            Existe uma "falha" neste sistema. Uma técnica simples de comunicação que subverte essa lógica e faz com que ela passe a investir em você. Assista ao vídeo acima até o final para descobrir como ativar isso hoje mesmo.
          </p>

          {/* CTA PRINCIPAL */}
          <div className="pt-8 pb-4 flex flex-col items-center gap-4">
            <Button 
              variant="cta" 
              size="xl" 
              className="w-full sm:w-auto font-bold text-xl py-8 px-12 shadow-cta hover:shadow-cta-hover transition-all animate-bounce"
              onClick={handleCheckout}
            >
              QUERO ACESSO AO MÉTODO AGORA
              <ArrowRight className="ml-2 w-6 h-6" />
            </Button>
            
            <div className="flex flex-wrap justify-center gap-6 mt-4">
              <div className="flex items-center gap-1.5 text-sm text-muted-foreground">
                <ShieldCheck className="w-4 h-4 text-green-600" />
                Compra 100% Segura
              </div>
              <div className="flex items-center gap-1.5 text-sm text-muted-foreground">
                <CheckCircle2 className="w-4 h-4 text-green-600" />
                Acesso Imediato
              </div>
            </div>
          </div>
        </article>

        {/* TESTIMONIALS */}
        <Testimonials />

        {/* FAQ */}
        <FAQ />

        {/* GARANTIA */}
        <div className="max-w-[700px] mx-auto mt-16 border-t border-border pt-12 text-center">
          <div className="inline-block p-4 bg-background border-2 border-dashed border-muted-foreground/30 rounded-full mb-6">
            <span className="text-3xl font-bold">7</span>
            <span className="block text-[10px] uppercase tracking-widest font-bold">Dias de Garantia</span>
          </div>
          <h3 className="text-xl font-bold mb-4">Risco Zero para Você</h3>
          <p className="text-base text-muted-foreground max-w-[600px] mx-auto mb-8">
            Se em até 7 dias você não sentir que sua vida amorosa mudou completamente, basta enviar um e-mail e devolvemos 100% do seu investimento. Sem perguntas, sem letras miúdas.
          </p>

          {/* FINAL CTA */}
          <Button 
            variant="cta" 
            size="xl" 
            className="font-bold text-lg py-6 px-10 shadow-cta hover:shadow-cta-hover transition-all"
            onClick={handleCheckout}
          >
            SIM, QUERO COMEÇAR AGORA
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </main>

      <footer className="bg-muted py-12 border-t border-border">
        <div className="max-w-[800px] mx-auto px-5 text-center text-xs text-muted-foreground space-y-4">
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
    </div>
  );
};

export default Index;
