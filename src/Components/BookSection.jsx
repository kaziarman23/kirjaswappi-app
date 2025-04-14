import { motion } from "framer-motion";
import {
  animateBottom,
  animateLeft,
  animateRight,
  animateTop,
} from "./Animation";

const BookSection = () => {
  return (
    <div className="w-full h-full flex justify-center items-center flex-col gap-5">
      <div className="w-4/5 flex justify-center items-center">
        <img
          src="/book1.png"
          alt="book photo"
          className="object-cover w-4/5 h-full rounded-xl xl:w-1/2"
        />
      </div>
      <section className="w-full bg-slate-100 flex justify-center items-center flex-col gap-3 p-2">
        <motion.h1
          {...animateBottom}
          className="text-2xl font-bold lg:text-3xl"
        >
          Man’s search for meaning
        </motion.h1>
        <motion.h3 {...animateBottom} className="text-lg font-semibold">
          by Viktor Frankl
        </motion.h3>
        <div className="w-full flex justify-center items-center gap-2 text-xs text-gray-600">
          <motion.p {...animateLeft} className="p-1 md:text-lg lg:text-2xl">
            Biography
          </motion.p>
          <hr className="w-[0.2px] h-4 bg-gray-400" />
          <motion.p {...animateTop} className="p-1 md:text-lg lg:text-2xl">
            Autobiography
          </motion.p>
          <hr className="w-[0.2px] h-4 bg-gray-400" />
          <motion.p {...animateRight} className="p-1 md:text-lg lg:text-2xl">
            Personal narrative
          </motion.p>
        </div>
      </section>
    </div>
  );
};

export default BookSection;
