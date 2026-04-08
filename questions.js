const bancoDePerguntas = [
  // FASE 1: O Básico (Saudações e Apresentação)
  {
    pergunta: "Como se diz 'Bom dia' em francês?",
    opcoes: ["Bonsoir", "Bonjour", "Merci", "Salut"],
    resposta: "Bonjour"
  },
  {
    pergunta: "Qual é a tradução de 'Encantado(a)'?",
    opcoes: ["S'il vous plaît", "Enchanté", "Pardon", "De rien"],
    resposta: "Enchanté"
  },
  {
    pergunta: "Complete a frase: 'Je ___ brésilien.'",
    opcoes: ["es", "est", "sommes", "suis"],
    resposta: "suis"
  },

  // FASE 2: Objetos e Cores
  {
    pergunta: "Como se chama 'O Livro' em francês?",
    opcoes: ["Le cahier", "Le stylo", "Le livre", "La pomme"],
    resposta: "Le livre"
  },
  {
    pergunta: "Qual dessas cores é 'Azul'?",
    opcoes: ["Rouge", "Vert", "Bleu", "Jaune"],
    resposta: "Bleu"
  },

  // FASE 3: Verbos e Ações
  {
    pergunta: "O que significa o verbo 'Manger'?",
    opcoes: ["Beber", "Dormir", "Comer", "Correr"],
    resposta: "Comer"
  },
  {
    pergunta: "Como se diz 'Eu tenho'?",
    opcoes: ["J'ai", "Je suis", "Je vais", "Je veux"],
    resposta: "J'ai"
  },

  // FASE 4: Desafio de Frases (Intermediário)
  {
    pergunta: "Como se pergunta 'Onde está o banheiro?'",
    opcoes: ["Où est la gare?", "Où sont les toilettes?", "Quel âge as-tu?", "Comment ça va?"],
    resposta: "Où sont les toilettes?"
  },
  {
    pergunta: "Qual a forma correta de dizer 'Amanhã'?",
    opcoes: ["Hier", "Aujourd'hui", "Demain", "Maintenant"],
    resposta: "Demain"
  }
];
function sortearPergunta() {
    // Escolhe uma pergunta aleatória do banco
    const perguntaAtual = bancoDePerguntas[Math.floor(Math.random() * bancoDePerguntas.length)];
    
    // Aqui você enviaria 'perguntaAtual' para a tela do seu jogo
    console.log("A pergunta é: " + perguntaAtual.pergunta);
}
