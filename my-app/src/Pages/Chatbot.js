// import React, { useState, useEffect, useRef } from 'react';

// function Chatbot() {
//   const [messages, setMessages] = useState([]);
//   const [input, setInput] = useState("");
//   const bottomOfChat = useRef(null);

//   const sendMessage = async (e) => {
//     e.preventDefault();
//     const trimmedInput = input.trim();
//     if (trimmedInput) {
//       setMessages([...messages, { text: trimmedInput, sender: 'user' }]);
//       try {
//         const response = await fetch('https://api.cohere.ai/generate', {
//           method: 'POST',
//           headers: {
//             'Content-Type': 'application/json',
//             'Authorization': `bearer eCeWRKUJbJw41q5RCsCo0ohCOdthEXTyze3o4vNa`, // Replace with your Cohere API key
//           },
//           body: JSON.stringify({
//             prompt: trimmedInput,
//             max_tokens: 50,
//             temperature: 0.5,
//           }),
//         });
//         const data = await response.json();
//         setMessages(messages => [...messages, { text: data.text, sender: 'bot' }]);
//       } catch (error) {
//         console.error("Failed to send message to chatbot:", error);
//         // Handle error
//       }
//     }
//     setInput("");
//   };

//   useEffect(() => {
//     bottomOfChat.current?.scrollIntoView({ behavior: "smooth" });
//   }, [messages]);

//   return (
//     <div className="flex flex-col h-screen">
//       <header className="bg-gray-800 p-4 text-white text-center">My Chat UI</header>
//       <div className="flex-1 overflow-y-scroll bg-gray-100 p-4">
//         {messages.map((message, index) => (
//           <div key={index} className={`message ${message.sender === 'user' ? 'bg-blue-500 text-white self-end' : 'bg-gray-300 text-black self-start'} p-2 rounded-md m-1 max-w-sm`}>
//             {message.text}
//           </div>
//         ))}
//         <div ref={bottomOfChat}></div>
//       </div>
//       <form onSubmit={sendMessage} className="bg-white p-4 flex">
//         <input
//           type="text"
//           value={input}
//           onChange={(e) => setInput(e.target.value)}
//           placeholder="Type a message..."
//           className="flex-grow p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
//         />
//         <button type="submit" className="ml-4 px-4 py-2 bg-blue-500 text-white rounded-md">Send</button>
//       </form>
//     </div>
//   );
// }

// export default Chatbot;



// import React, { useState, useEffect, useRef } from 'react';

// function Chatbot() {
//   const [messages, setMessages] = useState([]);
//   const [input, setInput] = useState("");
//   const bottomOfChat = useRef(null);

//   const sendMessage = async (e) => {
//     e.preventDefault();
//     const trimmedInput = input.trim();
//     if (trimmedInput) {
//       setMessages([...messages, { text: trimmedInput, sender: 'user' }]);
//       try {
//         const response = await fetch('https://api.cohere.ai/v1/chat', {
//           method: 'POST',
//           headers: {
//             'Content-Type': 'application/json',
//             'Authorization': `bearer eCeWRKUJbJw41q5RCsCo0ohCOdthEXTyze3o4vNa`, // Replace with your Cohere API key
//           },
//           body: JSON.stringify({
//             context: messages.map(message => message.text).join('\n'), // Include chat history in context
//             message: trimmedInput,
//           }),
//         });
//         const data = await response.json();
//         setMessages(messages => [...messages, { text: data.messages[0].text, sender: 'bot' }]);
//       } catch (error) {
//         console.error("Failed to send message to chatbot:", error);
//         // Handle error
//       }
//     }
//     setInput("");
//   };

//   useEffect(() => {
//     bottomOfChat.current?.scrollIntoView({ behavior: "smooth" });
//   }, [messages]);

//   return (
//     <div className="flex flex-col h-screen">
//       <header className="bg-gray-800 p-4 text-white text-center">My Chat UI</header>
//       <div className="flex-1 overflow-y-scroll bg-gray-100 p-4">
//         {messages.map((message, index) => (
//           <div key={index} className={`message ${message.sender === 'user' ? 'bg-blue-500 text-white self-end' : 'bg-gray-300 text-black self-start'} p-2 rounded-md m-1 max-w-sm`}>
//             {message.text}
//           </div>
//         ))}
//         <div ref={bottomOfChat}></div>
//       </div>
//       <form onSubmit={sendMessage} className="bg-white p-4 flex">
//         <input
//           type="text"
//           value={input}
//           onChange={(e) => setInput(e.target.value)}
//           placeholder="Type a message..."
//           className="flex-grow p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
//         />
//         <button type="submit" className="ml-4 px-4 py-2 bg-blue-500 text-white rounded-md">Send</button>
//       </form>
//     </div>
//   );
// }

// export default Chatbot;

// import React, { useState } from "react";

// const { CohereClient } = require("cohere-ai");


// const co = new CohereClient(' bearer eCeWRKUJbJw41q5RCsCo0ohCOdthEXTyze3o4vNa');


// const Chatbot = () => {
//   const [messages, setMessages] = useState([]);


// const handleMessage = async (message) => {
//     // Add user message to the chat history
//     setMessages([...messages, { role: "USER", text: message }]);
  
//     // Send user message to the chatbot and receive response
//     const response = await co.chat({ message });
  
//     // Add chatbot response to the chat history
//     setMessages([...messages, { role: "CHATBOT", text: response.text }]);
//   };

//   return (
//     <div>
//       <div>
//         {messages.map((msg, index) => (
//           <div key={index}>
//             {msg.role === "USER" ? "User: " : "Chatbot: "}
//             {msg.text}
//           </div>
//         ))}
//       </div>
//       <input
//         type="text"
//         placeholder="Type your message..."
//         onKeyDown={(e) => {
//           if (e.key === "Enter") {
//             handleMessage(e.target.value);
//             e.target.value = "";
//           }
//         }}
//       />
//     </div>
//   );
// };

// export default Chatbot;


import React, { useState, useEffect, useRef } from "react";
import { CohereClient } from "cohere-ai";

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
  

//   const sendMessage = (e) => {
//     e.preventDefault();
//     const cohere = new CohereClient({
//       token: "eCeWRKUJbJw41q5RCsCo0ohCOdthEXTyze3o4vNa"
//     });
  
//     let text = '';

//     const getChatResponse = async () => {
//       const chatStream = await cohere.chatStream({
//         max_tokens: 50,
//         temperature: 1.0,
//         chatHistory: chatHistory,
//         message: input, // Use the input as the message
//         connectors: [{ id: "web-search" }]
//       });
  
//       let newChatHistory = [...chatHistory]; // Copy the existing chat history
  
//       for await (const message of chatStream) {
//         if (message.eventType === "text-generation") {
//             text += message.text;
            
          
//         }
//       }
//       newChatHistory.push({ role: "CHATBOT", message: text });
//       setMessages(messages => [...messages, { text: text, sender: 'bot' }]);
  
//       setChatHistory(newChatHistory); // Update the chat history state
//     };

//     getChatResponse();
  
//     setInput(""); // Clear the input field after sending the message
//   };
  

//   const sendMessage=(e) => {
//     e.preventDefault();
//     const cohere = new CohereClient({
//       token: "eCeWRKUJbJw41q5RCsCo0ohCOdthEXTyze3o4vNa"
//     });

//     const getChatResponse = async () => {
//       const chatStream = await cohere.chatStream({
//         chatHistory: chatHistory,
//         message: "What year was he born?",
//         connectors: [{ id: "web-search" }]
//       });

//       let text = '';

//       for await (const message of chatStream) {
//         if (message.eventType === "text-generation") {
//         //   const newChatHistory = [...chatHistory, { role: "CHATBOT", message: message.text }];
//         //   setChatHistory(newChatHistory);
//         // console.log(chatHistory);
//         console.log(message.text);
//         text += message.text;
//         }

//       }

//       const newChatHistory = [...chatHistory, { role: "CHATBOT", message: text }];
//       setChatHistory(newChatHistory);
//     };

//     getChatResponse();

//     // Clean up function

//   }  // Dependency array to re-run effect when chat history changes

    //   return (
    //     <div className="flex flex-col h-screen">
    //       <header className="bg-gray-800 p-4 text-white text-center">My Chat UI</header>
    //       <div className="flex-1 overflow-y-scroll bg-gray-100 p-4">
    //         {messages.map((message, index) => (
    //           <div key={index} className={`message ${message.sender === 'user' ? 'bg-blue-500 text-white self-end' : 'bg-gray-300 text-black self-start'} p-2 rounded-md m-1 max-w-sm`}>
    //             {message.text}
    //           </div>
    //         ))}
    //         <div ref={bottomOfChat}></div>
    //       </div>
    //       <form onSubmit={sendMessage} className="bg-white p-4 flex">
    //         <input
    //           type="text"
    //           value={input}
    //           onChange={(e) => setInput(e.target.value)}
    //           placeholder="Type a message..."
    //           className="flex-grow p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
    //         />
    //         <button type="submit" className="ml-4 px-4 py-2 bg-blue-500 text-white rounded-md">Send</button>
    //       </form>
    //     </div>
    //   );

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
