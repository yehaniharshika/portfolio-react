import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MapPin, Calendar, Award, Briefcase, Building2 } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

type ExperienceItem = {
  id: number;
  title: string;
  organization: string;
  location: string;
  date: string;

  points?: string[];
  skills: string[];
  icon: React.ReactNode;
};

const Experience = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const timelineItemsRef = useRef<(HTMLDivElement | null)[]>([]);
  const timelineLineRef = useRef<HTMLDivElement>(null);

  const experiences: ExperienceItem[] = [
    {
      id: 1,
      title: "Intern Software Engineer",
      organization: "Hcode Solutions Pvt Ltd",
      location: "Moratuwa, Sri Lanka",
      date: "May 2025 - November 2025",

      points: [
        "Contributed to the design and development of multiple full-stack web applications, managing both frontend and backend.",
        "Collaborated with the team on backend implementation for a marketplace project.",
        "Backend & frontend development of an E-commerce platform.",
        "Designed the UI/UX in Figma and developed a complete website for an Elders' home project from start to finish.",
      ],
      skills: [
        "React",
        "Next.js",
        "Java",
        "Spring Boot",
        "Node.js",
        "HTML",
        "CSS",
        "JavaScript",
        "TypeScript",
        "Figma",
        "UI/UX Design",
      ],
      icon: <Briefcase />,
    },
    {
      id: 2,
      title: "Trainee Bank Officer",
      organization: "Peoples Bank",
      location: "Polonnaruwa, Sri Lanka",
      date: "October 2022 - April 2023",
      points: [
        "Managed account creation, customer interactions, money deposits and withdrawals, cash counter operations, and pawning services, ensuring high levels of customer service and operational accuracy.",
      ],
      skills: [
        "Branch Banking Operations",
        "Customer Handling",
        "Account Management",
      ],
      icon: <Briefcase />,
    },
  ];

  /* --------------------------------------------------------------
     Three.js Starfield Background (unchanged)
  -------------------------------------------------------------- */
  useEffect(() => {
    if (!canvasRef.current) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    const renderer = new THREE.WebGLRenderer({
      canvas: canvasRef.current,
      alpha: true,
      antialias: true,
    });

    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    camera.position.z = 5;

    // starfield
    const starsGeometry = new THREE.BufferGeometry();
    const starCount = 500;
    const positions = new Float32Array(starCount * 3);
    for (let i = 0; i < starCount * 3; i++) {
      positions[i] = (Math.random() - 0.5) * 20;
    }
    starsGeometry.setAttribute(
      "position",
      new THREE.BufferAttribute(positions, 3)
    );
    const starsMaterial = new THREE.PointsMaterial({
      size: 0.02,
      color: 0xffffff,
      transparent: true,
      opacity: 0.8,
      blending: THREE.AdditiveBlending,
    });
    const stars = new THREE.Points(starsGeometry, starsMaterial);
    scene.add(stars);

    // glowing particles
    const particlesGeometry = new THREE.BufferGeometry();
    const particleCount = 50;
    const particlePositions = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount * 3; i++) {
      particlePositions[i] = (Math.random() - 0.5) * 15;
    }
    particlesGeometry.setAttribute(
      "position",
      new THREE.BufferAttribute(particlePositions, 3)
    );
    const particlesMaterial = new THREE.PointsMaterial({
      size: 0.08,
      color: 0x00cec9,
      transparent: true,
      opacity: 0.6,
      blending: THREE.AdditiveBlending,
    });
    const particles = new THREE.Points(particlesGeometry, particlesMaterial);
    scene.add(particles);

    let mouseX = 0;
    let mouseY = 0;
    const handleMouseMove = (e: MouseEvent) => {
      mouseX = (e.clientX / window.innerWidth) * 2 - 1;
      mouseY = -(e.clientY / window.innerHeight) * 2 + 1;
    };
    window.addEventListener("mousemove", handleMouseMove);

    const animate = () => {
      requestAnimationFrame(animate);
      stars.rotation.y += 0.0002;
      stars.rotation.x += 0.0001;
      particles.rotation.y += 0.001;
      particles.rotation.x += 0.0005;
      camera.position.x += (mouseX * 0.3 - camera.position.x) * 0.05;
      camera.position.y += (mouseY * 0.3 - camera.position.y) * 0.05;
      renderer.render(scene, camera);
    };
    animate();

    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);
      renderer.dispose();
    };
  }, []);

  /* --------------------------------------------------------------
     GSAP Timeline Animations (unchanged)
  -------------------------------------------------------------- */
  useEffect(() => {
    if (timelineLineRef.current) {
      gsap.fromTo(
        timelineLineRef.current,
        { scaleY: 0 },
        {
          scaleY: 1,
          duration: 2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: timelineLineRef.current,
            start: "top 80%",
            end: "bottom 20%",
            scrub: 1,
          },
        }
      );
    }

    timelineItemsRef.current.forEach((item, index) => {
      if (!item) return;
      const isLeft = index % 2 === 0;

      gsap.fromTo(
        item,
        { opacity: 0, x: isLeft ? -100 : 100, scale: 0.8 },
        {
          opacity: 1,
          x: 0,
          scale: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: item,
            start: "top 85%",
            end: "bottom 15%",
            toggleActions: "play none none reverse",
          },
        }
      );

      const icon = item.querySelector(".timeline-icon");
      if (icon) {
        gsap.fromTo(
          icon,
          { scale: 0, rotation: -180 },
          {
            scale: 1,
            rotation: 0,
            duration: 0.8,
            ease: "back.out(1.7)",
            scrollTrigger: { trigger: item, start: "top 80%" },
          }
        );
      }
    });
  }, []);

  return (
    <section
      id="experience"
      className="py-20 bg-gray-900 text-white w-full relative overflow-hidden min-h-screen"
    >
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none"
        style={{ opacity: 0.4 }}
      />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center mb-16">
          <h2
            className="text-4xl font-bold mb-4"
            style={{ fontFamily: "Montserrat, sans-serif" }}
          >
            Work <span className="text-[#00cec9]">Experience</span>
          </h2>
          <p
            className="text-gray-300 text-lg mb-6"
            style={{ fontFamily: "Montserrat, sans-serif" }}
          >
            
          </p>
        </div>

        <div className="relative max-w-6xl mx-auto">
          <div
            ref={timelineLineRef}
            className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-[#00cec9] via-white to-[#00cec9] h-full origin-top"
            style={{ boxShadow: "0 0 20px rgba(0, 206, 201, 0.5)" }}
          />

          <div className="space-y-24">
            {experiences.map((exp, index) => {
              const isLeft = index % 2 === 0;
              /** NEW: force left alignment for Hcode (id 1) */
              const forceLeft = exp.id === 1;

              return (
                <div
                  key={exp.id}
                  ref={(el) => {
                    timelineItemsRef.current[index] = el;
                  }}
                  className={`flex items-center ${
                    forceLeft
                      ? "flex-row"
                      : isLeft
                      ? "flex-row"
                      : "flex-row-reverse"
                  } gap-8`}
                >
                  {/* Content Card */}
                  <div
                    className={`w-5/12 ${
                      forceLeft
                        ? "text-left"
                        : isLeft
                        ? "text-right"
                        : "text-left"
                    }`}
                  >
                    <div className="p-6 rounded-2xl shadow-2xl hover:shadow-[#00cec9]/50 hover:border-[#00cec9] transition-all duration-500 transform hover:scale-105 border border-white/10">
                      <div
                        className="flex items-start gap-3 mb-3"
                        style={{
                          flexDirection: forceLeft
                            ? "row"
                            : isLeft
                            ? "row-reverse"
                            : "row",
                        }}
                      >
                        <div className="flex-1">
                          <h3
                            className="text-2xl font-bold mb-2 text-white"
                            style={{ fontFamily: "Montserrat, sans-serif" }}
                          >
                            {exp.title}
                          </h3>
                          <div
                            className="flex items-center gap-2 text-sm text-gray-300 mb-2"
                            style={{
                              justifyContent: forceLeft
                                ? "flex-start"
                                : isLeft
                                ? "flex-end"
                                : "flex-start",
                            }}
                          >
                            <Briefcase className="w-4 h-4" />
                            <span
                              style={{
                                fontFamily: "Montserrat, sans-serif",
                                fontWeight: "600",
                              }}
                            >
                              {exp.organization}
                            </span>
                          </div>
                          <div
                            className="flex items-center gap-2 text-sm text-gray-300 font-medium"
                            style={{
                              justifyContent: forceLeft
                                ? "flex-start"
                                : isLeft
                                ? "flex-end"
                                : "flex-start",
                            }}
                          >
                            <MapPin className="w-4 h-4" />
                            <span
                              style={{ fontFamily: "Montserrat, sans-serif" }}
                            >
                              {exp.location}
                            </span>
                          </div>
                        </div>
                      </div>

                      {exp.points && exp.points.length > 0 && (
                        <ul
                          className={`space-y-2 mb-4 text-[40px] ${
                            forceLeft ? "text-left" : ""
                          }`}
                        >
                          {exp.points.map((point, idx) => (
                            <li
                              key={idx}
                              className="text-gray-300 text-sm leading-relaxed flex items-start gap-2"
                              style={{
                                fontFamily: "Montserrat, sans-serif",
                                /** Force left-aligned bullet for Hcode */
                                flexDirection: forceLeft
                                  ? "row"
                                  : isLeft
                                  ? "row-reverse"
                                  : "row",
                              }}
                            >
                              <span className="flex-1">{point}</span>
                            </li>
                          ))}
                        </ul>
                      )}

                      <div
                        className={`flex flex-wrap gap-2 ${
                          forceLeft
                            ? "justify-start"
                            : isLeft
                            ? "justify-end"
                            : "justify-start"
                        }`}
                      >
                        {exp.skills.map((skill, idx) => (
                          <span
                            key={idx}
                            className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-xs font-medium hover:bg-[#00cec9] hover:text-gray-900 transition-colors"
                            style={{ fontFamily: "Montserrat, sans-serif" }}
                          >
                            {skill}
                          </span>
                        ))}
                      </div>

                      <div
                        className={`text-sm text-gray-300 mt-4 font-semibold ${
                          forceLeft
                            ? "text-left"
                            : isLeft
                            ? "text-right"
                            : "text-left"
                        }`}
                      >
                        <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 rounded-full">
                          <span
                            style={{ fontFamily: "Montserrat, sans-serif" }}
                          >
                            {exp.date}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Center Icon */}
                  <div className="timeline-icon relative w-2/12 flex justify-center">
                    <div className="relative">
                      <div
                        className="w-20 h-20 rounded-full bg-gradient-to-br from-[#00cec9] to-cyan-700 flex items-center justify-center text-4xl shadow-2xl border-4 border-white"
                        style={{ boxShadow: "0 0 30px rgba(0, 206, 201, 0.6)" }}
                      >
                        <Building2 />
                      </div>
                      <div className="absolute inset-0 rounded-full bg-[#00cec9] opacity-20 animate-ping" />
                    </div>
                  </div>

                  {/* Date (outside the card) */}
                  <div
                    className="w-5/12 flex items-center"
                    style={{
                      justifyContent: forceLeft
                        ? "flex-start" 
                        : isLeft
                        ? "flex-start"
                        : "flex-end",
                    }}
                  >
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-gray-800/50 backdrop-blur-sm rounded-lg border border-[#00cec9]/30">
                      <Calendar className="w-5 h-5 text-[#00cec9]" />
                      <span
                        className="font-bold text-[#00cec9]"
                        style={{ fontFamily: "Montserrat, sans-serif" }}
                      >
                        {exp.date}
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
