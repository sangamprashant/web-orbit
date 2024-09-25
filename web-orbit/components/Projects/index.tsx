import { FaExternalLinkAlt } from 'react-icons/fa';
import { Title } from '../Reuse';

const projects = [
  {
    id: 1,
    image: 'https://via.placeholder.com/300',
    technologies: [
      'React', 'Node.js', 'MongoDB', 'Python', 'Flask', 'PostgreSQL',
      'Capacitor', 'Electron', 'Next.js', 'Laravel', 'PHP', 'Vue',
      'Angular', 'Docker', 'GraphQL', 'TypeScript', 'Ruby', 'Swift', 'Java'
    ],
    description: 'A comprehensive project showcasing a variety of technologies used across different stacks.',
    link: 'https://example.com/project1',
  },
  {
    id: 2,
    image: 'https://via.placeholder.com/300',
    technologies: ['React', 'Node.js', 'MongoDB'],
    description: 'A full-stack application using React for the frontend and Node.js for the backend with MongoDB as the database.',
    link: 'https://example.com/project2',
  },
  {
    id: 2,
    image: 'https://via.placeholder.com/300',
    technologies: ['React', 'Node.js', 'MongoDB'],
    description: 'A full-stack application using React for the frontend and Node.js for the backend with MongoDB as the database.',
    link: 'https://example.com/project2',
  },
  {
    id: 2,
    image: 'https://via.placeholder.com/300',
    technologies: ['React', 'Node.js', 'MongoDB'],
    description: 'A full-stack application using React for the frontend and Node.js for the backend with MongoDB as the database.',
    link: 'https://example.com/project2',
  },
  {
    id: 2,
    image: 'https://via.placeholder.com/300',
    technologies: ['React', 'Node.js', 'MongoDB'],
    description: 'A full-stack application using React for the frontend and Node.js for the backend with MongoDB as the database.',
    link: 'https://example.com/project2',
  },
  {
    id: 2,
    image: 'https://via.placeholder.com/300',
    technologies: ['React', 'Node.js', 'MongoDB'],
    description: 'A full-stack application using React for the frontend and Node.js for the backend with MongoDB as the database.',
    link: 'https://example.com/project2',
  },
  // Additional project objects...
];

const techColors: any = {
  React: 'bg-blue-600',
  'Node.js': 'bg-green-600',
  MongoDB: 'bg-green-800',
  Python: 'bg-blue-400',
  Flask: 'bg-red-600',
  PostgreSQL: 'bg-blue-700',
  Capacitor: 'bg-purple-600',
  Electron: 'bg-gray-950',
  'Next.js': 'bg-gray-900',
  Laravel: 'bg-red-700',
  PHP: 'bg-purple-500',
  Vue: 'bg-green-400',
  Angular: 'bg-red-500',
  Docker: 'bg-blue-500',
  GraphQL: 'bg-pink-500',
  TypeScript: 'bg-blue-600',
  Ruby: 'bg-red-600',
  Swift: 'bg-orange-500',
  Java: 'bg-yellow-500',
};

const ProjectsSection = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-6">
        {/* Section Title */}
        <div className="text-center mb-12">
          <Title first="OUR INNOVATIVE" grad="PROJECTS" />
          <p className="text-lg text-gray-400">
            Explore a selection of our cutting-edge projects that leverage various technologies to deliver powerful solutions. Click on the links to learn more about each project and see the technologies we used to build them.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="glass-effect bg-gray-200 bg-opacity-40 backdrop-blur-md p-6 rounded-lg shadow-sm transition-transform transform hover:scale-105 hover:shadow-xl"
            >
              <img
                src={project.image}
                alt={`Project ${project.id}`}
                className="w-full h-56 object-cover rounded-md mb-4"
              />
              <div className="p-4">
                <h3 className="text-2xl font-semibold text-indigo-900 mb-3">Technologies Used</h3>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium text-gray-200 ${techColors[tech] || 'bg-gray-500'}`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <p className="text-indigo-800 mb-4">{project.description}</p>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-blue-900 hover:text-blue-950"
                >
                  <FaExternalLinkAlt className="mr-2" />
                  <span>Visit Project</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
