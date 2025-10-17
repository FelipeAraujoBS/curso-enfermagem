"use client";

import Link from "next/link";

export default function UpcomingClasses() {
  const upcomingClasses = [
    {
      curso: "Punção Venosa e Coleta",
      icon: "💉",
      data: "Sábado, 23 de Novembro de 2024",
      horario: "8h às 17h",
      local: "Salvador - BA",
      vagas: 12,
      valor: "R$ 280,00",
    },
    {
      curso: "Curativos e Coberturas",
      icon: "🩹",
      data: "Domingo, 24 de Novembro de 2024",
      horario: "8h às 17h",
      local: "Salvador - BA",
      vagas: 8,
      valor: "R$ 280,00",
    },
    {
      curso: "Administração de Medicamentos",
      icon: "💊",
      data: "Sábado, 30 de Novembro de 2024",
      horario: "8h às 17h",
      local: "Salvador - BA",
      vagas: 15,
      valor: "R$ 280,00",
    },
    {
      curso: "Fundamentos e Cuidados Básicos",
      icon: "🏥",
      data: "Domingo, 1 de Dezembro de 2024",
      horario: "8h às 17h",
      local: "Salvador - BA",
      vagas: 10,
      valor: "R$ 280,00",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-blue-100">
      <div className="container mx-auto px-6">
        {/* Título */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Próximas Turmas Agendadas
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Garanta sua vaga! Turmas com vagas limitadas
          </p>
        </div>

        {/* Lista de Turmas */}
        <div className="max-w-5xl mx-auto space-y-6">
          {upcomingClasses.map((turma, index) => (
            <div
              key={index}
              className="transform hover:scale-105 bg-white rounded-xl shadow-lg p-6 md:p-8 hover:shadow-xl transition"
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
                {/* Lado Esquerdo - Info do Curso */}
                <div className="flex-1">
                  <div className="flex items-center mb-4">
                    <span className="text-5xl mr-4">{turma.icon}</span>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-800">
                        {turma.curso}
                      </h3>
                      {turma.vagas <= 5 && (
                        <span className="inline-block bg-red-100 text-red-600 text-sm font-semibold px-3 py-1 rounded-full mt-1">
                          Últimas vagas!
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-gray-700">
                    <div className="flex items-center">
                      <span className="text-blue-600 mr-2 text-xl">📅</span>
                      <span>{turma.data}</span>
                    </div>
                    <div className="flex items-center">
                      <span className="text-blue-600 mr-2 text-xl">⏰</span>
                      <span>{turma.horario}</span>
                    </div>
                    <div className="flex items-center">
                      <span className="text-blue-600 mr-2 text-xl">📍</span>
                      <span>{turma.local}</span>
                    </div>
                    <div className="flex items-center">
                      <span className="text-blue-600 mr-2 text-xl">👥</span>
                      <span className="font-semibold">
                        {turma.vagas} vagas restantes
                      </span>
                    </div>
                  </div>
                </div>

                {/* Lado Direito - Valor e CTA */}
                <div className="flex flex-col items-center md:items-end gap-3 md:min-w-[200px]">
                  <div className="text-center md:text-right">
                    <p className="text-sm text-gray-500">Investimento</p>
                    <p className="text-3xl font-bold text-blue-600">
                      {turma.valor}
                    </p>
                  </div>
                  <Link
                    href="/contato"
                    className="w-full md:w-auto bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 font-semibold transition text-center"
                  >
                    Inscreva-se
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Aviso no final */}
        <div className="mt-12 text-center bg-white rounded-xl p-6 max-w-3xl mx-auto shadow-md">
          <p className="text-gray-700 mb-4">
            <span className="font-semibold">📢 Atenção:</span> As vagas são
            limitadas e preenchidas por ordem de inscrição. Não perca a
            oportunidade de participar!
          </p>
          <Link
            href="/contato"
            className="inline-block text-blue-600 hover:text-blue-700 font-semibold"
          >
            Entre em contato para mais informações →
          </Link>
        </div>
      </div>
    </section>
  );
}
