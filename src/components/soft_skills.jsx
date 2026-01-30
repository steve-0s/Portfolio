export default function SoftSkills({ darkMode }) {
    const skills = [
        { name: "Team collaboration", icon: "🤝" },
        { name: "Active listening", icon: "👂" },
        { name: "Time-management", icon: "⏰" },
        { name: "Willingness to learn", icon: "📚" },
        { name: "Flexibility", icon: "🔄" },
    ];

    return (
        <div className={`rounded-3xl p-5 border shadow-lg backdrop-blur-md transition-all
      ${darkMode
                ? "bg-neutral-900/40 border-neutral-700/50 hover:shadow-purple-900/10"
                : "bg-white/60 border-white/60 hover:shadow-neutral-200"
            }
    `}>

            <h2 className={`text-lg font-bold font-display mb-3
        ${darkMode ? "text-white" : "text-neutral-900"}
      `}>
                Soft Skills
            </h2>

            <div className="grid grid-cols-1 gap-2">
                {skills.map((s) => (
                    <div
                        key={s.name}
                        className={`flex items-center px-3 py-2 rounded-lg transition-all hover:scale-[1.01] hover:-translate-y-0.5 cursor-default
              ${darkMode
                                ? "bg-neutral-800/60 border border-neutral-700/50 hover:border-violet-500/50 hover:shadow-lg hover:shadow-violet-500/10"
                                : "bg-white/80 border border-neutral-200 hover:border-blue-500/50 hover:shadow-md"
                            }
            `}
                    >
                        <span className={`text-xs font-medium ${darkMode ? "text-neutral-200" : "text-neutral-700"}`}>
                            {s.name}
                        </span>
                    </div>
                ))}
            </div>
        </div>
    );
}
