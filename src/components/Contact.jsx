import { motion } from "framer-motion";
import { FaEnvelope, FaGithub, FaLinkedin, FaPhone } from "react-icons/fa";

function Contact() {
    return (
        <section
            id="contact"
            className="bg-black text-white py-24 px-6"
        >
            <div className="max-w-4xl mx-auto">

                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-center">
                        Get In <span className="text-cyan-400">Touch</span>
                    </h2>

                    <p className="text-center text-gray-400 mt-5 mb-12">
                        I'm currently looking for MERN Stack Developer opportunities.
                        Feel free to contact me.
                    </p>

                    <div className="grid md:grid-cols-2 gap-6">

                        <div className="bg-gray-900 rounded-2xl p-6 border border-gray-800">
                            <div className="flex items-center gap-4">
                                <FaEnvelope className="text-cyan-400 text-2xl" />
                                <div>
                                    <p className="text-gray-400 text-sm">Email</p>
                                    <a
                                        href="mailto:yogeswaran@gmail.com"
                                        className="hover:text-cyan-400 transition"
                                    >
                                        yogeswaran@gmail.com
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className="bg-gray-900 rounded-2xl p-6 border border-gray-800">
                            <div className="flex items-center gap-4">
                                <FaPhone className="text-cyan-400 text-2xl" />
                                <div>
                                    <p className="text-gray-400 text-sm">Phone</p>
                                    <a href="tel:+917358056433">
                                        +91 73580 56433
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className="bg-gray-900 rounded-2xl p-6 border border-gray-800">
                            <a
                                href="https://github.com/Yogeswaran-M"
                                target="_blank"
                                rel="noreferrer"
                                className="flex items-center gap-4"
                            >
                                <FaGithub className="text-cyan-400 text-2xl" />
                                <div>
                                    <p className="text-gray-400 text-sm">GitHub</p>
                                    <p>github.com/Yogeswaran-M</p>
                                </div>
                            </a>
                        </div>

                        <div className="bg-gray-900 rounded-2xl p-6 border border-gray-800">
                            <a
                                href="https://www.linkedin.com/in/yogeswaran-mohan-3189a42a2/"
                                target="_blank"
                                rel="noreferrer"
                                className="flex items-center gap-4"
                            >
                                <FaLinkedin className="text-cyan-400 text-2xl" />
                                <div>
                                    <p className="text-gray-400 text-sm">LinkedIn</p>
                                    <p>linkedin.com/in/yogeswaran-M</p>
                                </div>
                            </a>
                        </div>

                    </div>

                </motion.div>

            </div>
        </section>
    );
}

export default Contact;