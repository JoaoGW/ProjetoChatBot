"use client"; 

import React, { useState } from 'react';
import { FaComments, FaTimes } from 'react-icons/fa';
import { RiRobot3Line } from 'react-icons/ri';

const Chatbot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);  //Chat aberto
  const [escolha, setEscolha] = useState<string | null>(null); // Escolha do usuario
  const [ajuda, setAjuda] = useState<boolean>(false);  // Mensagem 'sim' ou 'nao'
  const [encerrarChat, setEncerrarChat] = useState<boolean>(false); // Chat é encerrado

  const toggleChat = () => {
    setIsOpen(!isOpen);
    if (!isOpen) {
      setEscolha(null);  
      setAjuda(false); 
      setEncerrarChat(false); 
    }
  };

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
                  onClick={() => Opcao('financeiro')}
                  className="bg-blue-600 text-white p-2 rounded-lg"
                >
                  Receber notícias financeiras
                </button>
                <button
                  onClick={() => Opcao('cripto')}
                  className="bg-blue-600 text-white p-2 rounded-lg"
                >
                  Aprender sobre criptomoeda
                </button>
                <button
                  onClick={() => Opcao('acao')}
                  className="bg-blue-600 text-white p-2 rounded-lg"
                >
                  Informações sobre ações
                </button>
              </div>
            )}

            {escolha && !encerrarChat && (
              <div className="relative bg-gray-200 text-black p-3 rounded-lg self-end shadow-md max-w-max">
                <div>
                  {escolha === 'financeiro' && "Receber notícias financeiras"}
                  {escolha === 'cripto' && "Aprender sobre criptomoeda"}
                  {escolha === 'acao' && "Informações sobre ações"}
                </div>
                <div className="absolute -right-2 top-4 w-0 h-0 border-t-[10px] border-t-transparent border-l-[10px] border-l-gray-200 border-b-[10px] border-b-transparent"></div>
              </div>
            )}

            {/* Tem que fazer funcionar a API */}
            {escolha && !encerrarChat && (
              <div className="relative bg-blue-100 text-black p-3 rounded-lg self-end shadow-md max-w-max">
                <div>
                  {escolha === 'financeiro' && "Aqui estão algumas notícias sobre área financeira:"}
                  {escolha === 'cripto' && "Aqui estão informações sobre criptomoedas:"}
                  {escolha === 'acao' && "Aqui estão algumas informações sobre ações:"}
                </div>
                <div className="absolute -right-2 top-4 w-0 h-0 border-t-[10px] border-t-transparent border-l-[10px] border-l-gray-200 border-b-[10px] border-b-transparent"></div>
              </div>
            )}

            {ajuda && !encerrarChat && (
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
