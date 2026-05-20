export default function PortfolioLaCabra() {
  const managerExp = [
    ["ArkanMc", "Staff Manager", "Actual"],
    ["KagadaMc", "Coord Staff y Manager Media", "Resign"],
    ["RazBoxNet", "Staff Manager", "Actual"],
    ["WillowMC", "Dueño", "Resign"],
    ["KarionNetwork", "Dueño", "Resign"],
    ["ValkyMC", "Coordinador", "Resign"],
    ["RotiunMC", "Manager", "Cerró"],
    ["TheronMC", "Owner", "Resign"],
    ["MineNight", "Co-Dueño", "Resign"],
    ["MineDox", "Manager", "Resign"],
    ["Celestial Network", "Operador", "Resign"],
  ];

  const communities = [
    ["BoxPvP Tierlist", "Operador", "Resign"],
    ["Lunar Ember", "Manager / Owner", "Cerró"],
    ["Camilolocho Community", "Manager", "Actual"],
    ["Goldy Community", "Operador", "Actual"],
    ["zNico Community", "Helper", "Resign"],
    ["Sloter Community", "Helper", "Resign"],
  ];

  const staffExp = [
    ["MineSplash", "Mod", "Resign"],
    ["SpookMC", "Mod", "Resign"],
    ["PrismaMC", "Chat-Mod", "Resign"],
    ["SunCraft", "T-Mod", "Resign"],
    ["Valkyrian", "Sr.Admin", "Resign"],
    ["AstralMC", "Mod+", "Resign"],
    ["NightBox", "Mod", "Resign"],
  ];

  const reviews = [
    {
      name: "LeadVal",
      role: "Owner de MineSplash",
      text: "Cabra es un staff fiel y dedicado. Destacó mucho en entrevistas y moderación, manteniendo buena actividad y evitando errores.",
    },
    {
      name: "Mothon",
      role: "MineNight / TheronMC",
      text: "Es muy trabajador y sabe manejar un servidor completo. Tiene experiencia, liderazgo y siempre ayuda en todo.",
    },
    {
      name: "Mate / zSnowyxz",
      role: "Ex compañero",
      text: "Fue un gran compañero y moderador. Nunca causó problemas y trabajaba muy bien en equipo.",
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden font-sans">
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/40 via-black to-cyan-900/40" />

      <header className="relative z-10 px-6 py-20 text-center">
        <div className="inline-block px-4 py-2 rounded-full bg-white/10 border border-white/20 mb-6 backdrop-blur-xl animate-pulse">
           Staff Manager Portfolio
        </div>

        <h1 className="text-6xl md:text-8xl font-black tracking-tight bg-gradient-to-r from-cyan-400 via-white to-purple-500 text-transparent bg-clip-text">
          LA CABRA
        </h1>

        <p className="mt-6 text-xl md:text-2xl text-gray-300 font-medium">
          Staff Manager • Community Manager • Minecraft Moderator
        </p>

        <div className="mt-10 max-w-4xl mx-auto text-gray-400 text-lg leading-relaxed">
          Hola, soy <span className="text-cyan-400 font-bold">La Cabra</span>, tengo 16 años y cuento con más de 8 meses de experiencia como Staff Manager y más de 1 año trabajando en distintos servidores grandes y pequeños.
          Aprendí a manejar comunidades, organizar equipos de staff, moderar servidores y trabajar de forma profesional dentro de proyectos a largo plazo.
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16 max-w-5xl mx-auto">
          <StatCard title="8+" subtitle="Meses como Manager" />
          <StatCard title="15+" subtitle="Servidores trabajados" />
          <StatCard title="7h" subtitle="Actividad diaria" />
        </div>
      </header>

      <main className="relative z-10 px-6 pb-20 space-y-20 max-w-7xl mx-auto">
        <SectionTitle emoji="" title="Experiencia como Manager" />
        <ExperienceGrid data={managerExp} />

        <SectionTitle emoji="" title="Experiencia en Comunidades" />
        <ExperienceGrid data={communities} />

        <SectionTitle emoji="" title="Experiencia como Staff" />
        <ExperienceGrid data={staffExp} />

        <section className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-xl hover:scale-[1.02] transition duration-300 shadow-2xl">
            <h2 className="text-3xl font-bold mb-6 text-cyan-400"> Sobre SS</h2>
            <p className="text-gray-300 leading-relaxed text-lg">
              No soy experto en SS, pero cuento con conocimientos básicos y sé defenderme correctamente.
              Actualmente sigo aprendiendo para mejorar más en este apartado.
            </p>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-xl hover:scale-[1.02] transition duration-300 shadow-2xl">
            <h2 className="text-3xl font-bold mb-6 text-purple-400"> Datos Extras</h2>

            <div className="space-y-4 text-gray-300 text-lg">
              <Extra text="Constancia en proyectos a largo plazo." />
              <Extra text="Capacidad para trabajar de forma autónoma." />
              <Extra text="Buen trabajo en equipo." />
              <Extra text="Respeto hacia roles técnicos y creativos." />
              <Extra text="Actividad de 5 a 7 horas diarias." />
              <Extra text="Conocimientos básicos de comandos." />
            </div>
          </div>
        </section>

        <section>
          <SectionTitle emoji="💬" title="Reseñas" />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-10">
            {reviews.map((review, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-white/10 to-white/5 border border-white/10 rounded-3xl p-8 hover:-translate-y-2 transition duration-300 shadow-2xl"
              >
                <div className="text-5xl mb-4">❝</div>

                <p className="text-gray-300 leading-relaxed text-lg">
                  {review.text}
                </p>

                <div className="mt-8 border-t border-white/10 pt-4">
                  <h3 className="font-bold text-xl text-cyan-400">
                    {review.name}
                  </h3>
                  <p className="text-gray-500">{review.role}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="relative overflow-hidden rounded-[40px] border border-cyan-500/20 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 p-12 text-center shadow-[0_0_80px_rgba(0,255,255,0.15)]">
          <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_top_right,cyan,transparent_40%)]" />

          <div className="relative z-10">
            <h2 className="text-5xl font-black bg-gradient-to-r from-cyan-400 to-purple-400 text-transparent bg-clip-text">
              DISPONIBLE!
            </h2>

            <p className="mt-6 text-gray-300 text-xl max-w-3xl mx-auto leading-relaxed">
              Experiencia, actividad, liderazgo y compromiso para llevar cualquier proyecto al siguiente nivel.
            </p>

            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <button className="px-8 py-4 rounded-2xl bg-cyan-500 hover:bg-cyan-400 text-black font-bold text-lg transition duration-300 hover:scale-105 shadow-lg shadow-cyan-500/40">
                Staff Manager
              </button>

              <button className="px-8 py-4 rounded-2xl bg-purple-500 hover:bg-purple-400 text-white font-bold text-lg transition duration-300 hover:scale-105 shadow-lg shadow-purple-500/40">
                 Community Manager
              </button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

function StatCard({ title, subtitle }) {
  return (
    <div className="group bg-white/5 border border-white/10 rounded-3xl p-10 backdrop-blur-xl hover:scale-105 hover:border-cyan-400/50 transition duration-300 shadow-2xl">
      <h2 className="text-5xl font-black text-cyan-400 group-hover:text-white transition duration-300">
        {title}
      </h2>
      <p className="mt-4 text-gray-400 text-lg">{subtitle}</p>
    </div>
  );
}

function SectionTitle({ emoji, title }) {
  return (
    <div className="flex items-center gap-4 mb-10">
      <div className="text-4xl">{emoji}</div>
      <h2 className="text-4xl md:text-5xl font-black bg-gradient-to-r from-white to-gray-500 text-transparent bg-clip-text">
        {title}
      </h2>
    </div>
  );
}

function ExperienceGrid({ data }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
      {data.map((item, index) => (
        <div
          key={index}
          className="group bg-white/5 border border-white/10 rounded-3xl p-7 backdrop-blur-xl hover:scale-[1.03] hover:border-purple-400/50 transition duration-300 shadow-xl"
        >
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-2xl font-bold text-white group-hover:text-cyan-400 transition">
              {item[0]}
            </h3>

            <span
              className={`px-3 py-1 rounded-full text-sm font-bold ${
                item[2] === "Actual"
                  ? "bg-green-500/20 text-green-400"
                  : item[2] === "Cerró"
                  ? "bg-yellow-500/20 text-yellow-400"
                  : "bg-red-500/20 text-red-400"
              }`}
            >
              {item[2]}
            </span>
          </div>

          <p className="text-gray-400 text-lg">{item[1]}</p>
        </div>
      ))}
    </div>
  );
}

function Extra({ text }) {
  return (
    <div className="flex items-center gap-4 bg-white/5 rounded-2xl p-4 hover:bg-white/10 transition duration-300">
      <div className="text-cyan-400 text-2xl">✔</div>
      <p>{text}</p>
    </div>
  );
}
