import OpenAI from "openai";


const openai = new OpenAI({
  apiKey: "fa1b284cf47a44668619b330b7891be6",
  baseURL: "https://api.aimlapi.com/v1",
  //to use it on the browser, without the need of backend
  dangerouslyAllowBrowser: true,
});

class ActionProvider {
  createChatBotMessage;
  setStateFunc;
  createClientMessage;
  stateRef;
  createCustomMessage;
  constructor(
    createChatBotMessage,
    setStateFunc,
    createClientMessage,
    stateRef,
    createCustomMessage,
    ...rest
  ) {
    this.createChatBotMessage = createChatBotMessage;
    this.setState = setStateFunc;
    this.createClientMessage = createClientMessage;
    this.stateRef = stateRef;
    this.createCustomMessage = createCustomMessage;
  }
  callGenAI = async (prompt) => {
    const chatCompletion = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [
        {
          role: "system",
          content:
            "You are an expert learning advisor. Your task is to create a personalized learning path for users based on their goals, current skill level, and preferences.",
        },
        { role: "user", content: prompt },
      ],
      temperature: 0.5,
      max_tokens: 50,
    });

    return chatCompletion.choices[0].message.content;
  };

  timer = (ms) => new Promise((res) => setTimeout(res, ms));

  generateResponseMessages = async (userMessage) => {
    const responseFromGpt = await this.callGenAI(userMessage);
    let message;
    let numberOfLines = responseFromGpt.split("\n").length;
    for (let i = 0; i < numberOfLines; i++) {
      const msg = responseFromGpt.split("\n")[i];
      if (msg.length) {
        message = this.createChatBotMessage(msg);
        this.updateChatBotMessage(message);
      }
      //wait for a second then reply
      await this.timer(1000);
    }
  };

  respond = (message) => {
    this.generateResponseMessages(message);
  };

  updateChatBotMessage = (message) => {
    this.setState((prevState) => ({
      ...prevState,
      messages: [...prevState.messages, message],
    }));
  };
}

export default ActionProvider;
