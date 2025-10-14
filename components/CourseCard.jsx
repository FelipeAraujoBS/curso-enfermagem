export default function CourseCard({ title, description, topics, icon }) {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition">
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="text-2xl font-bold text-gray-800 mb-3">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <ul className="space-y-2 mb-6">
        {topics.map((topic, index) => (
          <li key={index} className="text-sm text-gray-700 flex items-start">
            <span className="text-blue-600 mr-2">✓</span>
            {topic}
          </li>
        ))}
      </ul>
      <a
        href="#contato"
        className="block w-full bg-blue-600 text-white text-center py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
      >
        Inscreva-se
      </a>
    </div>
  );
}
