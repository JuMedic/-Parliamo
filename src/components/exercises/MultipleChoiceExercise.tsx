import { useState } from 'react'
import { Check, X } from 'lucide-react'

export default function MultipleChoiceExercise({ exercise, onComplete }: any) {
  const [selected, setSelected] = useState<string | null>(null)
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = () => {
    if (!selected) return
    const correct = selected === exercise.correctAnswer
    setSubmitted(true)
    onComplete(correct)
  }

  return (
    <div className="card">
      <h3 className="text-2xl font-semibold mb-8">{exercise.question}</h3>
      <div className="space-y-3 mb-6">
        {exercise.options.map((option: string) => {
          const isSelected = selected === option
          const isCorrect = option === exercise.correctAnswer
          return (
            <button
              key={option}
              onClick={() => !submitted && setSelected(option)}
              disabled={submitted}
              className={`w-full p-5 text-left text-lg rounded-xl border-2 transition-all ${
                isSelected && !submitted ? 'border-green-500 bg-green-50 dark:bg-green-900/20 scale-[1.02]' :
                submitted && isCorrect ? 'border-green-500 bg-green-100 dark:bg-green-900/30' :
                submitted && isSelected ? 'border-red-500 bg-red-100 dark:bg-red-900/30' :
                'border-gray-200 dark:border-gray-700 hover:border-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800'
              }`
            >
              <div className="flex items-center justify-between">
                <span>{option}</span>
                {submitted && isCorrect && <Check className="text-green-600" size={24} />}
                {submitted && isSelected && !isCorrect && <X className="text-red-600" size={24} />}
              </div>
            </button>
          )
        })}
      </div>
      {!submitted && (
        <button
          onClick={handleSubmit}
          disabled={!selected}
          className="btn-primary w-full disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Verificar
        </button>
      )}
      {submitted && exercise.explanation && (
        <div className="mt-4 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-xl">
          <p className="text-sm text-gray-700 dark:text-gray-300">💡 {exercise.explanation}</p>
        </div>
      )}
    </div>
  )
}