import { motion } from "framer-motion";
import BackButton from "./BackButton";

const LearnMore = () => {


  return (
    <div className="min-h-screen bg-black text-white px-6 py-10 font-sans">


      <BackButton />

      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl font-bold text-center text-red-500 mb-10"
      >
        Why This App Matters
      </motion.h1>

      <motion.div
        className="max-w-4xl mx-auto"
        initial="hidden"
        animate="visible"
        variants={{
          visible: {
            transition: {
              staggerChildren: 0.3,
            },
          },
        }}
      >
        {/* 🧠 Connection to Autistic Kids */}
        <motion.p
          className="text-lg mb-6"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
        >
          🧠 <span className="font-semibold text-yellow-300">Demon Slayer</span> is more than just an anime — it's a story of courage, focus, and emotional strength. For autistic children, the clear character roles, expressive faces, and vivid yet structured visuals can provide comforting clarity and relatable heroes. This app brings that same spirit into interactive activities that build attention, memory, and confidence.
        </motion.p>

        {/* 📊 App Purpose */}
        <motion.p
          className="text-lg mb-6"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
        >
          🧩 This application is specially designed to support children on the autism spectrum. Structured pattern recognition games help strengthen cognitive pathways, encourage independent problem-solving, and create positive screen time experiences.
        </motion.p>

        {/* ⚔️ Demon Slayer Theme Explanation */}
        <motion.p
          className="text-lg mb-6"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
        >
          ⚔️ We've themed the game around <span className="text-red-400 font-semibold">Demon Slayer characters</span> to let kids choose their own difficulty path — like choosing their Hashira training. “Zenitsu” represents the <span className="text-green-300 font-semibold">easy</span> level, while “Gyomei” and “Yoriichi” represent <span className="text-yellow-300 font-semibold">medium</span> and <span className="text-red-300 font-semibold">hard</span> paths. This gamifies the experience and gives them motivation to level up!
        </motion.p>

        {/* ⚙️ Tech Stack Info */}

        <motion.p
          className="text-lg mb-6"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
        >
          ⚙️ Built with <span className="text-green-400 font-semibold">React</span> and styled using <span className="text-blue-300 font-semibold">Tailwind CSS</span>, this app is designed to be fast, responsive, and accessible. We’ve used <span className="text-pink-400 font-semibold">Framer Motion</span> to add smooth animations, making it visually appealing without being overwhelming.
        </motion.p>

        {/* 👨‍💻 Creator Info */}

        <motion.div
          className="my-10 p-6 border border-gray-700 rounded-lg bg-gray-900"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-2xl font-bold mb-4 text-yellow-400">👨‍💻 Creator</h2>
          <p className="mb-2"> <span className="font-semibold text-white">Karthik Vishal</span></p>
          <p className="mb-2"> Full Stack Developer (React, Node.js, Firebase)</p>
          <p className="mb-4"> B.Tech CSE, Amrita Vishwa Vidyapeetham</p>
          <a
            href="https://github.com/karthikvishal-s"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-white text-black px-4 py-2 rounded hover:bg-gray-200 transition"
          >
            🔗 GitHub Profile
          </a>
          <a
            href="https://github.com/karthikvishal-s"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-white text-black px-4 py-2 rounded hover:bg-gray-200 transition ml-4"
          >
            🔗 Portfolio Site
          </a>
        </motion.div>


        {/* Final Message */}


        <motion.p
          className="text-center mt-12 text-gray-400 text-lg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
        >
          🌟 Just like Tanjiro never gave up — no matter the odds — we believe every child has a unique strength waiting to shine. With kindness, focus, and courage, even the smallest steps lead to greatness.
        </motion.p>

        <motion.p
          className="text-center mt-4 text-gray-500 italic"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4 }}
        >
          Inspired by the values of compassion, discipline, and growth — the very heart of Demon Slayer. 🗡️
        </motion.p>
      </motion.div>
    </div>
  );
};

export default LearnMore;
