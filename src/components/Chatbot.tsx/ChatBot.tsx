"use client"
import { useState } from 'react';
import { FaComments, FaTimes } from 'react-icons/fa';

const Chatbot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {/* Chatbot Button */}
      <button
        onClick={toggleChat}
        className="bg-blue-600 text-white p-3 rounded-full shadow-lg hover:bg-blue-700 focus:outline-none"
      >
        {isOpen ? <FaTimes size={24} /> : <FaComments size={24} />}
      </button>

      {/* Chatbox */}
      {isOpen && (
        <div className="bg-white w-72 h-96 rounded-lg shadow-lg mt-2 p-4">
          <div className="text-lg text-black font-semibold mb-2">Assistente Fin - Fintech</div>
          <div className="h-72 overflow-y-auto mb-2">
            {/* Static Dialogs */}
            <div className="mb-2">
              <div className="text-gray-600">Bot:</div>
              <p className="bg-gray-100 p-2 rounded-md text-black">
                Olá! Como posso ajudar você hoje?
              </p>
            </div>
            <div className="mb-2">
              <div className="text-gray-600">Usuário:</div>
              <p className="bg-blue-100 p-2 rounded-md text-black">
                Quero saber mais sobre investimentos.
              </p>
            </div>
            <div className="mb-2">
              <div className="text-gray-600">Bot:</div>
              <p className="bg-gray-100 p-2 rounded-md text-black">
                Claro! Você pode começar aprendendo sobre ações, títulos públicos e fundos imobiliários.
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Chatbot;