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
    <div
  className="w-screen h-screen bg-cover bg-center text-white bg-no-repeat flex flex-col items-center justify-center px-4 text-center overflow-hidden relative z-0"
  style={{
    backgroundImage: "url('/ds-2.jpg')",
    backgroundColor: 'red',
  }}
>

      {/* Optional: Dark overlay for better text visibility */}
      <div className="absolute inset-0  bg-opacity-70 z-0"></div>
      

      <div className="relative z-10">
        <motion.h1
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-2xl sm:text-5xl md:text-4xl font-extrabold text-white drop-shadow mb-4 relative -top-70"
        >
          <p>Guess The Pattern</p>
          
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-lg sm:text-xl text-red-200 max-w-xl mb-6 relative -top-70"
        >
          (Demon Slayer Edition)
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-lg sm:text-xl text-gray-200 max-w-xl mb-6 relative -top-70"
        >
          🧠 Train your brain, spot the pattern, and shine like the unique star you are! 💫
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mt-10 text-sm text-gray-500 flex flex-col items-center gap-4"
        >
          <button
            onClick={startGame}
            className="relative -top-70 bg-red-400 bg-opacity-70 text-white px-8 py-4 rounded-full text-xl font-bold shadow-lg transform hover:scale-110 transition-all duration-300 border"
          >
            Start Game
          </button>
          <button
            onClick={LearnMore}
            className="relative -top-70 bg-black bg-opacity-70 text-white px-8 py-4 rounded-full text-xl font-bold shadow-lg transform hover:scale-110 transition-all duration-300 border"
          >
            Learn More
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default Home;
