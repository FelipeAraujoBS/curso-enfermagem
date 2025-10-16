"use client";

import { useState, useEffect } from "react";
import TestimonialCard from "./TestimonialCard";

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      nome: "Maria Silva",
      cargo: "Estudante de Enfermagem",
      foto: null, // substitua por "/testimonials/maria.jpg" quando tiver
      depoimento:
        "Excelente curso! A instrutora é muito atenciosa e ensina com muita clareza. Aprendi técnicas que já estou usando no estágio.",
      rating: 5,
    },
    {
      nome: "João Santos",
      cargo: "Técnico de Enfermagem",
      foto: null,
      depoimento:
        "Curso muito completo e prático. Recomendo para todos que querem aprimorar suas habilidades em punção venosa.",
      rating: 5,
    },
    {
      nome: "Ana Paula",
      cargo: "Enfermeira",
      foto: null,
      depoimento:
        "Superou minhas expectativas! A parte prática foi fundamental para ganhar confiança. Valeu muito a pena!",
      rating: 5,
    },
    {
      nome: "Carlos Oliveira",
      cargo: "Estudante de Enfermagem",
      foto: null,
      depoimento:
        "Aprendi muito sobre curativos e coberturas. A metodologia de ensino é excelente e o ambiente muito acolhedor.",
      rating: 5,
    },
    {
      nome: "Juliana Costa",
      cargo: "Técnica de Enfermagem",
      foto: null,
      depoimento:
        "Curso maravilhoso! Me sinto muito mais preparada para o mercado de trabalho. A instrutora domina completamente o assunto.",
      rating: 5,
    },
    {
      nome: "Roberto Lima",
      cargo: "Estudante de Enfermagem",
      foto: null,
      depoimento:
        "Melhor investimento que fiz na minha formação. As técnicas ensinadas são atuais e muito bem explicadas.",
      rating: 5,
    },
  ];

  // Carrossel automático
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 8000); // Muda a cada 8 segundos

    return () => clearInterval(interval);
  }, [testimonials.length]);

  // Navegação manual
  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  // Calcular quais cards mostrar (3 por vez)
  const getVisibleTestimonials = () => {
    const visible = [];
    for (let i = 0; i < 3; i++) {
      const index = (currentIndex + i) % testimonials.length;
      visible.push(testimonials[index]);
    }
    return visible;
  };

  return (
    <section id="depoimentos" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        {/* Título */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            O Que Nossos Alunos Dizem
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Depoimentos de quem já transformou sua carreira com nossos cursos
          </p>
        </div>

        {/* Carrossel */}
        <div className="relative max-w-7xl mx-auto">
          {/* Cards Visíveis */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {getVisibleTestimonials().map((testimonial, index) => (
              <div key={index} className="animate-fadeIn">
                <TestimonialCard {...testimonial} />
              </div>
            ))}
          </div>

          {/* Botões de Navegação */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-white hover:bg-gray-100 text-gray-800 rounded-full w-12 h-12 flex items-center justify-center shadow-lg transition z-10 hidden md:flex"
            aria-label="Anterior"
          >
            ‹
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white hover:bg-gray-100 text-gray-800 rounded-full w-12 h-12 flex items-center justify-center shadow-lg transition z-10 hidden md:flex"
            aria-label="Próximo"
          >
            ›
          </button>

          {/* Indicadores (bolinhas) */}
          <div className="flex justify-center mt-8 gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition ${
                  index === currentIndex ? "bg-blue-600 w-8" : "bg-gray-300"
                }`}
                aria-label={`Ir para depoimento ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
