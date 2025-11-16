import { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import '../styles/global.css';

export default function NavigationBar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('Inicio');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Inicio', to: 'Inicio' },
    { name: 'Acerca de', to: 'About' },
    { name: 'Proyectos', to: 'Projects' },
    { name: 'Contacto', to: 'Contact' },
  ];

  return (
    <header className={`fixed top-0 left-0 w-full h-[10vh] z-50 transition-all duration-300 ${
      isScrolled ? 'bg-black/80 backdrop-blur-md shadow-lg' : 'bg-black/30 backdrop-blur-sm shadow-md'
    }`}>
      <nav className="w-full h-full max-w-7xl mx-auto px-6 flex justify-between items-center">
        <h1 className="text-white font-bold text-xl tracking-widest cursor-pointer hover:text-purple-400 transition">
          Hector Leal
        </h1>
        <div className="flex gap-4">
          {navLinks.map((link, index) => (
            <Link
              key={index}
              to={link.to}
              smooth={true}
              duration={600}
              offset={-80}
              spy={true}
              activeClass="bg-purple-600 hover:bg-purple-700"
              onSetActive={() => setActiveSection(link.to)}
              className="cursor-pointer relative inline-flex items-center gap-2 text-white font-medium px-4 py-2 rounded-full bg-zinc-800 hover:bg-purple-700 transition duration-300"
            >
              {link.name}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
}