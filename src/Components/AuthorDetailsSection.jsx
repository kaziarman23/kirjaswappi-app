import React from "react";
import toast from "react-hot-toast";
import { motion } from "framer-motion";
import {
  animateBottom,
  animateLeft,
  animateRight,
} from "../Components/Animation";

function AuthorDetailsSection() {
  const notify = () =>
    toast("It's a demo button.", {
      style: {
        background: "#fff3cd",
        color: "#856404",
        border: "1px solid #ffeeba",
      },
    });

  return (
    <div className="w-full h-full bg-slate-100 overflow-hidden">
      <div className="w-11/12 mx-auto mb-4 xl:w-4/5">
        {/* author details */}
        <div className="flex items-center justify-start gap-1 my-5">
          <img
            src="/location.png"
            alt="author location"
            className="object-cover w-4 h-4"
          />
          <h1>Senate Square, Helsinki</h1>
        </div>
        <div>
          <p className="text-gray-600 text-start mb-2">offered by</p>
          <div className="flex items-center justify-between">
            <div className="flex items-center justify-start gap-1 sm:gap-2">
              <img
                src="/profile.jpg"
                alt="Author Profile"
                className="object-cover w-6 h-6 rounded-full sm:w-12 sm:h-12"
              />
              <h1 className="text-xs sm:text-base">Raisa Binte Hossain</h1>
            </div>
            <div className="flex items-center justify-start gap-1 sm:gap-2">
              <img
                src="/uparrow.png"
                alt="persentage"
                className="object-cover w-4 h-4 sm:w-8 sm:h-8"
              />
              <h1 className="text-xs sm:text-base">95% Positive Swaps</h1>
            </div>
          </div>
        </div>
        <hr className="w-full my-5 bg-gray-200" />

        {/* author other collection */}
        <div className="flex justify-between items-center mb-4">
          <h1>More From This User</h1>
          <button onClick={notify} className="text-blue-600 cursor-pointer">
            see more
          </button>
        </div>
        <div className="grid grid-cols-2 gap-2">
          <div className="flex justify-center items-center flex-col">
            <motion.img
              {...animateBottom}
              src="/book2.png"
              alt="book 2"
              className="object-cover w-5/6 rounded-lg"
            />
            <motion.div
              {...animateLeft}
              className="flex justify-center items-center flex-col"
            >
              <h1 className="text-sm text-center sm:text-lg md:text-xl xl:text-2xl">
                Man’s Search for Meaning.
              </h1>
              <p className="text-sm sm:text-lg md:text-xl xl:text-2xl">
                by Viktor Frankl's
              </p>
            </motion.div>
          </div>
          <div className="flex justify-center items-center flex-col">
            <motion.img
              {...animateBottom}
              src="/book2.png"
              alt="book 2"
              className="object-cover w-5/6 rounded-lg"
            />
            <motion.div
              {...animateRight}
              className="flex justify-center items-center flex-col"
            >
              <h1 className="text-sm text-center sm:text-lg md:text-xl xl:text-2xl">
                Man’s Search for Meaning.
              </h1>
              <p className="text-sm sm:text-lg md:text-xl xl:text-2xl">
                by Viktor Frankl's
              </p>
            </motion.div>
          </div>
          <div className="flex justify-center items-center flex-col">
            <motion.img
              {...animateBottom}
              src="/book2.png"
              alt="book 2"
              className="object-cover w-5/6 rounded-lg"
            />
            <motion.div
              {...animateLeft}
              className="flex justify-center items-center flex-col"
            >
              <h1 className="text-sm text-center sm:text-lg md:text-xl xl:text-2xl">
                Man’s Search for Meaning.
              </h1>
              <p className="text-sm sm:text-lg md:text-xl xl:text-2xl">
                by Viktor Frankl's
              </p>
            </motion.div>
          </div>

          <div className="flex justify-center items-center flex-col">
            <motion.img
              {...animateBottom}
              src="/book2.png"
              alt="book 2"
              className="object-cover w-5/6 rounded-lg"
            />
            <motion.div
              {...animateRight}
              className="flex justify-center items-center flex-col"
            >
              <h1 className="text-sm text-center sm:text-lg md:text-xl xl:text-2xl">
                Man’s Search for Meaning.
              </h1>
              <p className="text-sm sm:text-lg md:text-xl xl:text-2xl">
                by Viktor Frankl's
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AuthorDetailsSection;
