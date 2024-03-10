import React, { useState, useEffect, useRef } from "react";
import { CohereClient } from "cohere-ai";
import Navbar from "../components/Navbar";

const Chatbot = () => {
  const [messages, setMessages] = useState([]);
  const bottomOfChat = useRef(null);
  const [input, setInput] = useState("");
  const [chatHistory, setChatHistory] = useState([
    { role: "CHATBOT", message: "Welcome to the chatbot!" }
  ]);


  const sendMessage = (e) => {
    e.preventDefault();

    // Add user's message to messages state
    setMessages([...messages, { text: input, sender: 'user' }]);

    const cohere = new CohereClient({
      token: "eCeWRKUJbJw41q5RCsCo0ohCOdthEXTyze3o4vNa"
    });

    const getChatResponse = async () => {
      const chatStream = await cohere.chatStream({
        max_tokens: 50,
        temperature: 1.0,
        chatHistory: chatHistory,
        message: input,
        connectors: [{ id: "web-search" }]
      });

      let text = '';


      for await (const message of chatStream) {
        if (message.eventType === "text-generation") {
          text += message.text;
        }
      }

      // Add chatbot's response to messages state
      //   setMessages([...messages, { text: text, sender: 'bot' }]);
      setMessages(messages => [...messages, { text: text, sender: 'bot' }]);

      // Update chat history
      const newChatHistory = [...chatHistory, { role: "CHATBOT", message: text }];
      setChatHistory(newChatHistory);
    };

    getChatResponse();

    setInput(""); // Clear the input field after sending the message
  };

  return (
    <div className="flex flex-col h-screen">
      <header className="bg-gray-800 p-4 text-white text-center">My Chat UI</header>
      <div className="flex-1 overflow-y-scroll bg-gray-100 p-4">
        {messages.map((message, index) => (
          <div key={index} className={`message ${message.sender === 'user' ? 'bg-blue-500 text-white text-start self-start' : 'bg-gray-300 text-black text-start self-end'} p-2 rounded-md m-1 max-w-sm`}>
            {message.text}
          </div>
        ))}
        <div ref={bottomOfChat}></div>
      </div>
      <form onSubmit={sendMessage} className="bg-white p-4 flex">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type a message..."
          className="flex-grow p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
        />
        <button type="submit" className="ml-4 px-4 py-2 bg-blue-500 text-white rounded-md">Send</button>
      </form>
      <Navbar />
    </div>
  );


  //   return (
  //             <div className="flex flex-col h-screen">
  //           <header className="bg-gray-800 p-4 text-white text-center">My Chat UI</header>
  //           <div className="flex-1 overflow-y-scroll bg-gray-100 p-4">
  //             {messages.map((message, index) => (
  //               <div key={index} className={`message ${message.sender === 'user' ? 'bg-blue-500 text-white self-end' : 'bg-gray-300 text-black self-start'} p-2 rounded-md m-1 max-w-sm`}>
  //                 {message.text}
  //               </div>
  //             ))}
  //             <div ref={bottomOfChat}></div>
  //           </div>
  //           <form onSubmit={sendMessage} className="bg-white p-4 flex">
  //             <input
  //               type="text"
  //               value={input}
  //               onChange={(e) => setInput(e.target.value)}
  //               placeholder="Type a message..."
  //               className="flex-grow p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
  //             />
  //             <button type="submit" className="ml-4 px-4 py-2 bg-blue-500 text-white rounded-md">Send</button>
  //           </form>
  //         </div>
  //   );
};

const ChatHistory = ({ history }) => {
  return (
    <div className="chat-history">
      {history.map((entry, index) => (
        <div key={index} className={`message ${entry.role}`}>
          {entry.message}
        </div>
      ))}

    </div>
  );
};

export default Chatbot;



// <div className="chatbot">
//   <ChatHistory history={chatHistory} />
//   {/* Additional components for input field, send button, etc. */}
//   <form onSubmit={sendMessage} className="bg-white p-4 flex">
//     <input
//       type="text"
//       value={input}
//       onChange={(e) => setInput(e.target.value)}
//       placeholder="Type a message..."
//       className="flex-grow p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
//     />
//     <button type="submit" className="ml-4 px-4 py-2 bg-blue-500 text-white rounded-md">Send</button>
//   </form>
// </div>
