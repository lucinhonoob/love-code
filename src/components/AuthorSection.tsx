import { User } from 'lucide-react';

const AuthorSection = () => {
  return (
    <section className="my-12 sm:my-16 border-t border-border pt-12 sm:pt-16">
      <div className="mx-auto max-w-[700px]">
        <h3 className="mb-8 text-center text-2xl font-bold sm:text-3xl">Quem criou o método?</h3>
        <div className="flex flex-col items-center gap-6 sm:flex-row sm:items-start sm:gap-8">
          <div className="flex h-32 w-32 shrink-0 items-center justify-center rounded-full bg-muted text-muted-foreground shadow-lg sm:h-40 sm:w-40">
            <User className="h-16 w-16 sm:h-20 sm:w-20" />
          </div>
          <div className="space-y-4 text-center sm:text-left">
            <h4 className="text-xl font-bold text-foreground sm:text-2xl">Especialista em Dinâmicas Sociais</h4>
            <p className="text-base leading-relaxed text-muted-foreground sm:text-lg">
              Após anos estudando psicologia comportamental e testando na prática o que realmente funciona no mundo real, desenvolvi o <strong>Código do Flerte</strong>. Meu objetivo é ajudar homens comuns a recuperarem sua autoconfiança e dominarem a arte da atração de forma natural e autêntica.
            </p>
            <p className="text-base leading-relaxed text-muted-foreground sm:text-lg">
              Este método não é sobre truques baratos, mas sobre entender a biologia da atração e como se tornar o homem que as mulheres naturalmente desejam estar por perto.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AuthorSection;
