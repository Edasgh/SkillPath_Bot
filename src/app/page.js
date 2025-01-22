"use client";
import Navbar from "@/components/Navbar";
import Link from "next/link";
import { useEffect, useState } from "react";

const ChatLoaderComp = () => {
  return (
    <div className="flex gap-1">
      <div className="h-2.5 w-2.5 bg-gray-400 rounded-full animate-bounce [animation-delay:-0.3s]"></div>
      <div className="h-2.5 w-2.5 bg-gray-400 rounded-full animate-bounce [animation-delay:-0.15s]"></div>
      <div className="h-2.5 w-2.5 bg-gray-400 rounded-full animate-bounce"></div>
    </div>
  );
};

const Home = () => {
  const [loading, setLoading] = useState({
    one: true,
    two: true,
    three: true,
    four: true,
    five: true,
  });

  const animation = {
    transform: "scale(3.5)",
    transition: "all .4s",
  };

  useEffect(() => {
    if (loading.one === true) {
      setTimeout(() => {
        setLoading((prev) => ({ ...prev, one: false }));
      }, 900);
    }

    if (loading.two === true) {
      setTimeout(() => {
        setLoading((prev) => ({ ...prev, two: false }));
      }, 3000);
    }

    if (loading.three === true) {
      setTimeout(() => {
        setLoading((prev) => ({ ...prev, three: false }));
      }, 5200);
    }
    if (loading.four === true) {
      setTimeout(() => {
        setLoading((prev) => ({ ...prev, four: false }));
      }, 7200);
    }
    if (loading.five === true) {
      setTimeout(() => {
        setLoading((prev) => ({ ...prev, five: false }));
      }, 8500);
    }
  }, [loading.one, loading.two, loading.three, loading.four, loading.five]);

  return (
    <>
      <Navbar />
      <main className="bg-[#77C5C0] w-screen h-fit pb-64 mt-[4.3rem] relative">
        <div
          className="flex flex-wrap justify-between items-center w-screen h-fit py-5 px-44"
          suppressHydrationWarning
        >
          <div className="flex flex-col gap-8 justify-start mt-12 px-20 items-start w-[40rem]">
            <p
              className="text-white text-4xl"
              style={{ textShadow: "1px 1px 4px grey, -1px -1px 4px grey" }}
            >
              Welcome to&nbsp;
              <span
                className="font-bold"
                style={{ textShadow: "1px 1px 4px grey, -1px -1px 4px grey" }}
              >
                SkillPath Bot 🤖
              </span>
            </p>
            <p className="text-xl font-medium">
              SkillPath Bot is your ultimate learning companion, designed to
              create personalized, step-by-step roadmaps for mastering any
              skill. Whether you're diving into programming, learning a new
              language, or exploring creative hobbies, SkillPath Bot simplifies
              your journey with clear guidance and tailored plans. Unlock your
              potential and achieve your goals one step at a time!
            </p>
            <Link
              href={"/skill_path_bot"}
              className={
                !loading.five
                  ? "text-white bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-500 font-medium rounded-lg text-2xl px-7 py-2 text-center shadow-lg animate-pulser"
                  : "text-white bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-500 font-medium rounded-lg text-2xl px-7 py-2 text-center shadow-lg"
              }
            >
              Get started
            </Link>
          </div>

          <div className="absolute left-[73rem] top-9">
            <div className="flex flex-col gap-10">
              <div className="flex items-start gap-2.5">
                <div className="flex flex-col w-fit max-w-[320px] leading-1.5 p-4 border-gray-200  rounded-e-xl rounded-es-xl bg-gray-700">
                  {loading.one ? (
                    <ChatLoaderComp />
                  ) : (
                    <p className="whitespace-nowrap overflow-hidden text-sm font-normal text-white animate-typewriter">
                      Hello! I'm SkillPath Bot.
                    </p>
                  )}
                </div>
              </div>
              <div className="flex items-start gap-2.5">
                <div className="flex flex-col w-fit max-w-[320px] leading-1.5 p-4 border-gray-200  rounded-e-xl rounded-es-xl bg-gray-700">
                  {loading.two ? (
                    <ChatLoaderComp />
                  ) : (
                    <>
                      <p className="whitespace-nowrap overflow-hidden text-sm font-normal text-white animate-typewriter">
                        Need a plan to learn something new?
                      </p>
                      {loading.three ? (
                        <> </>
                      ) : (
                        <p className="whitespace-nowrap overflow-hidden text-sm font-normal text-white animate-typewriter">
                          I’m here to help you learn skills
                        </p>
                      )}
                      {loading.four ? (
                        <></>
                      ) : (
                        <p className="whitespace-nowrap overflow-hidden text-sm font-normal text-white animate-typewriter">
                          effectively.
                        </p>
                      )}
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>

          <Link href="/skill_path_bot" className="flex-1">
            <img
              src="./img.png"
              alt="SkillPath_Bot"
              width={"350px"}
              height={"450px"}
            />
          </Link>
        </div>
      </main>
    </>
  );
};

export default Home;
