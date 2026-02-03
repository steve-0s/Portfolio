import { useState } from "react";
import { BsGithub, BsLink45Deg, BsArrowRight } from "react-icons/bs";

const projectData = [
  {
    title: "TapTrack",
    subtitle: "RFID Attendance System",
    description:
      "TapTrack is a centralized web and mobile-based monitoring system designed to automate campus entry/exit monitoring, event attendance, and student violation logging using RFID and NFC technology.",
    role: "Frontend Developer",
    techStack: ["Laravel", "PostgreSQL", "React Native", "Expo"],
    github: null,
    appLink: null,
    color: "from-blue-500 to-cyan-500",
  },
  {
    title: "GymBro",
    subtitle: "Gym Management System",
    description:
      "A web-based gym management system designed to manage memberships, track attendance, and organize schedules efficiently.",
    role: "Frontend Developer",
    techStack: ["React", "Node.js", "Express", "MongoDB"],
    github: null,
    appLink: null,
    color: "from-orange-500 to-red-500",
  },
  {
    title: "Weather App",
    subtitle: "Real-time Forecasts",
    description:
      "A lightweight weather app that provides real-time forecasts, current conditions, and essential weather details in a clean interface.",
    role: null,
    techStack: ["React", "Tailwind CSS", "OpenWeatherMap"],
    github: "https://github.com/steve-0s/weather",
    appLink: "https://weather-j92p.onrender.com",
    color: "from-sky-400 to-indigo-500",
  },
  {
    title: "Forge",
    subtitle: "Workout Manager",
    description:
      "Mobile application that allows users to create custom workout splits and plans with set counters and rest timers.",
    role: null,
    techStack: ["React Native", "Expo"],
    github: "https://github.com/steve-0s/Workout-Session-Manager-Mobile-App-",
    appLink: null,
    color: "from-emerald-400 to-green-600",
  },
];

export default function Projects({ darkMode }) {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <div className="space-y-8 sm:space-y-10 md:space-y-12">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-3 sm:gap-4">
        <div>
          <h2 className={`text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold font-display mb-2 ${darkMode ? "text-white" : "text-neutral-900"}`}>
            Featured Projects
          </h2>
          <p className={`text-sm sm:text-base ${darkMode ? "text-neutral-400" : "text-neutral-600"}`}>
            A selection of my recent work in web and mobile development.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-7 md:gap-8">
        {projectData.map((proj, idx) => (
          <div
            key={idx}
            onClick={() => setSelectedProject(proj)}
            className={`group relative rounded-2xl sm:rounded-3xl p-5 sm:p-6 md:p-7 lg:p-8 overflow-hidden border transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl cursor-pointer min-h-[320px] sm:min-h-[350px] flex flex-col
              ${darkMode
                ? "bg-neutral-900/40 border-neutral-800 hover:border-violet-500/50 hover:shadow-black/50"
                : "bg-white/60 border-white/60 hover:border-blue-500/50 hover:shadow-neutral-200/50"
              } backdrop-blur-sm`}
          >
            {/* Gradient Blob Background on Hover */}
            <div className={`absolute -right-20 -top-20 w-64 h-64 rounded-full blur-3xl opacity-0 group-hover:opacity-20 transition-opacity duration-500 bg-linear-to-br ${proj.color}`} />

            <div className="relative z-10 flex flex-col h-full">
              <div className="mb-4 sm:mb-5 md:mb-6">
                <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold mb-2 sm:mb-3 tracking-wider uppercase
                   ${darkMode ? "bg-white/5 text-white/70" : "bg-black/5 text-black/70"}
                `}>
                  {proj.subtitle}
                </span>
                <h3 className={`text-xl sm:text-2xl font-bold mb-2 ${darkMode ? "text-white" : "text-neutral-900"}`}>
                  {proj.title}
                </h3>
                <p className={`line-clamp-3 text-sm sm:text-base leading-relaxed ${darkMode ? "text-neutral-400" : "text-neutral-600"}`}>
                  {proj.description}
                </p>
              </div>

              <div className="mt-auto pt-4 sm:pt-5 md:pt-6 border-t border-dashed border-neutral-500/20">
                <div className="flex flex-wrap gap-2 mb-4 sm:mb-5 md:mb-6">
                  {proj.techStack.map(tech => (
                    <span key={tech} className={`text-xs px-2 py-1 rounded border 
                          ${darkMode
                        ? "border-neutral-700 text-neutral-400"
                        : "border-neutral-200 text-neutral-500"}
                       `}>
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3 sm:gap-4">
                  {proj.github && (
                    <span className={`flex items-center gap-2 text-xs sm:text-sm font-medium
                          ${darkMode ? "text-white" : "text-neutral-900"}
                       `}>
                      <BsGithub /> Code
                    </span>
                  )}
                  {proj.appLink && (
                    <span className={`flex items-center gap-2 text-xs sm:text-sm font-medium
                           ${darkMode ? "text-white" : "text-neutral-900"}
                        `}>
                      <BsLink45Deg size={18} /> Live Demo
                    </span>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* PROJECT MODAL */}
      {selectedProject && (
        <div
          className="fixed inset-0 z-100 flex items-center justify-center bg-black/80 backdrop-blur-sm p-3 sm:p-4"
          onClick={() => setSelectedProject(null)}
        >
          <div
            className={`w-full max-w-3xl rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl
              ${darkMode ? "bg-neutral-900" : "bg-white"}`}
            onClick={(e) => e.stopPropagation()}
          >
            <div className={`flex justify-between items-center p-4 sm:p-5 md:p-6 border-b ${darkMode ? "border-neutral-800" : "border-neutral-200"}`}>
              <div>
                <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold mb-2 tracking-wider uppercase
                   ${darkMode ? "bg-white/5 text-white/70" : "bg-black/5 text-black/70"}
                `}>
                  {selectedProject.subtitle}
                </span>
                <h3 className={`font-bold text-xl sm:text-2xl ${darkMode ? "text-white" : "text-neutral-900"}`}>
                  {selectedProject.title}
                </h3>
              </div>
              <button
                onClick={() => setSelectedProject(null)}
                className={`p-2 rounded-full transition-colors ${darkMode ? "hover:bg-neutral-800 text-white" : "hover:bg-neutral-100 text-black"}`}
              >
                ✕
              </button>
            </div>

            <div className={`p-4 sm:p-5 md:p-6 space-y-5 sm:space-y-6 max-h-[65vh] sm:max-h-[70vh] overflow-y-auto ${darkMode ? "bg-neutral-950/50" : "bg-neutral-50/50"}`}>
              {/* Description */}
              <div>
                <h4 className={`text-xs sm:text-sm font-bold mb-2 uppercase tracking-wider ${darkMode ? "text-violet-400" : "text-blue-600"}`}>
                  Description
                </h4>
                <p className={`text-sm sm:text-base leading-relaxed ${darkMode ? "text-neutral-300" : "text-neutral-700"}`}>
                  {selectedProject.description}
                </p>
              </div>

              {/* Role */}
              {selectedProject.role && (
                <div>
                  <h4 className={`text-xs sm:text-sm font-bold mb-2 uppercase tracking-wider ${darkMode ? "text-violet-400" : "text-blue-600"}`}>
                    Role
                  </h4>
                  <p className={`text-sm sm:text-base leading-relaxed ${darkMode ? "text-neutral-300" : "text-neutral-700"}`}>
                    {selectedProject.role}
                  </p>
                </div>
              )}

              {/* Tech Stack */}
              <div>
                <h4 className={`text-xs sm:text-sm font-bold mb-3 uppercase tracking-wider ${darkMode ? "text-violet-400" : "text-blue-600"}`}>
                  Tech Stack
                </h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.techStack.map(tech => (
                    <span
                      key={tech}
                      className={`px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg text-xs sm:text-sm font-medium
                        ${darkMode ? "bg-neutral-800 text-neutral-300" : "bg-white text-neutral-700 border border-neutral-200"}
                      `}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Links */}
              {(selectedProject.github || selectedProject.appLink) && (
                <div>
                  <h4 className={`text-xs sm:text-sm font-bold mb-3 uppercase tracking-wider ${darkMode ? "text-violet-400" : "text-blue-600"}`}>
                    Links
                  </h4>
                  <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4">
                    {selectedProject.github && (
                      <a
                        href={selectedProject.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`flex items-center justify-center sm:justify-start gap-2 px-4 py-2.5 sm:py-2 rounded-lg text-sm sm:text-base font-medium transition-all hover:-translate-y-0.5
                          ${darkMode
                            ? "bg-neutral-800 text-white hover:bg-neutral-700"
                            : "bg-neutral-100 text-neutral-900 hover:bg-neutral-200"}
                        `}
                      >
                        <BsGithub /> View Code
                      </a>
                    )}
                    {selectedProject.appLink && (
                      <a
                        href={selectedProject.appLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`flex items-center justify-center sm:justify-start gap-2 px-4 py-2.5 sm:py-2 rounded-lg text-sm sm:text-base font-medium transition-all hover:-translate-y-0.5
                          ${darkMode
                            ? "bg-violet-600 text-white hover:bg-violet-700"
                            : "bg-blue-600 text-white hover:bg-blue-700"}
                        `}
                      >
                        <BsLink45Deg size={18} /> Live Demo
                      </a>
                    )}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
