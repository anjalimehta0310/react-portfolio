import React from "react";
import chatbot from "../assets/utlits/chatbot.webp";
import voiceAssistant from "../assets/utlits/voiceAssistant.png"
import musicPlayer from "../assets/utlits/music player.png";
import food from "../assets/utlits/food.png";
import netflixgpt from "../assets/utlits/netflixGpt.png";
import youtubeClone from "../assets/utlits/youtubeClone.png";
import todolist from "../assets/utlits/ToDoList.jpg"

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: chatbot,
      repo: 'https://github.com/anjalimehta0310/college-chatbot.git'
    },
    {
      id: 2,
      src: voiceAssistant,
      repo: 'https://github.com/anjalimehta0310/voice-assistant.git'
    },
    {
      id: 3,
      src: musicPlayer,
      repo: 'https://github.com/anjalimehta0310/music-player-1.git'
    },
    {
      id: 4,
      src: food,
      link: "https://courageous-froyo-7d3119.netlify.app/",
      repo: 'https://github.com/anjalimehta0310/FoodWebsite'
    },
    {
      id: 5,
      src: netflixgpt,
      repo: "https://github.com/anjalimehta0310/netflix-gpt"
    },
    {
      id: 6,
      src: youtubeClone,
      repo: "https://github.com/anjalimehta0310/youtubeClone"
    },
    {
      id: 7,
      src: todolist,
      repo: "https://github.com/anjalimehta0310/to-do-list"
    },
    
  ];

  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white min-h-screen portfolio"
      style={{ minHeight: "calc(100vh - 80px)" }} 
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src, link, repo }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt="projects"
                className="rounded-md duration-200 hover:scale-105"
              />
              <div className="flex items-center justify-center">
                {link && (
                  <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105" onClick={() => window.open(link, '_blank')}>
                    Demo
                  </button>
                )}
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105" onClick={() => window.open(repo, '_blank')}>
                  GitHub
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
