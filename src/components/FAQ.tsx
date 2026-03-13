import { ChevronDown } from 'lucide-react';
import { useState } from 'react';

interface FAQItem {
  question: string;
  answer: string;
}

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs: FAQItem[] = [
    {
      question: "Quanto tempo leva para ver resultados?",
      answer: "A maioria dos homens começa a notar mudanças no comportamento das mulheres em torno de 3-5 dias após aplicar as técnicas. Alguns relatam mudanças imediatas na primeira conversa. Tudo depende de como você implementa o método.",
    },
    {
      question: "Isso funciona com qualquer mulher?",
      answer: "O método funciona com 95% das mulheres. Ele é baseado em psicologia evolutiva e gatilhos biológicos que todas as mulheres têm. Se uma mulher não responder, provavelmente ela não está interessada de forma alguma, e o método te ajuda a identificar isso rapidamente.",
    },
    {
      question: "Preciso ser bonito ou rico?",
      answer: "Absolutamente não. De fato, muitos homens ricos e bonitos fracassam porque dependem dessas características. O método funciona porque você está ativando os gatilhos emocionais corretos, não sua aparência ou conta bancária.",
    },
    {
      question: "Isso é manipulação?",
      answer: "Não. Você está simplesmente aprendendo a se comunicar de forma que gera atração genuína. É a mesma coisa que aprender a falar bem em público ou ter boas maneiras. Você está melhorando suas habilidades de comunicação.",
    },
    {
      question: "E se eu não gostar do método?",
      answer: "Você tem 7 dias de garantia 100% de reembolso. Se aplicar o método e não sentir que sua vida amorosa melhorou, basta enviar um e-mail e devolvemos todo o seu dinheiro. Sem perguntas, sem letras miúdas.",
    },
    {
      question: "Qual é o tempo de acesso ao conteúdo?",
      answer: "Você terá acesso vitalício ao método. Pode assistir quantas vezes quiser, fazer anotações e aplicar no seu próprio ritmo. O acesso nunca expira.",
    },
  ];

  return (
    <section className="my-16 py-12">
      <div className="max-w-[700px] mx-auto">
        <h3 className="text-2xl font-bold text-center mb-12">Perguntas Frequentes</h3>
        
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index}
              className="border border-border rounded-lg overflow-hidden hover:border-topbar/50 transition-colors"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-4 flex items-center justify-between bg-card hover:bg-muted/50 transition-colors text-left"
              >
                <span className="font-semibold text-foreground pr-4">
                  {faq.question}
                </span>
                <ChevronDown 
                  className={`w-5 h-5 text-muted-foreground shrink-0 transition-transform duration-300 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>
              
              {openIndex === index && (
                <div className="px-6 py-4 bg-background border-t border-border text-foreground/90 leading-relaxed">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
