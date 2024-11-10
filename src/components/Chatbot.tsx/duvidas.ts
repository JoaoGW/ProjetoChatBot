interface Duvidas {
    duvida: string;
    respostas: string[];
  }

const duvidas: Duvidas[] = [
    {
        duvida: 'Tipo de investidor',
        respostas:[ 'Investidor conservador– O investidor conservador busca segurança e estabilidade, priorizando a preservação do capital sobre altos retornos. Esse perfil prefere investimentos de baixo risco e previsibilidade, como títulos de renda fixa. A rentabilidade costuma ser menor, mas é mais estável, alinhada ao foco em evitar perdas.', 

           ' Investidor moderado– O investidor moderado busca um equilíbrio entre segurança e rentabilidade. Ele aceita assumir um pouco mais de risco para obter retornos melhores, mesclando investimentos em renda fixa com renda variável. Esse perfil está disposto a lidar com alguma volatilidade, desde que os investimentos sejam diversificados, permitindo ganhos maiores no médio a longo prazo sem abrir mão de certa proteção ao capital.',
            
           ' A3-Investidor arrojado– O investidor arrojado é focado em maximizar a rentabilidade, mesmo que isso envolve assumir riscos elevados. Ele está disposto a lidar com a volatilidade e oscilações de curto prazo, investindo majoritariamente em ativos de renda variável. Esse perfil busca altos retornos e vê no longo prazo a oportunidade de potencializar seu patrimônio, aceitando a possibilidade de perdas temporárias em prol de ganhos maiores.'
        ]
       },
    {
        duvida: 'Tipo de investimento',
        respostas: [
            `Renda fixa– O investimento em renda fixa oferece previsibilidade e menor risco. Nesse tipo de investimento, o investidor "empresta" dinheiro a bancos, empresas ou ao governo, recebendo juros em troca. Exemplos comuns incluem o Tesouro Direto, CDBs, LCIs e LCAs. É uma opção atrativa para quem busca segurança e estabilidade financeira, sendo ideal para perfis conservadores.`,
            `Renda variável– Investimentos em renda variável são aqueles cujo retorno não é garantido e depende das oscilações do mercado. Nessa categoria, o investidor pode ter ganhos significativos, mas também corre o risco de perdas. Exemplos comuns de renda variável incluem ações, fundos imobiliários (FIIs) e ETFs. Esse tipo de investimento é indicado para investidores que aceitam a volatilidade e buscam aumentar o patrimônio no médio a longo prazo, potencializando seus ganhos e aceitando os riscos.`,
            `Fundos de investimento– Fundos de investimento são uma forma de aplicação coletiva onde vários investidores colocam recursos em um “fundo”, que é gerido por um profissional especializado. Esse gestor decide onde aplicar o capital, buscando alcançar os melhores resultados de acordo com a política e o perfil do fundo. Existem diversos tipos,cada um com diferentes níveis de risco e retorno. Os fundos são uma opção prática para quem deseja diversificar e contar com a expertise de profissionais, sendo indicados para investidores de perfis variados, do conservador ao arrojado.`,
            `Criptomoeda– Criptomoedas são ativos digitais descentralizados que utilizam a tecnologia de blockchain para garantir segurança e transparência nas transações. As mais conhecidas, como Bitcoin e Ethereum, têm alta volatilidade, o que permite ganhos expressivos, mas também envolve riscos elevados. Criptomoedas são indicadas para investidores com perfil arrojado que aceitam a possibilidade de grandes oscilações, buscando diversificação e potencial de valorização a longo prazo.`,
            `Mercado cambial– O mercado cambial é o mercado de negociação de moedas internacionais, onde pares de moedas como dólar/euro ou dólar/real são comprados e vendidos. A valorização ou desvalorização de uma moeda em relação a outra permite ao investidor obter lucro. É mais indicado para investidores experientes com perfil arrojado, que buscam lucros no curto prazo e estão preparados para gerenciar a volatilidade diária.`,
            `Previdência Privada– A previdência privada é um investimento de longo prazo voltado para a formação de uma reserva financeira que complementa a aposentadoria. A previdência privada oferece vantagens como o diferimento do imposto para o momento do resgate e flexibilidade na escolha do tipo de tributação (regressiva ou progressiva), sendo indicada para quem quer planejar o futuro com mais segurança, assim correspondendo com um investidor conservador.`
        ]
    },
    {
        duvida: 'Este chatbot',
        respostas: [
            `O Que é um chatbot– Um chatbot é um programa de computador projetado para simular conversas humanas por meio de mensagens de texto.Os chatbots podem responder a perguntas, fornecer informações, realizar agendamentos e até realizar transações. Eles são amplamente usados em atendimento ao cliente, marketing e suporte técnico, permitindo interações rápidas e eficientes, 24 horas por dia. Com o avanço da tecnologia, os chatbots estão se tornando cada vez mais sofisticados, oferecendo uma experiência de usuário mais natural e personalizada. `,
            `Propósito deste chatbot- Este chatbot busca auxiliar na aprendizagem e execução de investimentos financeiros vantajosos para seus usuários, desta forma disponibilizando inúmeras interação dentro deste intenção. Sendo elas recomendações de investimentos, textos esclarecedores sobre pontos essenciais do tema e funcionalidade para identificação do seu tipo de investidor. `,
            `Público alvo deste chatbot– Este chatbot foi desenvolvido pensando em pessoas já ativas no mundo de investimentos , abrangendo desde as pessoas mais inexperientes até os profissionais do mercado. `,
            `Utilidade deste chatbot– Este chatbot é capaz de fazer recomendação de investimento de acordo como seu perfil de investidor , podendo até indicar o seu perfil de investidor caso tenha dúvidas sobre o mesmo.`
        ]
    }
    
    
    ]

export default duvidas;