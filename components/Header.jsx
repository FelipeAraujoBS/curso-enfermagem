"use client";

import { useState } from "react";
import Image from "next/image";
import zap from "./imgs/zap.png";

import Link from "next/link";

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
          <div className="text-2xl font-bold text-blue-600">
            <Link href="/">Cursos de Enfermagem</Link>
          </div>

          {/* Menu Desktop */}
          <nav className="hidden md:flex space-x-8">
            <Link
              href="/"
              className="text-gray-700 hover:text-blue-600 transition font-medium"
            >
              Início
            </Link>
            <Link
              href="/cursos"
              className="text-gray-700 hover:text-blue-600 transition font-medium"
            >
              Cursos
            </Link>
            <Link
              href="/sobre"
              className="text-gray-700 hover:text-blue-600 transition font-medium"
            >
              Sobre
            </Link>
            <Link
              href="/contato"
              className="text-gray-700 hover:text-blue-600 transition font-medium"
            >
              Contato
            </Link>
          </nav>

          {/* Botão Inscreva-se */}
          <Link
            href="#contato"
            className="hidden md:block bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition font-semibold"
          >
            Inscreva-se
          </Link>

          {/* Botão Whatsapp */}
          <Link
            href="https://wa.me/5571992390048?text=Olá%20quero%20mais%20informações"
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-8 right-8 rounded-full text-2xl opacity-75 hover:opacity-100 hover:scale-125 transition"
          >
            <Image src={zap} alt="💬" width={75} height={75} priority />
          </Link>

          {/* Botão Hambúrguer */}
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
            <Link
              href="/"
              onClick={closeMenu}
              className="block text-gray-700 hover:text-blue-600 transition font-medium py-2"
            >
              Início
            </Link>
            <Link
              href="/cursos"
              onClick={closeMenu}
              className="block text-gray-700 hover:text-blue-600 transition font-medium py-2"
            >
              Cursos
            </Link>
            <Link
              href="/sobre"
              onClick={closeMenu}
              className="block text-gray-700 hover:text-blue-600 transition font-medium py-2"
            >
              Sobre
            </Link>
            <Link
              href="/contato"
              onClick={closeMenu}
              className="block text-gray-700 hover:text-blue-600 transition font-medium py-2"
            >
              Contato
            </Link>
            <Link
              href="/contato"
              onClick={closeMenu}
              className="block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition font-semibold text-center"
            >
              Inscreva-se
            </Link>
          </nav>
        )}
      </div>
    </header>
  );
}
