'use client';

export default function ContactoSection() {
  return (
    <section id="contacto" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary-black mb-6 text-center">
            Agendar una Sesión Exploratoria sin costo
          </h2>

          <div className="bg-primary-red/10 border-2 border-primary-red p-8 rounded-2xl mb-12">
            <p className="text-xl text-secondary-black text-center mb-6">
              ¿Listo para transformar tu negocio?
            </p>
            <div className="space-y-4 text-secondary-black/80 text-center">
              <p>Hablemos sobre tu situación actual y cómo podemos trabajar juntos para llevar tu empresa al siguiente nivel.</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Email */}
            <div className="text-center p-6 bg-secondary-gray/10 rounded-xl">
              <div className="w-16 h-16 bg-primary-red rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="font-semibold text-secondary-black mb-2">Email</h3>
              <a href="mailto:santiago.lopera@loopera.co" className="text-primary-red hover:underline">
                santiago.lopera@loopera.co
              </a>
            </div>

            {/* WhatsApp */}
            <div className="text-center p-6 bg-secondary-gray/10 rounded-xl">
              <div className="w-16 h-16 bg-[#25D366] rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                </svg>
              </div>
              <h3 className="font-semibold text-secondary-black mb-2">WhatsApp</h3>
              <a href="https://wa.me/573162888832" target="_blank" rel="noopener noreferrer" className="text-[#25D366] hover:underline">
                +57 (316) 288-8832
              </a>
            </div>

            {/* LinkedIn */}
            <div className="text-center p-6 bg-secondary-gray/10 rounded-xl">
              <div className="w-16 h-16 bg-[#0A66C2] rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </div>
              <h3 className="font-semibold text-secondary-black mb-2">LinkedIn</h3>
              <a href="https://www.linkedin.com/in/santiago-lopera-mesa" target="_blank" rel="noopener noreferrer" className="text-[#0A66C2] hover:underline">
                Santiago Lopera Mesa
              </a>
            </div>
          </div>

          {/* CTA Principal */}
          <div className="mt-12 text-center">
            <a
              href="https://wa.me/573162888832?text=Hola%20Santiago%2C%20me%20gustaría%20agendar%20una%20sesión%20exploratoria"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-primary-red text-white px-12 py-4 rounded-full font-semibold text-lg hover:bg-opacity-90 transition-all duration-300 hover:scale-105 shadow-lg"
            >
              Agenda tu Sesión Gratis
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
