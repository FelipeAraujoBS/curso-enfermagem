export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Coluna 1 - Sobre */}
          <div>
            <h3 className="text-xl font-bold mb-4">Cursos de Enfermagem</h3>
            <p className="text-gray-400 leading-relaxed">
              Formação prática e de qualidade para profissionais de enfermagem.
              Turmas mensais com instrutora experiente.
            </p>
          </div>

          {/* Coluna 2 - Links Rápidos */}
          <div>
            <h3 className="text-xl font-bold mb-4">Links Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#cursos"
                  className="text-gray-400 hover:text-white transition"
                >
                  Nossos Cursos
                </a>
              </li>
              <li>
                <a
                  href="#sobre"
                  className="text-gray-400 hover:text-white transition"
                >
                  Sobre a Instrutora
                </a>
              </li>
              <li>
                <a
                  href="#contato"
                  className="text-gray-400 hover:text-white transition"
                >
                  Contato
                </a>
              </li>
            </ul>
          </div>

          {/* Coluna 3 - Contato */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contato</h3>
            <ul className="space-y-2 text-gray-400">
              <li className="flex items-center">
                <span className="mr-2">📧</span>
                <a
                  href="mailto:contato@exemplo.com"
                  className="hover:text-white transition"
                >
                  contato@exemplo.com
                </a>
              </li>
              <li className="flex items-center">
                <span className="mr-2">📱</span>
                <a
                  href="https://wa.me/5571999999999"
                  className="hover:text-white transition"
                >
                  (71) 99999-9999
                </a>
              </li>
              <li className="flex items-center">
                <span className="mr-2">📍</span>
                Salvador, Bahia
              </li>
            </ul>
          </div>
        </div>

        {/* Linha divisória */}
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400 text-sm">
          <p>
            &copy; {new Date().getFullYear()} Cursos de Enfermagem. Todos os
            direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
