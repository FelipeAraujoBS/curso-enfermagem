"use client";

import { useEffect } from "react";

export default function Modal({ isOpen, onClose, courseData }) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      document.body.style.position = "fixed";
      document.body.style.width = "100%";
    } else {
      document.body.style.overflow = "unset";
      document.body.style.position = "unset";
      document.body.style.width = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
      document.body.style.position = "unset";
      document.body.style.width = "unset";
    };
  }, [isOpen]);

  if (!isOpen || !courseData) return null;

  const handleBackdropTouch = (e) => {
    e.preventDefault();
    e.stopPropagation();
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm px-4 py-4"
      onClick={onClose}
      onTouchMove={handleBackdropTouch}
    >
      <div
        className="bg-white rounded-2xl shadow-2xl w-full h-[90vh] max-w-6xl relative overflow-hidden animate-fadeIn"
        onClick={(e) => e.stopPropagation()}
        onTouchMove={(e) => e.stopPropagation()}
      >
        {/* Botão Fechar */}
        <button
          className="absolute cursor-pointer top-4 right-4 z-10 bg-white/90 hover:bg-gray-400 text-gray-500 hover:text-black rounded-full w-10 h-10 flex items-center justify-center transition shadow-lg text-2xl"
          onClick={onClose}
        >
          ✕
        </button>

        {/* MOBILE: Scroll único */}
        <div className="md:hidden h-full overflow-y-auto overscroll-contain">
          {/* Seção Azul */}
          <div className="bg-gradient-to-br from-blue-600 to-blue-800 p-8 flex flex-col items-center text-white">
            <div className="text-8xl mb-6">{courseData.icon}</div>
            <h2 className="text-3xl font-bold text-center mb-4">
              {courseData.title}
            </h2>
            <p className="text-blue-100 text-center text-lg">
              {courseData.description}
            </p>

            <div className="mt-8 w-full bg-white/10 rounded-lg p-4 backdrop-blur">
              <div className="bg-white/20 rounded h-48 flex items-center justify-center">
                <span className="text-white/60">Imagem do curso</span>
              </div>
            </div>
          </div>

          {/* Seção Branca */}
          <div className="bg-white p-8">
            {/* O que você vai aprender */}
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
                <span className="text-blue-600 mr-3">📚</span>O que você vai
                aprender
              </h3>
              <ul className="space-y-3">
                claude
                {courseData.topics.map((topic, index) => (
                  <li key={index} className="flex items-start text-gray-700">
                    {topic !== "" && (
                      <span className="text-blue-600 mr-2">✓</span>
                    )}
                    {topic}
                  </li>
                ))}
              </ul>
            </div>

            {/* Detalhes do Curso */}
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
                <span className="text-blue-600 mr-3">ℹ️</span>
                Detalhes do Curso
              </h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-sm text-gray-500 mb-1">Duração</p>
                  <p className="text-lg font-semibold text-gray-800">8 horas</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-sm text-gray-500 mb-1">Formato</p>
                  <p className="text-lg font-semibold text-gray-800">
                    Presencial
                  </p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-sm text-gray-500 mb-1">Certificado</p>
                  <p className="text-lg font-semibold text-gray-800">Sim</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-sm text-gray-500 mb-1">Turma</p>
                  <p className="text-lg font-semibold text-gray-800">
                    Até 15 alunos
                  </p>
                </div>
              </div>
            </div>

            {/* Conteúdo Programático */}
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
                <span className="text-blue-600 mr-3">📋</span>
                Conteúdo Programático
              </h3>
              <div className="space-y-4">
                <div className="border-l-4 border-blue-600 pl-4">
                  <h4 className="font-semibold text-gray-800 mb-2">
                    Módulo 1: Fundamentos
                  </h4>
                  <p className="text-gray-600">
                    Introdução às técnicas básicas e conceitos essenciais.
                  </p>
                </div>
                <div className="border-l-4 border-blue-600 pl-4">
                  <h4 className="font-semibold text-gray-800 mb-2">
                    Módulo 2: Prática Supervisionada
                  </h4>
                  <p className="text-gray-600">
                    Exercícios práticos com acompanhamento da instrutora.
                  </p>
                </div>
                <div className="border-l-4 border-blue-600 pl-4">
                  <h4 className="font-semibold text-gray-800 mb-2">
                    Módulo 3: Avaliação
                  </h4>
                  <p className="text-gray-600">
                    Demonstração prática das técnicas aprendidas.
                  </p>
                </div>
              </div>
            </div>

            {/* Para quem é este curso */}
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
                <span className="text-blue-600 mr-3">👥</span>
                Para quem é este curso
              </h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  Estudantes de enfermagem
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  Técnicos de enfermagem que desejam aprimorar suas habilidades
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  Profissionais em busca de atualização
                </li>
              </ul>
            </div>

            {/* Botões */}
            <div className="flex flex-col gap-3">
              <a
                onClick={onClose}
                href="#contato"
                className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 font-semibold transition text-center"
              >
                Inscreva-se
              </a>
              <button
                onClick={onClose}
                className="px-6 py-3 bg-red-500 text-white rounded-lg hover:bg-red-600 font-semibold transition"
              >
                Fechar
              </button>
            </div>
          </div>
        </div>

        {/* DESKTOP: 2 Colunas */}
        <div className="hidden md:flex h-full">
          {/* Coluna Esquerda - Azul */}
          <div className="w-2/5 bg-gradient-to-br from-blue-600 to-blue-800 p-8 flex flex-col justify-center items-center text-white overflow-y-auto">
            <div className="-mb-15 flex flex-col justify-center items-center">
              <div className="text-8xl mb-6">{courseData.icon}</div>
              <h2 className="text-3xl font-bold text-center mb-4">
                {courseData.title}
              </h2>
              <p className="text-blue-100 text-center text-lg">
                {courseData.description}
              </p>
            </div>
            <div className="mt-35 w-full bg-white/10 rounded-lg p-4 backdrop-blur">
              <div className="bg-white/20 rounded h-68 flex items-center justify-center">
                <span className="text-white/60">Imagem do curso</span>
              </div>
            </div>
          </div>

          {/* Coluna Direita - Branca */}
          <div className="w-3/5 flex flex-col">
            <div className="flex-1 overflow-y-auto p-8 overscroll-contain">
              {/* O que você vai aprender */}
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
                  <span className="text-blue-600 mr-3">📚</span>O que você vai
                  aprender
                </h3>
                <ul className="space-y-3">
                  {courseData.topics.map((topic, index) => (
                    <li key={index} className="flex items-start text-gray-700">
                      {topic !== "" && (
                        <span className="text-blue-600 mr-3 mt-1 font-bold">
                          ✓
                        </span>
                      )}
                      <span className="text-lg">{topic}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Detalhes do Curso */}
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
                  <span className="text-blue-600 mr-3">ℹ️</span>
                  Detalhes do Curso
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <p className="text-sm text-gray-500 mb-1">Duração</p>
                    <p className="text-lg font-semibold text-gray-800">
                      8 horas
                    </p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <p className="text-sm text-gray-500 mb-1">Formato</p>
                    <p className="text-lg font-semibold text-gray-800">
                      Presencial
                    </p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <p className="text-sm text-gray-500 mb-1">Certificado</p>
                    <p className="text-lg font-semibold text-gray-800">Sim</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <p className="text-sm text-gray-500 mb-1">Turma</p>
                    <p className="text-lg font-semibold text-gray-800">
                      Até 15 alunos
                    </p>
                  </div>
                </div>
              </div>

              {/* Conteúdo Programático */}
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
                  <span className="text-blue-600 mr-3">📋</span>
                  Conteúdo Programático
                </h3>
                <div className="space-y-4">
                  <div className="border-l-4 border-blue-600 pl-4">
                    <h4 className="font-semibold text-gray-800 mb-2">
                      Módulo 1: Fundamentos
                    </h4>
                    <p className="text-gray-600">
                      Introdução às técnicas básicas e conceitos essenciais.
                    </p>
                  </div>
                  <div className="border-l-4 border-blue-600 pl-4">
                    <h4 className="font-semibold text-gray-800 mb-2">
                      Módulo 2: Prática Supervisionada
                    </h4>
                    <p className="text-gray-600">
                      Exercícios práticos com acompanhamento da instrutora.
                    </p>
                  </div>
                  <div className="border-l-4 border-blue-600 pl-4">
                    <h4 className="font-semibold text-gray-800 mb-2">
                      Módulo 3: Avaliação
                    </h4>
                    <p className="text-gray-600">
                      Demonstração prática das técnicas aprendidas.
                    </p>
                  </div>
                </div>
              </div>

              {/* Para quem é este curso */}
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
                  <span className="text-blue-600 mr-3">👥</span>
                  Para quem é este curso
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    Estudantes de enfermagem
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    Técnicos de enfermagem que desejam aprimorar suas
                    habilidades
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    Profissionais em busca de atualização
                  </li>
                </ul>
              </div>

              {/* Botões */}
              <div className="flex justify-end gap-3">
                <a
                  onClick={onClose}
                  href="#contato"
                  className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 font-semibold transition text-center"
                >
                  Inscreva-se
                </a>
                <button
                  onClick={onClose}
                  className="px-6 py-3 bg-red-500 text-white rounded-lg hover:bg-red-600 font-semibold transition"
                >
                  Fechar
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
