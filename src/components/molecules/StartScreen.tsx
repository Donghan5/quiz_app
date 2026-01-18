import React from 'react';
import { Button } from '../atoms/Button';

interface StartScreenProps extends React.HTMLAttributes<HTMLDivElement> {
  onStart: () => void;
}

export const StartScreen = ({ onStart }: StartScreenProps) => {
  return (
    <div className="flex flex-col items-center justify-center space-y-8 
      bg-white/90 backdrop-blur-sm p-12 rounded-3xl shadow-2xl 
      max-w-lg w-full text-center border border-white/20 transform transition-all hover:scale-[1.01]">

      <div className="text-6xl animate-bounce mb-2">🧠</div>

      <h1 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
        Quiz Time!
      </h1>

      <p className="text-gray-600 text-lg font-medium leading-relaxed">
        Are you ready? <br />
        Test your knownledge.
      </p>

      <Button
        label="Start Quiz Now"
        onClick={onStart}
        variant="primary"
        size="large"
        className="w-full shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 font-bold text-lg py-4"
      />
    </div>
  );
};
