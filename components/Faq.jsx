"use client";

import { useState } from "react";
import FAQItem from "./FaqItem";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      pergunta: "Como funciona a inscrição nos cursos?",
      resposta:
        "Entre em contato pelo WhatsApp ou pelo formulário de contato. Confirme a data da turma desejada e faça o pagamento para garantir sua vaga. Enviaremos todas as informações sobre local, horário e materiais necessários.",
    },
    {
      pergunta: "Preciso ter experiência prévia em enfermagem?",
      resposta:
        "Os cursos são voltados principalmente para estudantes de enfermagem e técnicos que desejam aprimorar suas habilidades práticas. Recomendamos conhecimento teórico básico, mas a prática será ensinada desde o início.",
    },
    {
      pergunta: "Os cursos fornecem certificado?",
      resposta:
        "Sim! Todos os participantes que completarem o curso receberão um certificado de participação, que pode ser incluído em seu currículo profissional.",
    },
    {
      pergunta: "Qual a duração de cada curso?",
      resposta:
        "Cada curso tem duração de aproximadamente 8 horas, realizados aos sábados ou domingos. O formato intensivo permite prática supervisionada com foco total no aprendizado.",
    },
    {
      pergunta: "Posso parcelar o pagamento?",
      resposta:
        "Entre em contato conosco para consultar as opções de pagamento disponíveis. Trabalhamos com diferentes formas de pagamento para facilitar sua participação.",
    },
    {
      pergunta: "Onde acontecem os cursos presenciais?",
      resposta:
        "Os cursos são realizados em Salvador, Bahia. O endereço exato será informado no momento da inscrição. Trabalhamos com espaços equipados e adequados para a prática das técnicas de enfermagem.",
    },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20">
      <div className="container mx-auto px-6">
        {/* Título */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Perguntas Frequentes
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Tire suas dúvidas sobre nossos cursos
          </p>
        </div>

        {/* Lista de Perguntas */}
        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <FAQItem
              key={index}
              pergunta={faq.pergunta}
              resposta={faq.resposta}
              isOpen={openIndex === index}
              onClick={() => toggleFAQ(index)}
            />
          ))}
        </div>

        {/* CTA no final */}
        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">Ainda tem dúvidas?</p>
          <a
            href="#contato"
            className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 font-semibold transition"
          >
            Entre em Contato
          </a>
        </div>
      </div>
    </section>
  );
}
