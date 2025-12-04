import { useState } from 'react'
import { Check, X } from 'lucide-react'

export default function TranslationExercise({ exercise, onComplete }: any) {
  const [answer, setAnswer] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [correct, setCorrect] = useState(false)

  const handleSubmit = () => {
    const isCorrect = answer.toLowerCase().trim() === exercise.correctAnswer.toLowerCase().trim()
    setCorrect(isCorrect)
    setSubmitted(true)
    onComplete(isCorrect)
  }

  return (
    <div className="card">
      <h3 className="text-2xl font-semibold mb-6">Traduza para o italiano:</h3>
      <div className="text-3xl text-center py-8 bg-blue-50 dark:bg-blue-900/20 rounded-xl mb-6 font-semibold">{exercise.question}</div>
      <input
        type="text"
        value={answer}
        onChange={(e) => setAnswer(e.target.value)}
        onKeyPress={(e) => e.key === 'Enter' && !submitted && answer.trim() && handleSubmit()}
        disabled={submitted}
        className="w-full px-6 py-4 text-xl border-2 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 dark:bg-gray-700 dark:border-gray-600 mb-4"
        placeholder="Digite sua resposta..."
        autoFocus
      />
      {submitted && (
        <div className={`p-4 rounded-xl flex items-start gap-3 mb-4 ${correct ? 'bg-green-100 dark:bg-green-900/30' : 'bg-red-100 dark:bg-red-900/30'}`}>  
          <div className="mt-1">
            {correct ? <Check className="text-green-600" size={24} /> : <X className="text-red-600" size={24} />}
          </div>
          <div className="flex-1">
            <p className={`font-bold mb-1 ${correct ? 'text-green-800 dark:text-green-300' : 'text-red-800 dark:text-red-300'}`}>  
              {correct ? '✓ Correto!' : '✗ Incorreto'}
            </p>
            {!correct && (
              <p className="text-red-700 dark:text-red-300 mb-2">
                Resposta correta: <strong>{exercise.correctAnswer}</strong>
              </p>
            )}
            {exercise.explanation && (
              <p className="text-sm text-gray-700 dark:text-gray-300">{exercise.explanation}</p>
            )}
          </div>
        </div>
      )}
      {!submitted && (
        <button
          onClick={handleSubmit}
          disabled={!answer.trim()}
          className="btn-primary w-full disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Verificar
        </button>
      )}
    </div>
  )
}