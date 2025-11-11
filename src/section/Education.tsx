import { useEffect } from "react";
import { FaGraduationCap } from "react-icons/fa";

export const Education = () => {
  // Initialize AOS
  useEffect(() => {
    // @ts-ignore
    if (typeof AOS !== "undefined") {
      // @ts-ignore
      AOS.init({
        duration: 1000,
        once: false,
        offset: 100,
        easing: "ease-in-out",
      });
    }
  }, []);

  const educationData = [
    {
      year: "2025 - Present",
      title: "Bachelor of Science in Computer Science",
      institution: "University of Bedfordshire",
      description:
        "Specializing in Computer Science, with a strong focus on Artificial Intelligence and Machine Learning. ",
    },
    {
      year: "2023 - 2025",
      title: "Higher National Diploma in Software Engineering",
      institution: "Institute of Software Engineering(IJSE)",
      description:
        "A diploma focused on software development, system design, and Java programming, with emphasis on object-oriented design, database management, and modern web technologies.",
    },
    {
      year: "2022 - 2023",
      title: "Diploma in English",
      institution: "Sri Lanka English Language Graduates' Association",
      description:
        "A comprehensive study of English proficiency, covering advanced grammar, communication skills, academic writing, business English, and technical writing for IT professionals.",
    },
    {
      year: "2021",
      title: "A-Levels in Biological Science",
      institution: "",
      description:
        "Completed Advanced Level studies in Biological Science, achieving grades of C in Biology, Chemistry, and an S in Physics.",
    },
  ];

  return (
    <section id="education" className="py-20 bg-gray-800 text-white w-full">
      <div className="container mx-auto px-4 md:px-0">
        <h2
          className="text-3xl sm:text-4xl md:text-5xl font-black mb-6 text-center"
          style={{ fontFamily: "Montserrat, sans-serif" }}
          data-aos="fade-left"
        >
          MY <span style={{ color: "#00cec9" }}>EDUCATION</span>
        </h2>

        <div
          className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8"
          style={{ marginTop: "50px" }}
        >
          {educationData.map((edu, index) => (
            <div
              key={index}
              className="bg-gray-900 p-6 rounded-lg shadow-lg relative min-h-[220px] flex flex-col justify-between text-left transition-all duration-300 ease-in-out hover:border-4 hover:border-[#00cec9]"
              data-aos="fade-up"
              data-aos-delay={index * 150}
            >
              {/* Icon at top-left */}
              <FaGraduationCap
                className="absolute top-4 left-4 text-[#00cec9] text-3xl"
                data-aos="zoom-in"
                data-aos-delay={index * 150 + 100}
              />

              <span
                className="absolute top-4 right-4 text-gray-400 text-sm"
                style={{ fontFamily: "Montserrat, sans-serif" }}
              >
                {edu.year}
              </span>

              {/* Content aligned left */}
              <div>
                <h3
                  className="text-2xl font-semibold mt-6 mb-2"
                  style={{ fontFamily: "Montserrat, sans-serif" }}
                >
                  {edu.title}
                </h3>
                <p
                  className="text-gray-400 text-sm"
                  style={{ fontFamily: "Montserrat, sans-serif" }}
                >
                  {edu.institution}
                </p>
                <p
                  className="mt-4 text-gray-300"
                  style={{ fontFamily: "Montserrat, sans-serif" }}
                >
                  {edu.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
