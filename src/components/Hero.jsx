
export default function About() {
  return (
    <section id="Inicio" className="min-h-screen flex flex-col justify-center items-center bg-[#0d0d0d] text-white px-6 text-center">
      <div className="max-w-3xl">
        <p className="text-sm uppercase tracking-widest text-gray-400 mb-6">
          Desarrollador Web • Diseñador UI • Freelancer
        </p>

        <h1 className="text-4xl sm:text-5xl font-bold leading-tight mb-4">
          Hola, soy <span className="inline-flex items-center gap-2">
            Hector
            <img
              src='/profile.png'
              alt="Foto de perfil"
              className="w-10 h-10 rounded-full object-cover"
            />
          </span>
        </h1>

        <p className="text-xl text-gray-300 mb-8">
          Actualmente estudio desarrollo web y diseño para en el futuro ayudar a empresas a mejorar su presencia digital.
        </p>

        <a
          href="#contact"
          className="inline-block bg-purple-600 hover:bg-purple-700 transition text-white font-semibold px-6 py-3 rounded-full"
        >
          Contáctame
        </a>

        

        <p className="mt-6 text-xs text-gray-500 tracking-wide">
          Proyectos destacados & colaboraciones
        </p>
      </div>
    </section>
  );
}
