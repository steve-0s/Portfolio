import { IoSchoolOutline, IoBriefcaseOutline, IoCalendarOutline } from "react-icons/io5";

export default function Education({ darkMode }) {
  const experiences = [
    {
      type: "work",
      title: "Web Developer Intern",
      institution: "Bald Puppies Solutions Inc.",
      period: "Present",
      description: "Currently working as a Web Developer Intern, gaining hands-on experience in modern web technologies and development workflows."
    },
    {
      type: "education",
      title: "Bachelor of Science in Information Technology",
      institution: "Ateneo de Naga University",
      period: "2022 – Present",
      description: null
    },
    {
      type: "education",
      title: "Senior High School – STEM",
      institution: "St. Bridget School",
      period: "2020 – 2022",
      description: null
    }
  ];

  return (
    <div
      className={`rounded-3xl p-5 border shadow-lg backdrop-blur-md transition-all
        ${darkMode
          ? "bg-neutral-900/40 border-neutral-700/50 hover:shadow-purple-900/10"
          : "bg-white/60 border-white/60 hover:shadow-neutral-200"
        }
      `}
    >
      <h3 className={`text-lg font-bold font-display mb-4
        ${darkMode ? "text-white" : "text-neutral-900"}
      `}>
        Education & Experience
      </h3>

      <div className="space-y-4 relative">

        {/* Vertical Timeline Line */}
        <div className={`absolute left-[15px] top-0 bottom-0 w-px
          ${darkMode ? "bg-linear-to-b from-violet-500/20 via-violet-500/40 to-violet-500/20" : "bg-linear-to-b from-blue-500/20 via-blue-500/40 to-blue-500/20"}
        `} />

        {experiences.map((item, idx) => (
          <div key={idx} className="relative flex gap-3 items-start">

            {/* Timeline Dot */}
            <div className={`shrink-0 z-10 flex items-center justify-center w-8 h-8 rounded-full border-3 transition-all
              ${darkMode
                ? "bg-neutral-900 border-violet-500/50 shadow-lg shadow-violet-500/20"
                : "bg-white border-blue-500/50 shadow-lg shadow-blue-500/20"}
            `}>
              {item.type === 'work' ? (
                <IoBriefcaseOutline className={`text-sm ${darkMode ? "text-violet-400" : "text-blue-600"}`} />
              ) : (
                <IoSchoolOutline className={`text-sm ${darkMode ? "text-violet-400" : "text-blue-600"}`} />
              )}
            </div>

            {/* Content Card */}
            <div className="flex-1">
              <div className={`p-3 rounded-lg border backdrop-blur-sm transition-all hover:scale-[1.01] hover:-translate-y-0.5
                ${darkMode
                  ? "bg-neutral-800/60 border-neutral-700/50 hover:border-violet-500/50 hover:shadow-lg hover:shadow-violet-500/10"
                  : "bg-white/80 border-neutral-200 hover:border-blue-500/50 hover:shadow-lg"}
              `}>

                <div className={`inline-flex items-center gap-1 text-xs font-semibold px-2 py-0.5 rounded-full mb-1.5
                  ${item.type === 'work'
                    ? darkMode ? "bg-violet-500/20 text-violet-300 border border-violet-500/30" : "bg-blue-50 text-blue-700 border border-blue-200"
                    : darkMode ? "bg-violet-500/20 text-violet-300 border border-violet-500/30" : "bg-blue-50 text-blue-700 border border-blue-200"
                  }
                `}>
                  <IoCalendarOutline size={10} />
                  {item.period}
                </div>

                <h4 className={`text-sm font-bold mb-1 ${darkMode ? "text-white" : "text-neutral-900"}`}>
                  {item.title}
                </h4>

                <p className={`font-semibold text-xs mb-1.5 ${darkMode ? "text-violet-400" : "text-blue-600"}`}>
                  {item.institution}
                </p>

                {item.description && (
                  <p className={`text-xs leading-relaxed ${darkMode ? "text-neutral-400" : "text-neutral-600"}`}>
                    {item.description}
                  </p>
                )}
              </div>
            </div>

          </div>
        ))}

      </div>
    </div>
  );
}
