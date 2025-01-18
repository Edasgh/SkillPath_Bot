import { createChatBotMessage } from "react-chatbot-kit";

const config={
    botName:"SkillPath Bot",
    initialMessages:[
        createChatBotMessage("Hi, I'm your SkillPath Bot to help you learning new skills. What do you want to learn today?")
    ]
}

export default config;