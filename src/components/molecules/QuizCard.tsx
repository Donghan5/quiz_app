import { Button, ButtonVariant } from '../atoms/Button';

interface QuizCardProps {
  question: string;
  options: string[];
  answer: string;
  selectedAnswer: string | null;
  onAnswerClick: (answer: string) => void;
}

export const QuizCard = ({
  question,
  options,
  answer,
  selectedAnswer,
  onAnswerClick
}: QuizCardProps) => {
  const getButtonVariant = (option: string): ButtonVariant => {
    if (!selectedAnswer) {
      return 'outline';
    }

    if (option === answer) {
      return 'success';
    }

    if (option === selectedAnswer && option !== answer) {
      return 'danger';
    }

    return 'outline';
  }

  return (
    <div className="bg-white rounded-xl shadow-lg p-8 max-w-2xl w-full border-2 border-transparent">
      <h2 className="text-2xl font-bold mb-6">{question}</h2>
      <div className="flex flex-col gap-3">
        {options.map((option, index) => (
          <Button
            key={`${option}-${index}`}
            label={option}
            onClick={() => onAnswerClick(option)}
            disabled={!!selectedAnswer}
            variant={getButtonVariant(option)}
            size="large"
            className={`
              text-left justify-start px-6
              ${selectedAnswer && option !== answer && option !== selectedAnswer
                ? 'opacity-50' : ''}
              `}
          />
        ))}
      </div>
    </div>
  );
};
