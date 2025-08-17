import type { ReactNode, FC } from "react";
import { motion } from "framer-motion";
import { Heart, Users, PawPrint, Globe } from "lucide-react";

// Card component
type CardProps = {
  children: ReactNode;
  className?: string;
};

const Card: FC<CardProps> = ({ children, className = "" }) => {
  return (
    <div
      className={`shadow-xl rounded-2xl hover:shadow-2xl transition bg-white ${className}`}
    >
      {children}
    </div>
  );
};

// CardContent component
type CardContentProps = {
  children: ReactNode;
  className?: string;
};

const CardContent: FC<CardContentProps> = ({
  children,
  className = "",
}) => {
  return (
    <div
      className={`flex flex-col items-center p-6 space-y-4 ${className}`}
    >
      {children}
    </div>
  );
};

// Button component
type ButtonProps = {
  children: ReactNode;
  onClick?: () => void;
  className?: string;
};

const Button: FC<ButtonProps> = ({ children, onClick, className = "" }) => {
  return (
    <button
      onClick={onClick}
      className={`px-6 py-3 text-lg rounded-2xl bg-purple-600 text-white hover:bg-purple-700 ${className}`}
    >
      {children}
    </button>
  );
};

// Topic type with image
type Topic = {
  icon: ReactNode;
  image: string;
  title: string;
  text: string;
};

const GoodHabits: FC = () => {
  const topics: Topic[] = [
    {
      icon: <Heart className="w-10 h-10 text-pink-500" />,
      image: "/selflove.avif", // 👈 put your own image path
      title: "Be Kind to Yourself",
      text: "Start with self-love. Eat healthy, think positive, and always believe in your abilities.",
    },
    {
      icon: <Users className="w-10 h-10 text-blue-500" />,
      image: "/eldershelp.webp",
      title: "Be Kind to People",
      text: "Help friends, respect parents, and share with others. Even a smile can brighten someone’s day!",
    },
    {
      icon: <PawPrint className="w-10 h-10 text-green-500" />,
      image: "/animalskind.jpg",
      title: "Be Kind to Animals",
      text: "Take care of pets, feed birds, and never hurt animals. They too have feelings!",
    },
    {
      icon: <Globe className="w-10 h-10 text-yellow-500" />,
      image: "/naturekind.webp",
      title: "Be Kind to Nature",
      text: "Plant trees, save water, and keep your surroundings clean. Protect our planet for the future.",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-100 to-white p-8 flex flex-col items-center">
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-4xl font-bold text-center text-purple-700 mb-6"
      >
        🌸 Good Habits for a Kinder World 🌸
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
        className="text-lg text-gray-700 text-center max-w-2xl mb-10"
      >
        Every small act of kindness can make the world brighter. Here are
        some simple habits you can follow to be a kind person to yourself,
        others, animals, and nature.
      </motion.p>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl">
        {topics.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: i * 0.2 }}
          >
            <Card>
              <CardContent>
                {item.icon}
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-32 h-32 object-contain rounded-xl shadow-md"
                />
                <h2 className="text-xl font-semibold text-purple-600">
                  {item.title}
                </h2>
                <p className="text-gray-600 text-center">{item.text}</p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* Button */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 1 }}
        className="mt-12"
      >
        <button
          onClick={() => (window.location.href = "/")}
          className="px-6 py-3 text-lg rounded-2xl bg-purple-600 text-white hover:bg-purple-700"
        >
          Start Being Kind Today ✨
        </button>
      </motion.div>
    </div>
  );
};

export { Card, CardContent, Button };
export default GoodHabits;
