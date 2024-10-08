"use client"; 

import React, { use, useState } from 'react';
import { FaComments, FaTimes } from 'react-icons/fa';
import { RiRobot3Line } from 'react-icons/ri';
import questionario from './perguntas';


const Chatbot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);  //Chat aberto
  const [escolha, setEscolha] = useState<string | null>(null); // Escolha do usuario
  const [ajuda, setAjuda] = useState<boolean>(false);  // Mensagem 'sim' ou 'nao'
  const [encerrarChat, setEncerrarChat] = useState<boolean>(false); // Chat é encerrado
  let [pontuacao, setPontuacao] = useState<number>(0);  
  let [indicePergunta, setPergunta] = useState(0);


  const toggleChat = () => {
    setIsOpen(!isOpen);
    if (!isOpen) {
      setEscolha(null);  
      setAjuda(false); 
      setEncerrarChat(false); 
    }
  };

  const irParaProximaPergunta = (index: number) => {

    // Verifica se ainda há perguntas disponíveis
    if (indicePergunta < questionario.length - 1) {
      setPergunta(indicePergunta + 1); // Atualiza o índice corretamente
        setPontuacao(pontuacao + index )
        }
    else{
      setPergunta(0)
      setPontuacao(0)
      setEscolha('sair')
    }
  };

  const ImprimeResposta = () =>{
    const item = questionario[indicePergunta]
    //const resposta = questionario.pergunta1.respostas
    return(
      <div>
      {item.respostas.map((resposta, index) => ( 
        <div style={{marginBottom:"15px"}}>
      <button
        key={index}
        className="bg-blue-600 text-white p-2 rounded-lg"
        onClick = {() => irParaProximaPergunta(index)}
        >     
        {resposta}
      </button>
      </div>
      ))}
    </div>
    )
  }

  const Opcao = (escolha: string) => {
    setEscolha(escolha);
    setAjuda(true); 
  };

  const receberAjuda = (escolha: string) => {
    if (escolha === 'nao') {
      setEncerrarChat(true);  
    } else if (escolha === 'sim') {
      setEscolha(null); 
      setAjuda(false);  
    }
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {/* Botão para abrir/fechar o chatbot */}
      <button
        onClick={toggleChat}
        className="bg-blue-600 text-white p-3 rounded-full shadow-lg hover:bg-blue-700 focus:outline-none"
      >
        {isOpen ? <FaTimes size={30} /> : <FaComments size={50} />}
      </button>

      {/* Chatbox */}
      {isOpen && (
        <div className="bg-white w-72 h-96 rounded-lg shadow-lg mt-2 p-4">
          <div className="text-lg text-black font-semibold mb-5 flex flex-row items-center text-blue-500">
            <RiRobot3Line className="border border-2 rounded-full p-1 mr-3" size="30px" />
            Assistente FinTech
          </div>
          <div className="h-72 overflow-y-auto mb-2 flex flex-col space-y-3">
            
            {/* Balão de mensagem do chatbot */}
            {!encerrarChat && (
              <div className="relative bg-blue-100 text-black p-3 rounded-lg self-start shadow-md max-w-max">
                <div>
                  Olá! Como posso ajudar você?
                </div>
                <div className="absolute -left-2 top-4 w-0 h-0 border-t-[10px] border-t-transparent border-r-[10px] border-r-blue-100 border-b-[10px] border-b-transparent"></div>
              </div>
            )}

            {!encerrarChat && (
              <div className="mt-4 flex flex-col space-y-1">
                <button
                  onClick={() => Opcao('investimento')}
                  className="bg-blue-600 text-white p-2 rounded-lg"
                >
                  Recomendação de investimento 
                </button>
                <button
                  onClick={() => Opcao('noticias')}
                  className="bg-blue-600 text-white p-2 rounded-lg"
                >
                  Receber notícias 
                </button>
                <button
                  onClick={() => Opcao('duvida')}
                  className="bg-blue-600 text-white p-2 rounded-lg"
                >
                  Duvidas
                </button>
              </div>
            )}

            {(escolha === 'investimento'|| escolha === 'noticias' || escolha === 'duvida') && !encerrarChat && (
              <div className="relative bg-gray-200 text-black p-3 rounded-lg self-end shadow-md max-w-max">
                <div>
                  {escolha === 'investimento' && "De qual forma gostaria da minha ajuda"}
                  {escolha === 'noticias' && "Gostaria que eu  te mande notícias do mundo das notícias?"}
                  {escolha === 'duvida' && "Escolha uma das opções para receber uma explicação do assunto"}
                </div>
                <div className="absolute -right-2 top-4 w-0 h-0 border-t-[10px] border-t-transparent border-l-[10px] border-l-gray-200 border-b-[10px] border-b-transparent"></div>
              </div>
            )}

            {escolha && !encerrarChat && escolha==='investimento' &&(
              <div className="mt-4 flex flex-col space-y-1">
                <button
                  onClick={() => Opcao('perguntas')}
                  className="bg-blue-600 text-white p-2 rounded-lg"
                >
                  Descobrir meu perfil de investidor
                </button>
                <button
                  onClick={() => Opcao('perfil')}
                  className="bg-blue-600 text-white p-2 rounded-lg"
                >
                  Escolher meu perfil de investidor
                </button>
                <button
                  onClick={() => Opcao('geral')}
                  className="bg-blue-600 text-white p-2 rounded-lg"
                >
                  Ver recomedações gerais
                </button>
              </div>
            )}
           
           {(escolha === 'perguntas'|| escolha === 'perfil' || escolha === 'geral') && !encerrarChat && (
              <div className="relative bg-gray-200 text-black p-3 rounded-lg self-end shadow-md max-w-max"> 
                <div>
                  {escolha === 'perguntas' && "Para descobrir me responda às próximas perguntas,voce quer continuar"}
                  {escolha === 'perfil' && "Escolha seu perfil de investidor"}
                  {escolha === 'geral' && "Opções gerais de investimento"}
                </div>
                <div className="absolute -right-2 top-4 w-0 h-0 border-t-[10px] border-t-transparent border-l-[10px] border-l-gray-200 border-b-[10px] border-b-transparent"></div>
              </div>
            )}

            {escolha && !encerrarChat && escolha === 'perguntas'&& (
              <div className="mt-4 flex flex-col space-y-1">
                <button
                  onClick={() => Opcao('rSim')}
                  className="bg-blue-600 text-white p-2 rounded-lg"
                >
                  Sim
                </button>
                <button
                  onClick={() => Opcao('rNão')}
                  className="bg-blue-600 text-white p-2 rounded-lg"
                >
                  Não
                </button>
              </div>
            )}

            {(escolha === 'rSim'|| escolha === 'rNão' ) && !encerrarChat && (
              <div> 
                <div className="relative bg-gray-200 text-black p-3 rounded-lg self-end shadow-md max-w-max">
                  {escolha === 'rSim' && questionario[indicePergunta].pergunta}
                  {escolha === 'rNão' && "Tudo bem"}
                </div>
                {/* <div className="absolute -right-2 top-4 w-0 h-0 border-t-[10px] border-t-transparent border-l-[10px] border-l-gray-200 border-b-[10px] border-b-transparent"></div> */}
                <ImprimeResposta />
              </div>
            ) }

            
            {escolha && !encerrarChat && escolha === 'perfil' && (
              <div className="mt-4 flex flex-col space-y-1">
                <button
                  onClick={() => Opcao('conservador')}
                  className="bg-blue-600 text-white p-2 rounded-lg"
                >
                  Conservador
                </button>
                <button
                  onClick={() => Opcao('moderado')}
                  className="bg-blue-600 text-white p-2 rounded-lg"
                >
                  Moderado
                </button>
                <button
                  onClick={() => Opcao('arrojado')}
                  className="bg-blue-600 text-white p-2 rounded-lg"
                >
                  Arrojado
                </button>
              </div>
            )}

            {(escolha === 'conservador'|| escolha === 'moderado' || escolha === 'arrojado')&& !encerrarChat && (
              <div className="relative bg-gray-200 text-black p-3 rounded-lg self-end shadow-md max-w-max">
                <div>
                  {escolha === 'conservador' && "Opções de investimento para o perfil conservador"}
                  {escolha === 'moderado' && "Opções de investimento para o perfil moderado"}
                  {escolha === 'arrojado' && "Opções de investimento para o perfil arrojado"}
                </div>
                <div className="absolute -right-2 top-4 w-0 h-0 border-t-[10px] border-t-transparent border-l-[10px] border-l-gray-200 border-b-[10px] border-b-transparent"></div>
              </div>
            )}
         
            {escolha && !encerrarChat && (escolha === 'conservador'|| escolha === 'moderado' || escolha === 'arrojado')&& (
              <div className="mt-4 flex flex-col space-y-1">
                <button
                  onClick={() => Opcao('sair')}
                  className="bg-blue-600 text-white p-2 rounded-lg"
                >
                  Continuar
                </button>
              </div>
            )}



            {escolha && !encerrarChat && escolha === 'geral'&& (
              <div className="mt-4 flex flex-col space-y-1">
                <button
                  onClick={() => Opcao('sair')}
                  className="bg-blue-600 text-white p-2 rounded-lg"
                >
                  Continuar
                </button>
              </div>
            )}

            
            

           
           {escolha && !encerrarChat && escolha === 'noticias'&& (
              <div className="mt-4 flex flex-col space-y-1">
                <button
                  onClick={() => Opcao('notSim')}
                  className="bg-blue-600 text-white p-2 rounded-lg"
                >
                  Sim
                </button>
                <button
                  onClick={() => Opcao('notNão')}
                  className="bg-blue-600 text-white p-2 rounded-lg"
                >
                  Não
                </button>
              </div>
            )}
            
            {(escolha === 'notSim'|| escolha === 'notNão' ) && !encerrarChat && (
              <div className="relative bg-gray-200 text-black p-3 rounded-lg self-end shadow-md max-w-max">
                <div>
                {escolha === 'notSim' && "iremos mandar as noticias"}
                  {escolha === 'notNão' && "Não iremos mandar as noticias"}
                </div>
                <div className="absolute -right-2 top-4 w-0 h-0 border-t-[10px] border-t-transparent border-l-[10px] border-l-gray-200 border-b-[10px] border-b-transparent"></div>
              </div>
            )}

             {escolha && !encerrarChat && (escolha === 'notSim' ||escolha === 'notNão') && (
              <div className="mt-4 flex flex-col space-y-1">
                <button
                  onClick={() => Opcao('sair')}
                  className="bg-blue-600 text-white p-2 rounded-lg"
                >
                  Continuar
                </button>
              </div>
            )}


            {escolha && !encerrarChat && escolha === 'sair'&&(
              <>
                <div className="relative bg-blue-100 text-black p-3 rounded-lg self-start shadow-md max-w-max">
                  <div>Posso ajudar em mais alguma coisa?</div>
                  <div className="absolute -left-2 top-4 w-0 h-0 border-t-[10px] border-t-transparent border-r-[10px] border-r-blue-100 border-b-[10px] border-b-transparent"></div>
                </div>

                <div className="mt-4 flex flex-row space-x-2">
                  <button
                    onClick={() => receberAjuda('sim')}
                    className="bg-blue-600 text-white p-2 rounded-lg"
                  >
                    Sim
                  </button>
                  <button
                    onClick={() => receberAjuda('nao')}
                    className="bg-blue-600 text-white p-2 rounded-lg"
                  >
                    Não
                  </button>
                </div>
              </>
            )}

            
            {encerrarChat && (
              <div className="relative bg-blue-100 text-black p-3 rounded-lg self-start shadow-md max-w-max">
                <div>Tudo bem. Conversa encerrada.</div>
                <div className="absolute -left-2 top-4 w-0 h-0 border-t-[10px] border-t-transparent border-r-[10px] border-r-gray-300 border-b-[10px] border-b-transparent"></div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Chatbot;
