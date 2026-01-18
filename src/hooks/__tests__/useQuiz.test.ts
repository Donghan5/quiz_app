import { describe, it, expect, beforeEach } from 'vitest';
import { renderHook, act } from '@testing-library/react';
import { useQuiz } from '../useQuiz';
import { quizData } from '../../data/question';

describe('useQuiz Game Logic', () => {
  const setup = () => renderHook(() => useQuiz());

  it('should initialize with correct default values', () => {
    const { result } = setup();

    expect(result.current.gameState).toBe('start');
    expect(result.current.score).toBe(0);
    expect(result.current.currentQuestionIndex).toBe(0);
    expect(result.current.history).toHaveLength(0);
  });

  it('should start the game correctly', () => {
    const { result } = setup();

    act(() => {
      result.current.startGame();
    });

    expect(result.current.gameState).toBe('playing');
    expect(result.current.currentQuestionIndex).toBe(0);
    expect(result.current.currentQuestion).toEqual(quizData[0]);
  });

  it('should handle a CORRECT answer', () => {
    const { result } = setup();

    act(() => result.current.startGame());


    const correctedAnswer = quizData[0].answer;

    act(() => {
      result.current.recordAnswer(correctedAnswer);
    });

    expect(result.current.score).toBe(1);
    expect(result.current.history).toHaveLength(1);
    expect(result.current.history[0].isCorrect).toBe(true);
  });

  it('should handle an INCORRECT answer', () => {
    const { result } = setup();

    act(() => result.current.startGame());

    const incorrectAnswer = 'Wrong Answer';

    act(() => {
      result.current.recordAnswer(incorrectAnswer);
    });

    expect(result.current.score).toBe(0);
    expect(result.current.history).toHaveLength(1);
    expect(result.current.history[0].isCorrect).toBe(false);
  });

  it('should progress to the next question', () => {
    const { result } = setup();

    act(() => result.current.startGame());

    expect(result.current.currentQuestionIndex).toBe(0);

    act(() => {
      result.current.nextQuestion();
    });

    expect(result.current.currentQuestionIndex).toBe(1);
    expect(result.current.currentQuestion).toEqual(quizData[1]);
  });

  it('should finish the game after the last question', () => {
    const { result } = setup();

    act(() => result.current.startGame());

    // Answer all questions
    quizData.forEach((question) => {
      act(() => result.current.recordAnswer(question.answer));
      act(() => result.current.nextQuestion());
    });

    expect(result.current.gameState).toBe('finished');
    expect(result.current.score).toBe(quizData.length);
  });
});
