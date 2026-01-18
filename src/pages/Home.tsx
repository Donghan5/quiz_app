import { useState } from 'react';
import { QuizCard } from '../components/molecules/QuizCard';
import { StartScreen } from '../components/molecules/StartScreen';
import { ResultScreen } from '../components/molecules/ResultScreen';
import { useQuiz } from '../hooks/useQuiz';

export const Home = () => {
  const {
    gameState,
    currentQuestion,
    score,
    history,
    totalQuestions,
    startGame,
    recordAnswer,
    nextQuestion
  } = useQuiz();

  // keep UI only state here
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);

  const handleAnswerClick = (option: string) => {
    if (selectedAnswer) return;

    setSelectedAnswer(option);

    recordAnswer(option);

    setTimeout(() => {
      nextQuestion();
      setSelectedAnswer(null);
    }, 1500);
  };

  return (
    <div className="w-full flex flex-col items-center justify-center p-4">
      {gameState === 'start' && (
        <StartScreen onStart={startGame} />
      )}

      {gameState === 'playing' && (
        <QuizCard
          question={currentQuestion.question}
          options={currentQuestion.options}
          answer={currentQuestion.answer}
          selectedAnswer={selectedAnswer}
          onAnswerClick={handleAnswerClick}
        />
      )}

      {gameState === 'finished' && (
        <ResultScreen
          score={score}
          totalQuestions={totalQuestions}
          history={history}
          onRestart={startGame}
        />
      )}

    </div>
  );
};
