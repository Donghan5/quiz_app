import { Button } from '../atoms/Button';
import { AnswerHistory } from '../../types/AnswerHistory';

interface ResultScreenProps {
  score: number;
  totalQuestions: number;
  history: AnswerHistory[];
  onRestart: () => void;
}

export const ResultScreen = ({
  score,
  totalQuestions,
  history,
  onRestart,
}: ResultScreenProps) => {
  return (
    <div className="flex flex-col items-center w-full max-w-2xl bg-white p-8 rounded-xl shadow-lg">
      <h2 className="text-3xl font-bold mb-6">Quiz Completed!</h2>

      <div className="bg-blue-100 text-blue-800 px-4 py-2 rounded mb-6 w-full text-center">
        Your Score: {score} / {totalQuestions}
      </div>

      <div className="w-full space-y-4 mb-8 max-h-[60vh] overflow-y-auto pr-2">
        {history.map((item, index) => (
          <div
            key={index}
            className={`p-4 rounded border-l-4 bg-gray-50 ${item.isCorrect ? 'border-green-500 bg-green-50' : 'border-red-500 bg-red-50'}`}
          >
            <p className="font-semibold text-gray-800">
              {index + 1}. {item.questionText}
            </p>
            <div className="text-sm flex justify-between">
              <span>Your answer: {item.selectedOption}</span>
              {!item.isCorrect && <span className="text-gray-500">Correct answer: {item.correctOption}</span>}
            </div>
          </div>
        ))}
      </div>

      <Button
        label="Restart Quiz"
        onClick={onRestart}
        variant="primary"
        size="large"
        className="w-full"
      />
    </div>
  );
};
