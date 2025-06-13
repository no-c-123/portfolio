import { motion } from "framer-motion";

export default function About() {
  const techStack = [
    { name: "React", logo: "/logos/react.svg" },
    { name: "Astro", logo: "/logos/astro.svg" },
    { name: "Tailwind", logo: "/logos/tailwind.svg" },
    { name: "Supabase", logo: "/logos/supabase.png" },
    { name: "Framer Motion", logo: "/logos/framer.png" },
    { name: "JavaScript", logo: "/logos/js.svg" },
    { name: "HTML", logo: "/logos/html.svg" },
    { name: "CSS", logo: "/logos/css.svg" },
  ];

  const socials = [
    { name: "GitHub", link: "https://github.com/no-c-123", logo: "/logos/github.svg" },
    { name: "LinkedIn", link: "https://www.linkedin.com/in/h%C3%A9ctor-emiliano-leal-prieto-b581a92b1/", logo: "/logos/linkedin.svg" },
    { name: "Email", link: "mailto:leal.emiliano.hector@gmail.com", logo: "/logos/gmail.svg" },
  ];

  return (
    <section id="About" className="bg-[#0d0d0d] text-white py-20 px-6 min-h-screen">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-bold mb-12">Tecnologías que utilizo</h2>

        {/* Looping Carousel */}
        <div className="overflow-hidden relative w-full">
          <motion.div
            className="flex gap-8 min-w-max"
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              repeat: Infinity,
              duration: 20,
              ease: "linear",
            }}
          >
            {[...techStack, ...techStack].map((tech, i) => (
              <div
                key={i}
                className="flex-shrink-0 w-32 h-32 flex flex-col items-center justify-center bg-[#111] border border-gray-700 rounded-xl shadow-lg"
              >
                <img src={tech.logo} alt={tech.name} className="h-10 w-10 mb-2" />
                <p className="text-sm text-gray-300">{tech.name}</p>
              </div>
            ))}
          </motion.div>
        </div>

        <h3 className="text-2xl font-semibold mt-16 mb-6">Conecta conmigo</h3>
        <div className="flex justify-center gap-8">
          {socials.map((social, i) => (
            <a
              key={i}
              href={social.link}
              target="_blank"
              rel="noopener noreferrer"
              className="opacity-80 hover:opacity-100 transition transform hover:scale-125"
            >
              <img src={social.logo} alt={social.name} className="h-6" />
            </a>
          ))}
        </div>

        <p className="text-gray-400 mt-12 italic max-w-xl mx-auto">
          "Me apasiona crear interfaces limpias, rápidas y funcionales que no solo se ven bien, sino que también funcionan con precisión."
        </p>
      </div>
    </section>
  );
}
