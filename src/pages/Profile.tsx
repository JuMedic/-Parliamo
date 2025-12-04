import { Link } from 'react-router-dom'
import { ArrowLeft, Trophy, Flame, Book } from 'lucide-react'

export default function Profile() {
  return (
    <div className="container mx-auto px-4 py-8">
      <Link to="/" className="flex items-center gap-2 mb-6 text-green-600 hover:text-green-700">
        <ArrowLeft size={20} />
        <span>Voltar</span>
      </Link>
      <div className="card max-w-2xl mx-auto">
        <div className="flex items-center gap-6 mb-8">
          <div className="w-24 h-24 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center text-4xl">👤</div>
          <div>
            <h1 className="text-3xl font-bold">Estudante</h1>
            <p className="text-gray-600 dark:text-gray-400">Nível A1 - Iniciante</p>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-4 mb-8">
          <div className="text-center p-4 bg-orange-50 dark:bg-orange-900/20 rounded-xl">
            <Flame className="mx-auto mb-2 text-orange-500" size={32} />
            <div className="text-2xl font-bold">0</div>
            <div className="text-sm text-gray-600 dark:text-gray-400">Sequência</div>
          </div>
          <div className="text-center p-4 bg-green-50 dark:bg-green-900/20 rounded-xl">
            <Trophy className="mx-auto mb-2 text-green-600" size={32} />
            <div className="text-2xl font-bold">0</div>
            <div className="text-sm text-gray-600 dark:text-gray-400">XP Total</div>
          </div>
          <div className="text-center p-4 bg-blue-50 dark:bg-blue-900/20 rounded-xl">
            <Book className="mx-auto mb-2 text-blue-500" size={32} />
            <div className="text-2xl font-bold">0</div>
            <div className="text-sm text-gray-600 dark:text-gray-400">Lições</div>
          </div>
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-4">Conquistas</h3>
          <div className="grid grid-cols-4 gap-4">
            {['🏆', '⭐', '🎯', '🔥', '💎', '🎓', '🌟', '👑'].map((emoji, i) => (
              <div key={i} className="aspect-square bg-gray-100 dark:bg-gray-700 rounded-xl flex items-center justify-center text-3xl opacity-30">
                {emoji}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}