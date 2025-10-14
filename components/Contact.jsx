export default function Contact() {
  return (
    <section id="contato" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Título */}
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Entre em Contato
            </h2>
            <p className="text-xl text-gray-600">
              Tire suas dúvidas ou inscreva-se nos cursos. Responderemos em
              breve!
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Formulário */}
            <div className="bg-gray-50 rounded-lg p-8">
              <form className="space-y-6">
                <div>
                  <label
                    htmlFor="nome"
                    className="block text-gray-700 font-medium mb-2"
                  >
                    Nome Completo
                  </label>
                  <input
                    type="text"
                    id="nome"
                    name="nome"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Seu nome"
                    required
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-gray-700 font-medium mb-2"
                  >
                    E-mail
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="seu@email.com"
                    required
                  />
                </div>

                <div>
                  <label
                    htmlFor="telefone"
                    className="block text-gray-700 font-medium mb-2"
                  >
                    Telefone/WhatsApp
                  </label>
                  <input
                    type="tel"
                    id="telefone"
                    name="telefone"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="(71) 99999-9999"
                    required
                  />
                </div>

                <div>
                  <label
                    htmlFor="curso"
                    className="block text-gray-700 font-medium mb-2"
                  >
                    Curso de Interesse
                  </label>
                  <select
                    id="curso"
                    name="curso"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    required
                  >
                    <option value="">Selecione um curso</option>
                    <option value="puncao">Punção Venosa e Coleta</option>
                    <option value="curativos">Curativos e Coberturas</option>
                    <option value="medicamentos">
                      Administração de Medicamentos
                    </option>
                    <option value="fundamentos">
                      Fundamentos e Cuidados Básicos
                    </option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="mensagem"
                    className="block text-gray-700 font-medium mb-2"
                  >
                    Mensagem (opcional)
                  </label>
                  <textarea
                    id="mensagem"
                    name="mensagem"
                    rows="4"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Sua mensagem..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white py-4 rounded-lg font-semibold text-lg hover:bg-blue-700 transition"
                >
                  Enviar Mensagem
                </button>
              </form>
            </div>

            {/* Informações de Contato */}
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-bold text-gray-800 mb-6">
                  Outras Formas de Contato
                </h3>
              </div>

              {/* WhatsApp */}
              <a
                href="https://wa.me/5571999999999"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start p-6 bg-green-50 rounded-lg hover:bg-green-100 transition group"
              >
                <div className="text-3xl mr-4">💬</div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-1 group-hover:text-green-600">
                    WhatsApp
                  </h4>
                  <p className="text-gray-600">(71) 99999-9999</p>
                  <p className="text-sm text-gray-500 mt-1">
                    Clique para conversar diretamente
                  </p>
                </div>
              </a>

              {/* E-mail */}
              <div className="flex items-start p-6 bg-blue-50 rounded-lg">
                <div className="text-3xl mr-4">📧</div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-1">E-mail</h4>
                  <a
                    href="mailto:contato@exemplo.com"
                    className="text-blue-600 hover:underline"
                  >
                    contato@exemplo.com
                  </a>
                  <p className="text-sm text-gray-500 mt-1">
                    Respondemos em até 24h
                  </p>
                </div>
              </div>

              {/* Localização */}
              <div className="flex items-start p-6 bg-gray-50 rounded-lg">
                <div className="text-3xl mr-4">📍</div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-1">
                    Localização
                  </h4>
                  <p className="text-gray-600">Salvador, Bahia</p>
                  <p className="text-sm text-gray-500 mt-1">
                    Cursos presenciais na região
                  </p>
                </div>
              </div>

              {/* Horário */}
              <div className="flex items-start p-6 bg-gray-50 rounded-lg">
                <div className="text-3xl mr-4">⏰</div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-1">
                    Horário de Atendimento
                  </h4>
                  <p className="text-gray-600">Segunda a Sexta: 9h às 18h</p>
                  <p className="text-gray-600">Sábados: 9h às 13h</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
