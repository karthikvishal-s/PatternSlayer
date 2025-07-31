import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center  px-4">
      
      <motion.h1
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-5xl font-bold text-gray-800 text-center mb-6 drop-shadow"
      >
        🎯 Pattern Guess Game
      </motion.h1>

      <motion.img
        src="/4kids.jpg"
        alt="Pattern game kids"
        className="w-full max-w-md rounded-lg shadow-lg mb-28 mt-28"
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.6 }}
      />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.5 }}
      >
        <Link
          to="/activity"
          className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full text-lg font-semibold shadow-md transition-all duration-300"
        >
          🚀 Start 
        </Link>
      </motion.div>
    </div>
  );
};

export default Home;
