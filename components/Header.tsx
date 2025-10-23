'use client';

import Image from 'next/image';
import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { label: 'Inicio', href: '#hero' },
    { label: 'Sobre Mí', href: '#sobre-mi' },
    { label: 'Servicios', href: '#servicios' },
    { label: 'Casos de Éxito', href: '#casos-exito' },
    { label: 'Contacto', href: '#contacto' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm">
      <nav className="container mx-auto px-4 py-4 md:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#hero" className="flex items-center">
            <Image
              src="/logos/LOOPERA_LOGOTIPO_1.png"
              alt="Loopera"
              width={150}
              height={40}
              priority
              className="h-8 w-auto md:h-10"
            />
          </a>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="text-secondary-black hover:text-primary-red transition-colors duration-200 font-medium"
                >
                  {item.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href="#contacto"
                className="bg-primary-red text-white px-6 py-2 rounded-full hover:bg-opacity-90 transition-all duration-200 font-medium"
              >
                Agendar Sesión
              </a>
            </li>
          </ul>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <div className="w-6 h-5 flex flex-col justify-between">
              <span className={`h-0.5 w-full bg-secondary-black transition-all ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`} />
              <span className={`h-0.5 w-full bg-secondary-black transition-all ${isMenuOpen ? 'opacity-0' : ''}`} />
              <span className={`h-0.5 w-full bg-secondary-black transition-all ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
            </div>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <ul className="md:hidden mt-4 pb-4 space-y-4">
            {navItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="block text-secondary-black hover:text-primary-red transition-colors duration-200 font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href="#contacto"
                className="block bg-primary-red text-white px-6 py-2 rounded-full hover:bg-opacity-90 transition-all duration-200 font-medium text-center"
                onClick={() => setIsMenuOpen(false)}
              >
                Agendar Sesión
              </a>
            </li>
          </ul>
        )}
      </nav>
    </header>
  );
}
