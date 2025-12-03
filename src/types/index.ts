// User & Progress
export interface User {
  id: string;
  name: string;
  email: string;
  avatar?: string;
  currentLevel: LevelId;
  totalXP: number;
  streak: number;
  lastActivityDate: Date;
  completedLessons: string[];
  completedExercises: string[];
  badges: Badge[];
  preferences: UserPreferences;
  aiProfile: AILearningProfile;
}

export interface UserPreferences {
  soundEnabled: boolean;
  darkMode: boolean;
  dailyGoal: number;
  notificationsEnabled: boolean;
}

export interface AILearningProfile {
  difficultyLevel: number;
  strengths: string[];
  weaknesses: string[];
  learningStyle: 'visual' | 'auditory' | 'kinesthetic' | 'mixed';
  averageAccuracy: number;
  preferredExerciseTypes: ExerciseType[];
}

export type LevelId = 'A1' | 'A2' | 'B1' | 'B2' | 'C1' | 'C2';

export interface Level {
  id: LevelId;
  name: string;
  description: string;
  units: Unit[];
  requiredXP: number;
  color: string;
  icon: string;
}

export interface Unit {
  id: string;
  levelId: LevelId;
  title: string;
  description: string;
  lessons: Lesson[];
  isLocked: boolean;
  order: number;
  theme: string;
  icon: string;
}

export interface Lesson {
  id: string;
  unitId: string;
  title: string;
  description: string;
  exercises: Exercise[];
  xpReward: number;
  completed: boolean;
  stars: number;
  order: number;
}

export type ExerciseType =
  | 'translation'
  | 'multiple_choice'
  | 'fill_blank'
  | 'blocks'
  | 'listening'
  | 'speaking'
  | 'image'
  | 'order'
  | 'conversation';

export interface Exercise {
  id: string;
  lessonId: string;
  type: ExerciseType;
  question: string;
  correctAnswer: string | string[];
  options?: string[];
  audioUrl?: string;
  imageUrl?: string;
  hint?: string;
  difficulty: number;
  points: number;
  explanation?: string;
}

export interface ExerciseResult {
  exerciseId: string;
  correct: boolean;
  userAnswer: string;
  timeSpent: number;
  hintsUsed: number;
  timestamp: Date;
}

export interface VocabularyItem {
  id: string;
  italian: string;
  portuguese: string;
  category: string;
  level: LevelId;
  examples: Sentence[];
  audioUrl?: string;
  imageUrl?: string;
  gender?: 'masculine' | 'feminine';
  plural?: string;
}

export interface Sentence {
  id: string;
  italian: string;
  portuguese: string;
  audioUrl?: string;
  difficulty: LevelId;
  tags: string[];
}

export interface Badge {
  id: string;
  name: string;
  description: string;
  icon: string;
  unlockedAt?: Date;
  progress?: number;
  requirement: number;
}

export interface Achievement {
  id: string;
  title: string;
  description: string;
  xpReward: number;
  icon: string;
  condition: (user: User) => boolean;
}

export interface SRSItem {
  userId: string;
  exerciseId: string;
  nextReview: Date;
  interval: number;
  easeFactor: number;
  repetitions: number;
  lastReviewed?: Date;
}

export interface AIExercise {
  id: string;
  type: ExerciseType;
  question: string;
  correctAnswer: string;
  options?: string[];
  difficulty: number;
  generatedAt: Date;
  context?: string;
}

export interface AIFeedback {
  exerciseId: string;
  correct: boolean;
  explanation: string;
  tips: string[];
  relatedConcepts: string[];
  confidence: number;
}

export interface ChatMessage {
  id: string;
  role: 'user' | 'assistant' | 'system';
  content: string;
  timestamp: Date;
  inItalian?: boolean;
}
