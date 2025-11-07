import { useState } from "react";
import {
    FaHtml5, FaCss3Alt, FaJs, FaReact, FaAngular, FaNodeJs, FaPython,
    FaJava, FaDatabase, FaMobileAlt, FaGithub, FaGitAlt, FaAndroid
} from "react-icons/fa";
import {
    SiTailwindcss,
    SiMongodb,
    SiRedux,
    SiSpring,
    SiExpress,
    SiFlutter,
    SiTypescript,
    SiBootstrap,
    SiVite,
    SiJquery,
    SiFlask,
    SiDocker,
    SiFigma,
    SiPostman, SiFirebase, SiWebstorm, SiIntellijidea
} from "react-icons/si";
import {TbBrandReactNative} from "react-icons/tb";
import {VscVscode} from "react-icons/vsc";

export const Skills = () => {
    const [activeCategory, setActiveCategory] = useState("frontend");

    const technologies = [
        { name: "HTML", icon: <FaHtml5 className="w-10 h-10 text-orange-600" />, category: "frontend" },
        { name: "CSS", icon: <FaCss3Alt className="w-10 h-10 text-blue-600" />, category: "frontend" },
        { name: "JavaScript", icon: <FaJs className="w-10 h-10 text-yellow-500" />, category: "frontend" },
        { name: "TypeScript", icon: <SiTypescript className="w-10 h-10 text-blue-500" />, category: "typescript" },
        { name: "Bootstrap", icon: <SiBootstrap className="w-10 h-10 text-purple-600" />, category: "frontend" },
        { name: "React", icon: <FaReact className="w-10 h-10 text-blue-500" />, category: "frontend" },
        { name: "Redux", icon: <SiRedux className="w-10 h-10 text-purple-600" />, category: "frontend" },
        { name: "Angular", icon: <FaAngular className="w-10 h-10 text-red-600" />, category: "frontend" },
        { name: "Tailwind", icon: <SiTailwindcss className="w-10 h-10 text-teal-500" />, category: "frontend" },
        { name: "Vite", icon: <SiVite className="w-10 h-10 text-teal-500" />, category: "frontend" },
        { name: "JQuery", icon: <SiJquery className="w-10 h-10 text-orange-500" />, category: "frontend" },
        { name: "Flask", icon: <SiFlask className="w-10 h-10 text-red-400" />, category: "frontend" },

        { name: "Java", icon: <FaJava className="w-10 h-10 text-red-500" />, category: "backend" },
        { name: "Python", icon: <FaPython className="w-10 h-10 text-blue-500" />, category: "backend" },
        { name: "Node.js", icon: <FaNodeJs className="w-10 h-10 text-green-600" />, category: "backend" },
        { name: "Express.js", icon: <SiExpress className="w-10 h-10 text-gray-600" />, category: "backend" },
        { name: "Spring Boot", icon: <SiSpring className="w-10 h-10 text-green-500" />, category: "backend" },

        { name: "MongoDB", icon: <SiMongodb className="w-10 h-10 text-green-500" />, category: "database" },
        { name: "SQL Database", icon: <FaDatabase className="w-10 h-10 text-blue-500" />, category: "database" },
        { name: "Firebase", icon: <SiFirebase className="w-10 h-10 text-orange-500" />, category: "database" },

        { name: "React Native", icon: <TbBrandReactNative className="w-10 h-10 text-blue-500" />, category: "mobile" },
        { name: "Flutter", icon: <SiFlutter className="w-10 h-10 text-blue-400" />, category: "mobile" },
        { name: "Android", icon: <FaMobileAlt className="w-10 h-10 text-green-500" />, category: "mobile" },

        { name: "GitHub", icon: <FaGithub className="w-10 h-10 text-white" />, category: "other" },
        { name: "Git", icon: <FaGitAlt className="w-10 h-10 text-orange-500" />, category: "other" },
        { name: "Docker", icon: <SiDocker className="w-10 h-10 text-blue-500" />, category: "other" },
        { name: "Figma", icon: <SiFigma className="w-10 h-10 text-purple-500" />, category: "other" },
        { name: "Postman", icon: <SiPostman className="w-10 h-10 text-orange-600" />, category: "other" },
        { name: "VSCode", icon: <VscVscode className="w-10 h-10 text-blue-400" />, category: "other" },
        { name: "IntelliJ", icon: <SiIntellijidea className="w-10 h-10 text-red" />, category: "other" },
        { name: "WebStorm", icon: <SiWebstorm className="w-10 h-10 text-green-600" />, category: "other" },
        { name: "Android Studio", icon: <FaAndroid className="w-10 h-10 text-green-300" />, category: "other" },
    ];

    return (
        <section id="skills" className="py-20 bg-white dark:bg-gray-900 w-full">
            <div className="container mx-auto px-4 md:px-6 text-center">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-900 dark:text-white" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                    TECHNICAL <span style={{ fontFamily: 'Montserrat, sans-serif', color: "#00cec9" }}>SKILLS</span>
                </h2>
                <p className="mt-4 text-[16px] sm:text-base text-gray-600 dark:text-gray-300 font-medium" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                    I have experience developing software using cutting-edge technologies, ensuring high-quality solutions tailored to meet business needs.
                </p>

                {/* Skill Category Buttons */}
                <div className="flex flex-wrap justify-center mt-6 space-x-3">
                    {["frontend", "backend", "database", "mobile", "other"].map((category) => (
                        <button
                            key={category}
                            onClick={() => setActiveCategory(category)}
                            className={`px-4 py-2 rounded-full text-white font-medium transition-all cursor-pointer duration-300 ${
                                activeCategory === category ? "bg-[#00cec9]" : "bg-gray-800 hover:bg-[#00cec9]"
                            }`}
                            style={{ fontFamily: 'Montserrat, sans-serif' }}
                        >
                            {category.charAt(0).toUpperCase() + category.slice(1)}
                        </button>
                    ))}
                </div>

                {/* Skills Grid - 6 items per row */}
                <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-8 mt-10">
                    {technologies
                        .filter((tech) => tech.category === activeCategory)
                        .map((tech) => (
                            <div
                                key={tech.name}
                                className="p-4 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 flex flex-col items-center"
                            >
                                {tech.icon}
                                <h3 className="font-semibold text-gray-900 dark:text-white mt-3 text-base" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                                    {tech.name}
                                </h3>
                            </div>
                        ))}
                </div>
            </div>
        </section>
    );
};
