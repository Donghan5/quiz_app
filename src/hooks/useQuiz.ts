import { useState } from 'react';
import { quizData, Question } from '../data/question';
import { AnswerHistory } from '../types/AnswerHistory';

export const useQuiz = () => {
  const [gameState, setGameState] = useState<'start' | 'playing' | 'finished'>('start');
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);

  const [history, setHistory] = useState<AnswerHistory[]>([]);

  const currentQuestion = quizData[currentQuestionIndex];
  const isLastQuestion = currentQuestionIndex === quizData.length - 1;

  const startGame = () => {
    setGameState('playing');
    setCurrentQuestionIndex(0);
    setScore(0);
    setHistory([]);
  };

  const recordAnswer = (selectedOption: string) => {
    const isCorrect = selectedOption === currentQuestion.answer;

    if (isCorrect) {
      setScore((prev) => prev + 1);
    }

    setHistory((prev) => [...prev, {
      questionId: currentQuestion.id,
      questionText: currentQuestion.question,
      selectedOption,
      correctOption: currentQuestion.answer,
      isCorrect
    }]);
  };

  const nextQuestion = () => {
    if (isLastQuestion) {
      setGameState('finished');
    } else {
      setCurrentQuestionIndex((prev) => prev + 1);
    }
  };

  return {
    gameState,
    currentQuestion,
    currentQuestionIndex,
    totalQuestions: quizData.length,
    score,
    history,
    startGame,
    recordAnswer,
    nextQuestion,
  };
}
