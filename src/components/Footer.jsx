import { FaGithub, FaLinkedin, FaHeart } from "react-icons/fa";

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-gray-950 border-t border-gray-800 py-10 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">

        {/* Left */}
        <div>
          <h2 className="text-2xl font-bold text-cyan-400">
            Yogeswaran M
          </h2>

          <p className="text-gray-400 mt-2">
            MERN Stack Developer
          </p>
        </div>

        {/* Center */}
        <div className="flex gap-6 text-gray-300">
          <a href="#home" className="hover:text-cyan-400 transition">
            Home
          </a>

          <a href="#about" className="hover:text-cyan-400 transition">
            About
          </a>

          <a href="#skills" className="hover:text-cyan-400 transition">
            Skills
          </a>

          <a href="#projects" className="hover:text-cyan-400 transition">
            Projects
          </a>

          <a href="#contact" className="hover:text-cyan-400 transition">
            Contact
          </a>
        </div>

        {/* Right */}
        <div className="flex gap-5 text-2xl">
          <a
            href="https://github.com/Yogeswaran-M"
            target="_blank"
            rel="noreferrer"
            className="hover:text-cyan-400 transition"
          >
            <FaGithub />
          </a>

          <a
            href="https://www.linkedin.com/in/yogeswaran-mohan-3189a42a2/"
            target="_blank"
            rel="noreferrer"
            className="hover:text-cyan-400 transition"
          >
            <FaLinkedin />
          </a>
        </div>

      </div>

      <div className="border-t border-gray-800 mt-8 pt-6 text-center text-gray-400 text-sm">
        <p className="flex items-center justify-center gap-2">
          © {year} Yogeswaran M. Made with
          <FaHeart className="text-red-500" />
          using React & Tailwind CSS.
        </p>
      </div>
    </footer>
  );
}

export default Footer;