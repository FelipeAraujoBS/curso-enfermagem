import CourseCard from "./CourseCard";

export default function Courses() {
  const courses = [
    {
      title: "Punção Venosa e Coleta",
      description: "Aprenda técnicas seguras de punção venosa e coleta a vácuo",
      icon: "💉",
      topics: [
        "Técnicas de punção venosa",
        "Coleta a vácuo",
        "Biossegurança",
        "Práticas em laboratório",
      ],
    },
    {
      title: "Curativos e Coberturas",
      description:
        "Domine diferentes tipos de curativos e técnicas de cobertura",
      icon: "🩹",
      topics: [
        "Curativo simples",
        "Tipos de coberturas",
        "Avaliação de feridas",
        "Técnicas assépticas",
      ],
    },
    {
      title: "Administração de Medicamentos",
      description:
        "Técnicas corretas de administração intramuscular e outras vias",
      icon: "💊",
      topics: [
        "Via intramuscular",
        "Preparo de medicações",
        "Cálculo de doses",
        "Segurança do paciente",
      ],
    },
    {
      title: "Fundamentos e Cuidados Básicos",
      description: "Procedimentos essenciais de cuidados ao paciente",
      icon: "🏥",
      topics: [
        "Banho no leito",
        "Preparação de corpo",
        "Sondagem (SNG/SNE)",
        "Preparação de bandejas",
      ],
    },
  ];

  return (
    <section id="cursos" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Nossos Cursos
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Cursos práticos e presenciais, ministrados por profissional
            experiente. Turmas mensais aos sábados e domingos.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {courses.map((course, index) => (
            <CourseCard key={index} {...course} />
          ))}
        </div>
      </div>
    </section>
  );
}
