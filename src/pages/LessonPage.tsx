import { useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { X } from 'lucide-react'
import TranslationExercise from '../components/exercises/TranslationExercise'
import MultipleChoiceExercise from '../components/exercises/MultipleChoiceExercise'

const LESSONS: any = {
  'lesson-1': {
    title: 'Saudações Básicas',
    exercises: [
      { id: 'e1', type: 'translation', question: 'Oi', correctAnswer: 'Ciao', explanation: 'Ciao é informal, usado entre amigos' },
      { id: 'e2', type: 'multiple_choice', question: 'Como se diz "bom dia"?', correctAnswer: 'Buongiorno', options: ['Buonasera', 'Buongiorno', 'Buonanotte', 'Ciao'], explanation: 'Buongiorno é usado até as 14h' },
      { id: 'e3', type: 'translation', question: 'Boa tarde', correctAnswer: 'Buonasera', explanation: 'Buonasera é usado após as 14h' },
    ]
  },
  'lesson-2': {
    title: 'Apresentações',
    exercises: [
      { id: 'e4', type: 'translation', question: 'Meu nome é Maria', correctAnswer: 'Mi chiamo Maria', explanation: 'Mi chiamo significa literalmente "eu me chamo"' },
      { id: 'e5', type: 'multiple_choice', question: 'Como perguntar "Como você se chama?"', correctAnswer: 'Come ti chiami?', options: ['Come stai?', 'Come ti chiami?', 'Dove abiti?', 'Quanti anni hai?'], explanation: 'Come ti chiami? é a forma informal' },
    ]
  }
}

export default function LessonPage() {
  const { id } = useParams()
  const navigate = useNavigate()
  const lesson = LESSONS[id || 'lesson-1']
  
  const [currentIndex, setCurrentIndex] = useState(0)
  const [correctCount, setCorrectCount] = useState(0)
  const [completed, setCompleted] = useState(false)

  if (!lesson) return <div>Lição não encontrada</div>

  const currentExercise = lesson.exercises[currentIndex]

  const handleComplete = (correct: boolean) => {
    if (correct) setCorrectCount(prev => prev + 1)
    setTimeout(() => {
      if (currentIndex < lesson.exercises.length - 1) {
        setCurrentIndex(prev => prev + 1)
      } else {
        setCompleted(true)
      }
    }, 2000)
  }

  if (completed) {
    const xp = correctCount * 10 + (correctCount === lesson.exercises.length ? 50 : 0)
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="card max-w-md mx-auto text-center">
          <div className="text-6xl mb-4">🎉</div>
          <h2 className="text-3xl font-bold mb-4">Lição Completa!</h2>
          <p className="text-xl mb-2 text-green-600 font-bold">+{xp} XP</p>
          <p className="text-gray-600 dark:text-gray-400 mb-6">Acertos: {correctCount}/{lesson.exercises.length}</p>
          {correctCount === lesson.exercises.length && <p className="text-green-600 font-bold mb-4">✨ Perfeito! Bônus de 50 XP!</p>}
          <button onClick={() => navigate('/')} className="btn-primary w-full">Continuar</button>
        </div>
      </div>
    )
  }

  return (
    <div className="container mx-auto px-4 py-8 max-w-3xl">
      <div className="flex items-center justify-between mb-6">
        <button onClick={() => navigate('/')} className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg">
          <X size={24} />
        </button>
        <h2 className="text-xl font-semibold">{lesson.title}</h2>
        <div className="w-8"></div>
      </div>

      <div className="mb-8">
        <div className="h-3 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
          <div className="h-full bg-green-500 transition-all duration-300" style={{ width: `${((currentIndex + 1) / lesson.exercises.length) * 100}%` }} />
        </div>
        <p className="text-center mt-2 text-sm text-gray-600 dark:text-gray-400">{currentIndex + 1} / {lesson.exercises.length}</p>
      </div>

      {currentExercise.type === 'translation' && <TranslationExercise exercise={currentExercise} onComplete={handleComplete} />}
      {currentExercise.type === 'multiple_choice' && <MultipleChoiceExercise exercise={currentExercise} onComplete={handleComplete} />}
    </div>
  )
}