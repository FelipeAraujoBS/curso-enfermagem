import About from "@/components/About";
import Testimonials from "@/components/Testimonials";

export const metadata = {
  title: "Sobre Nós | Cursos de Enfermagem",
  description:
    "Conheça nossa instrutora e veja depoimentos de alunos que transformaram suas carreiras.",
};

export default function SobrePage() {
  return (
    <main>
      {/* Hero Mini */}
      <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-16">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Sobre Nós</h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            Experiência e dedicação na formação de profissionais
          </p>
        </div>
      </section>

      <About />
      <Testimonials />
    </main>
  );
}
