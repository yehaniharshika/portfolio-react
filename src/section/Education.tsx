import {
  FaGraduationCap,
  FaAward,
  FaUniversity,
  FaCalendarAlt,
} from "react-icons/fa";

type EducationItem = {
  year: string;
  title: string;
  institution?: string;
  badge?: string;
  description: string;
  highlights?: string[];
};

const educationData: EducationItem[] = [
  {
    year: "2026 Jan - 2026 Nov",
    title: "Bachelor of Science in Computer Science",
    institution: "University of Bedfordshire",
    badge: "First Class Honours",
    description:
      "Strong focus on Software Architecture, Software Development, Agile Project Management, Artificial Intelligence, and Machine Learning, complemented by an individual undergraduate research project.",
  },
  {
    year: "2023 April - 2025 Nov",
    title: "Higher National Diploma in Software Engineering",
    institution: "Institute of Software Engineering (IJSE)",
    badge: "GPA 3.8",
    description:
      "Studied software design and development, object-oriented programming, programming languages, database management, modern web technologies, and machine learning concepts.",
  },
  {
    year: "2022 - 2023",
    title: "Diploma in English",
    institution: "Sri Lanka English Language Graduates' Association",
    description:
      "Advanced grammar, communication skills, academic writing and technical writing.",
  },
  {
    year: "2021/2022",
    title: "G.C.E. Advanced Level - Biological Science",
    description:
      "Completed Advanced Level studies in the Biological Science stream (Biology, Chemistry, Physics).",
  },
];

export const Education = () => {
  return (
    <section
      id="education"
      className="py-20 bg-gray-800 text-white w-full"
      style={{ fontFamily: "Montserrat, sans-serif" }}
    >
      <div className="container mx-auto px-4 md:px-0">
        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mb-4 text-center">
          MY <span style={{ color: "#00cec9" }}>EDUCATION</span>
        </h2>

        {/* 2 x 2 Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-8xl mx-auto">
          {educationData.map((edu, index) => (
            <div
              key={index}
              className="bg-gray-900 p-6 rounded-xl shadow-lg border border-gray-700 flex flex-col h-full text-left transition-all duration-300 hover:border-[#00cec9] hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(0,206,201,0.15)]"
            >
              {/* Top row: icon + year */}
              <div className="flex items-center justify-between gap-3 mb-4">
                <div className="w-11 h-11 rounded-full bg-gray-800 border-2 border-[#00cec9] flex items-center justify-center shrink-0">
                  <FaGraduationCap className="text-[#00cec9] text-xl" />
                </div>

                <span className="flex items-center gap-2 text-sm text-gray-400">
                  <FaCalendarAlt className="text-[#00cec9]" />
                  {edu.year}
                </span>
              </div>

              {/* Badge */}
              {edu.badge && (
                <span className="inline-flex items-center gap-2 self-start bg-[#00cec9]/10 text-[#00cec9] border border-[#00cec9]/40 text-xs font-bold px-3 py-1 rounded-full mb-3">
                  <FaAward />
                  {edu.badge}
                </span>
              )}

              <h3 className="text-xl sm:text-2xl font-semibold mb-2">
                {edu.title}
              </h3>

              {edu.institution && (
                <p className="flex items-center gap-2 text-gray-400 text-sm">
                  <FaUniversity className="text-[#00cec9] shrink-0" />
                  {edu.institution}
                </p>
              )}

              <p className="mt-4 text-gray-300 leading-relaxed">
                {edu.description}
              </p>

              {/* Highlights pinned to the bottom so all cards line up */}
              {edu.highlights && (
                <div className="mt-auto pt-5 flex flex-wrap gap-2">
                  {edu.highlights.map((item) => (
                    <span
                      key={item}
                      className="text-xs bg-gray-800 text-gray-200 border border-gray-700 px-3 py-1 rounded-full"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
