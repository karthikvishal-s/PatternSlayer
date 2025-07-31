import { useState } from "react";
import BackButton from "./BackButton";


type QuestionType = {
  Question: string;
  options: string[];
  answer: string;
};

const questions: QuestionType[] = [

  {
    Question: "2, 4, 6, ?",
    options: ["7", "8", "9", "10"],
    answer: "8",
  },
  {
    Question: "1, 4, 9, 16, ?",
    options: ["20", "25", "36", "30"],
    answer: "25",
  },
  {
    Question: "5, 10, 20, ?",
    options: ["25", "30", "35", "40"],
    answer: "40",
  },
  {
    Question: "3, 6, 12, ?",
    options: ["15", "18", "21", "24"],
    answer: "24",
  },
  {
    Question: "100, 90, 80, ?",
    options: ["60", "70", "75", "85"],
    answer: "70",
  },
  
  {
    Question: "🔴 🟠 🟡 🟢 ?",
    options: ["🔵", "🟣", "⚪", "🟤"],
    answer: "🔵",
  },

  {
    Question: "⭐️ 🌟 💫 ✨ ?",
    options: ["🌠", "🌈", "🎇", "🌙"],
    answer: "🌠",
  },
  {
    Question: "🐣 🐥 🐤 🐓 ?",
    options: ["🐔", "🐦", "🪿", "🦃"],
    answer: "🐔",
  },
];


const shuffledQuestions = questions.sort(() => 0.5 - Math.random());

const Activity = () => {
  const [current, setCurrent] = useState<number>(0);
  const [score, setScore] = useState<number>(0);
  const [feedback, setFeedback] = useState<string>("");
  const [showResult, setShowResult] = useState<boolean>(false);

  const handleAnswer = (selected: string) => {
    const isCorrect = selected === shuffledQuestions[current].answer;

    if (isCorrect) {
      setScore(score + 1);
      setFeedback("Good job!");
    } else {
      setFeedback("Oops! Try the next one!");
    }

    setTimeout(() => {
      setFeedback("");
      if (current + 1 < 8) {
        setCurrent(current + 1);
      } else {
        setShowResult(true);
      }
    }, 1000);
  };

  return (
    <div className="min-h-screen  pd-20 w-full font-sans">
      <div className="flex justify-between  p-4 ">
      <BackButton />
      </div>
      <h1 className="text-center text-4xl font-bold text-orange-500 mb-6">
         Find the Pattern 
      </h1>

      {showResult ? (
        <div className="text-center mt-20">
          <h2 className="text-3xl font-bold text-green-600 mb-2">
            🌟 You are brilliant! 🌟
          </h2>
          <p className="text-xl">🎯 Final Score: {score} / 8</p>
          <p className="text-lg mt-2">🏆 Keep practicing!</p>
        </div>
      ) : (
        <div className="text-center">
          <h2 className="text-xl text-blue-600 font-semibold">
            Question {current + 1} of 8
          </h2>

          <h3 className="text-3xl mt-4 mb-6">
            {shuffledQuestions[current].Question}
          </h3>

          <div className="flex flex-wrap justify-center gap-4">
            {shuffledQuestions[current].options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleAnswer(option)}
                className="bg-yellow-300 hover:bg-yellow-400 text-black px-6 py-3 rounded-xl border-2 border-yellow-600 shadow-md text-xl transition-all duration-200"
              >
                {option}
              </button>
            ))}
          </div>

          {feedback && (
            <p className="mt-6 text-2xl font-semibold text-purple-600 animate-bounce">
              {feedback}
            </p>
          )}
        </div>
      )}
    </div>
  );
};

export default Activity;
