export default function Footer({ darkMode }) {
  return (
    <footer className={`relative py-12 text-center overflow-hidden
      ${darkMode ? "bg-neutral-950/50" : "bg-neutral-100/50"}
    `}>
      {/* Decorative gradient */}
      <div className={`absolute top-0 left-1/2 -translate-x-1/2 w-64 h-px bg-linear-to-r from-transparent opacity-50
        ${darkMode ? "via-violet-500" : "via-blue-500"} to-transparent`} />

      <div className="relative z-10">
        <p className={`text-xs
          ${darkMode ? "text-neutral-500" : "text-neutral-500"}
        `}>
          © {new Date().getFullYear()} Stevens Anthony Fabriga. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
