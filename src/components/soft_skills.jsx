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

            <div className="space-y-2">
                {skills.map((s) => (
                    <div
                        key={s.name}
                        className={`text-sm ${darkMode ? "text-neutral-300" : "text-neutral-700"}`}
                    >
                        {s.name}
                    </div>
                ))}
            </div>
        </div>
    );
}
