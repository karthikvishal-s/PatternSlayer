// Home.tsx
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const Home = () => {
  const navigate = useNavigate();
  const [difficulty, setDifficulty] = useState('easy');

  const startGame = () => {
    navigate(`/activity/${difficulty}`);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-yellow-100 via-pink-100 to-blue-100 px-4 text-center overflow-hidden">
      <motion.h1
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-pink-600 drop-shadow mb-4"
      >
        🎉 Pattern Guess Game 🎯
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="text-lg sm:text-xl text-gray-700 max-w-md mb-6"
      >
        🧠 Guess the right pattern and become a ⭐ Pattern Master! 🎈
      </motion.p>

      <motion.img
        src="/4kids.jpg"
        alt="Pattern game kids"
        className="w-11/12 max-w-sm rounded-xl shadow-xl mb-10 border-4 border-pink-300"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.6 }}
      />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.5 }}
        className="flex flex-col items-center space-y-4"
      >
        <select
          value={difficulty}
          onChange={(e) => setDifficulty(e.target.value)}
          className="text-lg rounded-full px-6 py-2 border-2 border-pink-400 focus:outline-none focus:ring-2 focus:ring-pink-300"
        >
          <option value="easy">🟢 Easy</option>
          <option value="medium">🟡 Medium</option>
          <option value="hard">🔴 Hard</option>
        </select>

        <button
          onClick={startGame}
          className="bg-gradient-to-r from-pink-400 to-purple-500 hover:from-pink-500 hover:to-purple-600 text-white px-8 py-4 rounded-full text-xl font-bold shadow-lg transform hover:scale-105 transition-all duration-300"
        >
          🚀 Start Game
        </button>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        className="mt-10 text-sm text-gray-500"
      >
        🐶 🐱 🐰 🐻 🦊 🦄 🌈 ✨ 🍭 🍬
      </motion.div>
    </div>
  );
};

export default Home;
