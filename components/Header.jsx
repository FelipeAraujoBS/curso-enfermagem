export default function Header() {
  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo/Nome */}
          <div className="text-2xl font-bold text-blue-600">
            <a href="#">Cursos de Enfermagem</a>
          </div>

          {/* Menu de Navegação */}
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

          {/* Botão CTA */}
          <a
            href="#contato"
            className="hidden md:block bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition font-semibold"
          >
            Inscreva-se
          </a>

          {/* Menu Mobile (placeholder) */}
          <button className="md:hidden text-gray-700">☰</button>
        </div>
      </div>
    </header>
  );
}
