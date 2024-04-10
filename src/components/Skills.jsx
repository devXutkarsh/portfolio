import React from "react";

const skills = ["HTML", "CSS", "JavaScript", "Tailwind", "React",  "React-router-dom"];

function Skills() {
  return (
    <div className="bg-black h-[70vh]">
      <h1 className="text-center text-4xl pt-24">My Skills</h1>
      <div className="flex flex-wrap w-full justify-center pt-16 items-center">
        {skills.map((skill) => (
          <div
            className="bg-gray-600 text-white  py-2 px-4 rounded-lg text-2xl capitalize mx-4 my-2"
            // prop={skill}
            key={skill}
          >
            {skill}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Skills;
