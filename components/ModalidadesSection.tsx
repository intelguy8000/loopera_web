export default function ModalidadesSection() {
  return (
    <section id="modalidades" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary-black mb-4 text-center">
            Modalidades de Trabajo
          </h2>
          <p className="text-xl text-secondary-black/70 mb-12 text-center max-w-3xl mx-auto">
            LOOP + ERA
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* LOOP */}
            <div className="bg-gradient-to-br from-primary-red/10 to-primary-red/5 p-8 rounded-2xl shadow-sm hover:shadow-md transition-all">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-primary-red rounded-full flex items-center justify-center">
                  <span className="text-white text-2xl font-bold">L</span>
                </div>
                <h3 className="text-2xl font-bold text-secondary-black">LOOP</h3>
              </div>

              <p className="text-lg text-secondary-black/90 mb-6 font-semibold">
                Diagnóstico inicial. Identificamos dolores, entendemos el contexto real de la empresa y definimos el &quot;qué&quot; que debemos mejorar, qué procesos fortalecer, qué productos potenciar.
              </p>

              <div className="space-y-3 text-secondary-black/80">
                <p className="leading-relaxed">
                  El Loop conecta la claridad; la Era abre una nueva visión de futuro.
                </p>
              </div>
            </div>

            {/* ERA */}
            <div className="bg-gradient-to-br from-secondary-blue/10 to-secondary-blue/5 p-8 rounded-2xl shadow-sm hover:shadow-md transition-all">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-secondary-blue rounded-full flex items-center justify-center">
                  <span className="text-white text-2xl font-bold">E</span>
                </div>
                <h3 className="text-2xl font-bold text-secondary-black">ERA</h3>
              </div>

              <p className="text-lg text-secondary-black/90 mb-6 font-semibold">
                La nueva etapa. Diseñamos el &quot;cómo&quot;: cómo ejecutar cambios, cómo fortalecer equipos, cómo transformar el negocio en una nueva realidad sostenible y de alto valor.
              </p>

              <div className="space-y-3 text-secondary-black/80">
                <p className="leading-relaxed">
                  El Loop conecta la claridad; la Era abre una nueva visión de futuro.
                </p>
              </div>
            </div>
          </div>

          {/* Beneficios */}
          <div className="mt-16 bg-secondary-gray/20 p-8 rounded-2xl">
            <h3 className="text-2xl font-bold text-secondary-black mb-6 text-center">
              Transformar un negocio no requiere grandes cambios,<br />
              sino decisiones valientes y un buen acompañamiento
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
              <div className="flex items-start gap-3">
                <span className="text-primary-red text-2xl">✓</span>
                <p className="text-secondary-black/80">Claridad en los números y decisiones.</p>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-primary-red text-2xl">✓</span>
                <p className="text-secondary-black/80">Procesos y equipos organizados para crecer con control.</p>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-primary-red text-2xl">✓</span>
                <p className="text-secondary-black/80">Liderazgo fortalecido para dirigir con propósito.</p>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-primary-red text-2xl">✓</span>
                <p className="text-secondary-black/80">Equilibrio entre la vida del empresario y el crecimiento del negocio.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
