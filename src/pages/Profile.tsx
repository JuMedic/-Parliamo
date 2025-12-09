import { useNavigate } from 'react-router-dom'
import { ArrowLeft, Trophy, Flame, Star, Award, Target } from 'lucide-react'
import useUserStore from '../store/userStore'
import { levels, calculateProgress } from '../data/lessons'

export default function Profile() {
  const navigate = useNavigate()
  const { user, achievements } = useUserStore()

  if (!user) {
    return <div className="container mx-auto px-4 py-8">Carregando...</div>
  }

  const progress = calculateProgress(user.completedLessons)
  const unlockedAchievements = achievements.filter(a => a.unlockedAt)

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <div className="flex items-center gap-4 mb-8">
        <button 
          onClick={() => navigate('/')} 
          className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition"
        >
          <ArrowLeft size={24} />
        </button>
        <h1 className="text-3xl font-bold">Seu Perfil</h1>
      </div>

      {/* Card do Usuário */}
      <div className="card mb-8 bg-gradient-to-br from-green-50 to-blue-50 dark:from-green-900/20 dark:to-blue-900/20">
        <div className="flex items-center gap-6">
          <div className="w-24 h-24 rounded-full bg-gradient-to-br from-green-400 to-blue-500 flex items-center justify-center text-4xl text-white shadow-lg">
            {user.name.charAt(0).toUpperCase()}
          </div>
          <div className="flex-1">
            <h2 className="text-3xl font-bold mb-2">{user.name}</h2>
            <p className="text-gray-600 dark:text-gray-400 mb-3">{user.email}</p>
            <div className="flex items-center gap-4">
              <span className="px-4 py-2 bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300 rounded-full font-semibold">
                Nível {user.currentLevel} - {levels[user.currentLevel].name}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Estatísticas Principais */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
        <div className="card text-center bg-gradient-to-br from-orange-50 to-red-50 dark:from-orange-900/20 dark:to-red-900/20">
          <Flame className="mx-auto mb-2 text-orange-500" size={32} />
          <div className="text-3xl font-bold text-orange-600 mb-1">{user.streak}</div>
          <div className="text-sm text-gray-600 dark:text-gray-400">Dias Seguidos</div>
        </div>
        
        <div className="card text-center bg-gradient-to-br from-yellow-50 to-orange-50 dark:from-yellow-900/20 dark:to-orange-900/20">
          <Star className="mx-auto mb-2 text-yellow-500" size={32} />
          <div className="text-3xl font-bold text-yellow-600 mb-1">{user.totalXP}</div>
          <div className="text-sm text-gray-600 dark:text-gray-400">XP Total</div>
        </div>
        
        <div className="card text-center bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20">
          <Target className="mx-auto mb-2 text-blue-500" size={32} />
          <div className="text-3xl font-bold text-blue-600 mb-1">{user.completedLessons.length}</div>
          <div className="text-sm text-gray-600 dark:text-gray-400">Lições Completas</div>
        </div>
        
        <div className="card text-center bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20">
          <Trophy className="mx-auto mb-2 text-purple-500" size={32} />
          <div className="text-3xl font-bold text-purple-600 mb-1">{unlockedAchievements.length}</div>
          <div className="text-sm text-gray-600 dark:text-gray-400">Conquistas</div>
        </div>
      </div>

      {/* Progresso por Nível */}
      <div className="card mb-8">
        <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
          <Target size={24} className="text-green-600" />
          Progresso por Nível
        </h3>
        <div className="space-y-4">
          {Object.entries(progress.levelProgress).map(([levelId, data]) => {
            const percentage = data.total > 0 ? Math.round((data.completed / data.total) * 100) : 0
            const levelInfo = levels[levelId as keyof typeof levels]
            
            return (
              <div key={levelId}>
                <div className="flex items-center justify-between mb-2">
                  <div>
                    <span className="font-semibold">{levelId} - {levelInfo.name}</span>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      {data.completed} de {data.total} lições
                    </p>
                  </div>
                  <span className="text-lg font-bold text-green-600">{percentage}%</span>
                </div>
                <div className="h-3 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-gradient-to-r from-green-500 to-blue-500 transition-all duration-500"
                    style={{ width: `${percentage}%` }}
                  />
                </div>
              </div>
            )
          })}
        </div>
      </div>

      {/* Conquistas */}
      <div className="card">
        <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
          <Award size={24} className="text-yellow-600" />
          Conquistas ({unlockedAchievements.length}/{achievements.length})
        </h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {achievements.map(achievement => {
            const isUnlocked = !!achievement.unlockedAt
            
            return (
              <div
                key={achievement.id}
                className={`p-4 rounded-xl border-2 text-center transition-all ${
                  isUnlocked
                    ? 'border-yellow-400 bg-yellow-50 dark:bg-yellow-900/20 shadow-md'
                    : 'border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 opacity-50'
                }`}
                title={achievement.description}
              >
                <div className="text-4xl mb-2">{achievement.icon}</div>
                <div className="text-sm font-semibold mb-1">{achievement.name}</div>
                <div className="text-xs text-gray-600 dark:text-gray-400 line-clamp-2">
                  {achievement.description}
                </div>
                {isUnlocked && achievement.unlockedAt && (
                  <div className="text-xs text-green-600 dark:text-green-400 mt-2">
                    ✓ Desbloqueado
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </div>

      {/* Dicas de Progresso */}
      <div className="mt-8 card bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 border-2 border-blue-200 dark:border-blue-800">
        <h3 className="font-semibold text-lg mb-3 flex items-center gap-2">
          <Trophy size={22} className="text-blue-600" />
          Continue Aprendendo!
        </h3>
        <div className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
          {user.streak === 0 && (
            <p>💡 Comece sua sequência de estudos hoje mesmo!</p>
          )}
          {user.streak > 0 && user.streak < 7 && (
            <p>🔥 Continue estudando! Você está a caminho de completar uma semana inteira!</p>
          )}
          {user.streak >= 7 && (
            <p>🌟 Incrível! Você já tem {user.streak} dias de sequência. Continue assim!</p>
          )}
          {progress.percentage < 25 && (
            <p>📚 Você está só começando! Continue completando lições para avançar.</p>
          )}
          {progress.percentage >= 25 && progress.percentage < 50 && (
            <p>🎯 Ótimo progresso! Você já completou {progress.percentage}% das lições.</p>
          )}
          {progress.percentage >= 50 && progress.percentage < 75 && (
            <p>⭐ Excelente! Você já passou da metade do curso!</p>
          )}
          {progress.percentage >= 75 && (
            <p>🏆 Você está quase lá! Faltam poucas lições para completar o curso!</p>
          )}
        </div>
      </div>
    </div>
  )
}