"use client";
import ActionProvider from "@/app/ActionProvider";
import config from "@/app/config";
import Chatbot from "react-chatbot-kit";
import "react-chatbot-kit/build/main.css";
import MessageParser from "./MessageParser";

const ChatbotEl = () => {
  return (
    <div suppressHydrationWarning suppressContentEditableWarning>
      <Chatbot
        config={config}
        actionProvider={ActionProvider}
        messageParser={MessageParser}
        
      />
    </div>
  );
};

export default ChatbotEl;
