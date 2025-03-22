import { useState } from "react";
import { Globe, Monitor, Smartphone } from "lucide-react";
import mediTrackImage from "../assets/mediTrack.jpg";
import greenShadowImage from "../assets/greenShadow.png";
import flowerShopImage from "../assets/flower delivery.png";
import posImage from "../assets/pos system.jpg";
import taskManagementImage from "../assets/taskmate.jpg";
import thogakadeMobileApp from "../assets/grocery-software-info.png";
import libraSysImage from "../assets/librasys.jpg";
import bookWarmImage from "../assets/bookwARM.png";
import chatApplicationImage from "../assets/chatWise.jpg";
import {FaArrowRightToBracket} from "react-icons/fa6";


type Project = {
    id: number;
    title: string;
    description: string;
    image: string;
    tags: string[];
    link: string;
    category: "web" | "mobile" | "desktop";
};

export const Projects = () => {
    const [activeCategory, setActiveCategory] = useState<"web" | "mobile" | "desktop">("web");

    const projects: Project[] = [
        {
            id: 1,
            title: "MediTrack - Medical Center Management System",
            description:
                "A web-based system designed to streamline medical center operations, including patient,doctor,nurse,department management, appointment scheduling, and medical records,payments handling.",
            image: mediTrackImage,
            tags: ["React","TypeScript","Node.js","Express.js", "MySQL", "Prisma"],
            link: "https://github.com/yehaniharshika/medi-track-hospital-management-system-backend.git",
            category: "web",
        },
        {
            id: 2,
            title: "BlossomBay - Flower Delivery App",
            description:
                "An e-commerce platform for ordering and delivering flowers, featuring real-time order tracking, secure payments, and a user-friendly interface.",
            image: flowerShopImage,
            tags: ["React","Node.js","Express.js", "MongoDB"],
            link: "https://github.com/yehaniharshika/BlossomBay-flower-delivery-app.git",
            category: "web",
        },
        {
            id: 3,
            title: "GreenShadow - Crop Monitoring System",
            description:
                "A web-based agricultural monitoring system that helps farmers track crop health, manage resources, and optimize yields through data-driven insights.",
            image: greenShadowImage,
            tags: ["HTML","CSS","JavaScript", "Spring Boot", "MySQL", "Hibernate"],
            link: "https://github.com/yehaniharshika/GreenShadow-crop-monitoring-system-backend.git",
            category: "web",
        },
        {
            id: 4,
            title: "FoodMart - POS System",
            description:
                "A comprehensive point-of-sale system for retail businesses, featuring inventory management, billing, and sales tracking.",
            image: posImage,
            tags: ["Java", "MySQL", "Hibernate", "JavaScript"],
            link: "https://github.com/yehaniharshika/AAD-Assignment-phase-02-pos-system-backend-using-spring-MVC.git",
            category: "web",
        },
        {
            id: 5,
            title: "TaskMate - Task Manager App",
            description:
                "A mobile task management application that helps users organize their tasks, set priorities, and receive reminders efficiently.",
            image: taskManagementImage,
            tags: ["React Native","TypeScript", "MySQL", "Prisma"],
            link: "https://github.com/yehaniharshika/taskmate-mobile-app.git",
            category: "mobile",
        },
        {
            id: 6,
            title: "Thogakade Mobile App",
            description:
                "A mobile version of the 'Thogakade' POS system, allowing small retail businesses to manage inventory, sales, and customer orders on the go.",
            image: thogakadeMobileApp,
            tags: ["TypeScript", "React Native", "MySQL", "Prisma"],
            link: "https://github.com/yehaniharshika/thogakade-sample-mobile-app.git",
            category: "mobile",
        },
        {
            id: 7,
            title: "LibraSys - Library Management System",
            description:
                "A desktop-based library management system designed to facilitate book cataloging, member management, and lending operations.",
            image: libraSysImage,
            tags: ["Java", "MySQL"],
            link: "https://github.com/yehaniharshika/LibraSys-LibraryManagementSystem.git",
            category: "desktop",
        },
        {
            id: 8,
            title: "ChatWise - Chat Application",
            description:
                "A real-time desktop chat application with features like group messaging, emoji support, and multimedia sharing.",
            image: chatApplicationImage,
            tags: ["Java", "MySQL", "Hibernate"],
            link: "https://github.com/yehaniharshika/chat-room-applications.git",
            category: "desktop",
        },
        {
            id: 9,
            title: "BookWarm - Library Management System",
            description:
                "A feature-rich library management software designed to handle book lending, member registration, and catalog management efficiently.",
            image: bookWarmImage,
            tags: ["Java", "MySQL", "Hibernate"],
            link: "https://github.com/yehaniharshika/BookWorm-OnlineLibraryManagementSystem.git",
            category: "desktop",
        },
    ];

    const filteredProjects = projects.filter((project) => project.category === activeCategory);

    const categories = [
        {
            id: "web",
            label: "Web Applications",
            icon: Globe,
        },
        {
            id: "mobile",
            label: "Mobile Applications",
            icon: Smartphone,
        },
        {
            id: "desktop",
            label: "Desktop Applications",
            icon: Monitor,
        },
    ] as const;

    return (
        <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-900 w-full">
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold text-gray-900 dark:text-white"
                        style={{fontFamily: 'Montserrat, sans-serif'}}>
                        My <span style={{fontFamily: 'Montserrat, sans-serif', color: "#00cec9"}}>Projects</span>
                    </h2>
                </div>
                <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
                    {categories.map(({id, label, icon: Icon}) => (
                        <button
                            key={id}
                            onClick={() => setActiveCategory(id)}
                            className={`flex items-center px-6 py-3 rounded-lg transition-all duration-300 cursor-pointer ${
                                activeCategory === id
                                    ? "bg-[#00cec9] dark:bg-[#00cec9] text-white"
                                    : "bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-[#00cec9] dark:hover:bg-[#00cec9]"
                            }`}
                            style={{fontFamily: 'Montserrat, sans-serif'}}
                        >
                            <Icon className="w-5 h-5 mr-2" />
                            <span className="font-medium">{label}</span>
                        </button>
                    ))}
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredProjects.map((project) => (
                        <div
                            key={project.id}
                            className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
                        >
                            <div className="relative h-48 overflow-hidden group">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
                                />
                                <div className="absolute inset-0 bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300" />
                            </div>
                            <div className="p-6">
                                <h3 style={{fontFamily: 'Montserrat, sans-serif'}}
                                    className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                                    {project.title}
                                </h3>
                                <p style={{fontFamily: 'Montserrat, sans-serif'}}
                                   className="text-gray-600 dark:text-gray-300 mb-4">
                                    {project.description}
                                </p>
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.tags.map((tag, index) => (
                                        <span
                                            key={index}
                                            className="px-3 py-1 bg-indigo-100 dark:bg-indigo-900 text-indigo-800 dark:text-indigo-200 text-sm rounded-full"
                                            style={{fontFamily: 'Montserrat, sans-serif'}}>{tag}</span>
                                    ))}
                                </div>
                                <a
                                    href={project.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-[#00cec9] dark:text-[#00cec9] hover:text-white dark:hover:text-[#00cec9] font-medium flex items-center px-4 py-2 rounded transition-all duration-300 relative hover:scale-95"
                                    style={{
                                        fontFamily: "Montserrat, sans-serif",
                                    }}
                                >
                                    View Project
                                    <FaArrowRightToBracket className="ml-2 h-4 w-4"/>
                                    <span
                                        className="absolute inset-0 border-2 border-[#00cec9] rounded opacity-0 hover:opacity-100 transition-opacity duration-300" style={{maxWidth:"180px"}}></span>
                                </a>

                            </div>
                        </div>
                    ))}
                </div>
                {filteredProjects.length === 0 && (
                    <div className="text-center py-12">
                        <p className="text-gray-600 dark:text-gray-400">
                            No {activeCategory} projects to display at the moment.
                        </p>
                    </div>
                )}
            </div>
        </section>
    );
};