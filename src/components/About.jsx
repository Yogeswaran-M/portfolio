import { motion } from "framer-motion";
import { FaGraduationCap, FaLaptopCode, FaCode } from "react-icons/fa";

function About() {
  return (
    <section
      id="about"
      className="bg-gray-950 text-white py-24 px-6"
    >
      <div className="max-w-7xl mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >

          <h2 className="text-4xl md:text-5xl font-bold text-center">
            About <span className="text-cyan-400">Me</span>
          </h2>

          <p className="text-center text-gray-400 mt-5 max-w-3xl mx-auto leading-8">
            I'm a passionate MERN Stack Developer who enjoys building
            responsive, modern and scalable web applications. I love learning
            new technologies and solving real-world problems through clean,
            efficient code.
          </p>

          <div className="grid md:grid-cols-3 gap-8 mt-16">

            <div className="bg-black border border-cyan-500/20 rounded-2xl p-8 hover:border-cyan-400 transition">
              <FaGraduationCap className="text-5xl text-cyan-400 mb-6" />

              <h3 className="text-2xl font-semibold mb-4">
                Education
              </h3>

              <p className="text-gray-400 leading-7">
                B.Tech Graduate with a strong interest in Full Stack Web
                Development and software engineering.
              </p>
            </div>

            <div className="bg-black border border-cyan-500/20 rounded-2xl p-8 hover:border-cyan-400 transition">
              <FaLaptopCode className="text-5xl text-cyan-400 mb-6" />

              <h3 className="text-2xl font-semibold mb-4">
                Development
              </h3>

              <p className="text-gray-400 leading-7">
                Experienced in developing MERN Stack applications using
                React.js, Node.js, Express.js and MongoDB with REST APIs and
                authentication.
              </p>
            </div>

            <div className="bg-black border border-cyan-500/20 rounded-2xl p-8 hover:border-cyan-400 transition">
              <FaCode className="text-5xl text-cyan-400 mb-6" />

              <h3 className="text-2xl font-semibold mb-4">
                Career Goal
              </h3>

              <p className="text-gray-400 leading-7">
                Seeking an opportunity as a MERN Stack Developer where I can
                contribute, learn continuously and build impactful products.
              </p>
            </div>

          </div>

        </motion.div>
      </div>
    </section>
  );
}

export default About;