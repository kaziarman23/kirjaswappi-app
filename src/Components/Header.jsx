import { RiArrowLeftSLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { animateTop } from "./Animation";

function Header() {
  return (
    <div>
      <Link to="/">
        <RiArrowLeftSLine className="w-10 h-10" />
      </Link>
      <motion.h1
        {...animateTop}
        className="text-2xl text-center my-10 font-bold"
      >
        Book Details
      </motion.h1>
    </div>
  );
}

export default Header;
