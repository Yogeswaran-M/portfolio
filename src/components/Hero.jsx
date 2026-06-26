import { FaGithub, FaLinkedin, FaDownload } from "react-icons/fa";
import { motion } from "framer-motion";

function Hero() {
    return (
        <section
            id="home"
            className="min-h-screen flex items-center justify-center bg-gradient-to-b from-black via-gray-950 to-black px-6 pt-24 md:pt-16"
        >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

                {/* Left Side */}
                <motion.div
                    initial={{ opacity: 0, x: -60 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <p className="text-cyan-400 text-lg mb-3">
                        👋 Hello, I'm
                    </p>

                    <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight">
                        Yogeswaran
                        <span className="text-cyan-400"> M</span>
                    </h1>

                    <h2 className="text-2xl md:text-3xl text-gray-300 mt-5 font-semibold">
                        MERN Stack Developer
                    </h2>

                    <p className="text-gray-400 mt-6 leading-8 max-w-xl">
                        Passionate Full Stack Developer specializing in React, Node.js,
                        Express.js and MongoDB. I enjoy building responsive web
                        applications with clean UI and scalable backend solutions.
                    </p>

                    <div className="flex flex-wrap gap-4 mt-8">

                        <a
                            href="#projects"
                            className="bg-cyan-500 hover:bg-cyan-400 text-black px-7 py-3 rounded-full font-bold transition"
                        >
                            View Projects
                        </a>

                        <a
                            href="/Yogeswaran_Resume_Update.pdf"
                            className="border border-cyan-400 hover:bg-cyan-500 hover:text-black px-7 py-3 rounded-full flex items-center gap-2 transition"
                        >
                            <FaDownload />
                            Resume
                        </a>

                    </div>

                    <div className="flex gap-6 mt-10 text-3xl">

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
                </motion.div>

                {/* Right Side */}
                <motion.div
                    initial={{ opacity: 0, x: 60 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1 }}
                    className="flex justify-center"
                >
                    <div className="relative">

                        <div className="absolute inset-0 rounded-full bg-cyan-500 blur-3xl opacity-30"></div>

                        <img
                            src="/profile2.jpeg"
                            alt="Profile"
                            className="relative w-80 h-80 md:w-[420px] md:h-[420px] rounded-full object-cover border-4 border-cyan-400 shadow-[0_0_40px_#06b6d4]"
                        />

                    </div>
                </motion.div>

            </div>
        </section>
    );
}

export default Hero;