export default function Hero() {
  return (
    <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white">
      <div className="container mx-auto px-6 py-20 md:py-32">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Aprimore suas Técnicas de Enfermagem
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-blue-100">
            Cursos práticos ministrados por profissional experiente. Prepare-se
            para o mercado de trabalho com confiança.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#cursos"
              className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-50 transition text-center"
            >
              Ver Cursos
            </a>
            <a
              href="#contato"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-blue-600 transition text-center"
            >
              Fale Conosco
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
