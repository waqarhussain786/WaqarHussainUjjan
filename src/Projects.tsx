import React from 'react';
import { motion } from 'framer-motion';

// Define the structure for our project data
interface Project {
  id: number;
  title: string;
  description: string;
  tags: string[];
  image: string;
  link: string;
}

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 }
};

const Projects: React.FC = () => {
  const projectData: Project[] = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "A full-stack online store with payment integration and admin dashboard.",
      tags: ["React", "Node.js", "MongoDB"],
      image: "https://via.placeholder.com/400x250",
      link: "#"
    },
    {
      id: 2,
      title: "Portfolio Website",
      description: "A sleek, responsive portfolio built with React and Tailwind CSS.",
      tags: ["React", "Tailwind", "Vite"],
      image: "https://via.placeholder.com/400x250",
      link: "#"
    },
    {
      id: 3,
      title: "Weather Dashboard",
      description: "Real-time weather tracking using OpenWeather API and dynamic icons.",
      tags: ["JavaScript", "API", "CSS"],
      image: "https://via.placeholder.com/400x250",
      link: "#"
    },
    {
      id: 4,
      title: "Task Management App",
      description: "A productivity tool with drag-and-drop features and local storage.",
      tags: ["TypeScript", "React", "Dnd-Kit"],
      image: "https://via.placeholder.com/400x250",
      link: "#"
    },
    {
      id: 5,
      title: "Social Media UI",
      description: "Modern social media interface with dark mode and interactive components.",
      tags: ["Next.js", "Tailwind", "Framer Motion"],
      image: "https://via.placeholder.com/400x250",
      link: "#"
    },
    {
      id: 6,
      title: "AI Image Generator",
      description: "An app that generates images from text prompts using OpenAI API.",
      tags: ["React", "OpenAI", "Node.js"],
      image: "https://via.placeholder.com/400x250",
      link: "#"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            My <span className="text-blue-600">Projects</span>
          </h2>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            A collection of my recent work, ranging from small UI components to full-stack applications.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectData.map((project) => (
            <motion.div 
              key={project.id} 
              className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 border border-gray-100 group"
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              {/* Project Image */}
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-blue-600 opacity-0 group-hover:opacity-10 transition-opacity"></div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span 
                      key={tag} 
                      className="text-xs font-semibold bg-blue-50 text-blue-600 px-2 py-1 rounded-md"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{project.title}</h3>
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                  {project.description}
                </p>
                <a 
                  href={project.link} 
                  className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-800 transition-colors"
                >
                  View Details
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;