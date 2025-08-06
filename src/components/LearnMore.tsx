import React from "react";
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
        <motion.p
          className="text-lg mb-6"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
        >
          🧠 This application is specially designed to support children on the autism spectrum. Engaging, structured activities like these can help improve focus, pattern recognition, memory, and reduce sensory overload through familiar and calm visual cues.
        </motion.p>

        <motion.p
          className="text-lg mb-6"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
        >
          ⚙️ Built with <span className="text-green-400 font-semibold">React</span> and styled using <span className="text-blue-300 font-semibold">Tailwind CSS</span>, this app is designed to be fast, responsive, and accessible. We’ve used <span className="text-pink-400 font-semibold">Framer Motion</span> to add smooth animations, making it visually appealing without being overwhelming.
        </motion.p>

        <motion.div
          className="my-10 p-6 border border-gray-700 rounded-lg bg-gray-900"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-2xl font-bold mb-4 text-yellow-400">👨‍💻 Created by:</h2>
          <p className="mb-2">Name: <span className="font-semibold text-white">Karthik Vishal</span></p>
          <p className="mb-2">Role: Full Stack Developer (React, Node.js, Firebase)</p>
          <p className="mb-4">Education: B.Tech CSE, Amrita Vishwa Vidyapeetham</p>
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
            className="inline-block bg-white text-black px-4 py-2 rounded hover:bg-gray-200 transition ml-20"
          >
          🔗  Portfolio site
          </a>
        </motion.div>

        <motion.p
          className="text-center mt-12 text-gray-500"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
        >
          Inspired by the values of courage and compassion — just like the Demon Slayer Hashiras 🗡️.
        </motion.p>
      </motion.div>
    </div>
  );
};

export default LearnMore;
