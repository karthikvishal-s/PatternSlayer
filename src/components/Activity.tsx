import { useState } from 'react';
import BackButton from './BackButton';

type QuestionType = {
  Question: string;
  options: string[];
  answer: string;
};

type Level = 'easy' | 'medium' | 'hard';

const questionSets: Record<Level, QuestionType[]> = {
  easy: [
    { Question: "2, 4, 6, ?", options: ["7", "8", "9", "10"], answer: "8" },
    { Question: "1, 3, 5, ?", options: ["6", "7", "8", "9"], answer: "7" },
    { Question: "10, 20, 30, ?", options: ["40", "50", "60", "35"], answer: "40" },
    { Question: "🔴 🟠 🟡 🟢 ?", options: ["🔵", "🟣", "⚪", "🟤"], answer: "🔵" },
    { Question: "⭐️ 🌟 💫 ✨ ?", options: ["🌠", "🌈", "🎇", "🌙"], answer: "🌠" },
    { Question: "1, 4, 9, ?", options: ["10", "16", "12", "14"], answer: "16" },
    { Question: "👶 🧒 🧑 👨 ?", options: ["👴", "👵", "🧓", "👩"], answer: "👴" },
    { Question: "5, 10, 15, ?", options: ["20", "18", "16", "25"], answer: "20" },
    { Question: "🐣 🐥 🐤 🐓 ?", options: ["🐔", "🐦", "🪿", "🦃"], answer: "🐔" },
    { Question: "Mon, Tue, Wed, ?", options: ["Thu", "Fri", "Sat", "Sun"], answer: "Thu" },
  ],
  medium: [
    { Question: "2, 4, 8, 16, ?", options: ["20", "24", "32", "18"], answer: "32" },
    { Question: "100, 90, 80, ?", options: ["60", "70", "85", "75"], answer: "70" },
    { Question: "A, C, E, G, ?", options: ["H", "I", "J", "I"], answer: "I" },
    { Question: "1, 2, 4, 7, 11, ?", options: ["15", "16", "17", "18"], answer: "16" },
    { Question: "3, 6, 12, ?", options: ["15", "18", "21", "24"], answer: "24" },
    { Question: "10, 20, 30, 50, ?", options: ["60", "70", "80", "90"], answer: "80" },
    { Question: "Z, X, V, T, ?", options: ["R", "S", "U", "Q"], answer: "R" },
    { Question: "1, 4, 9, 16, ?", options: ["20", "25", "36", "30"], answer: "25" },
    { Question: "🐶 🐕 🐩 🐾 ?", options: ["🐺", "🦮", "🐕‍🦺", "🐾"], answer: "🐺" },
    { Question: "Mon, Wed, Fri, ?", options: ["Sat", "Sun", "Mon", "Tue"], answer: "Sun" },
  ],
  hard: [
    { Question: "2, 3, 5, 8, 12, ?", options: ["17", "18", "19", "20"], answer: "17" },
    { Question: "A, B, D, G, K, ?", options: ["M", "N", "O", "P"], answer: "P" },
    { Question: "1, 11, 21, 1211, 111221, ?", options: ["312211", "1113213211", "211112", "132211"], answer: "312211" },
    { Question: "🐵, 🐒, 🦍, 🦧, ?", options: ["👨", "🦁", "🧒", "🧠"], answer: "👨" },
    { Question: "1, 2, 6, 24, ?", options: ["60", "100", "120", "150"], answer: "120" },
    { Question: "3, 9, 27, 81, ?", options: ["162", "243", "121", "210"], answer: "243" },
    { Question: "2, 5, 10, 17, ?", options: ["26", "27", "28", "29"], answer: "26" },
    { Question: "F, G, I, L, P, ?", options: ["T", "U", "V", "S"], answer: "U" },
    { Question: "🐣, 🐤, 🐥, 🐓, 🐔, ?", options: ["🥚", "🐦", "🦃", "🐧"], answer: "🥚" },
    { Question: "Sun, Earth, Mars, Jupiter, ?", options: ["Saturn", "Venus", "Neptune", "Pluto"], answer: "Saturn" },
  ],
};

const Activity = () => {
  const [selectedLevel, setSelectedLevel] = useState<Level | null>(null);
  const [questions, setQuestions] = useState<QuestionType[]>([]);
  const [current, setCurrent] = useState(0);
  const [score, setScore] = useState(0);
  const [feedback, setFeedback] = useState('');
  const [showResult, setShowResult] = useState(false);

  const selectLevel = (level: Level) => {
    setSelectedLevel(level);
    const randomQuestions = [...questionSets[level]].sort(() => 0.5 - Math.random()).slice(0, 10);
    setQuestions(randomQuestions);
  };

  const handleAnswer = (selected: string) => {
    const isCorrect = selected === questions[current].answer;
    setScore((s) => (isCorrect ? s + 1 : s));
    setFeedback(isCorrect ? 'Good job!' : 'Oops! Try the next one!');
    setTimeout(() => {
      setFeedback('');
      if (current + 1 < questions.length) setCurrent(current + 1);
      else setShowResult(true);
    }, 1000);
  };

  return (
    <div className="min-h-screen w-full font-sans bg-gradient-to-br from-yellow-100 via-pink-100 to-blue-200">
      <div className="flex justify-between p-4">
        <BackButton />
      </div>

      {!selectedLevel ? (
        <div className="text-center mt-20 px-4">
        <h2 className="text-4xl font-bold mb-10 text-red-600 tracking-widest drop-shadow">
          Choose Your Path, Slayer!
        </h2>
      
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-8xl mx-auto ">
          {/* Easy - Tanjiro */}
          <div
            onClick={() => selectLevel('easy')}
            className="cursor-pointer bg-green-100 hover:scale-105 transform transition-all duration-300 rounded-xl overflow-hidden shadow-lg"
          > 
            <img
              src="/images/tanjiro.jpg"
              alt="Tanjiro - Easy"
              className="w-full h-64 object-cover"
            />
            <div className="p-4">
              <h3 className="text-2xl font-bold text-green-700">🟢 Easy</h3>
              <p className="mt-2 text-gray-700 text-sm">Walk the path of kindness and discipline with Tanjiro. Simple patterns and soothing pace.</p>
            </div>
          </div>
      
          {/* Medium - Zenitsu/Inosuke */}
          <div
            onClick={() => selectLevel('medium')}
            className="cursor-pointer bg-yellow-100 hover:scale-105 transform transition-all duration-300 rounded-xl overflow-hidden shadow-lg"
          >
            <img
              src="/images/zenitsu.jpg"
              alt="Zenitsu - Medium"
              className="w-full h-64 object-cover"
            />
            <div className="p-4">
              <h3 className="text-2xl font-bold text-yellow-700">🟡 Medium</h3>
              <p className="mt-2 text-gray-700 text-sm">With bursts of lightning and unpredictability, Zenitsu brings a balanced challenge.</p>
            </div>
          </div>
      
          {/* Hard - Hashira */}
          <div
            onClick={() => selectLevel('hard')}
            className="cursor-pointer bg-red-100 hover:scale-105 transform transition-all duration-300 rounded-xl overflow-hidden shadow-lg"
          >
            <img
              src="/images/hashira.jpg"
              alt="Hashira - Hard"
              className="w-full h-64 object-cover"
            />
            <div className="p-4">
              <h3 className="text-2xl font-bold text-red-700">🔴 Hard</h3>
              <p className="mt-2 text-gray-700 text-sm">Step into the realm of the Hashira — only the strongest will master this path!</p>
            </div>
          </div>
        </div>
      </div>
      
      ) : showResult ? (
        <div className="text-center mt-20">
          <h2 className="text-3xl font-bold text-green-600 mb-2">🌟 You are brilliant! 🌟</h2>
          <p className="text-xl">🎯 Final Score: {score} / {questions.length}</p>
          <p className="text-lg mt-2">🏆 Keep practicing!</p>
        </div>
      ) : (
        <div className="text-center">
          <h1 className="text-4xl font-bold text-orange-500 mb-4">
            Find the Pattern ({selectedLevel.toUpperCase()} Mode)
          </h1>
          <h2 className="text-xl text-blue-600 font-semibold">
            Question {current + 1} of {questions.length}
          </h2>
          <h3 className="text-3xl mt-16 mb-6">{questions[current].Question}</h3>

          <div className="grid grid-cols-2 gap-12 place-items-center mt-12 px-4 sm:px-0">
            {questions[current].options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleAnswer(option)}
                className="w-[150px] h-[150px] sm:w-[180px] sm:h-[180px] md:w-[400px] md:h-[200px] bg-yellow-300 hover:bg-yellow-400 text-black text-4xl sm:text-5xl md:text-6xl rounded-xl border-4 border-yellow-600 shadow-lg transition-all duration-200 flex items-center justify-center"
              >
                {option}
              </button>
            ))}
          </div>

          {feedback && (
            <p className="mt-12 text-2xl font-semibold text-purple-600 animate-bounce">
              {feedback}
            </p>
          )}
        </div>
      )}
    </div>
  );
};

export default Activity;
