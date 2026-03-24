export interface AnalysisResult {
  response: string;
  scoreChange: number;
}

const penaltyKeywords: Record<string, number> = {
  linda: -10, anjo: -10, princesa: -10, perfeita: -10, gata: -8, gostosa: -10,
  "me dá uma chance": -10, "vem cá": -8, "meu amor": -8, delícia: -10,
  "te amo": -5, "sou diferente": -5, "sou especial": -5, bonita: -5,
  maravilhosa: -5, "minha vida": -8,
};

const bonusKeywords: Record<string, number> = {
  desafio: 15, curiosidade: 12, aposto: 12, interessante: 10, humor: 10,
  "o que você acha": 12, "como você vê": 12, "qual sua opinião": 12,
  perspectiva: 10, filosofia: 10, viagem: 8, livro: 10, música: 8,
  "me conta": 10, aventura: 8, descobrir: 10, criatividade: 8,
  sonho: 8, ideia: 8, explorar: 10, debater: 12,
  "por quê": 10, reflexão: 10, história: 8, projeto: 8,
};

const penaltyResponses: Record<string, string[]> = {
  low: [
    "Sério mesmo? Essa é sua melhor tentativa? 😒",
    "Uau, nunca ouvi essa antes... disse ninguém, nunca. 🙄",
    "Vou fingir que não li isso. Tenta de novo.",
  ],
  mid: [
    "Estávamos indo tão bem... Não estraga, vai.",
    "Hmm, esperava mais de você a essa altura. 😐",
    "Ponto perdido. Tenta ser mais autêntico.",
  ],
  high: [
    "Depois de tudo que conversamos, você vem com isso? 😤",
    "Quase lá, mas isso me fez repensar...",
    "Não precisa de frases prontas. Já tínhamos conexão.",
  ],
};

const bonusResponses: Record<string, string[]> = {
  low: [
    "Hmm, ok, isso foi inesperado. Gostei. Continue assim. 🤔",
    "Interessante... Talvez você não seja tão previsível. 😏",
    "Boa pergunta. Poucas pessoas perguntam isso de verdade.",
  ],
  mid: [
    "Adoro esse tipo de conversa! Conta mais. 😊",
    "Você sabe manter uma conversa interessante, hein? ✨",
    "Isso me fez pensar... Gosto de quem me faz refletir.",
  ],
  high: [
    "Uau, que conexão incrível estamos construindo! 🌟",
    "Sabe aquela sensação de encontrar alguém que realmente entende? É isso. 💫",
    "Cada resposta sua me surpreende mais. Isso é raro. ✨",
  ],
};

const neutralResponses: Record<string, string[]> = {
  low: [
    "Tá, mas... me diz algo que eu não esperaria ouvir.",
    "Ok. Nada demais, mas vamos ver onde isso vai.",
    "Hmm. Preciso de mais pra me convencer. 🤷‍♀️",
  ],
  mid: [
    "Interessante, mas acho que você pode ir mais fundo.",
    "Não foi ruim, mas também não me tirou do lugar.",
    "Continue tentando, sinto que tem potencial aí.",
  ],
  high: [
    "Estamos quase lá, mas preciso de algo especial pra fechar. 😉",
    "Bom, bom... Mas me impressiona de verdade agora!",
    "Falta pouco. Me mostra do que você é feito.",
  ],
};

function getScoreRange(score: number): string {
  if (score < 35) return "low";
  if (score < 70) return "mid";
  return "high";
}

function pickRandom<T>(arr: T[]): T {
  return arr[Math.floor(Math.random() * arr.length)];
}

function normalize(text: string): string {
  return text
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .trim();
}

export function analyzeMessage(
  text: string,
  currentScore: number,
  turnCount: number
): AnalysisResult {
  const normalized = normalize(text);
  const range = getScoreRange(currentScore);

  // Check penalties first
  for (const [keyword, penalty] of Object.entries(penaltyKeywords)) {
    if (normalized.includes(normalize(keyword))) {
      return {
        response: pickRandom(penaltyResponses[range]),
        scoreChange: penalty,
      };
    }
  }

  // Check bonuses
  let bestBonus = 0;
  let foundBonus = false;
  for (const [keyword, bonus] of Object.entries(bonusKeywords)) {
    if (normalized.includes(normalize(keyword))) {
      if (bonus > bestBonus) bestBonus = bonus;
      foundBonus = true;
    }
  }

  if (foundBonus) {
    return {
      response: pickRandom(bonusResponses[range]),
      scoreChange: bestBonus,
    };
  }

  // Check if it's a question (bonus for engagement)
  if (normalized.includes("?")) {
    return {
      response: pickRandom(bonusResponses[range]),
      scoreChange: 5,
    };
  }

  // Neutral
  const neutralChange = Math.floor(Math.random() * 3) + 1;
  return {
    response: pickRandom(neutralResponses[range]),
    scoreChange: neutralChange,
  };
}

export const INITIAL_MESSAGE =
  "Dizem que você é bom em conversas. Estou cética. Me surpreenda. 😏";

export const MAX_TURNS = 20;
