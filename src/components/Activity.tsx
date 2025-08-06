import { useParams } from 'react-router-dom';
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
    { Question: "1, 2, 6, 24, ?", options: ["60", "100", "120", "150"], answer: "120" }, // factorial pattern
    { Question: "3, 9, 27, 81, ?", options: ["162", "243", "121", "210"], answer: "243" },
    { Question: "2, 5, 10, 17, ?", options: ["26", "27", "28", "29"], answer: "26" },
    { Question: "F, G, I, L, P, ?", options: ["T", "U", "V", "S"], answer: "U" },
    { Question: "🐣, 🐤, 🐥, 🐓, 🐔, ?", options: ["🥚", "🐦", "🦃", "🐧"], answer: "🥚" },
    { Question: "Sun, Earth, Mars, Jupiter, ?", options: ["Saturn", "Venus", "Neptune", "Pluto"], answer: "Saturn" },
  ],
};

const Activity = () => {
  const { level } = useParams<{ level: string }>();
  const selectedLevel: Level = (level === 'easy' || level === 'medium' || level === 'hard') ? level : 'easy';
  const questions = questionSets[selectedLevel].sort(() => 0.5 - Math.random()).slice(0, 10);

  const [current, setCurrent] = useState(0);
  const [score, setScore] = useState(0);
  const [feedback, setFeedback] = useState('');
  const [showResult, setShowResult] = useState(false);

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
      <h1 className="text-center text-4xl font-bold text-orange-500 mb-6">
        Find the Pattern ({selectedLevel.toUpperCase()} Mode)
      </h1>

      {showResult ? (
        <div className="text-center mt-20">
          <h2 className="text-3xl font-bold text-green-600 mb-2">🌟 You are brilliant! 🌟</h2>
          <p className="text-xl">🎯 Final Score: {score} / {questions.length}</p>
          <p className="text-lg mt-2">🏆 Keep practicing!</p>
        </div>
      ) : (
        <div className="text-center">
          <h2 className="text-xl text-blue-600 font-semibold mt-30">
            Question {current + 1} of {questions.length}
          </h2>
          <h3 className="text-3xl mt-24 mb-6">{questions[current].Question}</h3>

          <div className="grid grid-cols-2 gap-16 place-items-center mt-20 px-4 sm:px-0">
            {questions[current].options.map((option: string, index: number) => (
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
            <p className="mt-26 text-2xl font-semibold text-purple-600 animate-bounce mb-20">
              {feedback}
            </p>
          )}
        </div>
      )}
    </div>
  );
};

export default Activity;
