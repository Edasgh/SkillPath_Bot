import "./globals.css";

export const metadata = {
  title: "SkillPath Bot",
  description:
    "Skillpath bot is an expert learning advisor. It's task is to create a personalized learning path for users based on their goals, current skill level, and preferences.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body suppressHydrationWarning suppressContentEditableWarning>
        {children}
        </body>
    </html>
  );
}
