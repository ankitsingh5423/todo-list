import React from "react";
import { Link } from "react-router-dom";

const projects = [
  {
    id: 1,
    image: "https://www.patterns.dev/img/reactjs/react-logo@3x.svg", // Replace with your image URL
    title: "Project 1",
    description: "This is a brief description of Project 1.",
    link: "/todos",
  },
  {
    id: 2,
    image: "https://www.patterns.dev/img/reactjs/react-logo@3x.svg", // Replace with your image URL
    title: "Project 2",
    description: "This is a brief description of Project 2.",
    link: "https://your-project-2.vercel.app",
  },
  {
    id: 3,
    image: "https://www.patterns.dev/img/reactjs/react-logo@3x.svg", // Replace with your image URL
    title: "Project 3",
    description: "This is a brief description of Project 3.",
    link: "https://your-project-3.vercel.app",
  },
];

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 flex flex-col items-center justify-center p-6">
      <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
        My Projects
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {projects.map((project) => (
          <div
            key={project.id}
            className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-lg text-center"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-40 object-cover rounded-md"
            />
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white mt-4">
              {project.title}
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mt-2">
              {project.description}
            </p>
            <Link
              to={project.link}
              rel="noopener noreferrer"
              className="inline-block bg-blue-500 text-white px-4 py-2 mt-4 rounded-lg hover:bg-blue-600"
            >
              View Project
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
