import { useState } from 'react';
import BackButton from './BackButton';

//Type Validation alias Prop validation .. particularly for typescript...

type QuestionType = {
  Question: string;
  options: string[];
  answer: string;
  hint?: string; // Added optional hint attribute
};

type Level = 'easy' | 'medium' | 'hard';

//Lists used to map....

const questionSets: Record<Level, QuestionType[]> = {
  easy: [
    { Question: "2, 4, 6, ?", options: ["7", "8", "9", "10"], answer: "8", hint: "It's an even sequence." },
    { Question: "1, 3, 5, ?", options: ["6", "7", "8", "9"], answer: "7", hint: "Odd numbers." },
    { Question: "10, 20, 30, ?", options: ["40", "50", "60", "35"], answer: "40" },
    { Question: "🔴 🟠 🟡 🟢 ?", options: ["🔵", "🟣", "⚪", "🟤"], answer: "🔵" },
    { Question: "⭐️ 🌟 💫 ✨ ?", options: ["🌠", "🌈", "🎇", "🌙"], answer: "🌠" },
    { Question: "1, 4, 9, ?", options: ["10", "16", "12", "14"], answer: "16", hint: "Think about squares of numbers." },
    { Question: "👶 🧒 🧑 👨 ?", options: ["👴", "👵", "🧓", "👩"], answer: "👴" },
    { Question: "5, 10, 15, ?", options: ["20", "18", "16", "25"], answer: "20" },
    { Question: "🐣 🐥 🐤 🐓 ?", options: ["🐔", "🐦", "🪿", "🦃"], answer: "🐔" },
    { Question: "Mon, Tue, Wed, ?", options: ["Thu", "Fri", "Sat", "Sun"], answer: "Thu" },
  ],
  medium: [
    { Question: "2, 4, 8, 16, ?", options: ["20", "24", "32", "18"], answer: "32", hint: "Each number is double the previous one." },
    { Question: "100, 90, 80, ?", options: ["60", "70", "85", "75"], answer: "70" },
    { Question: "A, C, E, G, ?", options: ["H", "I", "J", "I"], answer: "I", hint: "Skip one letter in the alphabet." },
    { Question: "1, 2, 4, 7, 11, ?", options: ["15", "16", "17", "18"], answer: "16" },
    { Question: "3, 6, 12, ?", options: ["15", "18", "21", "24"], answer: "24" },
    { Question: "10, 20, 30, 50, ?", options: ["60", "70", "80", "90"], answer: "80", hint: "Add the previous two numbers." },
    { Question: "Z, X, V, T, ?", options: ["R", "S", "U", "Q"], answer: "R" },
    { Question: "1, 4, 9, 16, ?", options: ["20", "25", "36", "30"], answer: "25" },
    { Question: "🐶 🐕 🐩 🐾 ?", options: ["🐺", "🦮", "🐕‍🦺", "🐾"], answer: "🐺" },
    { Question: "Mon, Wed, Fri, ?", options: ["Sat", "Sun", "Mon", "Tue"], answer: "Sun" },
  ],
  hard: [
    { Question: "2, 3, 5, 8, 12, ?", options: ["17", "18", "19", "20"], answer: "17", hint: "The difference between consecutive numbers increases by one." },
    { Question: "A, B, D, G, K, ?", options: ["M", "N", "O", "P"], answer: "P", hint: "The skips in alphabet increase: 0, 1, 2, 3..." },
    { Question: "1, 11, 21, 1211, 111221, ?", options: ["312211", "1113213211", "211112", "132211"], answer: "312211", hint: "This is a 'look-and-say' sequence." },
    { Question: "🐵, 🐒, 🦍, 🦧, ?", options: ["👨", "🦁", "🧒", "🧠"], answer: "👨" },
    { Question: "1, 2, 6, 24, ?", options: ["60", "100", "120", "150"], answer: "120", hint: "Multiply by increasing integers: x1, x2, x3, x4..." },
    { Question: "3, 9, 27, 81, ?", options: ["162", "243", "121", "210"], answer: "243" },
    { Question: "2, 5, 10, 17, ?", options: ["26", "27", "28", "29"], answer: "26" },
    { Question: "F, G, I, L, P, ?", options: ["T", "U", "V", "S"], answer: "U", hint: "The letters follow a +1, +2, +3, +4 pattern in alphabetical position." },
    { Question: "🐣, 🐤, 🐥, 🐓, 🐔, ?", options: ["🥚", "🐦", "🦃", "🐧"], answer: "🥚" },
    { Question: "Sun, Earth, Mars, Jupiter, ?", options: ["Saturn", "Venus", "Neptune", "Pluto"], answer: "Saturn" },
  ],
};

//Used hooks here...useState

const Activity = () => {
  const [selectedLevel, setSelectedLevel] = useState<Level | null>(null);
  const [questions, setQuestions] = useState<QuestionType[]>([]);
  const [current, setCurrent] = useState(0);
  const [score, setScore] = useState(0);
  const [feedback, setFeedback] = useState('');
  const [showResult, setShowResult] = useState(false);
  const [questionCount, setQuestionCount] = useState(10);
  const [showSlider, setShowSlider] = useState(false);
  const [showHint, setShowHint] = useState(false); // New state for hint visibility

  // Function to handle level selection

  const selectLevel = (level: Level) => {
    setSelectedLevel(level);
    setShowSlider(true);
  };

  // Function to start the quiz with selected level and question count

  const startQuiz = () => {
    if (selectedLevel) {
      const randomQuestions = [...questionSets[selectedLevel]]
        .sort(() => 0.5 - Math.random())
        .slice(0, questionCount);
      setQuestions(randomQuestions);
      setShowSlider(false);
      setShowHint(false); // Reset hint visibility when starting a new quiz
    }
  };

  // Function to handle answer selection and feedback

  const handleAnswer = (selected: string) => {
    const isCorrect = selected === questions[current].answer;
    setScore((s) => (isCorrect ? s + 1 : s));
    setFeedback(isCorrect ? 'Good job!' : 'Oops! Try the next one!');
    setShowHint(false); // Hide hint after an answer is selected
    setTimeout(() => {
      setFeedback('');
      if (current + 1 < questions.length) setCurrent(current + 1);
      else setShowResult(true);
    }, 1000);
  };

  // Function to toggle hint visibility

  const toggleHint = () => {
    setShowHint((prev) => !prev);
  };

  // Render the component based on the current state...

  return (
    <div className="min-h-screen w-full font-sans bg-black">
      <div className="flex justify-between p-4">
        <BackButton />
      </div>

      {/*   Conditional Rendering   */}

      {!selectedLevel ? (
        <div className="text-center mt-0 px-4">
          <h2 className="text-4xl font-bold mb-10 text-red-800 drop-shadow">
            Choose Your Difficulty level
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-18 max-w-294 mx-auto">
            <div
              onClick={() => selectLevel('easy')}
              className="mt-10 cursor-pointer hover:scale-105 transform transition-all duration-300 rounded-xl overflow-hidden shadow-lg group relative"
            >
              <div className="relative">
                <img
                  src="/zenitsu.jpeg"
                  alt="Zenitsu - Easy"
                  className="w-full h-184 object-cover transition duration-300 group-hover:brightness-35"
                />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="text-green-500 text-5xl font-bold drop-shadow-lg">Easy</span>
                </div>
              </div>
            </div>

            <div
              onClick={() => selectLevel('medium')}
              className="mt-10 cursor-pointer hover:scale-105 transform transition-all duration-300 rounded-xl overflow-hidden shadow-lg group relative"
            >
              <div className="relative">
                <img
                  src="/stone.jpeg"
                  alt="Stone - Medium"
                  className="w-full h-184 object-cover transition duration-300 group-hover:brightness-35"
                />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="text-yellow-500 text-5xl font-bold drop-shadow-lg">Medium</span>
                </div>
              </div>
            </div>

            <div
              onClick={() => selectLevel('hard')}
              className="mt-10 cursor-pointer hover:scale-105 transform transition-all duration-300 rounded-xl overflow-hidden shadow-lg group relative"
            >
              <div className="relative">
                <img
                  src="/yoriichi.jpeg"
                  alt="Yoriichi - Hard"
                  className="w-full h-184 object-cover transition duration-300 group-hover:brightness-35"
                />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="text-blue-500 text-5xl font-bold drop-shadow-lg">Hard</span>
                </div>
              </div>
            </div>
          </div>
        </div>

     //Conditonal Rendering for showSlider and showResult


      ) : showSlider ? (
        <div className="text-center text-white mt-16 px-4">
          <h2 className="text-3xl font-bold text-yellow-400 mb-6 drop-shadow-lg">How many questions?</h2>

          <input
            type="range"
            min={3}
            max={10}
            value={questionCount}
            onChange={(e) => setQuestionCount(Number(e.target.value))}
            className="w-2/3 md:w-1/3 h-3 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-yellow-500"
          />

          <p className="mt-4 text-xl font-semibold text-blue-400">
            Selected: <span className="text-yellow-300">{questionCount}</span> questions
          </p>

          <button
            onClick={startQuiz}
            className="mt-8 px-8 py-3 bg-green-600 hover:bg-green-500 text-white font-bold text-xl rounded-xl shadow-lg transition-all duration-300"
          >
            Start Quiz
          </button>
        </div>

      //Conditional Rendering for showResult and quiz questions

      ) : showResult ? (
        <div className="text-center mt-20 text-white">
          <h2 className="text-4xl font-extrabold mb-6 text-red-500 drop-shadow-lg">Your Results</h2>
          <p className="text-2xl mb-4">
            🎯 Final Score: <span className="text-yellow-400">{score}</span> / {questions.length}
          </p>

          <div className="mt-8 text-3xl">
            {(() => {
              const percent = (score / questions.length) * 100;
              if (percent >= 90) {
                return (
                  <>
                    👑 <span className="text-pink-500 font-bold">You can easily defeat Muzan Kibutsuji!</span> 🩸<br />
                    <span className="text-lg text-gray-300">The Demon King falls before your brilliance.</span>
                  </>
                );
              } else if (percent >= 70) {
                return (
                  <>
                    🔥 <span className="text-orange-400 font-bold">You can defeat an Upper Moon demon!</span> 👺<br />
                    <span className="text-lg text-gray-300">You're Hashira-level strong!</span>
                  </>
                );
              } else if (percent >= 50) {
                return (
                  <>
                    💀 <span className="text-green-400 font-bold">You can defeat a Lower Moon demon!</span> 👹<br />
                    <span className="text-lg text-gray-300">You’re growing stronger.</span>
                  </>
                );
              } else if (percent >= 30) {
                return (
                  <>
                    🧟 <span className="text-yellow-300 font-bold">You can beat a weak demon!</span><br />
                    <span className="text-lg text-gray-300">Keep training like Tanjiro!</span>
                  </>
                );
              } else {
                return (
                  <>
                    😵 <span className="text-red-400 font-bold">You were defeated!</span><br />
                    <span className="text-lg text-gray-300">Try again, young slayer.</span>
                  </>
                );
              }
            })()}
          </div>
        </div>
      ) : (
        <div className="text-center">
          <h1 className="text-4xl font-bold text-orange-500 mb-4">
            Find the Pattern ({selectedLevel?.toUpperCase()} Mode)
          </h1>
          <h2 className="text-xl text-blue-600 font-semibold">
            Question {current + 1} of {questions.length}
          </h2>
          <h3 className="text-5xl mt-16 mb-6 text-white">{questions[current].Question}</h3>

          <div className="grid grid-cols-2 gap-12 place-items-center mt-12 px-4 sm:px-0">
            {questions[current].options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleAnswer(option)}
                className="w-[150px] h-[150px] sm:w-[180px] sm:h-[180px] md:w-[400px] md:h-[200px] bg-yellow-600 hover:bg-yellow-400 text-black text-4xl sm:text-5xl md:text-6xl rounded-xl border-4 border-yellow-600 shadow-lg transition-all duration-200 flex items-center justify-center"
              >
                {option}
              </button>
            ))}
          </div>

          {/* Hint Button and Display */}
          {questions[current].hint && (current + 1) % 1 === 0 && ( // Changed to 1 for demonstration; use 30 for every 30th question
            <div className="mt-8">
              <button
                onClick={toggleHint}
                className="px-6 py-2 bg-blue-600 hover:bg-blue-500 text-white font-bold text-lg rounded-xl shadow-lg transition-all duration-300"
              >
                {showHint ? 'Hide Hint' : 'Show Hint'}
              </button>
              {showHint && (
                <p className="mt-4 text-xl font-semibold text-gray-300">
                  Hint: {questions[current].hint}
                </p>
              )}
            </div>
          )}

          {/* Feedback Message */}

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