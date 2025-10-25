import Image from 'next/image';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary-black text-white">
      <div className="container mx-auto px-4 py-12 md:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo y Descripción */}
          <div className="space-y-4">
            <Image
              src="/logos/LOOPERA_LOGOTIPO_1_1.png"
              alt="Loopera"
              width={150}
              height={40}
              className="h-10 w-auto brightness-0 invert"
            />
            <p className="text-secondary-gray text-sm">
              Transformando caos en claridad.
              <br />
              Consultoría estratégica en finanzas, gestión y crecimiento empresarial.
            </p>
          </div>

          {/* Contacto */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-primary-red">Contacto</h3>
            <ul className="space-y-2 text-sm text-secondary-gray">
              <li>
                <a href="mailto:santiago.lopera@loopera.co" className="hover:text-white transition-colors">
                  santiago.lopera@loopera.co
                </a>
              </li>
              <li>
                <a href="https://wa.me/573162888832" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                  +57 (316) 288-8832
                </a>
              </li>
              <li>
                <a
                  href="https://co.linkedin.com/in/santiagoloperamesa"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>

          {/* Navegación Rápida */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-primary-red">Navegación</h3>
            <ul className="space-y-2 text-sm text-secondary-gray">
              <li><a href="#sobre-mi" className="hover:text-white transition-colors">Sobre Mí</a></li>
              <li><a href="#servicios" className="hover:text-white transition-colors">Servicios</a></li>
              <li><a href="#casos-exito" className="hover:text-white transition-colors">Casos de Éxito</a></li>
              <li><a href="#contacto" className="hover:text-white transition-colors">Contacto</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-secondary-gray/20 text-center text-sm text-secondary-gray">
          <p>&copy; {currentYear} Loopera. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
