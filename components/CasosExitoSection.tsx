import Image from 'next/image';

export default function CasosExitoSection() {
  const casos = [
    {
      empresa: 'De Lolita',
      logo: '/logos/casos-exito/de-lolita.png',
      descripcion: 'Transformé una cadena de cafés fragmentada en una organización con liderazgo en cada punto de venta. Formé a sus encargados en finanzas, indicadores, inventarios y servicio, logrando que cada tienda operara como una unidad rentable y autónoma. El cambio se reflejó en mejores ventas, mayor rentabilidad y una cultura de gestión sólida.'
    },
    {
      empresa: 'Alitas Colombianas',
      logo: '/logos/casos-exito/alitas-colombianas.jpg',
      descripcion: 'Reinventamos por completo su proceso productivo: pasaron de una operación ineficiente y riesgosa a un modelo industrial de precocción, abatimiento y empaque al vacío. El producto ganó 30 días de vida útil, se redujo el consumo de aceite en más de $500 millones anuales y se estandarizó la calidad. Una verdadera revolución en eficiencia y rentabilidad.'
    },
    {
      empresa: 'Jotagro',
      logo: '/logos/casos-exito/jotagro.png',
      descripcion: 'Acompañé la transición generacional tras el fallecimiento del fundador. Formé a la nueva gerente en liderazgo, finanzas y dirección estratégica. Desde entonces, la empresa ha fortalecido su gestión comercial, logística y control, con un modelo de gobierno que asegura sostenibilidad y crecimiento.'
    },
    {
      empresa: 'APS Supply',
      logo: '/logos/casos-exito/aps-supply.jpg',
      descripcion: 'Durante tres años lideré el proceso de relevo generacional y transformación estratégica. Formé al nuevo gerente, estructuramos finanzas, estrategia comercial y gobierno corporativo. Hoy, la empresa crece de forma sólida y hago parte de su junta directiva como asesor estratégico.'
    },
    {
      empresa: 'Felicia',
      logo: null,
      descripcion: 'Convertimos una idea de veterinarios a domicilio en un negocio sostenible. Ordenamos sus finanzas, estructuramos la estrategia comercial y acompañé a su fundadora en la toma de decisiones clave para escalar con rentabilidad y claridad.'
    },
    {
      empresa: 'Smatch',
      logo: '/logos/casos-exito/smatch.jpg',
      descripcion: 'Reestructuramos la estrategia financiera y de mercadeo de este gimnasio de alto rendimiento. Diseñamos su presupuesto de expansión y trasladamos su operación a una nueva sede con un modelo de costos eficiente y proyección de crecimiento.'
    },
    {
      empresa: 'Masa Excavaciones',
      logo: '/logos/casos-exito/masa-excavaciones.jpg',
      descripcion: 'Construimos un tablero de control integral que conecta cada área con los resultados del negocio. Definimos KPI\'s, formamos equipos y logramos una gestión basada en datos, claridad y velocidad para tomar decisiones.'
    },
    {
      empresa: 'Fukutex',
      logo: '/logos/casos-exito/fukutex.png',
      descripcion: 'Estoy acompañando a la segunda generación en la profesionalización de su empresa textil. Juntos hemos definido estrategia comercial, estructura del equipo, presupuestos y controles para impulsar un crecimiento ordenado y sostenible.'
    },
    {
      empresa: 'El Güey Taquería',
      logo: '/logos/casos-exito/el-guey.png',
      descripcion: 'Acompaño a dos emprendedores en convertir su taquería en una cadena. Comenzamos con formación financiera y de gestión, y ahora estamos estructurando su plan de expansión a seis puntos, con procesos, marca y números listos para escalar con éxito.'
    }
  ];

  return (
    <section id="casos-exito" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary-black mb-12 text-center">
            Casos de Éxito
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {casos.map((caso, index) => (
              <div key={index} className="bg-secondary-gray/10 p-6 rounded-xl hover:shadow-lg transition-all group">
                <div className="h-20 mb-4 flex items-center justify-start group-hover:scale-105 transition-transform">
                  {caso.logo ? (
                    <div className="relative h-full w-auto max-w-[160px]">
                      <Image
                        src={caso.logo}
                        alt={`Logo ${caso.empresa}`}
                        width={160}
                        height={80}
                        className="object-contain h-full w-auto"
                      />
                    </div>
                  ) : (
                    <div className="w-16 h-16 bg-primary-red rounded-full flex items-center justify-center">
                      <span className="text-white text-xl font-bold">{caso.empresa.charAt(0)}</span>
                    </div>
                  )}
                </div>
                <h3 className="text-xl font-bold text-primary-red mb-4">{caso.empresa}</h3>
                <p className="text-secondary-black/80 text-sm leading-relaxed">{caso.descripcion}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
