import React from "react";
// import ProjectCard from "./ProjectCard";

function Project() {
  const projects = [
    {name: "Whatshap-ui",
     dis:"this is project based on react it is ui clone",
     tech1:"react js" ,
     tech2:"router-dom" ,
     tech3:"Tailwind",
     url:"https://whatshapp-ui.netlify.app",
     codeLink:"link"
  },
    {name: "Dynamic animated website",
     dis:"this is project based on HTML CSS JAVASCRIPT ",
     tech1:"html" ,
     tech2:"css" ,
     tech3:"javascript" ,
     url:"https://work-studios.netlify.app",
     codeLink:"link"
  },
    {name: "Modern Website",
     dis:"this is project based on react it is ui clone",
     tech1:"html" ,
     tech2:"css" ,
     tech3:"javascript" ,
     url:"https://dixitorigin.netlify.app",
     codeLink:"link"
  },
  ];
  return (
    <div className="bg-black ">
      <h1 className="text-center text-4xl">My Project</h1>
      {projects.map((project) => (
        <div
          className="bg-gray-800 rounded-xl h-[30%] mx-3 my-9 p-2 capitalize"
          key={project}
          props={project}
        >
          <h1 className="text-2xl">{project.name}</h1>

          <p className="text-gray-400 pt-2">
           {project.dis}
          </p>
          <div className="flex gap-2 m-2">
            <p className="bg-gray-600 px-4 py-[2px] rounded-lg">{project.tech1}</p>
            <p className="bg-gray-600 px-4 py-[2px] rounded-lg">{project.tech2}</p>
            <p className="bg-gray-600 px-4 py-[2px] rounded-lg">{project.tech3}</p>
          </div>
          <div className="flex justify-between mt-10 ">
            <h1 className="py-2 px-9 rounded-full bg-white text-black">
              <a href={project.url}>'A' Live</a>
            </h1>
            <h1 className="py-2 px-9 rounded-full bg-gray-500 text-white">
              GitHub
            </h1>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Project;
