import FAQ from "@/components/Faq";
import Contact from "@/components/Contact";

export const metadata = {
  title: "Contato | Cursos de Enfermagem",
  description:
    "Entre em contato conosco. Tire suas dúvidas e inscreva-se nos cursos.",
};

export default function ContatoPage() {
  return (
    <main>
      {/* Hero Mini */}
      <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-16">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Entre em Contato
          </h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            Estamos prontos para ajudar você
          </p>
        </div>
      </section>

      <Contact />
      <FAQ />
    </main>
  );
}
