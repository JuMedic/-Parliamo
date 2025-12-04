import { Link } from 'react-router-dom'
import { BookOpen, User } from 'lucide-react'

export default function Home() {
  const lessons = [
    { id: 'lesson-1', title: 'Saudações Básicas', description: 'Aprenda a cumprimentar em italiano', locked: false },
    { id: 'lesson-2', title: 'Apresentações', description: 'Como se apresentar', locked: false },
    { id: 'lesson-3', title: 'Números', description: 'Conte de 1 a 100', locked: true },
  ]

  return (
    <div className="container mx-auto px-4 py-8">
      <header className="flex justify-between items-center mb-8">
        <h1 className="text-4xl font-bold text-green-600">🇮🇹 Parliamo</h1>
        <Link to="/profile" className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg">
          <User size={24} />
        </Link>
      </header>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
        <div className="card text-center">
          <div className="text-3xl font-bold text-orange-500">0</div>
          <div className="text-sm text-gray-600 dark:text-gray-400">Sequência 🔥</div>
        </div>
        <div className="card text-center">
          <div className="text-3xl font-bold text-green-600">0</div>
          <div className="text-sm text-gray-600 dark:text-gray-400">XP Total ⭐</div>
        </div>
        <div className="card text-center">
          <div className="text-3xl font-bold text-blue-500">0</div>
          <div className="text-sm text-gray-600 dark:text-gray-400">Lições 📚</div>
        </div>
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl font-bold mb-4">Nível A1 - Iniciante</h2>
        {lessons.map((lesson) => (
          <div key={lesson.id} className="card">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className={`w-16 h-16 rounded-full flex items-center justify-center ${lesson.locked ? 'bg-gray-200 dark:bg-gray-700' : 'bg-green-100 dark:bg-green-900'}`}>
                  <BookOpen className={lesson.locked ? 'text-gray-400' : 'text-green-600'} size={32} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold">{lesson.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400">{lesson.description}</p>
                </div>
              </div>
              {!lesson.locked ? (
                <Link to={`/lesson/${lesson.id}`} className="btn-primary">
                  Começar
                </Link>
              ) : (
                <button disabled className="btn-secondary opacity-50 cursor-not-allowed">
                  🔒 Bloqueado
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}