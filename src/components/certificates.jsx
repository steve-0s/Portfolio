import { useState } from "react";
import { IoDocumentTextOutline } from "react-icons/io5";

export default function Certifications({ darkMode }) {
  const [open, setOpen] = useState(null);

  const certs = [
    { name: "Smartbooks And Power BI", file: "/certificates/FIT-SM202402192579.pdf", issuer: "FIT Academy" },
    { name: "Google AI Essentials", file: "/certificates/Coursera_F9S1QXNGHH7F.pdf", issuer: "Coursera" },
  ];

  return (
    <>
      <div className={`rounded-3xl p-5 border shadow-lg backdrop-blur-md transition-all
        ${darkMode
          ? "bg-neutral-900/40 border-neutral-700/50 hover:shadow-emerald-900/10"
          : "bg-white/60 border-white/60 hover:shadow-neutral-200"
        }
      `}>

        <h2 className={`text-lg font-bold font-display mb-3
          ${darkMode ? "text-white" : "text-neutral-900"}
        `}>
          Certifications
        </h2>

        <div className="space-y-2">
          {certs.map((c) => (
            <button
              key={c.name}
              onClick={() => setOpen(c)}
              className={`w-full text-left px-3 py-2.5 rounded-lg transition-all hover:scale-[1.01] hover:-translate-y-0.5 group
                ${darkMode
                  ? "bg-neutral-800/60 border border-neutral-700/50 hover:border-violet-500/50 hover:shadow-lg hover:shadow-violet-500/10"
                  : "bg-white/80 border border-neutral-200 hover:border-blue-500/50 hover:shadow-md"}
              `}
            >
              <div className="flex items-start gap-2">
                <IoDocumentTextOutline className={`text-base mt-0.5 transition-colors ${darkMode ? "text-violet-400 group-hover:text-violet-300" : "text-blue-600 group-hover:text-blue-500"}`} />
                <div className="flex-1">
                  <p className={`font-semibold text-xs mb-0.5 ${darkMode ? "text-white" : "text-neutral-900"}`}>
                    {c.name}
                  </p>
                  <p className={`text-xs ${darkMode ? "text-neutral-400" : "text-neutral-600"}`}>
                    {c.issuer}
                  </p>
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>

      {open && (
        <div className="fixed inset-0 z-100 flex items-center justify-center bg-black/80 backdrop-blur-sm p-3 sm:p-4">
          <div className={`w-full max-w-5xl sm:max-w-6xl h-[80vh] sm:h-[85vh] rounded-2xl sm:rounded-3xl overflow-hidden flex flex-col shadow-2xl
            ${darkMode ? "bg-neutral-900" : "bg-white"}`}
          >
            <div className={`flex justify-between items-center p-3 sm:p-4 border-b ${darkMode ? "border-neutral-800" : "border-neutral-200"}`}>
              <h3 className={`font-semibold text-sm sm:text-base ${darkMode ? "text-white" : "text-neutral-900"}`}>{open.name}</h3>
              <button
                onClick={() => setOpen(null)}
                className={`p-2 rounded-full transition-colors ${darkMode ? "hover:bg-neutral-800 text-white" : "hover:bg-neutral-100 text-black"}`}
              >
                ✕
              </button>
            </div>

            <div className="flex-1 bg-neutral-100 dark:bg-neutral-950 p-1 sm:p-2 overflow-hidden">
              <iframe
                src={open.file}
                className="w-full h-full rounded-lg sm:rounded-xl"
                title="Certificate Preview"
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
