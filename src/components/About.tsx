import { motion } from "framer-motion";
import {GoDash} from "react-icons/go";

export const About = () => {
    return (
        <section id="about" className="py-20 bg-white dark:bg-gray-800 w-full">
            <div className="container mx-auto px-4 md:px-6">
                <motion.div
                    className="text-center mb-12"
                    initial={{opacity: 0, y: 50}}
                    animate={{opacity: 1, y: 0}}
                    transition={{duration: 0.8, ease: "easeOut"}}
                >
                    <h2 className="text-4xl font-bold text-gray-900 dark:text-white"
                        style={{fontFamily: 'Montserrat, sans-serif'}}>
                        About <span style={{fontFamily: 'Montserrat, sans-serif', color: "#00cec9"}}>Me</span>
                    </h2>
                </motion.div>
                <motion.div
                    className="max-w-4xl mx-auto"
                    initial={{opacity: 0}}
                    animate={{opacity: 1}}
                    transition={{duration: 1, delay: 0.3}}
                >

                    <motion.div
                        className="bg-transparent p-6 rounded-lg shadow-lg border border-gray-200 mb-6 max-w-4xl mx-auto hover:border-4 hover:border-[#00cec9]"
                        whileHover={{
                            scale: 1.03,
                            boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.2)",
                            transition: {duration: 0.3}
                        }}
                        whileTap={{
                            scale: 0.98
                        }}
                    >
                        <p className="text-lg text-gray-600 dark:text-gray-300 mb-6"
                           style={{fontFamily: "Montserrat, sans-serif"}}>
                            Hello! I'm <strong>Yehani Harshika</strong>, a passionate web and software developer with a
                            strong foundation in modern technologies. Currently, I'm pursuing a <strong>Graduate Diploma
                            in
                            Software Engineering (GDSE)</strong> at the <strong>Institute of Java Software
                            Engineering</strong> and a <strong>BSc (Hons) in Computer Science</strong> at the <strong>University
                            of Bolton</strong>.
                        </p>

                        <p className="text-lg text-gray-600 dark:text-gray-300 mb-6"
                           style={{fontFamily: "Montserrat, sans-serif"}}>
                            My passion for technology began with an insatiable curiosity about how software operates.
                            Over time, I have sharpened my expertise in full-stack development, cloud computing, and
                            cutting-edge technologies, allowing me to craft efficient, scalable solutions that cater to
                            both user expectations and
                            business objectives.
                        </p>

                        <p className="text-lg text-gray-600 dark:text-gray-300 mb-6"
                           style={{fontFamily: "Montserrat, sans-serif"}}>
                            When I’m not coding, I enjoy exploring the latest tech trends, travelling,
                            unwinding with Netflix, and spending quality time with friends. These moments of leisure
                            keep me inspired
                            and bring fresh perspectives to my work. I thrive on continuous learning, innovation, and
                            pushing the boundaries of technology.
                        </p>

                        <p className="text-lg text-gray-600 dark:text-gray-300 mb-6"
                           style={{fontFamily: "Montserrat, sans-serif"}}>
                            In addition to my technical journey, I have 6 months of work experience in the banking
                            sector, where I handled
                            account creation, payments, withdrawals at the cash counter, and operations in the pawning
                            section. This experience strengthened
                            my analytical skills, attention to detail, and ability to work efficiently in fast-paced
                            environments.
                        </p>
                    </motion.div>
                    <motion.div
                        className="mt-10 flex justify-center items-center gap-6"
                        initial={{opacity: 0, y: 20}}
                        animate={{opacity: 1, y: 0}}
                        transition={{duration: 0.8, delay: 0.5}}
                    >
                        <motion.div className="text-center" whileHover={{scale: 1.1}}>
                            <div className="text-3xl font-bold text-[#00cec9] dark:text-[#00cec9]"
                                 style={{fontFamily: 'Montserrat, sans-serif'}}>
                                2+
                            </div>
                            <div className="text-gray-600 dark:text-gray-300"
                                 style={{fontFamily: 'Montserrat, sans-serif', fontWeight: "700"}}>
                                Years Experience
                            </div>
                        </motion.div>

                        <GoDash className="text-gray-400 text-8xl rotate-90"/>

                        <motion.div className="text-center" whileHover={{scale: 1.1}}>
                            <div className="text-3xl font-bold text-[#00cec9] dark:text-[#00cec9]"
                                 style={{fontFamily: 'Montserrat, sans-serif'}}>
                                20+
                            </div>
                            <div className="text-gray-600 dark:text-gray-300"
                                 style={{fontFamily: 'Montserrat, sans-serif', fontWeight: "700"}}>
                                Projects Completed
                            </div>
                        </motion.div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    )
}
