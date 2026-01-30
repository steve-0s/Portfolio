import { useState } from "react";
import { IoArrowForward } from "react-icons/io5";

export default function TechStack({ darkMode }) {
  const [open, setOpen] = useState(false);

  const mainStack =
    ["React", "React Native", "Tailwind", "Laravel", "JavaScript", "Vercel", "Render", "Expo", "SQLite",
      "CSS", "PHP", "C++", "Node.js", "MySQL", "MongoDB", "GitHub", "VS Code", "Figma"
    ];

  const categorizedStack = {
    "Programming Languages": ["JavaScript", "PHP", "C++", "Python"],
    "Frontend": ["HTML", "CSS", "React", "Tailwind", "React Native", "XML"],
    "Backend": ["Laravel", "Node.js", "Python", "Odoo"],
    "Database": ["SQLite", "MySQL", "PostgreSQL", "MongoDB"],
    "Tools": ["GitHub", "Bit Bucket", "VS Code", "Figma", "Lucidchart", "ClickUp", "WordPress"],
    "Deployment": ["Vercel", "Render", "Expo"],
  };

  return (
    <>
      <div
        className={`rounded-3xl p-5 border shadow-lg backdrop-blur-md transition-all group
          ${darkMode
            ? "bg-neutral-900/40 border-neutral-700/50 hover:shadow-blue-900/10"
            : "bg-neutral-900/40 border-neutral-700/50 hover:shadow-blue-900/10"
          }
        `}
      >
        <h2 className={`text-lg font-bold font-display mb-3
          ${darkMode ? "text-neutral-900" : "text-white"}
        `}>
          Tech Stack
        </h2>

        <div className="flex flex-wrap gap-2">
          {mainStack.slice(0, 12).map((s) => (
            <span
              key={s}
              className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all hover:scale-105 hover:-translate-y-0.5 cursor-default
                ${darkMode
                  ? "bg-neutral-800/60 text-neutral-300 border border-neutral-700/50 hover:border-blue-500/50 hover:shadow-lg hover:shadow-blue-500/10"
                  : "bg-white/80 text-neutral-700 border border-neutral-200 hover:border-blue-400 hover:shadow-md"
                }
              `}
            >
              {s}
            </span>
          ))}
        </div>

        <div className="mt-3 flex justify-end">
          <button
            onClick={() => setOpen(true)}
            className={`inline-flex items-center gap-2 text-xs font-semibold transition-all hover:gap-3
              ${darkMode ? "text-blue-400 hover:text-blue-300" : "text-blue-600 hover:text-blue-500"}
            `}
          >
            View All <IoArrowForward />
          </button>
        </div>
      </div>

      {/* MODAL */}
      {open && (
        <div className="fixed inset-0 z-100 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div
            className={`w-full max-w-2xl rounded-3xl overflow-hidden shadow-2xl
              ${darkMode ? "bg-neutral-900" : "bg-white"}
            `}
          >
            <div className={`flex justify-between items-center p-6 border-b ${darkMode ? "border-neutral-800" : "border-neutral-200"}`}>
              <h3 className={`font-bold text-xl ${darkMode ? "text-neutral-900" : "text-white"}`}>Full Tech Stack</h3>
              <button
                onClick={() => setOpen(false)}
                className={`p-2 rounded-full transition-colors ${darkMode ? "hover:bg-neutral-800 text-white" : "hover:bg-neutral-100 text-black"}`}
              >
                ✕
              </button>
            </div>

            <div className={`p-6 space-y-6 max-h-[70vh] overflow-y-auto ${darkMode ? "bg-neutral-950/50" : "bg-neutral-50/50"}`}>
              {Object.entries(categorizedStack).map(([category, items]) => (
                <div key={category}>
                  <h4
                    className={`text-sm font-bold mb-3 uppercase tracking-wider
                      ${darkMode ? "text-blue-400" : "text-blue-600"}
                    `}
                  >
                    {category}
                  </h4>

                  <div className="flex flex-wrap gap-2">
                    {items.map((t) => (
                      <span
                        key={t}
                        className={`px-3 py-1.5 rounded-lg text-sm font-medium
                          ${darkMode ? "bg-neutral-800 text-neutral-300" : "bg-white text-neutral-700 border border-neutral-200"}
                        `}
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
