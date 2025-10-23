export default function ServiciosSection() {
  const servicios = [
    {
      title: 'Estrategia y Dirección Empresarial',
      items: [
        'Acompañamiento gerencial personalizado.',
        'Formación de líderes para la dirección estratégica.',
        'Diseño y optimización de juntas asesoras.',
        'Apoyo en procesos de relevo generacional en empresas familiares.'
      ]
    },
    {
      title: 'Finanzas Empresariales',
      items: [
        'Diagnóstico y organización financiera integral.',
        'Análisis y optimización del flujo de caja.',
        'Proyecciones, presupuestos y estructuración de escenarios de alto impacto.',
        'Formación en lectura financiera y toma de decisiones basadas en datos.'
      ]
    },
    {
      title: 'Procesos e Indicadores',
      items: [
        'Diseño de KPIs y tableros de control.',
        'Organización y optimización de procesos.',
        'Rutinas de seguimiento y toma de decisiones basadas en datos.'
      ]
    },
    {
      title: 'Comercial y Mercadeo',
      items: [
        'Estrategias comerciales a corto y mediano plazo.',
        'Formación de equipos de ventas.',
        'Fortalecimiento del liderazgo en la cultura empresarial.'
      ]
    }
  ];

  return (
    <section id="servicios" className="py-20 bg-secondary-gray/20">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary-black mb-12 text-center">
            Servicios de Consultoría
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {servicios.map((servicio, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-all">
                <h3 className="text-xl font-bold text-primary-red mb-6">{servicio.title}</h3>
                <ul className="space-y-3">
                  {servicio.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start gap-3">
                      <span className="text-primary-red mt-1 flex-shrink-0">•</span>
                      <span className="text-secondary-black/80">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
