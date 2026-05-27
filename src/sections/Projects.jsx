import React, { useState, useEffect } from 'react';
import {
  Search,
  Github,
  ExternalLink,
  ArrowUpRight,
  FolderGit2
} from 'lucide-react';

import Modal from '../components/Modal';

export default function Projects() {
  const [projects, setProjects] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedTag, setSelectedTag] = useState('All');
  const [loading, setLoading] = useState(true);
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/projects');
        if (!response.ok) throw new Error('API fetch failed');

        const data = await response.json();
        setProjects(data);
      } catch (err) {
        console.warn('API failed, using fallback data');

        setProjects([
          {
            _id: "hms1",
            title: "Hospital Management System",
            description:
              "A system for managing patients, doctors, appointments, and hospital records.",
            longDescription:
              "Built using C++/JavaScript with role-based access control.",
            image: "/hospital.png",
            tags: ["C++", "Data Structures", "OOP"],
            githubLink:
              "https://github.com/chale21/hospital-management-system",
            liveLink: "",
            featured: true,
            order: 1
          },
          {
            _id: "stm1",
            title: "Staff Transport Management System",
            description:
              "Manages transport schedules, routes, and vehicles.",
            longDescription:
              "Scheduling system for staff transport optimization.",
            image: "/Transport.png",
            tags: ["React", "Node.js", "MongoDB"],
            githubLink:
              "https://github.com/chale21/TransportFrontend.git",
            liveLink: "",
            featured: true,
            order: 2
          },
          {
            _id: "lsm1",
            title: "Local Service Management System",
            description:
              "Connects users with local service providers.",
            longDescription:
              "Platform for booking local services.",
            image: "/service.png",
            tags: ["React", "Express", "MongoDB"],
            githubLink:
              "https://github.com/chale21/local-service-system",
            liveLink: "",
            featured: false,
            order: 3
          }
        ]);
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  // Unique tags
  const allTags = [
    'All',
    ...new Set(projects.flatMap(p => p.tags || []))
  ];

  // FIXED FILTER LOGIC
  const filteredProjects = projects.filter(project => {
    const search = searchTerm.toLowerCase().trim();

    const matchesSearch =
      search === '' ||
      project.title?.toLowerCase().includes(search) ||
      project.description?.toLowerCase().includes(search) ||
      project.tags?.some(tag =>
        tag.toLowerCase().includes(search)
      );

    const matchesTag =
      selectedTag === 'All' ||
      project.tags?.some(
        tag => tag.toLowerCase() === selectedTag.toLowerCase()
      );

    return matchesSearch && matchesTag;
  });

  const handleOpenDetails = project => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  return (
    <section
      id="projects"
      className="py-24 px-6 md:px-12 bg-slate-50/50 dark:bg-slate-900/40"
    >
      <div className="max-w-6xl mx-auto space-y-16">

        {/* Heading */}
        <div className="text-center space-y-3">
          <h2 className="text-4xl font-bold text-white">
            Featured Projects
          </h2>
          <p className="text-gray-400">
            Explore my real-world systems and applications
          </p>
        </div>

        {/* Search + Filter */}
        <div className="flex flex-col md:flex-row gap-4 justify-between">

          <div className="relative w-full md:w-80">
            <Search className="absolute left-3 top-3 text-gray-400" />
            <input
              value={searchTerm}
              onChange={e => setSearchTerm(e.target.value)}
              placeholder="Search projects..."
              className="w-full pl-10 p-3 rounded-lg bg-gray-900 text-white"
            />
          </div>

          <div className="flex gap-2 flex-wrap">
            {allTags.map(tag => (
              <button
                key={tag}
                onClick={() => setSelectedTag(tag)}
                className={`px-3 py-1 rounded-full text-sm ${
                  selectedTag === tag
                    ? 'bg-cyan-500 text-black'
                    : 'bg-gray-800 text-white'
                }`}
              >
                {tag}
              </button>
            ))}
          </div>
        </div>

        {/* Loading */}
        {loading ? (
          <div className="text-center text-gray-400">
            Loading...
          </div>
        ) : filteredProjects.length === 0 ? (
          <div className="text-center text-gray-400">
            No projects found
          </div>
        ) : (
          /* Projects Grid */
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map(project => (
              <div
                key={project._id}
                className="bg-gray-900 rounded-xl overflow-hidden shadow-lg"
              >
                <img
                  src={
                    project.image ||
                    'https://via.placeholder.com/400'
                  }
                  className="h-40 w-full object-cover"
                />

                <div className="p-4 space-y-3">
                  <h3 className="text-white font-bold text-lg">
                    {project.title}
                  </h3>

                  <p className="text-gray-400 text-sm">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {project.tags?.map((tag, i) => (
                      <span
                        key={i}
                        className="text-xs bg-gray-800 px-2 py-1 rounded"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex justify-between pt-3">
                    <a
                      href={project.githubLink}
                      className="text-cyan-400 text-sm"
                      target="_blank"
                    >
                      GitHub
                    </a>

                    <button
                      onClick={() =>
                        handleOpenDetails(project)
                      }
                      className="text-white text-sm"
                    >
                      Details
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Modal */}
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        data={selectedProject}
      />
    </section>
  );
}