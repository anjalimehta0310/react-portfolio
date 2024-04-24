import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white about"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <p className="text-xl mt-5">
          I am a web developer with a passion for frontend programming. I am
          excited about improving my skills and learning new technologies. I'm
          open to learning and working with any web technology.
        </p>

        <br />

        <p className="text-xl">
          Certainly! Here's a rephrased version of your message:
          <br />
          <br />
          "I have a strong passion for developing projects from scratch and
          enjoy bringing ideas to fruition. My focus is on creating designs
          that are clean and minimalistic while also ensuring that the branding
          is thoughtful and resonates well with the target audience.
          <br />
          <br />
          Whether it's starting a new project or revamping an existing one, I'm
          dedicated to delivering results that make a lasting impact. I
          specialize in developing unique brand identities and user-friendly
          interfaces that enhance the overall user experience.
          <br />
          <br />
          In addition, I'm experienced in implementing strategies to improve
          search engine rankings and increase engagement on social media
          platforms. My approach to content is strategic and customer-focused,
          ensuring that it effectively communicates your brand's message and
          values. I am a software engineer with experience in building web
          applications, working with APIs."
        </p>
      </div>
    </div>
  );
};

export default About;
