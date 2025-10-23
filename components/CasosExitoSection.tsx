export default function CasosExitoSection() {
  const casos = [
    {
      empresa: 'PUKPET',
      sector: 'Comercializadora de Mascotas (Textil)',
      descripcion: 'Reestructuración de procesos en producción y distribución, logrando un acompañamiento estratégico comercial.'
    },
    {
      empresa: 'FELICIA',
      sector: 'Veterinarios a Domicilio',
      descripcion: 'Organización de las cifras del negocio. Definición de indicadores clave y plan estratégico basado en marketing digital y referidos.'
    },
    {
      empresa: 'SNATCH',
      sector: 'Gimnasios',
      descripcion: 'Organización financiera, elaboración del plan de negocio, presupuesto de capital de trabajo para una nueva apertura.'
    },
    {
      empresa: 'AFS',
      sector: 'Importadora y Comercializadora',
      descripcion: 'Organización financiera, diseño de análisis de portafolio, control del nuevo gerente y estructuración de estrategias comerciales.'
    },
    {
      empresa: 'JOTAGRO',
      sector: 'Comercializadora de Productos Veterinarios',
      descripcion: 'Formación gerencial y acompañamiento en finanzas, acompañamiento estratégico, optimización de costos, estructuración y seguimiento de relevo generacional, empoderamiento del nuevo liderazgo.'
    },
    {
      empresa: 'DOLVET',
      sector: 'Golosinas y Juguetería',
      descripcion: 'Formación de creadores en el manejo empresarial, transformación del manejo de la empresa y visión de largo plazo, creación del modelo de expansión y de nuevas líneas de negocio.'
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
                <div className="w-16 h-16 bg-primary-red rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <span className="text-white text-xl font-bold">{caso.empresa.charAt(0)}</span>
                </div>
                <h3 className="text-xl font-bold text-primary-red mb-2">{caso.empresa}</h3>
                <p className="text-sm text-secondary-black/60 mb-3">{caso.sector}</p>
                <p className="text-secondary-black/80 text-sm leading-relaxed">{caso.descripcion}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
