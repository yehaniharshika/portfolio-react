import { motion } from "framer-motion";
import profileImage from "../assets/photo.jpg";
import resume from "../assets/RAD.pdf";

export const HeroPage = () => {
    return (
        <section
            id={"home"}
            className="w-full bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-gray-800 dark:to-gray-900 pt-24 pb-60"
        >
            <div
                className="container mx-auto px-4 md:px-6 pt-16 flex flex-col md:flex-row items-center justify-between">
                <motion.div
                    className="md:w-1/2 text-center md:text-left mb-10 md:mb-0"
                    initial={{opacity: 0, y: 50}}
                    animate={{opacity: 1, y: 0}}
                    transition={{duration: 0.8, ease: "easeOut"}}
                >
                    <h1 className="text-xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white leading-tight">
                        <span className="text-lg md:text-3xl lg:text-4xl"
                              style={{fontSize: "20px", fontFamily: 'Montserrat, sans-serif'}}>👋 Hi, I'm</span> <br/>
                        <motion.span
                            className="text-5xl md:text-6xl lg:text-7xl "
                            style={{fontFamily: "'Lilita One', sans-serif", color: "#00cec9"}}
                            initial={{opacity: 0}}
                            animate={{opacity: 1}}
                            transition={{duration: 1.2, delay: 0.3}}
                        >
                            Yehani Harshika
                        </motion.span>
                        <br/>
                        <span className="text-2xl md:text-3xl lg:text-4xl text-gray-700 dark:text-gray-300"
                              style={{fontFamily: 'Montserrat, sans-serif'}}>Full Stack Developer</span>
                    </h1>

                    <p className="mt-4 text-lg text-gray-600 dark:text-gray-300 max-w-lg"
                       style={{fontFamily: 'Montserrat, sans-serif', fontSize: "18px", fontWeight: "500"}}>
                        A passionate Software Engineer and Full-Stack Developer dedicated to designing intuitive,
                        high-performing, and visually engaging digital solutions...
                    </p>
                    <motion.div
                        className="mt-8 flex flex-wrap gap-4 justify-center md:justify-start"
                        initial={{opacity: 0, y: 20}}
                        animate={{opacity: 1, y: 0}}
                        transition={{duration: 0.8, delay: 0.5}}
                    >
                        <motion.button
                            whileHover={{scale: 1.05}}
                            whileTap={{scale: 0.95}}
                            onClick={() =>
                                document.getElementById("contact")?.scrollIntoView({
                                    behavior: "smooth",
                                })
                            }
                            className="px-6 py-3 text-white font-medium rounded-lg hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-600 transition-colors"
                            style={{
                                fontFamily: 'Montserrat, sans-serif', backgroundColor: "#00cec9", fontWeight: "600", cursor:"pointer"}}
                        >
                            Contact Me
                        </motion.button>
                        <motion.button
                            whileHover={{scale: 1.05}}
                            whileTap={{scale: 0.95}}
                            className="px-6 py-3 bg-white dark:bg-gray-800 text-[#00cec9] dark:text-[#00cec9] font-medium rounded-lg border border-[#00cec9] dark:border-[#00cec9] hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                            style={{fontFamily: 'Montserrat, sans-serif', fontWeight: "600",cursor:"pointer"}}
                            onClick={() => {
                                const link = document.createElement("a");
                                link.href = resume;
                                link.download = "";
                                document.body.appendChild(link);
                                link.click();
                                document.body.removeChild(link);
                            }}
                        >
                            Download Resume
                        </motion.button>
                    </motion.div>
                </motion.div>


                <motion.div
                    className="md:w-1/2 flex justify-center md:justify-center"
                    initial={{opacity: 0, scale: 0.8}}
                    animate={{opacity: 1, scale: 1}}
                    transition={{duration: 0.8, delay: 0.6}}
                >
                    <div
                        className="w-72 h-72 md:w-96 md:h-96  rounded-full overflow-hidden border-4 border-white dark:border-gray-700 shadow-lg"
                        style={{marginTop:"30px"}}>
                        <motion.img
                            src={profileImage}
                            alt="Your Name"
                            className="w-full h-full object-cover"
                            whileHover={{scale: 1.1}}
                            transition={{duration: 0.3}}
                        />
                    </div>
                </motion.div>

            </div>
        </section>
    )
}
