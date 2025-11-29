import React, { useState } from 'react';

// Componente SVG para el icono de chat (simulando un icono moderno)
const ChatIcon = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
  </svg>
);

// Componente SVG para el botón de cierre
const XIcon = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M18 6 6 18" /><path d="m6 6 12 12" />
  </svg>
);

// Estructura de un mensaje simulado
const initialMessages = [
  { id: 1, text: "¡Hola! Soy tu asistente virtual de InnovVentas. ¿En qué puedo ayudarte hoy?", sender: 'bot' },
];

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState(initialMessages);
  const [input, setInput] = useState('');

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  // Función placeholder para enviar mensajes
  const handleSendMessage = async (e) => {
    e.preventDefault();
    if (input.trim() === '') return;

    const newMessage = {
      id: messages.length + 1,
      text: input,
      sender: 'user'
    };

    // Agrega el mensaje del usuario
    setMessages([...messages, newMessage]);

    const userMessage = input;
    
    setInput('');

    try {
      const response = await fetch("http://127.0.0.1:8000/api/chat", {
          method: "POST",
          headers: {
              "Content-Type": "application/json",
          },
          body: JSON.stringify({ message: userMessage }),
      });

      const data = await response.json();

      const botResponse = {
          id: messages.length + 2,
          text: data.response,
          sender: "bot",
      };

      setMessages((prev) => [...prev, botResponse]);

    } catch (error) {
        const botResponse = {
            id: messages.length + 2,
            text: "Error al conectar con la API: "+ error,
            sender: "bot",
        };

        setMessages((prev) => [...prev, botResponse]);
    }
  };

  return (
    <div className="fixed bottom-4 right-2 z-50 font-sans">
      {/* Contenedor del Chat Desplegable */}
      <div 
        className={`bg-white rounded-xl shadow-2xl overflow-hidden transition-all duration-300 transform ${
          isOpen ? 'w-100 max-w-lg h-[500px] opacity-100 translate-y-0' : 'w-0 h-0 opacity-0 translate-y-20 pointer-events-none'
        }`}
        style={{ transitionProperty: 'width, height, opacity, transform' }}
      >
        {/* Encabezado del Chat */}
        <div className="bg-green-600 text-white p-4 flex items-center justify-between shadow-md">
          <h3 className="font-bold text-lg">Asistente InnovVentas</h3>
          <button onClick={toggleChat} className="text-white hover:text-red-200 transition">
            <XIcon className="w-6 h-6" />
          </button>
        </div>

        {/* Cuerpo de Mensajes */}
        <div className="h-full max-h-[300px] p-4 space-y-4 overflow-y-auto custom-scrollbar">
          {messages.map((msg) => (
            <div key={msg.id} className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
              <div 
                className={`max-w-[80%] p-3 rounded-lg text-sm shadow-sm ${
                  msg.sender === 'user' 
                    ? 'bg-blue-100 text-gray-800 rounded-br-none' 
                    : 'bg-blue-100 text-gray-700 rounded-tl-none'
                }`}
              >
                {msg.text}
              </div>
            </div>
          ))}
          {/* Un div invisible para mantener el scroll abajo */}
          <div ref={el => el && isOpen && el.scrollIntoView({ behavior: 'smooth' })} />
        </div>

        {/* Formulario de Input */}
        <form onSubmit={handleSendMessage} className="p-4 border-t border-gray-200 absolute bottom-0 w-full bg-white">
          <div className="flex">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Escribe un mensaje..."
              className="flex-grow p-2 border border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-800"
              aria-label="Escribe tu mensaje al asistente"
            />
            <button
              type="submit"
              className="bg-green-600 text-white p-2 rounded-r-lg hover:bg-green-700 transition duration-150 flex items-center justify-center"
              aria-label="Enviar mensaje"
            >
              {/* Utilizando el SendIcon de la respuesta anterior */}
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                <path d="m22 2-7 20-4-9-9-4 20-7Z" /><path d="M15 15l4-4" />
              </svg>
            </button>
          </div>
        </form>
      </div>

      {/* Botón Fijo para Abrir/Cerrar Chat */}
      <button
        onClick={toggleChat}
        className={`w-14 h-14 rounded-full shadow-xl text-white flex items-center justify-center transition-all duration-300 
          ${isOpen ? 'bg-sky-700 hover:bg-sky-600' : 'bg-blue-700 hover:bg-blue-600'}
        `}
        aria-label={isOpen ? "Cerrar Chat" : "Abrir Chat"}
        title={isOpen ? "Cerrar Chat" : "Abrir Chat"}
      >
        {isOpen ? (
          <XIcon className="w-6 h-6" />
        ) : (
          <ChatIcon className="w-6 h-6" />
        )}
      </button>

      {/* Estilos para la barra de desplazamiento customizada */}
      <style jsx>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: #f1f1f1;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #d1d5db; /* gray-300 */
          border-radius: 3px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: #9ca3af; /* gray-400 */
        }
      `}</style>
    </div>
  );
};

export default Chatbot;