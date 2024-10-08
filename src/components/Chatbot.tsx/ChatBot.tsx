"use client"; 
import React, { useState } from 'react';
import { FaComments, FaTimes } from 'react-icons/fa';
import { RiRobot3Line } from 'react-icons/ri';

const Chatbot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);  //Chat aberto
  const [escolha, setEscolha] = useState<string | null>(null); // Escolha do usuario
  const [ajuda, setAjuda] = useState<boolean>(false);  // Mensagem 'sim' ou 'nao'
  const [encerrarChat, setEncerrarChat] = useState<boolean>(false); // Chat é encerrado
  const [categoria, setCategoria] = useState<string>('tesla'); // Categoria de notícias
  const [noticias, setNoticias] = useState<any[]>([]);  // Armazena as notícias retornadas
  const [loading, setLoading] = useState<boolean>(false);  // Indica se está carregando

  const toggleChat = () => {
    setIsOpen(!isOpen);
    if (!isOpen) {
      setEscolha(null);  
      setAjuda(false); 
      setEncerrarChat(false); 
      setNoticias([]); // Limpa as notícias ao fechar o chat
    }
  };

  const Opcao = (escolha: string) => {
    setEscolha(escolha);
    setAjuda(true);
    setCategoria(escolha); // Define a categoria baseada na escolha do usuário
    fetchNoticias(escolha); // Chama a função para buscar notícias ao clicar na opção
  };

  const receberAjuda = (escolha: string) => {
    if (escolha === 'nao') {
      setEncerrarChat(true);  
    } else if (escolha === 'sim') {
      setEscolha(null); 
      setAjuda(false);  
    }
  };

  const fetchNoticias = async (categoriaEscolhida: string) => {
    setLoading(true);  // Inicia o estado de carregamento
    try {
      const response = await fetch(`/api/noticias?categoria=${categoriaEscolhida}`);
      const data = await response.json();
      setNoticias(data.data.articles);  // Armazena as notícias no estado
      console.log("Resultado: ", noticias);
      setLoading(false);  // Finaliza o estado de carregamento
    } catch (error) {
      console.error("Erro ao buscar notícias:", error);
      setLoading(false);  // Finaliza o estado de carregamento em caso de erro
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
                  onClick={() => Opcao('business')}
                  className="bg-blue-600 text-white p-2 rounded-lg"
                >
                  Receber notícias financeiras
                </button>
                <button
                  onClick={() => Opcao('crypto')}
                  className="bg-blue-600 text-white p-2 rounded-lg"
                >
                  Aprender sobre criptomoeda
                </button>
                <button
                  onClick={() => Opcao('stocks')}
                  className="bg-blue-600 text-white p-2 rounded-lg"
                >
                  Informações sobre ações
                </button>
              </div>
            )}

            {escolha && !encerrarChat && (
              <div className="relative bg-gray-200 text-black p-3 rounded-lg self-end shadow-md max-w-max">
                <div>
                  {escolha === 'business' && "Receber notícias financeiras"}
                  {escolha === 'crypto' && "Aprender sobre criptomoeda"}
                  {escolha === 'stocks' && "Informações sobre ações"}
                </div>
                <div className="absolute -right-2 top-4 w-0 h-0 border-t-[10px] border-t-transparent border-l-[10px] border-l-gray-200 border-b-[10px] border-b-transparent"></div>
              </div>
            )}

            {/* Mensagem de carregamento */}
            {loading && (
              <div className="relative bg-blue-100 text-black p-3 rounded-lg self-start shadow-md max-w-max">
                <div>Buscando notícias, por favor aguarde...</div>
                <div className="absolute -left-2 top-4 w-0 h-0 border-t-[10px] border-t-transparent border-r-[10px] border-r-blue-100 border-b-[10px] border-b-transparent"></div>
              </div>
            )}

            {/* Respostas dinâmicas baseadas nas categorias */}
            {escolha && !encerrarChat && !loading && (
              <div className="relative bg-blue-100 text-black p-3 rounded-lg self-end shadow-md max-w-max">
                <div>
                  {escolha === 'tesla' && "Aqui estão algumas notícias sobre área financeira:"}
                  {escolha === 'apple' && "Aqui estão informações sobre criptomoedas:"}
                  {escolha === 'business' && "Aqui estão algumas informações sobre ações:"}
                </div>
                <div className="absolute -right-2 top-4 w-0 h-0 border-t-[10px] border-t-transparent border-l-[10px] border-l-gray-200 border-b-[10px] border-b-transparent"></div>
              </div>
            )}

            {/* Exibição das notícias */}
            {!loading && noticias.length > 0 && (
              <div className="space-y-3">
                {noticias.map((noticia, index) => (
                  <div key={index} className="relative bg-gray-100 text-black p-3 rounded-lg self-start shadow-md">
                    <a href={noticia.url} target="_blank" rel="noopener noreferrer" className="font-bold underline">
                      {noticia.title}
                    </a>
                    <p>{noticia.description}</p>
                  </div>
                ))}
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