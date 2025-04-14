import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  animateBottom,
  animateLeft,
  animateTop,
} from "../Components/Animation";

function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-br from-purple-200 to-pink-300 text-center">
      <motion.h1 {...animateTop} className="text-5xl font-bold mb-4">
        📚 KirjaSwappi
      </motion.h1>
      <motion.p {...animateLeft} className="text-lg mb-8">
        Swap books. Share stories. Join the book loving community.
      </motion.p>
      <motion.div {...animateBottom}>
        <Link
          to="/bookDetails"
          className="bg-purple-600 text-white px-6 py-3 rounded-full hover:bg-purple-700"
        >
          View Book Details
        </Link>
      </motion.div>
    </div>
  );
}

export default Home;
