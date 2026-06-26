import { motion } from "framer-motion";

const skills = [
  "HTML",
  "CSS",
  "JavaScript",
  "React.js",
  "Node.js",
  "Express.js",
  "MongoDB/SQL",
  "Tailwind CSS",
  "Git",
  "GitHub",
  "REST API",
  "Postman",
  "JWT Authentication",
  "Render",
  "Netlify/Vercel",
];

function Skills() {
  return (
    <section
      id="skills"
      className="bg-black py-24 px-6 text-white"
    >
      <div className="max-w-7xl mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >

          <h2 className="text-4xl md:text-5xl font-bold text-center">
            My <span className="text-cyan-400">Skills</span>
          </h2>

          <p className="text-center text-gray-400 mt-5 max-w-2xl mx-auto">
            These are the technologies I use to build responsive,
            scalable and modern full-stack web applications.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-5 mt-14">

            {skills.map((skill) => (
              <div
                key={skill}
                className="bg-gray-900 border border-gray-800 hover:border-cyan-400 rounded-xl py-5 text-center font-semibold transition duration-300 hover:-translate-y-1"
              >
                {skill}
              </div>
            ))}

          </div>

        </motion.div>

      </div>
    </section>
  );
}

export default Skills;