export default function TestimonialCard({
  nome,
  cargo,
  foto,
  depoimento,
  rating,
}) {
  return (
    <div className="bg-white rounded-xl shadow-lg p-6 flex flex-col h-full">
      {/* Header - Foto + Nome */}
      <div className="flex items-center mb-4">
        <div className="w-14 h-14 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold text-xl mr-4 overflow-hidden flex-shrink-0">
          {foto ? (
            <img src={foto} alt={nome} className="w-full h-full object-cover" />
          ) : (
            nome
              .split(" ")
              .map((n) => n[0])
              .join("")
              .substring(0, 2)
          )}
        </div>
        <div>
          <h4 className="font-semibold text-gray-800 text-lg">{nome}</h4>
          <p className="text-sm text-gray-500">{cargo}</p>
        </div>
      </div>

      {/* Estrelas */}
      <div className="flex mb-4">
        {[...Array(5)].map((_, i) => (
          <span
            key={i}
            className={`text-xl ${
              i < rating ? "text-yellow-400" : "text-gray-300"
            }`}
          >
            ★
          </span>
        ))}
      </div>

      {/* Depoimento */}
      <p className="text-gray-600 leading-relaxed flex-grow italic">
        "{depoimento}"
      </p>
    </div>
  );
}
