export default function HeroSection() {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-secondary-gray/30 to-white pt-20">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 py-16">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-secondary-black leading-tight">
            Transformar caos en{' '}
            <span className="text-primary-red">claridad</span>
          </h1>

          <p className="text-xl md:text-2xl text-secondary-black/80 font-light max-w-3xl mx-auto">
            Consultoría estratégica en finanzas, gestión y crecimiento empresarial
          </p>

          <div className="bg-primary-red/10 border-l-4 border-primary-red p-6 rounded-lg max-w-2xl mx-auto">
            <h2 className="text-2xl font-bold text-secondary-black mb-4">
              Santiago Lopera Mesa
            </h2>
            <p className="text-secondary-black/90 leading-relaxed">
              Consultor Estratégico en Finanzas, Gestión y Crecimiento Empresarial
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
            <a
              href="#contacto"
              className="bg-primary-red text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-opacity-90 transition-all duration-300 hover:scale-105 shadow-lg"
            >
              Agendar Sesión Exploratoria
            </a>
            <a
              href="#sobre-mi"
              className="border-2 border-secondary-black text-secondary-black px-8 py-4 rounded-full font-semibold text-lg hover:bg-secondary-black hover:text-white transition-all duration-300"
            >
              Conocer más
            </a>
          </div>

          <div className="pt-12 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
            <div className="text-center">
              <div className="text-4xl font-bold text-primary-red mb-2">17+</div>
              <div className="text-secondary-black/70">Años de experiencia</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary-red mb-2">6</div>
              <div className="text-secondary-black/70">Países en Latinoamérica</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary-red mb-2">+50</div>
              <div className="text-secondary-black/70">Empresas transformadas</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
