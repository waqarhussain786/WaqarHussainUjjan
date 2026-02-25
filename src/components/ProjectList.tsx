import { useEffect, useState } from 'react';

// Define the shape of our project data
interface Project {
  _id: string;
  title: string;
  description: string;
  techStack: string[];
}

const ProjectList = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Function to fetch data from your Node.js backend
    const fetchProjects = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/projects');
        const data = await response.json();
        setProjects(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching projects:", error);
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  if (loading) return <p>Loading projects...</p>;

  return (
    <div className="project-container">
      <h1>My Projects</h1>
      {projects.length === 0 ? (
        <p>No projects found. Add some from the backend!</p>
      ) : (
        <div className="project-grid">
          {projects.map((project) => (
            <div key={project._id} className="project-card" style={{ border: '1px solid #ccc', margin: '10px', padding: '10px' }}>
              <h2>{project.title}</h2>
              <p>{project.description}</p>
              <div>
                {project.techStack.map((tech, index) => (
                  <span key={index} style={{ background: '#eee', padding: '2px 5px', marginRight: '5px', borderRadius: '4px' }}>
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ProjectList;