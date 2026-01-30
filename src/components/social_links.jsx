import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function SocialLinks({ darkMode }) {
  const socials = [
    { name: "GitHub", icon: FaGithub, href: "https://github.com/steve-0s", color: "from-gray-700 to-gray-900" },
    { name: "LinkedIn", icon: FaLinkedin, href: "https://ph.linkedin.com/in/stevens-anthony-m-fabriga-1578b32b5", color: "from-blue-600 to-blue-700" },
    { name: "Email", icon: FaEnvelope, href: "mailto:stevensanthonyf@gmail.com", color: "from-red-500 to-pink-600" },
  ];

  return (
    <section id="connect" className="py-6">
      <div
        className={`rounded-3xl p-6 border shadow-lg backdrop-blur-md transition-all
          ${darkMode
            ? "bg-neutral-900/40 border-neutral-700/50"
            : "bg-white/60 border-white/60"
          }
        `}
      >
        <h3
          className={`text-lg font-bold font-display text-center mb-5
          ${darkMode ? "text-white" : "text-neutral-900"}`}
        >
          Let's Connect
        </h3>

        <div className="flex flex-wrap justify-center gap-3">
          {socials.map((s) => (
            <a
              key={s.name}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`group flex items-center gap-2.5 px-4 py-2.5 rounded-xl font-medium transition-all hover:scale-105 hover:-translate-y-1
                ${darkMode
                  ? "bg-neutral-800/60 border border-neutral-700/50 hover:border-violet-500/50 text-white hover:shadow-lg hover:shadow-violet-500/10"
                  : "bg-white/80 border border-neutral-200 hover:border-blue-500/50 text-neutral-900 hover:shadow-lg"}
              `}
            >
              <span className={`p-1.5 rounded-lg bg-linear-to-br ${s.color} text-white transition-transform group-hover:scale-110`}>
                <s.icon className="text-sm" />
              </span>
              <span className="font-semibold text-sm">{s.name}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
