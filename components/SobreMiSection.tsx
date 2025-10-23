export default function SobreMiSection() {
  return (
    <section id="sobre-mi" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Imagen placeholder - puedes reemplazar con la foto de Santiago */}
            <div className="relative">
              <div className="aspect-square bg-secondary-gray/30 rounded-2xl overflow-hidden">
                {/* Placeholder para imagen de Santiago */}
                <div className="w-full h-full flex items-center justify-center text-secondary-black/30">
                  <svg className="w-32 h-32" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                  </svg>
                </div>
              </div>
            </div>

            {/* Contenido */}
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-secondary-black">
                Sobre mí
              </h2>

              <p className="text-lg text-secondary-black/80 leading-relaxed">
                Soy Santiago Lopera, Administrador de Empresas con especialización en Finanzas Corporativas y más de 17 años de experiencia en cargos directivos.
              </p>

              <p className="text-lg text-secondary-black/80 leading-relaxed">
                Desde 2020 acompaño empresas de diversos sectores a tomar mejores decisiones, mejorar sus resultados y crecer con propósito.
              </p>

              <div className="space-y-4 pt-4">
                <h3 className="text-xl font-semibold text-primary-red">Me mueven:</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <span className="text-primary-red mt-1">•</span>
                    <span className="text-secondary-black/80">
                      <strong>Confianza en las relaciones.</strong>
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary-red mt-1">•</span>
                    <span className="text-secondary-black/80">
                      <strong>Impacto real en las personas y negocios.</strong>
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary-red mt-1">•</span>
                    <span className="text-secondary-black/80">
                      <strong>Equilibrio entre vida y empresa.</strong>
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
