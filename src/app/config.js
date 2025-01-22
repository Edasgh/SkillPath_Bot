import Link from "next/link";
import { createChatBotMessage } from "react-chatbot-kit";

const config = {
  botName: "SkillPath Bot",
  initialMessages: [
    createChatBotMessage(
      "Hi, I'm your SkillPath Bot to help you learning new skills. What do you want to learn today?"
    ),
  ],
  customComponents: {
    header: () => (
      <>
        <div
          suppressHydrationWarning
          suppressContentEditableWarning
          className="bg-indigo-600  p-4  font-semibold flex gap-3 items-center"
        >
          <Link href="/">
            <svg
              className="w-6 h-6 text-gray-800 dark:text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M13 5H1m0 0 4 4M1 5l4-4"
              />
            </svg>
          </Link>
          <div className="w-full" suppressHydrationWarning>
            <p className="text-center text-white text-3xl" suppressHydrationWarning> SkillPath Bot</p>
          </div>
        </div>
      </>
    ),
    botAvatar: () => (
      <div
        suppressHydrationWarning
        className="relative inline-flex items-center justify-center w-10 h-10 overflow-hidden bg-gray-200 rounded-full "
      >
        <span className="font-medium text-gray-600 text-xl">SB</span>
      </div>
    ),
  },
};

export default config;