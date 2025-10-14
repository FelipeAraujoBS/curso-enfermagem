"use client";

import { useState } from "react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo/Nome */}
          <div className="text-2xl font-bold text-blue-600">
            <a href="#">Cursos de Enfermagem</a>
          </div>

          {/* Menu Desktop */}
          <nav className="hidden md:flex space-x-8">
            <a
              href="#cursos"
              className="text-gray-700 hover:text-blue-600 transition font-medium"
            >
              Cursos
            </a>
            <a
              href="#sobre"
              className="text-gray-700 hover:text-blue-600 transition font-medium"
            >
              Sobre
            </a>
            <a
              href="#contato"
              className="text-gray-700 hover:text-blue-600 transition font-medium"
            >
              Contato
            </a>
          </nav>

          {/* Botão CTA Desktop */}
          <a
            href="#contato"
            className="hidden md:block bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition font-semibold"
          >
            Inscreva-se
          </a>

          {/* Botão Hambúrguer Mobile */}
          <button
            onClick={toggleMenu}
            className="md:hidden text-gray-700 text-3xl focus:outline-none"
            aria-label="Menu"
          >
            {menuOpen ? "✕" : "☰"}
          </button>
        </div>

        {/* Menu Mobile */}
        {menuOpen && (
          <nav className="md:hidden mt-4 pb-4 space-y-4">
            <a
              href="#cursos"
              onClick={closeMenu}
              className="block text-gray-700 hover:text-blue-600 transition font-medium py-2"
            >
              Cursos
            </a>
            <a
              href="#sobre"
              onClick={closeMenu}
              className="block text-gray-700 hover:text-blue-600 transition font-medium py-2"
            >
              Sobre
            </a>
            <a
              href="#contato"
              onClick={closeMenu}
              className="block text-gray-700 hover:text-blue-600 transition font-medium py-2"
            >
              Contato
            </a>
            <a
              href="#contato"
              onClick={closeMenu}
              className="block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition font-semibold text-center"
            >
              Inscreva-se
            </a>
          </nav>
        )}
      </div>
    </header>
  );
}
