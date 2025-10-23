export default function ManifiestoSection() {
  const valores = [
    {
      title: 'Confianza',
      description: 'Relaciones cercanas, éticas y colaborativas basadas en la escucha',
      icon: '🤝'
    },
    {
      title: 'Claridad',
      description: 'Traduzco la complejidad en estrategias sencillas y estructuradas',
      icon: '👓'
    },
    {
      title: 'Impacto',
      description: 'Resultados tangibles y sostenibles',
      icon: '🎯'
    },
    {
      title: 'Formación',
      description: 'Empodero a líderes y equipos con conocimiento',
      icon: '📚'
    }
  ];

  return (
    <section id="manifiesto" className="py-20 bg-secondary-gray/20">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Manifiesto */}
          <div className="mb-16 text-center max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary-black mb-8">
              Manifiesto
            </h2>
            <div className="space-y-6 text-lg text-secondary-black/80 leading-relaxed">
              <p>
                <strong>Encontramos el punto exacto.</strong><br />
                Ese instante donde la intuición y los datos se dan la mano.
              </p>
              <p>
                <strong>No hacemos apuestas; trazamos caminos.</strong><br />
                Leemos el mercado como otros leen poesía, y detectamos oportunidades donde otros solo ven ruido.
              </p>
              <p>
                <strong>Construimos empresas que crecen con propósito y personas que se miden por lo que valen, no solo por lo que ganan.</strong>
              </p>
              <p>
                <strong>Transformamos empresas y personas que pasan de invisibles a inevitables.</strong>
              </p>
            </div>
          </div>

          {/* Valores */}
          <div className="mt-16">
            <h3 className="text-2xl md:text-3xl font-bold text-secondary-black mb-8 text-center">
              Valores que me definen
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {valores.map((valor, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                  <div className="text-4xl mb-4">{valor.icon}</div>
                  <h4 className="text-xl font-bold text-primary-red mb-2">{valor.title}</h4>
                  <p className="text-secondary-black/70 text-sm">{valor.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
