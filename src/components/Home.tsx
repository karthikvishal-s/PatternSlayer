// Home.tsx

import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const Home = () => {
  const navigate = useNavigate();
  

  const startGame = () => {
    navigate(`/activity`);
  };

  const LearnMore = () => {
    navigate(`/learnMore`);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-black px-4 text-center overflow-hidden">
      <motion.h1
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-2xl sm:text-5xl md:text-4xl font-extrabold text-red-700 drop-shadow mb-4"
      >
        <p>Pattern Guess Game </p>
        
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="text-lg sm:text-xl text-red-200 max-w-xl mb-6"
      >
        Demon Slayer Edition
      </motion.p>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="text-lg sm:text-xl text-gray-200 max-w-xl mb-6"
      >
        🧠 Guess the right pattern and become a ⭐ Pattern Master! 🎈
      </motion.p>

      <motion.img
        src="/ds-1.jpg"
        alt="Pattern game kids"
        className="w-11/12 max-w-7xl  shadow-xl mb-10 "
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.6 }}
      />

   

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        className="mt-10 text-sm text-gray-500 flex flex-col items-center gap-4"
      ><button
      onClick={startGame}
      className="bg-black  text-white px-8 py-4 rounded-full text-xl font-bold shadow-lg transform hover:scale-110 transition-all duration-300 border"
    >
       Start Game
    </button>
    <button
      onClick={LearnMore}
      className="bg-black  text-white px-8 py-4 rounded-full text-xl font-bold shadow-lg transform hover:scale-110 transition-all duration-300 border"
    >
       Learn More
    </button>
       
      </motion.div>
    </div>
  );
};

export default Home;
