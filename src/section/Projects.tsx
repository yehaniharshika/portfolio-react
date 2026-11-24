import { useEffect, useRef, useState } from "react";
import { Globe, Smartphone, Lightbulb } from "lucide-react";
import {
  FaGithub,
  FaCirclePlay,
  FaArrowUpRightFromSquare,
} from "react-icons/fa6";
import smartArchImage from "../assets/smartarch.webp";
// import smartArchImage2 from "../assets/smartarch-2.webp"; // add this file, then uncomment this line and use it in the SmartArch images array
import sangeethaCandlesImage from "../assets/sangeetha-candles.webp";
// import sangeethaCandlesImage2 from "../assets/sangeetha-candles-2.webp"; // add this file, then uncomment this line and use it in the Sangeetha Candles images array
import mediTrackImage from "../assets/MediTrack.webp";
import greenShadowImage from "../assets/GreenShadow.webp";
import flowerShopImage from "../assets/flower-delivery.webp";
import posImage from "../assets/pos system.jpg";
import taskManagementImage from "../assets/taskmate.jpg";
import thogakadeMobileApp from "../assets/grocery-software-info.png";
import movieExplorerApp from "../assets/movie-Explorer-app.webp";
import recipeSharingPlatform from "../assets/recipe-sharing-platform.jpg";
import VehicoreImage from "../assets/vehicore.jpg";

type Category = "web" | "mobile";

type Project = {
  id: number;
  title: string;
  description: string;
  images: string[]; // 1 or more screenshots of the real UI
  tags: string[];
  github?: string; // GitHub repository link
  video?: string; // demo video link (YouTube, Google Drive, Loom, etc.)
  live?: string; // live website link (optional)
  category: Category;
};

const gradients = [
  "from-pink-500 via-fuchsia-500 to-indigo-500",
  "from-cyan-400 via-sky-500 to-blue-600",
  "from-orange-400 via-rose-500 to-pink-600",
  "from-emerald-400 via-teal-500 to-cyan-600",
  "from-violet-500 via-purple-500 to-fuchsia-500",
  "from-amber-400 via-orange-500 to-red-500",
];

// The UI is shown at an angle, and lies flat when the card is hovered / tapped
const TILTED =
  "perspective(1200px) rotateY(-16deg) rotateX(8deg) rotateZ(-3deg) scale(0.95)";
const FLAT =
  "perspective(1200px) rotateY(0deg) rotateX(0deg) rotateZ(0deg) scale(1)";

// Animation styles (bulb flicker, glow pulse, floating lights, fade-up)
const animationStyles = `
@keyframes bulb-flicker {
  0%, 18%, 22%, 25%, 53%, 57%, 100% {
    opacity: 1;
    filter: drop-shadow(0 0 6px #00cec9) drop-shadow(0 0 18px #00cec9);
  }
  20%, 24%, 55% { opacity: 0.3; filter: none; }
}
@keyframes glow-pulse {
  0%, 100% { box-shadow: 0 10px 30px rgba(0, 206, 201, 0.12); }
  50% { box-shadow: 0 0 0 1px rgba(0, 206, 201, 0.4), 0 10px 40px rgba(0, 206, 201, 0.35); }
}
@keyframes float-y {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-18px); }
}
@keyframes fade-up {
  from { opacity: 0; transform: translateY(24px); }
  to { opacity: 1; transform: none; }
}
.bulb-flicker { animation: bulb-flicker 4s infinite; }
.project-card:hover { animation: glow-pulse 2.4s ease-in-out infinite; }
.float-y { animation: float-y 7s ease-in-out infinite; }
.float-y-slow { animation: float-y 11s ease-in-out infinite; }
.fade-up { animation: fade-up 0.8s ease-out both; }
.tilt-frame { transition: transform 0.7s cubic-bezier(0.2, 0.8, 0.2, 1); will-change: transform; }
@media (prefers-reduced-motion: reduce) {
  .bulb-flicker, .project-card:hover, .float-y, .float-y-slow, .fade-up {
    animation: none;
  }
  .tilt-frame { transition: none; }
}
`;

// 1 project per slide on mobile, 2 on tablet, 3 on desktop
const useItemsPerView = () => {
  const [perView, setPerView] = useState(1);
  useEffect(() => {
    const update = () => {
      const w = window.innerWidth;
      setPerView(w >= 1024 ? 3 : w >= 768 ? 2 : 1);
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);
  return perView;
};

/**
 * One card = gradient image area (full UI at an angle that straightens on hover,
 * with space all around it, plus an overlay with name, technologies and buttons)
 * + description below.
 */
const ProjectCard = ({
  project,
  gradient,
}: {
  project: Project;
  gradient: string;
}) => {
  const [slide, setSlide] = useState(0);
  const [active, setActive] = useState(false);
  const count = project.images.length;

  // While hovered / tapped, flip through the screenshots automatically
  useEffect(() => {
    if (!active || count < 2) return;
    const timer = setInterval(() => setSlide((s) => (s + 1) % count), 2500);
    return () => clearInterval(timer);
  }, [active, count]);

  const techs =
    project.tags.slice(0, 6).join(", ") +
    (project.tags.length > 6 ? ` +${project.tags.length - 6} more` : "");

  return (
    <div className="project-card flex h-full flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-lg transition-transform duration-300 hover:-translate-y-1 dark:border-gray-700/60 dark:bg-gray-900">
      {/* Image area (keeps a 16:10 shape so the whole UI always fits) */}
      <div
        className={`group relative flex aspect-[16/10] min-h-[13.5rem] items-center justify-center overflow-hidden bg-gradient-to-br ${gradient}`}
        onPointerEnter={(e) => e.pointerType === "mouse" && setActive(true)}
        onPointerLeave={(e) => e.pointerType === "mouse" && setActive(false)}
        onPointerUp={(e) => e.pointerType !== "mouse" && setActive((a) => !a)}
      >
        {/* Full UI screenshot with even space around it: angled normally, flat on hover */}
        <div
          className="tilt-frame relative aspect-[16/10] w-[74%] overflow-hidden rounded-lg border-4 border-white/25 bg-gray-900/30 shadow-2xl"
          style={{ transform: active ? FLAT : TILTED }}
        >
          {project.images.map((img, i) => (
            <img
              key={i}
              src={img}
              alt={`${project.title} screenshot ${i + 1}`}
              loading="lazy"
              className={`absolute inset-0 h-full w-full object-contain transition-opacity duration-500 ${
                i === slide ? "opacity-100" : "opacity-0"
              }`}
            />
          ))}
        </div>

        {/* Hover / tap overlay: name + technologies on top, buttons at the bottom */}
        <div
          className={`absolute inset-0 z-10 flex flex-col justify-between bg-gradient-to-r from-black/80 via-black/60 to-black/40 p-5 transition-opacity duration-500 ${
            active
              ? "pointer-events-auto opacity-100"
              : "pointer-events-none opacity-0 group-focus-within:pointer-events-auto group-focus-within:opacity-100"
          }`}
          style={{ fontFamily: "Montserrat, sans-serif" }}
        >
          <div className={count > 1 ? "pr-14" : ""}>
            <p className="text-lg font-bold leading-snug text-white">
              {project.title}
            </p>
            <p className="mt-2 text-sm leading-relaxed text-white/85">
              <span className="font-semibold text-white">Technologies:</span>{" "}
              {techs}
            </p>
          </div>

          <div
            className="flex flex-wrap gap-2"
            onPointerUp={(e) => e.stopPropagation()}
          >
            {project.video && (
              <a
                href={project.video}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Watch the ${project.title} demo video`}
                className="inline-flex items-center gap-2 rounded-lg bg-[#00cec9] px-3 py-1.5 text-xs font-semibold text-gray-900 transition-all duration-300 hover:-translate-y-0.5 hover:opacity-90"
              >
                <FaCirclePlay className="h-3.5 w-3.5" />
                Demo Video
              </a>
            )}
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`View ${project.title} on GitHub`}
                className="inline-flex items-center gap-2 rounded-lg border border-white/60 px-3 py-1.5 text-xs font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-white hover:text-gray-900"
              >
                <FaGithub className="h-3.5 w-3.5" />
                GitHub
              </a>
            )}
            {project.live && (
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Open the ${project.title} live site`}
                className="inline-flex items-center gap-2 rounded-lg border border-[#00cec9] px-3 py-1.5 text-xs font-semibold text-[#00cec9] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#00cec9] hover:text-gray-900"
              >
                <FaArrowUpRightFromSquare className="h-3 w-3" />
                Live Site
              </a>
            )}
          </div>
        </div>

        {/* Image dots (only when the project has 2+ images) */}
        {count > 1 && (
          <div className="absolute right-4 top-4 z-20 flex gap-1.5">
            {project.images.map((_, i) => (
              <button
                key={i}
                type="button"
                aria-label={`Show image ${i + 1}`}
                onPointerUp={(e) => e.stopPropagation()}
                onClick={() => setSlide(i)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  i === slide ? "w-5 bg-white" : "w-2 bg-white/50"
                }`}
              />
            ))}
          </div>
        )}
      </div>

      {/* Details (same card) */}
      <div
        className="flex flex-1 flex-col p-6"
        style={{ fontFamily: "Montserrat, sans-serif" }}
      >
        <h3 className="mb-2 text-xl font-semibold text-gray-900 dark:text-white">
          {project.title}
        </h3>
        <p className="leading-relaxed text-gray-600 dark:text-gray-300">
          {project.description}
        </p>
      </div>
    </div>
  );
};

export const Projects = () => {
  const [activeCategory, setActiveCategory] = useState<Category>("web");
  const [page, setPage] = useState(0);
  const [paused, setPaused] = useState(false);
  const touchStartX = useRef<number | null>(null);
  const perView = useItemsPerView();

  const projects: Project[] = [
    {
      id: 13,
      title: "SmartArch - AI Floor Plan Analysis Platform",
      description:
        "An AI-powered web application for automated floor plan analysis and plan-specific query resolution. Two YOLOv8 models detect structural elements (walls, doors, windows) and text regions (room labels, dimensions), OCR extracts the text, and a Gemini API + RAG chatbot gives clients instant, context-aware answers about their floor plans.",
      images: [smartArchImage],
      tags: ["Python", "Flask", "React", "Tailwind CSS", "YOLOv8", "OCR", "Gemini API", "RAG"],
      github: "https://github.com/yehaniharshika/SmartArch_project_backend.git",
      video: "https://drive.google.com/file/d/1VDY_8obMaz7lbMu_t4inH071zz0JeYBK/view?usp=sharing", // TODO: replace with your demo video link
      category: "web",
    },
    {
      id: 14,
      title: "Sangeetha Candles - Business Management System",
      description:
        "A comprehensive management system built around a client's real business requirements, covering customers, raw materials, products, production, suppliers and employee records with attendance tracking. Includes financial management for revenue, expenses and profit, plus a data visualization dashboard summarizing order status, product performance and stock levels.",
      images: [sangeethaCandlesImage],
      tags: [
        "React",
        "Tailwind CSS",
        "Node.js",
        "Express.js",
        "JWT",
        "Supabase",
        "Postman",
        "Playwright",
      ],
      github: "hhttps://github.com/yehaniharshika/candle_management_system_backend.git", // TODO: replace with your repo link
      video: "", // TODO: replace with your demo video link
      category: "web",
    },
    {
      id: 1,
      title: "MediTrack - Medical Center Management System",
      description:
        "A web-based system designed to streamline medical center operations, including patient, doctor, nurse and department management, appointment scheduling, medical records and payment handling.",
      images: [mediTrackImage],
      tags: ["React", "TypeScript", "Node.js", "Express.js", "MySQL", "Prisma"],
      github:
        "https://github.com/yehaniharshika/medi-track-hospital-management-system-backend.git",
      category: "web",
    },
    {
      id: 2,
      title: "BlossomBay - Flower Delivery App",
      description:
        "An e-commerce platform for ordering and delivering flowers, featuring real-time order tracking, secure payments, and a user-friendly interface.",
      images: [flowerShopImage],
      tags: ["React", "Node.js", "Express.js", "MongoDB", "Stripe"],
      github:
        "https://github.com/yehaniharshika/BlossomBay-flower-delivery-app.git",
      category: "web",
    },
    {
      id: 3,
      title: "GreenShadow - Crop Monitoring System",
      description:
        "A web-based agricultural monitoring system that helps farmers track crop health, manage resources, and optimize yields through data-driven insights.",
      images: [greenShadowImage],
      tags: ["HTML", "CSS", "JavaScript", "Spring Boot", "MySQL", "Hibernate"],
      github:
        "https://github.com/yehaniharshika/GreenShadow-crop-monitoring-system-backend.git",
      category: "web",
    },
    {
      id: 4,
      title: "FoodMart - POS System",
      description:
        "A comprehensive point-of-sale system for retail businesses, featuring inventory management, billing, and sales tracking.",
      images: [posImage],
      tags: ["Java", "MySQL", "Hibernate", "JavaScript"],
      github:
        "https://github.com/yehaniharshika/AAD-Assignment-phase-02-pos-system-backend-using-spring-MVC.git",
      category: "web",
    },
    {
      id: 5,
      title: "TaskMate - Task Manager App",
      description:
        "A mobile task management application that helps users organize their tasks, set priorities, and receive reminders efficiently.",
      images: [taskManagementImage],
      tags: ["React Native", "TypeScript", "MySQL", "Prisma"],
      github: "https://github.com/yehaniharshika/taskmate-mobile-app.git",
      category: "mobile",
    },
    {
      id: 6,
      title: "Thogakade Mobile App",
      description:
        "A mobile version of the 'Thogakade' POS system, allowing small retail businesses to manage inventory, sales, and customer orders on the go.",
      images: [thogakadeMobileApp],
      tags: ["TypeScript", "React Native", "MySQL", "Prisma"],
      github:
        "https://github.com/yehaniharshika/thogakade-sample-mobile-app.git",
      category: "mobile",
    },
    {
      id: 10,
      title: "MovieHunt - Movie Explorer App",
      description:
        "A modern Movie app for discovering movies using TMDb API. Features include real-time search, trending films, detailed views, favorites, responsive design, and light/dark mode.",
      images: [movieExplorerApp],
      tags: [
        "React",
        "Redux",
        "TypeScript",
        "Axios",
        "Material UI",
        "TMDb API",
      ],
      live: "https://moviehunt-eight.vercel.app/",
      category: "web",
    },
    {
      id: 11,
      title: "FlavorNest - Recipe Sharing Platform",
      description:
        "FlavorNest is a recipe-sharing platform frontend that allows users to discover, share, and interact with a variety of recipes, offering an engaging and user-friendly interface for seamless browsing and interaction.",
      images: [recipeSharingPlatform],
      tags: ["React", "Redux", "TypeScript", "Material UI"],
      github: "https://github.com/yehaniharshika/recipe-sharing-platform.git",
      category: "web",
    },
    {
      id: 12,
      title: "Vehicore - Vehicle Data Management System",
      description:
        "A microservice-based vehicle data management system featuring CSV/Excel import, real-time notifications via Redis Pub/Sub, GraphQL API, automated vehicle age calculations, and bulk export capabilities with pagination and search.",
      images: [VehicoreImage],
      tags: [
        "React",
        "Redux",
        "TypeScript",
        "Tailwind CSS",
        "Node.js",
        "Express.js",
        "GraphQL",
        "Redis",
        "Bull.js",
        "MySQL",
        "Socket.IO",
      ],
      github: "https://github.com/yehaniharshika/VehiCore.git",
      category: "web",
    },
  ];

  const filteredProjects = projects.filter(
    (project) => project.category === activeCategory
  );

  const pages = Math.max(1, Math.ceil(filteredProjects.length / perView));

  const categories = [
    { id: "web", label: "Web Applications", icon: Globe },
    { id: "mobile", label: "Mobile Applications", icon: Smartphone },
  ] as const;

  // Back to the first slide when the tab or screen size changes
  useEffect(() => {
    setPage(0);
  }, [activeCategory, perView]);

  // Auto-slide every 6 seconds (pauses while the mouse is over the slider)
  useEffect(() => {
    if (paused || pages <= 1) return;
    const timer = setInterval(() => setPage((p) => (p + 1) % pages), 6000);
    return () => clearInterval(timer);
  }, [paused, pages]);

  // Swipe support for touch screens
  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const diff = e.changedTouches[0].clientX - touchStartX.current;
    touchStartX.current = null;
    if (Math.abs(diff) < 50) return;
    setPage((p) =>
      diff < 0 ? Math.min(p + 1, pages - 1) : Math.max(p - 1, 0)
    );
  };

  return (
    <section
      id="projects"
      className="relative w-full overflow-hidden bg-gray-50 py-20 dark:bg-gray-800"
    >
      <style>{animationStyles}</style>

      {/* Soft floating lights in the background */}
      <div className="float-y pointer-events-none absolute -left-24 top-20 h-72 w-72 rounded-full bg-[#00cec9]/10 blur-3xl" />
      <div className="float-y-slow pointer-events-none absolute -right-24 bottom-10 h-80 w-80 rounded-full bg-fuchsia-500/10 blur-3xl" />

      <div className="container relative z-10 mx-auto px-4 md:px-0">
        <div className="fade-up mb-12 text-center">
          <Lightbulb className="bulb-flicker mx-auto mb-4 h-10 w-10 text-[#00cec9] md:hidden" />
          <h2
            className="text-3xl font-black text-gray-900 dark:text-white sm:text-4xl md:text-5xl"
            style={{ fontFamily: "Montserrat, sans-serif" }}
          >
            MY{" "}
            <span
              style={{ fontFamily: "Montserrat, sans-serif", color: "#00cec9" }}
            >
              PROJECTS
            </span>
          </h2>
        </div>

        <div className="mb-12 flex flex-col justify-center gap-4 sm:flex-row">
          {categories.map(({ id, label, icon: Icon }) => (
            <button
              key={id}
              onClick={() => setActiveCategory(id)}
              className={`flex cursor-pointer items-center justify-center rounded-lg border border-gray-700 px-6 py-3 transition-all duration-300 ${
                activeCategory === id
                  ? "bg-[#00cec9] text-white dark:bg-[#00cec9]"
                  : "bg-white text-gray-600 hover:bg-[#00cec9] dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-[#00cec9]"
              }`}
              style={{ fontFamily: "Montserrat, sans-serif" }}
            >
              <Icon className="mr-2 h-5 w-5" />
              <span className="font-medium">{label}</span>
            </button>
          ))}
        </div>

        {/* Sliding carousel */}
        <div
          className="overflow-hidden py-4"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          onTouchStart={(e) => (touchStartX.current = e.touches[0].clientX)}
          onTouchEnd={handleTouchEnd}
        >
          <div
            className="flex transition-transform duration-700 ease-in-out"
            style={{ transform: `translateX(-${page * 100}%)` }}
          >
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="shrink-0 px-3"
                style={{ width: `${100 / perView}%` }}
              >
                <ProjectCard
                  project={project}
                  gradient={gradients[project.id % gradients.length]}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Dots */}
        {pages > 1 && (
          <div className="mt-8 flex justify-center gap-2">
            {Array.from({ length: pages }).map((_, i) => (
              <button
                key={i}
                type="button"
                aria-label={`Go to slide ${i + 1}`}
                onClick={() => setPage(i)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  i === page
                    ? "w-8 bg-[#00cec9]"
                    : "w-2 bg-gray-400/50 hover:bg-gray-400"
                }`}
              />
            ))}
          </div>
        )}

        {filteredProjects.length === 0 && (
          <div className="py-12 text-center">
            <p className="text-gray-600 dark:text-gray-400">
              No {activeCategory} projects to display at the moment.
            </p>
          </div>
        )}
      </div>
    </section>
  );
};