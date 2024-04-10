import React from "react";

function About() {
  return (
    <div className="  h-full bg-black ">
      <h1 className="text-4xl text-center h-[20%] pt-32  ">About Me</h1>
      <div className="flex flex-col gap-3 mt-10 text-center items-center px-2 ">
        <p className="text-center">
          Hey there! My name is Utkarsh and I am currently a final year student
          with a huge interest in web development. I have always been drawn to
          the world of coding and I am constantly looking for ways to challenge
          myself and improve my skills. My experience in web development
          includes working with Javascript, React, NextJS, and Node.js to build
          user-friendly and efficient web applications. I am particularly
          skilled in the MERN stack and have a strong understanding of its
          components.{" "}
        </p>

        <p>
          {" "}
          Apart from working on personal projects, I also love contributing to
          open source projects and collaborating with other developers. I am
          always on the lookout for new opportunities to learn and grow as a
          developer. Whether it's through challenging projects, workshops, or
          courses, I am always eager to expand my knowledge and skills.{" "}
        </p>

        <p>
          If you're interested in working together or just want to chat about
          all things web development, feel free to connect with me.
        </p>
      </div>
    </div>
  );
}

export default About;
