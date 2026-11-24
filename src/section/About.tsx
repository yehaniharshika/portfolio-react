import { motion } from "framer-motion";
import { GoDash } from "react-icons/go";
import { AnimatedCounter } from "../components/AnimatedCounter";

export const About = () => {
  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-800 w-full">
      <div className="container mx-auto px-4 md:px-0">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h2
            className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-900 dark:text-white text-uppercase"
            style={{ fontFamily: "Montserrat, sans-serif" }}
            data-aos="fade-left"
          >
            ABOUT{" "}
            <span
              style={{ fontFamily: "Montserrat, sans-serif", color: "#00cec9" }}
            >
              ME
            </span>
          </h2>
        </motion.div>
        <motion.div
          className="max-w-4xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          <motion.div
            className="bg-transparent p-6 rounded-lg border border-gray-200 mb-6 max-w-4xl mx-auto hover:border-4 hover:border-[#00cec9] shadow-2xl hover:shadow-[#00cec9]/50"
            whileHover={{
              scale: 1.03,
              boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.2)",
              transition: { duration: 0.3 },
            }}
            whileTap={{
              scale: 0.98,
            }}
          >
            <p
              className="text-gray-600 dark:text-gray-300 mb-6"
              style={{ fontFamily: "Montserrat, sans-serif" }}
            >
              Hello! I'm <strong>Yehani Harshika</strong>, a passionate web and
              software developer with a strong foundation in frontend and
              backend technologies.
            </p>

            <p
              className="text-gray-600 dark:text-gray-300 mb-6"
              style={{ fontFamily: "Montserrat, sans-serif" }}
            >
              I have successfully completed a{" "}
              <strong>BSc (Hons) in Computer Science</strong> with{" "}
              <strong>First Class Honours</strong> at the{" "}
              <strong>University of Bedfordshire (SLIIT City Uni)</strong>.
            </p>

            <p
              className="text-gray-600 dark:text-gray-300 mb-6"
              style={{ fontFamily: "Montserrat, sans-serif" }}
            >
              I'm currently studying <strong>cloud computing</strong> and{" "}
              <strong>data analysis</strong>, and I hope to craft efficient,
              scalable solutions that cater to both user expectations and
              business objectives.
            </p>
          </motion.div>

          <motion.div
            className="mt-10 flex justify-center items-center gap-6 flex-wrap"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <motion.div className="text-center" whileHover={{ scale: 1.1 }}>
              <AnimatedCounter end={1} duration={0.5} suffix="+" />
              <div
                className="text-gray-600 dark:text-gray-300"
                style={{
                  fontFamily: "Montserrat, sans-serif",
                  fontWeight: "700",
                }}
              >
                YEARS OF EXPERIENCE
              </div>
            </motion.div>

            <GoDash className="text-gray-400 text-8xl rotate-90 hidden md:block" />

            <motion.div className="text-center" whileHover={{ scale: 1.1 }}>
              <AnimatedCounter end={30} duration={2.5} suffix="+" />
              <div
                className="text-gray-600 dark:text-gray-300"
                style={{
                  fontFamily: "Montserrat, sans-serif",
                  fontWeight: "700",
                }}
              >
                PROJECTS COMPLETED
              </div>
            </motion.div>

            <GoDash className="text-gray-400 text-8xl rotate-90 hidden md:block" />

            <motion.div className="text-center" whileHover={{ scale: 1.1 }}>
              <AnimatedCounter end={10} duration={2} suffix="+" />
              <div
                className="text-gray-600 dark:text-gray-300"
                style={{
                  fontFamily: "Montserrat, sans-serif",
                  fontWeight: "700",
                }}
              >
                CERTIFICATES
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
