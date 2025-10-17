"use client";

import { useState } from "react";
import axios from "axios";

export default function Contact() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [telefone, setTelefone] = useState("");
  const [curso, setCurso] = useState("");
  const [mensagem, setMensagem] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(null);

  const formData = async (e) => {
    e.preventDefault();

    const datas = {
      nome,
      email,
      telefone,
      curso,
      mensagem,
    };

    setLoading(true);
    setError(null);
    setSuccess(false);

    try {
      await axios.post("/userContact", datas);

      setSuccess(true);

      setNome("");
      setEmail("");
      setTelefone("");
      setCurso("");
      setMensagem("");

      setTimeout(() => setSuccess(false), 3000);
    } catch (error) {
      setError(error.mensagem || "Erro ao enviar o formulário!");
    } finally {
      setLoading(false);
    }
  };

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
              <form onSubmit={formData} className="space-y-6">
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
                    className="w-full text-gray-600 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Seu nome"
                    onChange={(e) => {
                      setNome(e.target.value);
                    }}
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
                    className="w-full text-gray-600 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }}
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
                    className="w-full text-gray-600 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    onChange={(e) => {
                      setTelefone(e.target.value);
                    }}
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
                    className="w-full text-black px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    onChange={(e) => {
                      setCurso(e.target.value);
                    }}
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
                    className="w-full text-gray-600 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    onChange={(e) => {
                      setMensagem(e.target.value);
                    }}
                    placeholder="Sua mensagem..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white py-4 rounded-lg font-semibold text-lg hover:bg-blue-700 transition"
                >
                  {(loading && "Enviando...") || "Enviar Mesangem"}
                </button>
              </form>

              {success && (
                <div className="mt-2 ml-6 p-4 bg-green-100 text-green-700 rounded-lg w-80">
                  ✓ Mensagem enviada com sucesso!
                </div>
              )}

              {error && (
                <div className="mt-2 ml-6 p-4 bg-red-100 text-red-700 rounded-lg">
                  x {error}
                </div>
              )}
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
