import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { projectDetails } from '../data/projectDetails';

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      title: "Mydilsa Web",
      image: "/Logo.webp",
      link: "https://mydilsa-web.vercel.app",
    },
    {
      title: "Proyecto 2",
      image: "https://picsum.photos/seed/mydilsa/600/400",
      link: "#",
    },
    {
      title: "Proyecto 3",
      image: "https://picsum.photos/seed/mydilsa/600/400",
      link: "#",
    },
  ];

  useEffect(() => {
    document.body.style.overflow = selectedProject ? 'hidden' : '';
    return () => (document.body.style.overflow = '');
  }, [selectedProject]);

  return (
    <section id="Projects" className="min-h-screen bg-[#0d0d0d] text-white py-20 px-6">
      <motion.h2
        className="text-4xl font-bold text-center mb-12"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        Proyectos
      </motion.h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            onClick={() => setSelectedProject(project)}
            layoutId={`card-${project.title}`}
            className="relative overflow-hidden rounded-lg group cursor-pointer"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <motion.img
              layoutId={`image-${project.title}`}
              src={project.image}
              alt={project.title}
              className={`h-96 w-full mx-auto ${
                project.title === "Mydilsa Web"
                  ? "object-contain bg-black p-4"
                  : "object-cover"
              } blur-sm group-hover:blur-none group-hover:scale-105 transition duration-500 rounded-lg`}
            />
            <div className="absolute bottom-0 left-0 right-0 bg-black/60 text-white text-center py-2 opacity-0 group-hover:opacity-100 transition duration-300">
              {project.title}
            </div>
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {selectedProject && (
          <>
            <motion.div
              className="fixed inset-0 backdrop-blur-sm bg-black/40 z-50"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
            />

            <motion.div
              layoutId={`card-${selectedProject.title}`}
              className="fixed top-10 left-1/2 -translate-x-1/2 z-60 bg-[#111] rounded-xl p-6 w-[90vw] max-w-5xl h-[90vh] overflow-y-auto shadow-2xl"
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3 }}
            >
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-6 text-white text-3xl font-bold z-10 cursor-pointer"
              >
                ×
              </button>

              <h3 className="text-3xl font-bold mb-4">{selectedProject.title}</h3>
              <p className="text-gray-300 mb-12">
                Aquí irá tu contenido de tipo línea de tiempo, storytelling, etapas del proyecto, imágenes secundarias, etc.
              </p>

              <div className="relative mt-16">
                <div className="absolute left-1/2 top-0 h-full w-1 bg-purple-600 transform -translate-x-1/2 z-0"></div>

                <div className="space-y-20">
                  {(projectDetails[selectedProject.title] || []).map((step, i) => {
                    const isLeft = i % 2 === 0;
                    return (
                      <motion.div
                        key={i}
                        className={`relative flex flex-col md:flex-row items-center ${
                          isLeft ? "md:justify-start" : "md:justify-end"
                        }`}
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: i * 0.2 }}
                        viewport={{ once: true, amount: 0.6 }}
                      >
                        {!isLeft && <div className="hidden md:block w-1/2" />}
                        <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-purple-600 rounded-full z-10 shadow-md" />
                        <div className="w-full md:w-1/2 px-6 relative z-10 mt-4 md:mt-0">
                          <div className="bg-[#111] border border-purple-600 p-6 rounded-lg shadow-lg">
                            <h4 className="text-xl font-bold text-purple-400 mb-2">{step.title}</h4>
                            <p className="text-gray-300">{step.text}</p>
                          </div>
                        </div>
                        {isLeft && <div className="hidden md:block w-1/2" />}
                      </motion.div>
                    );
                  })}

                  <motion.div className="mt-16 text-center">
                    <a
                      href={selectedProject.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block bg-purple-600 hover:bg-purple-700 text-white font-semibold px-6 py-3 rounded-full transition"
                    >
                      Ver proyecto en vivo
                    </a>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </section>
  );
}
