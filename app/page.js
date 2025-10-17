"use client";

import Hero from "@/components/Hero";
import Courses from "@/components/Courses";
import dynamic from "next/dynamic";

import Link from "next/link";

const Testimonials = dynamic(() => import("@/components/Testimonials"), {
  ssr: false,
  loading: () => <div className="py-20 text-center">Carregando...</div>,
});

export default function Home() {
  return (
    <main>
      <Hero />
      <Courses />

      {/* Seção de Depoimentos (resumida - só 3) */}
      <Testimonials />

      {/* CTA Forte */}
      <section className="py-20 bg-gradient-to-br from-blue-600 to-blue-800 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Pronto para Transformar sua Carreira?
          </h2>
          <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Inscreva-se agora e faça parte da próxima turma. Vagas limitadas!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/cursos"
              className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-50 transition"
            >
              Ver Todos os Cursos
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
