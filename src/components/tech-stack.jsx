import { useState, useRef, useEffect } from "react";
import { IoArrowForward, IoChevronBack, IoChevronForward } from "react-icons/io5";
import {
  SiReact, SiTailwindcss, SiLaravel, SiJavascript,
  SiCss3, SiPhp, SiCplusplus, SiNodedotjs, SiMysql,
  SiMongodb, SiGithub, SiFigma, SiHtml5, SiPython, SiPostgresql
} from "react-icons/si";
import { TbBrandReactNative } from "react-icons/tb";

// Icon mapping for available technologies
const techIcons = {
  "React": SiReact,
  "React Native": TbBrandReactNative,
  "Tailwind": SiTailwindcss,
  "Laravel": SiLaravel,
  "JavaScript": SiJavascript,
  "CSS": SiCss3,
  "PHP": SiPhp,
  "C++": SiCplusplus,
  "Node.js": SiNodedotjs,
  "MySQL": SiMysql,
  "MongoDB": SiMongodb,
  "GitHub": SiGithub,
  "Figma": SiFigma,
  "HTML": SiHtml5,
  "Python": SiPython,
  "PostgreSQL": SiPostgresql,
};

export default function TechStack({ darkMode }) {
  const [open, setOpen] = useState(false);
  const scrollContainerRef = useRef(null);

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

  // Auto-scroll effect with smooth infinite loop
  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    let animationFrameId;
    let scrollSpeed = 0.5; // Pixels per frame

    const animate = () => {
      if (container) {
        container.scrollLeft += scrollSpeed;

        // When we reach the end, smoothly reset to beginning
        if (container.scrollLeft >= container.scrollWidth / 2) {
          container.scrollLeft = 0;
        }
      }
      animationFrameId = requestAnimationFrame(animate);
    };

    animationFrameId = requestAnimationFrame(animate);

    return () => {
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, []);

  const scroll = (direction) => {
    if (scrollContainerRef.current) {
      const scrollAmount = 300;
      scrollContainerRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <>
      <div
        className={`rounded-3xl p-5 border shadow-lg backdrop-blur-md transition-all group
          ${darkMode
            ? "bg-neutral-900/40 border-neutral-700/50 hover:shadow-blue-900/10"
            : "bg-white/60 border-white/60 hover:shadow-neutral-200"
          }
        `}
      >
        <h2 className={`text-lg font-bold font-display mb-3
          ${darkMode ? "text-white" : "text-neutral-900"}
        `}>
          Tech Stack
        </h2>

        {/* Carousel Container */}
        <div
          ref={scrollContainerRef}
          className="flex gap-3 overflow-x-auto scrollbar-hide pb-2"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {/* Render items twice for seamless infinite scroll */}
          {[...mainStack, ...mainStack].map((tech, index) => {
            const Icon = techIcons[tech];
            return (
              <div
                key={`${tech}-${index}`}
                className={`flex items-center gap-2 px-4 py-3 rounded-xl transition-colors cursor-default shrink-0
                  ${darkMode
                    ? "bg-neutral-800/60 text-neutral-300 border border-neutral-700/50"
                    : "bg-white/80 text-neutral-700 border border-neutral-200"
                  }
                `}
              >
                {Icon && <Icon size={20} />}
                <span className="text-xs font-medium whitespace-nowrap">{tech}</span>
              </div>
            );
          })}
        </div>

        <div className="mt-3 flex justify-end">
          <button
            onClick={() => setOpen(true)}
            className={`inline-flex items-center gap-2 text-xs font-semibold transition-all hover:gap-3
              ${darkMode ? "text-violet-400 hover:text-violet-300" : "text-blue-600 hover:text-blue-500"}
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
              <h3 className={`font-bold text-xl ${darkMode ? "text-white" : "text-neutral-900"}`}>Full Tech Stack</h3>
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
                    {items.map((t) => {
                      const Icon = techIcons[t];
                      return (
                        <span
                          key={t}
                          className={`flex items-center gap-2 px-3 py-1.5 rounded-lg text-sm font-medium
                            ${darkMode ? "bg-neutral-800 text-neutral-300" : "bg-white text-neutral-700 border border-neutral-200"}
                          `}
                        >
                          {Icon && <Icon size={16} />}
                          {t}
                        </span>
                      );
                    })}
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
