import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const projects = [
    {
        title: "Smart Placement Portal",
        description:
            "A full-stack placement management system where students can apply for jobs, manage profiles, upload resumes, and track applications. Admins can manage companies, job postings, and student data.",
        tech: ["React", "Node.js", "Express", "MongoDB", "JWT", "AI"],
        github: "https://github.com/Yogeswaran-M/smart-placement-portal",
        live: "https://careerconnect.yoyocorp.online/",
    },
    {
        title: "Election Survey Platform",
        description:
            "A secure online survey platform with duplicate vote prevention, mobile number validation, multilingual support, and an admin dashboard for monitoring responses.",
        tech: ["React", "Node.js", "Express", "MongoDB"],
        github: "https://github.com/Yogeswaran-M/survey-frontend",
        live: "https://survey.yoyocorp.online/",
    },
    {
        title: "AI Browser Automation Agent",
        description:
            "An AI-powered browser automation system that intelligently performs repetitive web tasks such as form filling, data extraction, navigation, and report generation with minimal human intervention.",
        tech: ["React", "Node.js", "Playwright", "MongoDB"],
        github: "#",
        live: "#",
    },
];

function Projects() {
    return (
        <section
            id="projects"
            className="bg-gray-950 text-white py-24 px-6"
        >
            <div className="max-w-7xl mx-auto">

                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-center">
                        Featured <span className="text-cyan-400">Projects</span>
                    </h2>

                    <p className="text-center text-gray-400 mt-5 max-w-2xl mx-auto">
                        Here are a few projects I've worked on to strengthen my
                        full-stack development skills.
                    </p>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">

                        {projects.map((project, index) => (
                            <div
                                key={index}
                                className="bg-black border border-gray-800 rounded-2xl p-6 hover:border-cyan-400 hover:-translate-y-2 transition-all duration-300 flex flex-col h-full"
                            >

                                <h3 className="text-2xl font-bold mb-4">
                                    {project.title}
                                </h3>

                                <p className="text-gray-400 leading-7 mb-6">
                                    {project.description}
                                </p>

                                <div className="flex flex-wrap gap-2 mb-8">
                                    {project.tech.map((item, i) => (
                                        <span
                                            key={i}
                                            className="bg-cyan-500/10 text-cyan-400 px-3 py-1 rounded-full text-sm"
                                        >
                                            {item}
                                        </span>
                                    ))}
                                </div>

                                <div className="flex gap-4 mt-auto">

                                    {project.github === "#" ? (
                                        <span className="px-4 py-2 rounded-lg border border-gray-500 text-gray-400 font-medium">
                                            🔒 Private Repository
                                            
                                        </span>
                                    ) : (
                                        <a
                                            href={project.github}
                                            target="_blank"
                                            rel="noreferrer"
                                            className="flex items-center gap-2 bg-white text-black px-5 py-2 rounded-lg font-medium hover:bg-cyan-400 transition"
                                        >
                                            <FaGithub />
                                            GitHub
                                        </a>
                                    )}

                                    {project.live === "#" ? (
                                        <span className="px-4 py-2 rounded-lg border border-yellow-500 text-yellow-400 font-medium">
                                            🚧 In Progress
                                        </span>
                                    ) : (
                                        <a
                                            href={project.live}
                                            target="_blank"
                                            rel="noreferrer"
                                            className="flex items-center gap-2 border border-cyan-400 px-5 py-2 rounded-lg hover:bg-cyan-400 hover:text-black transition"
                                        >
                                            <FaExternalLinkAlt />
                                            Live
                                        </a>
                                    )}

                                </div>

                            </div>
                        ))}

                    </div>
                </motion.div>

            </div>
        </section>
    );
}

export default Projects;