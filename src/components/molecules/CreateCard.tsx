import React, { useState, useEffect } from 'react';

interface CreateCardProps extends React.HTMLAttributes<HTMLDivElement> {
  initialQuestion?: string;
  initialOptions?: string[];
  initialCorrectAnswer?: string;
  onSubmit: (data: { question: string; options: string[]; correctedAnswer: string }) => void;
}

export const CreateCard = ({
  initialQuestion = '',
  initialOptions = [],
  initialCorrectAnswer = '',
  onSubmit,
  className,
  ...props
}: CreateCardProps) => {
  const [question, setQuestion] = useState<string>(initialQuestion);
  const [options, setOptions] = useState<string[]>(initialOptions);
  const [correctedAnswer, setCorrectedAnswer] = useState<string>(initialCorrectAnswer);
  const [currentInput, setCurrentInput] = useState<string>('');
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setQuestion(initialQuestion);
    setOptions(initialOptions);
    setCorrectedAnswer(initialCorrectAnswer);
  }, [initialQuestion, initialOptions, initialCorrectAnswer]);

  const handleAddOption = () => {
    const trimmedInput = currentInput.trim();
    if (!trimmedInput) return;

    if (options.includes(trimmedInput)) {
      setError("Option already exists.");
      return;
    }

    setOptions([...options, trimmedInput]);
    setCurrentInput('');
    setError(null);
  };

  const handleRemoveOption = (indexToRemove: number) => {
    setOptions(options.filter((_, index) => index !== indexToRemove));
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      handleAddOption();
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!question.trim()) {
      setError("Please provide a question.");
      return;
    }

    if (options.length < 2) {
      setError("Please provide at least two options.");
      return;
    }

    if (!correctedAnswer.trim()) {
      setError("Please provide a correct answer.");
      return;
    }

    onSubmit({
      question: question.trim(),
      options: options,
      correctedAnswer: correctedAnswer.trim(),
    });

    setQuestion('');
    setOptions([]);
    setCorrectedAnswer('');
    setError(null);
  };

  return (
    <div className={`border rounded-lg p-4 shadow-md bg-white ${className || ''}`} {...props}>
      <h2 className="text-xl font-bold mb-4">Create New Quiz</h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block mb-1 font-medium">Question:</label>
          <input
            type="text"
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            className="w-full border rounded px-3 py-2"
            placeholder="Enter your question here"
            required
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">Options:</label>
          <div className="flex gap-2 mb-2">
            <input
              type="text"
              value={currentInput}
              onChange={(e) => setCurrentInput(e.target.value)}
              onKeyDown={handleKeyDown}
              className="flex-grow border rounded px-3 py-2"
              placeholder="Add an option and press Enter"
            />
            <button
              type="button"
              onClick={handleAddOption}
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            >
              Add
            </button>
          </div>

          <div className="flex flex-wrap gap-2 min-h-[40px] items-center">
            {options.length === 0 && (
              <span className="text-sm text-gray-400">No options added yet.</span>
            )}
            {options.map((option, index) => (
              <div
                key={index}
                className="flex items-center gap-2 px-3 py-1.5 bg-blue-50 text-blue-700 rounded-full text-sm"
              >
                <span>{option}</span>
                <button
                  type="button"
                  onClick={() => handleRemoveOption(index)}
                  className="text-red-500 hover:text-red-700 font-bold leading-none"
                >
                  &times;
                </button>
              </div>
            ))}
          </div>
        </div>

        <div>
          <label className="block mb-1 font-medium">Correct Answer:</label>
          <input
            type="text"
            value={correctedAnswer}
            onChange={(e) => setCorrectedAnswer(e.target.value)}
            className="w-full border rounded px-3 py-2"
            placeholder="Enter the correct answer"
            required
          />
        </div>

        {error && <p className="text-sm text-red-500">{error}</p>}

        <button
          type="submit"
          className="mt-4 bg-green-500 text-white px-4 py-2 rounded w-full font-bold hover:bg-green-600"
        >
          Create Quiz Card
        </button>
      </form>
    </div>
  );
};
