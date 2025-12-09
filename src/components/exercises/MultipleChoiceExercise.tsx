import { useState } from 'react'
import { Check, X, Volume2, HelpCircle } from 'lucide-react'

export default function MultipleChoiceExercise({ exercise, onComplete }: any) {
  const [selected, setSelected] = useState<string | null>(null)
  const [submitted, setSubmitted] = useState(false)
  const [eliminatedOptions, setEliminatedOptions] = useState<string[]>([])

  const handleSubmit = () => {
    if (!selected) return
    const correct = selected === exercise.correctAnswer
    setSubmitted(true)
    onComplete(correct)
  }

  const speakOption = (text: string) => {
    if ('speechSynthesis' in window) {
      const utterance = new SpeechSynthesisUtterance(text)
      utterance.lang = 'it-IT'
      utterance.rate = 0.8
      window.speechSynthesis.speak(utterance)
    }
  }

  const eliminateWrongAnswer = () => {
    if (submitted || eliminatedOptions.length >= 2) return
    const wrongOptions = exercise.options.filter(
      (opt: string) => opt !== exercise.correctAnswer && !eliminatedOptions.includes(opt)
    )
    if (wrongOptions.length > 0) {
      const randomWrong = wrongOptions[Math.floor(Math.random() * wrongOptions.length)]
      setEliminatedOptions([...eliminatedOptions, randomWrong])
    }
  }

  return (
    <div className="card">
      <h3 className="text-2xl font-semibold mb-8">{exercise.question}</h3>
      <div className="space-y-3 mb-6">
        {exercise.options.map((option: string) => {
          const isSelected = selected === option
          const isCorrect = option === exercise.correctAnswer
          const isEliminated = eliminatedOptions.includes(option)
          return (
            <div key={option} className={isEliminated ? 'opacity-40' : ''}>
              <button
                onClick={() => !submitted && !isEliminated && setSelected(option)}
                disabled={submitted || isEliminated}
                className={`w-full p-5 text-left text-lg rounded-xl border-2 transition-all relative group ${
                  submitted
                    ? isCorrect
                      ? 'border-green-500 bg-green-50 dark:bg-green-900/20'
                      : isSelected
                      ? 'border-red-500 bg-red-50 dark:bg-red-900/20'
                      : 'border-gray-300 dark:border-gray-600'
                    : isEliminated
                    ? 'border-gray-200 bg-gray-100 dark:bg-gray-800 cursor-not-allowed line-through'
                    : isSelected
                    ? 'border-blue-500 bg-blue-50 dark:bg-blue-900/20'
                    : 'border-gray-300 dark:border-gray-600 hover:border-blue-300'
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="text-lg">{option}</span>
                  <div className="flex items-center gap-2">
                    {!submitted && !isEliminated && (
                      <button
                        onClick={(e) => { e.stopPropagation(); speakOption(option); }}
                        className="p-1 opacity-0 group-hover:opacity-100 hover:bg-gray-200 dark:hover:bg-gray-700 rounded transition"
                        title="Ouvir"
                      >
                        <Volume2 size={18} className="text-blue-600" />
                      </button>
                    )}
                    {submitted && isCorrect && <Check className="text-green-600" size={24} />}
                    {submitted && isSelected && !isCorrect && <X className="text-red-600" size={24} />}
                  </div>
                </div>
              </button>
            </div>
          )
        })}
      </div>
      {!submitted && (
        <div className="flex gap-3">
          <button
            onClick={eliminateWrongAnswer}
            disabled={eliminatedOptions.length >= 2}
            className="btn-secondary flex items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
            title="Eliminar uma resposta errada"
          >
            <HelpCircle size={20} />
            Eliminar ({2 - eliminatedOptions.length})
          </button>
          <button
            onClick={handleSubmit}
            disabled={!selected}
            className="btn-primary flex-1 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Verificar
          </button>
        </div>
      )}
      {submitted && exercise.explanation && (
        <div className="mt-4 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-xl">
          <p className="text-sm text-gray-700 dark:text-gray-300">💡 {exercise.explanation}</p>
        </div>
      )}
    </div>
  )
}