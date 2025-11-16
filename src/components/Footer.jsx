import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

export default function Footer() {
  const socials = [
    { icon: faGithub, link: "https://github.com/no-c-123" },
    { icon: faLinkedin, link: "https://www.linkedin.com/in/h%C3%A9ctor-emiliano-leal-prieto-b581a92b1/" },
    { icon: faEnvelope, link: "mailto:leal.emiliano.hector@gmail.com" },
  ];

  return (
    <div className="bg-black text-center py-10 border-t border-gray-800">
      <div className="flex justify-center gap-6 mb-4 w-full mx-auto max-w-7xl px-6">
        {socials.map((social, i) => (
          <a
            key={i}
            href={social.link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-purple-500 transition transform hover:scale-110"
          >
            <FontAwesomeIcon icon={social.icon} size="lg" />
          </a>
        ))}
      </div>
      <p className="text-gray-400 text-sm">
        &copy; {new Date().getFullYear()} Hector Leal. Hecho con ❤️
      </p>
    </div>
  );
}