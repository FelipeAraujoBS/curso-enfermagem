import Courses from "@/components/Courses";
import UpcomingClasses from "@/components/UpcomingClasses";

export const metadata = {
  title: "Nossos Cursos | Cursos de Enfermagem",
  description:
    "Confira todos os nossos cursos práticos de enfermagem: Punção Venosa, Curativos, Administração de Medicamentos e Cuidados Básicos.",
};

export default function CursosPage() {
  return (
    <main>
      {/* Hero Mini */}
      <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-16">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Nossos Cursos</h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            Formação prática e certificada para profissionais de enfermagem
          </p>
        </div>
      </section>

      <Courses />
      <UpcomingClasses />
    </main>
  );
}
