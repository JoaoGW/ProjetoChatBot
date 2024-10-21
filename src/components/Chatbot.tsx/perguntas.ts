interface Pergunta {
  pergunta: string;
  respostas: string[];
}

const questionario: Pergunta[] = [
    {
      pergunta: "Qual frase melhor representa sua formação e/ou experiência profissional no mercado financeiro?",
      respostas: [
        "Não conheço ou conheço pouco.",
        "Tenho alguma experiência com investimentos.",
        "Tenho formação acadêmica e/ou experiência na área."
      ]
    },
    {
      pergunta: "Qual frase melhor representa seus objetivos e expectativas ao investir?",
      respostas: [
        "Quero preservar meu patrimônio, sem risco de perdas.",
        "Desejo obter retornos moderados, ciente de que, para isso, preciso expor uma parcela do meu patrimônio a maior risco.",
        "Minha prioridade é obter altos retornos."
      ]
    },
    {
      pergunta: "Qual frase melhor representa seu momento atual como investidor?",
      respostas: [
        "Ainda não possuo patrimônio financeiro relevante.",
        "Já construí meu patrimônio.",
        "Já iniciei a construção do meu patrimônio e pretendo aumentá-lo."
      ]
    },
    {
      pergunta: "Por quanto tempo pretende manter seus recursos investidos?",
      respostas: [
        "Até 1 ano.",
        "De 1 a 3 anos.",
        "De 3 a 5 anos.",
        "Por mais de 5 anos."
      ]
    },
    {
      pergunta: "Qual percentual dos seus recursos você espera resgatar nos próximos 12 meses?",
      respostas: [
        "Mais de 25%",
        "Entre 5% e 25%",
        "Até 5%"
      ]
    },
    {
      pergunta: "Com quais produtos abaixo você tem familiaridade e/ou costuma investir com frequência?",
      respostas: [
        "Nenhum",
        "Renda fixa",
        "Renda variável",
        "Previdência privada"
      ]
    },
    {
      pergunta: "Em quais produtos abaixo, você investe e/ou investiu mais de 10% de sua renda nos últimos 12 meses?",
      respostas: [
        "Nenhum",
        "Renda fixa",
        "Renda variável",
        "Derivativos",
        "Previdência privada"
      ]
    }
];
  
  export default questionario;