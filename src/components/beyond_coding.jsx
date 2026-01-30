export default function BeyondCoding({ darkMode }) {
    return (
        <div
            className={`rounded-3xl p-5 border shadow-lg backdrop-blur-md transition-all
        ${darkMode
                    ? "bg-neutral-900/40 border-neutral-700/50"
                    : "bg-white/60 border-white/60"
                }
      `}
        >
            <h3
                className={`text-lg font-bold font-display mb-3
        ${darkMode ? "text-white" : "text-neutral-900"}`}
            >
                Beyond Coding
            </h3>

            <p className={`text-xs leading-relaxed italic ${darkMode ? "text-neutral-300" : "text-neutral-700"}`}>
                When I'm not coding, I like staying active at the gym to keep myself balanced. In my free time, I usually play
                games to chill and hang out with friends. I'm really into music, especially R&B and soul vibes. I listen to a mix of
                rock, slow rock, some metal, and rap. My go-to artists are Daniel Caesar, Wave to Earth, Tyler, The Creator, Brent Faiyaz,
                and Joji.
            </p>
        </div>
    );
}
