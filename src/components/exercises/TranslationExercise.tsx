import { useState, useRef, useEffect } from 'react'
import { Check, X, Volume2, Lightbulb } from 'lucide-react'

export default function TranslationExercise({ exercise, onComplete }: any) {
  const [answer, setAnswer] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [correct, setCorrect] = useState(false)
  const [showHint, setShowHint] = useState(false)
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    inputRef.current?.focus()
  }, [])

  const normalizeText = (text: string) => {
    return text
      .toLowerCase()
      .trim()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .replace(/[.,!?;:]/g, '')
  }

  const calculateSimilarity = (str1: string, str2: string): number => {
    const longer = str1.length > str2.length ? str1 : str2
    const shorter = str1.length > str2.length ? str2 : str1
    if (longer.length === 0) return 1.0
    const editDistance = levenshteinDistance(longer, shorter)
    return (longer.length - editDistance) / longer.length
  }

  const levenshteinDistance = (str1: string, str2: string): number => {
    const matrix: number[][] = []
    for (let i = 0; i <= str2.length; i++) matrix[i] = [i]
    for (let j = 0; j <= str1.length; j++) matrix[0][j] = j
    for (let i = 1; i <= str2.length; i++) {
      for (let j = 1; j <= str1.length; j++) {
        if (str2.charAt(i - 1) === str1.charAt(j - 1)) {
          matrix[i][j] = matrix[i - 1][j - 1]
        } else {
          matrix[i][j] = Math.min(matrix[i - 1][j - 1] + 1, matrix[i][j - 1] + 1, matrix[i - 1][j] + 1)
        }
      }
    }
    return matrix[str2.length][str1.length]
  }

  const handleSubmit = () => {
    const normalizedInput = normalizeText(answer)
    const normalizedAnswer = normalizeText(exercise.correctAnswer)
    const similarity = calculateSimilarity(normalizedInput, normalizedAnswer)
    const isCorrect = normalizedInput === normalizedAnswer || similarity > 0.85
    setCorrect(isCorrect)
    setSubmitted(true)
    onComplete(isCorrect)
  }

  const speakText = (text: string) => {
    if ('speechSynthesis' in window) {
      const utterance = new SpeechSynthesisUtterance(text)
      utterance.lang = 'it-IT'
      utterance.rate = 0.8
      window.speechSynthesis.speak(utterance)
    }
  }

  const getHint = () => {
    const hintLength = Math.ceil(exercise.correctAnswer.length * 0.3)
    return exercise.correctAnswer.substring(0, hintLength) + '...'
  }

  return (
    <div className="card">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-2xl font-semibold">Traduza para o italiano:</h3>
        <button
          onClick={() => speakText(exercise.correctAnswer)}
          className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition"
          title="Ouvir pronúncia"
        >
          <Volume2 size={24} className="text-blue-600" />
        </button>
      </div>
      <div className="text-3xl text-center py-8 bg-blue-50 dark:bg-blue-900/20 rounded-xl mb-6 font-semibold">{exercise.question}</div>
      <input
        ref={inputRef}
        type="text"
        value={answer}
        onChange={(e) => setAnswer(e.target.value)}
        onKeyPress={(e) => e.key === 'Enter' && !submitted && answer.trim() && handleSubmit()}
        disabled={submitted}
        className={`w-full px-6 py-4 text-xl border-2 rounded-xl focus:outline-none focus:ring-2 dark:bg-gray-700 mb-4 transition-all ${
          submitted
            ? correct
              ? 'border-green-500 bg-green-50 dark:bg-green-900/20'
              : 'border-red-500 bg-red-50 dark:bg-red-900/20'
            : 'border-gray-300 dark:border-gray-600 focus:ring-green-500'
        }`}
        placeholder="Digite sua resposta..."
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
        <div className="flex gap-3">
          <button
            type="button"
            onClick={() => setShowHint(!showHint)}
            className="btn-secondary flex items-center gap-2"
          >
            <Lightbulb size={20} />
            Dica
          </button>
          <button
            onClick={handleSubmit}
            disabled={!answer.trim()}
            className="btn-primary flex-1 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Verificar
          </button>
        </div>
      )}
      {showHint && !submitted && (
        <div className="mt-4 p-4 bg-yellow-50 dark:bg-yellow-900/20 rounded-xl">
          <p className="text-sm text-gray-700 dark:text-gray-300">
            💡 <strong>Dica:</strong> Começa com "{getHint()}"
          </p>
        </div>
      )}
    </div>
  )
}