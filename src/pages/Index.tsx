import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import TopBar from '@/components/TopBar';
import VideoPlayer from '@/components/VideoPlayer';
import ScenarioCard from '@/components/ScenarioCard';

const Index = () => {
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
            A maioria dos homens aprende a fazer isso — e isso acaba com a atração instantaneamente. Neste treinamento gratuito, Marni revela como despertar o desejo instantaneamente.
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

          <p>
            Mas existe uma "falha" neste sistema. Uma técnica simples de comunicação que subverte essa lógica e faz com que ela passe a investir em você. Assista ao vídeo acima até o final para descobrir como ativar isso hoje mesmo.
          </p>

          {/* CTA */}
          <div className="pt-8 pb-4 flex justify-center">
            <Button variant="cta" size="xl" className="w-full sm:w-auto font-bold">
              Quero Descobrir o Segredo Agora
              <ArrowRight />
            </Button>
          </div>
          <p className="text-center text-sm text-muted-foreground mt-2">
            Seus dados estão 100% seguros. Acesso imediato.
          </p>
        </article>
      </main>
    </div>
  );
};

export default Index;
