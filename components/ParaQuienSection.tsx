export default function ParaQuienSection() {
  const audiencias = [
    {
      title: 'Empresas Familiares en Transición',
      icon: '👨‍👩‍👧‍👦',
      descripcion: 'Empresas donde se está viviendo un relevo generacional, una nueva etapa de profesionalización urgente y necesaria. Un nuevo liderazgo, organizar las áreas clave y asegurar la viabilidad de largo plazo.'
    },
    {
      title: 'Emprendimientos en Crecimiento',
      icon: '🚀',
      descripcion: 'Negocios que han nacido con mucho músculo, pero que necesitan ordenar sus números y estructurar sus procesos. Entender sus números y poner orden para que no pierdan esencia al crecer sin control.'
    },
    {
      title: 'Negocios con Potencial que Necesitan Dirección',
      icon: '🎯',
      descripcion: 'Empresas que ya funcionan, pero que no tienen claridad sobre su rentabilidad real, su eficiencia operativa o su rumbo comercial. Acompañarlos a tomar decisiones con información, estrategia y visión de largo plazo.'
    }
  ];

  return (
    <section id="para-quien" className="py-20 bg-secondary-gray/20">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary-black mb-6 text-center">
            ¿Para quién?
          </h2>
          <p className="text-xl text-secondary-black/70 mb-12 text-center max-w-3xl mx-auto">
            Mi consultoría está pensada para empresarios que necesitan tomar el control de su negocio, entenderlo desde los números, fortalecer sus procesos y construir una estrategia clara que les permita crecer de manera sostenible.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {audiencias.map((audiencia, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition-all">
                <div className="text-6xl mb-6 text-center">{audiencia.icon}</div>
                <h3 className="text-xl font-bold text-primary-red mb-4 text-center">{audiencia.title}</h3>
                <p className="text-secondary-black/80 leading-relaxed text-center">{audiencia.descripcion}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
