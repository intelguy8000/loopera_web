import Image from 'next/image';

export default function SobreMiSection() {
  return (
    <section id="sobre-mi" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Foto de Santiago Lopera */}
            <div className="relative">
              <div className="aspect-square rounded-2xl overflow-hidden shadow-lg">
                <Image
                  src="/santiago-lopera.jpg"
                  alt="Santiago Lopera Mesa - Consultor Estratégico"
                  width={800}
                  height={800}
                  className="w-full h-full object-cover"
                  priority
                />
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
