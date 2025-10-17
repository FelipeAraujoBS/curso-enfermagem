export default function About() {
  return (
    <section id="sobre" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Imagem */}
          <div className="order-2 md:order-1" data-aos="fade-right">
            <div className="bg-gray-200 rounded-lg h-96 flex items-center justify-center">
              <p className="text-gray-500">Foto da Instrutora</p>
            </div>
          </div>

          {/* Conteúdo */}
          <div className="order-1 md:order-2" data-aos="fade-left">
            <h2 className="text-4xl font-bold text-gray-800 mb-6">
              Sobre a Instrutora
            </h2>

            <h3 className="text-2xl font-semibold text-blue-600 mb-4">
              [Nome da Instrutora]
            </h3>

            <p className="text-gray-700 mb-4 leading-relaxed">
              Enfermeira com mais de [X] anos de experiência em [áreas de
              atuação]. Professora dedicada com vasta experiência na formação de
              novos profissionais de enfermagem.
            </p>

            <p className="text-gray-700 mb-6 leading-relaxed">
              Especializada em técnicas práticas de enfermagem, acredita que a
              educação de qualidade é a base para profissionais competentes e
              confiantes.
            </p>

            <div className="space-y-3">
              <div className="flex items-start">
                <span className="text-blue-600 mr-3 text-xl">✓</span>
                <p className="text-gray-700">Graduação em Enfermagem</p>
              </div>
              <div className="flex items-start">
                <span className="text-blue-600 mr-3 text-xl">✓</span>
                <p className="text-gray-700">
                  Experiência em [hospitais/clínicas]
                </p>
              </div>
              <div className="flex items-start">
                <span className="text-blue-600 mr-3 text-xl">✓</span>
                <p className="text-gray-700">Professora de Enfermagem</p>
              </div>
              <div className="flex items-start">
                <span className="text-blue-600 mr-3 text-xl">✓</span>
                <p className="text-gray-700">[Certificações/Especializações]</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
