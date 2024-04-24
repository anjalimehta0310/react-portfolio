import React from "react";
import { Link } from "react-scroll";
import intern1 from "../assets/utlits/intern1.jpg";
import intern2 from "../assets/utlits/intern2.avif";

const Internship = () => {
  const Internship = [
    {
      id: 1,
      src: intern1,
      repo: 'https://github.com/anjalimehta0310/OAsis-Infobyte-projects'
    },
    {
      id: 2,
      src: intern2,
      repo: 'https://drive.google.com/file/d/1ZTb0deifJMzWt7Dgnm8YjrMeOfoqdPlm/view?usp=sharing'
    },
  ];

  return (
    <div id="Internship" className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen portfolio">
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">Internships</p>
          <p className="py-6">Here are some Internship that I  had done in Virtual Mode:</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {Internship.map(({ id, src, repo }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img src={src} alt="projects" className="rounded-md duration-200 hover:scale-105" />
              <div className="flex items-center justify-center">
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105" onClick={() => window.open(repo, '_blank')}>
                  certificates/GitHub
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Internship;
