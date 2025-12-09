import { Link } from 'react-router-dom'
import { BookOpen, User, Trophy, Lock } from 'lucide-react'
import { lessons, levels, isLessonUnlocked, calculateProgress } from '../data/lessons'
import useUserStore from '../store/userStore'
import { LevelId } from '../types'
import { useEffect, useState } from 'react'

export default function Home() {
  const { user, initUser } = useUserStore()
  const [selectedLevel, setSelectedLevel] = useState<LevelId>('A1')

  useEffect(() => {
    if (!user) {
      initUser('Estudante', 'estudante@parliamo.it')
    }
  }, [user, initUser])

  if (!user) {
    return <div className="container mx-auto px-4 py-8">Carregando...</div>
  }

  const progress = calculateProgress(user.completedLessons)
  const levelLessons = Object.values(lessons).filter(lesson => lesson.level === selectedLevel)

  return (
    <div className="container mx-auto px-4 py-8 max-w-6xl">
      <header className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-4xl font-bold text-green-600">🇮🇹 Parliamo</h1>
          <p className="text-gray-600 dark:text-gray-400">Aprenda italiano de forma inteligente</p>
        </div>
        <Link 
          to="/profile" 
          className="p-3 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition"
          title="Perfil"
        >
          <User size={28} />
        </Link>
      </header>

      {/* Estatísticas */}
      <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 mb-8">
        <div className="card text-center bg-gradient-to-br from-orange-50 to-orange-100 dark:from-orange-900/20 dark:to-orange-800/20">
          <div className="text-4xl mb-2">🔥</div>
          <div className="text-3xl font-bold text-orange-600">{user.streak}</div>
          <div className="text-sm text-gray-600 dark:text-gray-400">Dias de Sequência</div>
        </div>
        <div className="card text-center bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-800/20">
          <div className="text-4xl mb-2">⭐</div>
          <div className="text-3xl font-bold text-green-600">{user.totalXP}</div>
          <div className="text-sm text-gray-600 dark:text-gray-400">XP Total</div>
        </div>
        <div className="card text-center bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20">
          <div className="text-4xl mb-2">📚</div>
          <div className="text-3xl font-bold text-blue-600">{user.completedLessons.length}</div>
          <div className="text-sm text-gray-600 dark:text-gray-400">Lições Completas</div>
        </div>
        <div className="card text-center bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900/20 dark:to-purple-800/20">
          <div className="text-4xl mb-2">🎯</div>
          <div className="text-3xl font-bold text-purple-600">{progress.percentage}%</div>
          <div className="text-sm text-gray-600 dark:text-gray-400">Progresso Total</div>
        </div>
      </div>

      {/* Barra de Progresso Geral */}
      <div className="card mb-8">
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-lg font-semibold">Seu Progresso</h3>
          <span className="text-sm text-gray-600 dark:text-gray-400">
            {progress.completedCount} de {progress.totalLessons} lições
          </span>
        </div>
        <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
          <div 
            className="h-full bg-gradient-to-r from-green-500 to-blue-500 transition-all duration-500"
            style={{ width: `${progress.percentage}%` }}
          />
        </div>
      </div>

      {/* Seletor de Nível */}
      <div className="mb-6">
        <h2 className="text-2xl font-bold mb-4">Escolha seu Nível</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3">
          {Object.entries(levels).map(([levelId, levelInfo]) => {
            const levelData = progress.levelProgress[levelId as LevelId]
            const isActive = selectedLevel === levelId
            const hasProgress = levelData.completed > 0
            
            return (
              <button
                key={levelId}
                onClick={() => setSelectedLevel(levelId as LevelId)}
                className={`p-4 rounded-xl border-2 transition-all ${
                  isActive
                    ? 'border-green-500 bg-green-50 dark:bg-green-900/20 shadow-lg scale-105'
                    : hasProgress
                    ? 'border-blue-300 hover:border-blue-500 bg-blue-50 dark:bg-blue-900/10'
                    : 'border-gray-300 hover:border-gray-400 bg-white dark:bg-gray-800'
                }`}
              >
                <div className="text-2xl font-bold mb-1">{levelId}</div>
                <div className="text-xs text-gray-600 dark:text-gray-400 mb-2">
                  {levelInfo.name}
                </div>
                <div className="text-xs font-semibold text-green-600">
                  {levelData.completed}/{levelData.total}
                </div>
              </button>
            )
          })}
        </div>
      </div>

      {/* Lista de Lições */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold">
            Nível {selectedLevel} - {levels[selectedLevel].name}
          </h2>
          <span className="text-sm text-gray-500 dark:text-gray-400">
            {levelLessons.length} lições disponíveis
          </span>
        </div>
        
        <p className="text-gray-600 dark:text-gray-400 mb-6">
          {levels[selectedLevel].description}
        </p>

        {levelLessons.length === 0 ? (
          <div className="card text-center py-12">
            <div className="text-6xl mb-4">🚧</div>
            <p className="text-gray-600 dark:text-gray-400">
              Lições para este nível em breve!
            </p>
          </div>
        ) : (
          levelLessons.map((lesson, index) => {
            const isUnlocked = isLessonUnlocked(lesson.id, user.completedLessons)
            const isCompleted = user.completedLessons.includes(lesson.id)
            
            return (
              <div 
                key={lesson.id} 
                className={`card transition-all ${
                  !isUnlocked ? 'opacity-60' : 'hover:shadow-lg'
                }`}
              >
                <div className="flex items-center justify-between gap-4">
                  <div className="flex items-center gap-4 flex-1">
                    <div className={`w-16 h-16 rounded-full flex items-center justify-center text-2xl ${
                      isCompleted
                        ? 'bg-green-100 dark:bg-green-900 ring-2 ring-green-500'
                        : isUnlocked
                        ? 'bg-blue-100 dark:bg-blue-900'
                        : 'bg-gray-200 dark:bg-gray-700'
                    }`}>
                      {isCompleted ? '✓' : !isUnlocked ? '🔒' : index + 1}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <h3 className="text-xl font-semibold">{lesson.title}</h3>
                        {isCompleted && (
                          <span className="px-2 py-1 bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300 text-xs rounded-full font-medium">
                            Completo
                          </span>
                        )}
                      </div>
                      <p className="text-gray-600 dark:text-gray-400 text-sm mb-2">
                        {lesson.description}
                      </p>
                      <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400">
                        <span className="flex items-center gap-1">
                          <BookOpen size={16} />
                          {lesson.exercises.length} exercícios
                        </span>
                        <span className="flex items-center gap-1">
                          <Trophy size={16} />
                          {lesson.xpReward} XP
                        </span>
                      </div>
                    </div>
                  </div>
                  
                  {isUnlocked ? (
                    <Link 
                      to={`/lesson/${lesson.id}`} 
                      className={`px-6 py-3 rounded-lg font-semibold transition-all ${
                        isCompleted
                          ? 'bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300 hover:bg-green-200'
                          : 'bg-green-600 text-white hover:bg-green-700 shadow-md'
                      }`}
                    >
                      {isCompleted ? 'Revisar' : 'Começar'}
                    </Link>
                  ) : (
                    <button 
                      disabled 
                      className="px-6 py-3 bg-gray-200 dark:bg-gray-700 text-gray-500 dark:text-gray-400 rounded-lg font-semibold cursor-not-allowed flex items-center gap-2"
                    >
                      <Lock size={18} />
                      Bloqueado
                    </button>
                  )}
                </div>
              </div>
            )
          })
        )}
      </div>

      {/* Dica motivacional */}
      <div className="mt-8 card bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 border-2 border-blue-200 dark:border-blue-800">
        <div className="flex items-start gap-4">
          <div className="text-4xl">💡</div>
          <div>
            <h3 className="font-semibold text-lg mb-2">Dica do Dia</h3>
            <p className="text-gray-700 dark:text-gray-300">
              Pratique um pouco todos os dias! A consistência é a chave para o aprendizado de idiomas. 
              {user.streak > 0 
                ? ` Você está indo muito bem com ${user.streak} dia${user.streak > 1 ? 's' : ''} de sequência! 🔥`
                : ' Comece sua sequência hoje mesmo!'
              }
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}