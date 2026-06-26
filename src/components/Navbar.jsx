import { useState } from "react";
import { FaGithub, FaLinkedin, FaBars, FaTimes } from "react-icons/fa";

function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);
    return (
        <nav className="fixed top-0 left-0 w-full bg-black/80 backdrop-blur-md border-b border-cyan-500/20 z-50">
            <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">

                {/* Logo */}
                <h1 className="text-2xl font-bold text-cyan-400 tracking-wide">
                     <span className="text-white">Yoges</span>waran
                </h1>

                {/* Menu */}
                <ul className="hidden md:flex items-center gap-8 text-gray-300 font-medium">
                    <li>
                        <a href="#home" className="hover:text-cyan-400 transition">
                            Home
                        </a>
                    </li>

                    <li>
                        <a href="#about" className="hover:text-cyan-400 transition">
                            About
                        </a>
                    </li>

                    <li>
                        <a href="#skills" className="hover:text-cyan-400 transition">
                            Skills
                        </a>
                    </li>

                    <li>
                        <a href="#projects" className="hover:text-cyan-400 transition">
                            Projects
                        </a>
                    </li>

                    <li>
                        <a href="#contact" className="hover:text-cyan-400 transition">
                            Contact
                        </a>
                    </li>
                </ul>

                {/* Right Side */}
                <div className="flex items-center">

                    {/* Desktop */}

                    <div className="hidden md:flex items-center gap-4">

                        <a
                            href="YOUR_GITHUB_URL"
                            target="_blank"
                            rel="noreferrer"
                            className="text-2xl hover:text-cyan-400"
                        >
                            <FaGithub />
                        </a>

                        <a
                            href="YOUR_LINKEDIN_URL"
                            target="_blank"
                            rel="noreferrer"
                            className="text-2xl hover:text-cyan-400"
                        >
                            <FaLinkedin />
                        </a>

                        <a
                            href="#contact"
                            className="hidden md:block bg-cyan-500 hover:bg-cyan-400 text-black px-5 py-2 rounded-full font-semibold transition"
                        >
                            Hire Me
                        </a>

                    </div>

                    {/* Mobile */}

                    <button
                        className="md:hidden text-2xl"
                        onClick={() => setMenuOpen(!menuOpen)}
                    >
                        {menuOpen ? <FaTimes /> : <FaBars />}
                    </button>

                </div>

            </div>
            {menuOpen && (
                <div className="md:hidden bg-black text-white px-6 py-4 flex flex-col gap-5">

                    <a className="block text-lg hover:text-cyan-400 transition" href="#home" onClick={() => setMenuOpen(false)}>Home</a>

                    <a className="block text-lg hover:text-cyan-400 transition" href="#about" onClick={() => setMenuOpen(false)}>About</a>

                    <a className="block text-lg hover:text-cyan-400 transition" href="#skills" onClick={() => setMenuOpen(false)}>Skills</a>

                    <a className="block text-lg hover:text-cyan-400 transition" href="#projects" onClick={() => setMenuOpen(false)}>Projects</a>

                    <a className="block text-lg hover:text-cyan-400 transition" href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>

                </div>
            )}
        </nav>
    );
}

export default Navbar;