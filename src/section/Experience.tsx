import { useRef } from "react";
import { MapPin, Calendar, Briefcase, Building2 } from "lucide-react";

const Experience = () => {
  const timelineItemsRef = useRef<(HTMLDivElement | null)[]>([]);
  const timelineLineRef = useRef<HTMLDivElement>(null);

  const experiences = [
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

  return (
    <>
      <style>{`
        @media (max-width: 768px) {
          .timeline-container {
            padding-left: 3rem !important;
          }
          
          .timeline-line {
            left: 2.5rem !important;
            transform: none !important;
          }
          
          .timeline-item {
            flex-direction: column !important;
            align-items: flex-start !important;
            gap: 0 !important;
            position: relative;
            padding-left: 3rem;
          }
          
          .timeline-icon-wrapper {
            position: absolute !important;
            left: -0.25rem !important;
            top: 0 !important;
            width: auto !important;
          }

          .timeline-icon-wrapper .icon-circle {
            width: 60px !important;
            height: 60px !important;
          }
          
          .timeline-date-wrapper {
            width: 100% !important;
            margin-bottom: 1rem !important;
            justify-content: flex-start !important;
          }
          
          .timeline-content {
            width: 100% !important;
            text-align: left !important;
          }
          
          .content-inner {
            text-align: left !important;
          }

          .content-inner .flex {
            flex-direction: row !important;
            justify-content: flex-start !important;
          }
          
          .skills-wrapper {
            justify-content: flex-start !important;
          }
          
          .date-display {
            text-align: left !important;
          }
        }
      `}</style>
      
      <section
        id="experience"
        className="py-20 bg-gray-900 text-white w-full relative overflow-hidden min-h-screen"
      >
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="text-center mb-16">
            <h2
              className="text-3xl sm:text-4xl md:text-5xl font-black mb-4"
              style={{ fontFamily: "Montserrat, sans-serif" }}
            >
              WORK <span className="text-[#00cec9]">EXPERIENCE</span>
            </h2>
            <p
              className="text-[16px] sm:text-base text-gray-600 dark:text-gray-300 mb-6 font-medium"
              style={{ fontFamily: "Montserrat, sans-serif" }}
            >
              Here's a brief overview of my professional journey and the
              experiences that have shaped my skills and expertise.
            </p>
          </div>

          <div className="relative max-w-6xl mx-auto timeline-container">
            <div
              ref={timelineLineRef}
              className="timeline-line absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-[#00cec9] via-white to-[#00cec9] h-full origin-top"
              style={{ boxShadow: "0 0 20px rgba(0, 206, 201, 0.5)" }}
            />

            <div className="space-y-24">
              {experiences.map((exp, index) => {
                const isLeft = index % 2 === 0;

                return (
                  <div
                    key={exp.id}
                    ref={(el) => {
                      timelineItemsRef.current[index] = el;
                    }}
                    className="timeline-item relative"
                  >
                    {/* Timeline Icon */}
                    <div className="timeline-icon-wrapper absolute left-1/2 transform -translate-x-1/2 flex justify-center z-10">
                      <div className="relative">
                        <div
                          className="icon-circle w-20 h-20 rounded-full bg-gradient-to-br from-[#00cec9] to-cyan-700 flex items-center justify-center text-4xl shadow-2xl border-4 border-white"
                          style={{
                            boxShadow: "0 0 30px rgba(0, 206, 201, 0.6)",
                          }}
                        >
                          <Building2 />
                        </div>
                        <div className="absolute inset-0 rounded-full bg-[#00cec9] opacity-20 animate-ping" />
                      </div>
                    </div>

                    {/* Desktop Layout */}
                    <div className={`hidden md:flex items-start ${
                      isLeft ? "flex-row" : "flex-row-reverse"
                    } gap-12`}>
                      {/* Content Card */}
                      <div className={`w-5/12 ${exp.id === 1 ? "text-left" : isLeft ? "text-right" : "text-left"}`}>
                        {/* Date Badge - Above Card */}
                        <div
                          className={`timeline-date-wrapper flex mb-4 ${
                            exp.id === 1 ? "justify-start" : isLeft ? "justify-end" : "justify-start"
                          }`}
                        >
                          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gray-800/50 backdrop-blur-sm rounded-lg border border-[#00cec9]/30">
                            <Calendar className="w-5 h-5 text-[#00cec9]" />
                            <span
                              className="font-bold text-[#00cec9] text-[13px]"
                              style={{ fontFamily: "Montserrat, sans-serif" }}
                            >
                              {exp.date}
                            </span>
                          </div>
                        </div>

                        <div className="content-inner p-6 rounded-2xl shadow-2xl hover:shadow-[#00cec9]/50 hover:border-[#00cec9] transition-all duration-500 transform hover:scale-105 border border-white/10">
                          <div
                            className="flex items-start gap-3 mb-3"
                            style={{
                              flexDirection: exp.id === 1 ? "row" : isLeft ? "row-reverse" : "row",
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
                                  justifyContent: exp.id === 1 ? "flex-start" : isLeft
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
                                  justifyContent: exp.id === 1 ? "flex-start" : isLeft
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
                            <ul className="space-y-2 mb-4">
                              {exp.points.map((point, idx) => (
                                <li
                                  key={idx}
                                  className="text-gray-300 text-sm leading-relaxed flex items-start gap-2"
                                  style={{
                                    fontFamily: "Montserrat, sans-serif",
                                    flexDirection: exp.id === 1 ? "row" : isLeft
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
                            className={`skills-wrapper flex flex-wrap gap-2 ${
                              exp.id === 1 ? "justify-start" : isLeft ? "justify-end" : "justify-start"
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
                        </div>
                      </div>

                      {/* Spacer for icon */}
                      <div className="w-2/12"></div>

                      {/* Empty space on other side */}
                      <div className="w-5/12"></div>
                    </div>

                    {/* Mobile Layout */}
                    <div className="md:hidden p-0.5">
                      {/* Date Badge - Above Card */}
                      <div className="timeline-date-wrapper flex mb-4 justify-start">
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-gray-800/50 backdrop-blur-sm rounded-lg border border-[#00cec9]/30">
                          <Calendar className="w-5 h-5 text-[#00cec9]" />
                          <span
                            className="font-bold text-[#00cec9] text-[12px]"
                            style={{ fontFamily: "Montserrat, sans-serif" }}
                          >
                            {exp.date}
                          </span>
                        </div>
                      </div>

                      {/* Content Card */}
                      <div className="timeline-content">
                        <div className="content-inner p-6 rounded-2xl shadow-2xl hover:shadow-[#00cec9]/50 hover:border-[#00cec9] transition-all duration-500 border border-white/10">
                          <div className="flex items-start gap-3 mb-3">
                            <div className="flex-1">
                              <h3
                                className="text-lg font-bold mb-2 text-white"
                                style={{ fontFamily: "Montserrat, sans-serif" }}
                              >
                                {exp.title}
                              </h3>
                              <div className="flex items-center gap-2 text-sm text-gray-300 mb-2">
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
                              <div className="flex items-center gap-2 text-sm text-gray-300 font-medium">
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
                            <ul className="space-y-2 mb-4">
                              {exp.points.map((point, idx) => (
                                <li
                                  key={idx}
                                  className="text-gray-300 text-sm leading-relaxed"
                                  style={{
                                    fontFamily: "Montserrat, sans-serif",
                                  }}
                                >
                                  {point}
                                </li>
                              ))}
                            </ul>
                          )}

                          <div className="skills-wrapper flex flex-wrap gap-2 justify-start">
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
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Experience;