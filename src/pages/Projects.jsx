import { useState } from "react";

function Projects() {

  const [selectedProject, setSelectedProject] = useState(null);
  const [currentImage, setCurrentImage] = useState(0);

  const projects = [
  {
    id: 1,
    title: "AI Portfolio Assistant",
    description: "Personal AI chatbot powered by Ollama and Phi3.",
    tech: "React, Node.js, Ollama",
    details: "This project runs a local AI assistant that answers questions about my portfolio.",
    images: [
      "./src/assets/japan1.webp",
      "./src/assets/covid2.webp"
    ],
    github: "https://github.com/yourname/project",
    demo: "https://demo.com"
  },
    {
    id: 2,
    title: "Web App Portfolio",
    description: "Personal AI chatbot powered by Ollama and Phi3.",
    tech: "React, Node.js, Ollama",
    details: "This project runs a local AI assistant that answers questions about my portfolio.",
    images: [
      "./src/assets/japan1.webp",
      "./src/assets/covid2.webp"
    ],
    github: "https://github.com/yourname/project",
    demo: "https://demo.com"
  },
  ];

return (
  <div className="projects-container">

    <h1>My Projects</h1>

    {projects.map((project) => (
      <div
        key={project.id}
        className="project-card"
        onClick={() => {setSelectedProject(project);setCurrentImage(0);          
        }}
      >

    <img
      src={project.images?.[0]}
      alt={project.title}
    />

      <div className="project-info">
        <h3>{project.title}</h3>
          <p>{project.description}</p>
        </div>
      </div>
    ))}

    {/* Modal */}
    {selectedProject && (
      <div className="project-modal"
       onClick={() => setSelectedProject(null)}
      >
        <div className="modal-content"
        onClick={(e) => e.stopPropagation()}
        >

      <div className="slideshow">

        <button
          className="slide-btn"
          onClick={() =>
            setCurrentImage(
              (currentImage - 1 + selectedProject.images.length) %
              selectedProject.images.length
            )
          }
        >
          ◀
        </button>

        <img
          src={selectedProject.images?.[currentImage]}
          alt={selectedProject.title}
        />

        <button
          className="slide-btn"
          onClick={() =>
            setCurrentImage(
              (currentImage + 1) %
              selectedProject.images.length
            )
          }
        >
          ▶
        </button>

      </div>

      <h2>{selectedProject.title}</h2>

      <p>{selectedProject.description}</p>

      <p className="project-tech">
        <strong>Tech:</strong> {selectedProject.tech}
      </p>

      <p className="project-details">
        {selectedProject.details}
      </p>

          <div className="modal-buttons">
            <button>Live Demo</button>
            <button>GitHub</button>
          </div>

          <button
            className="close-btn"
            onClick={() => setSelectedProject(null)}
          >
            ✕
          </button>

        </div>
      </div>
    )}

  </div>
);
}

export default Projects;