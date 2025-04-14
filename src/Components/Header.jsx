import { RiArrowLeftSLine } from "react-icons/ri";
import { Link } from "react-router-dom";


function Header() {
  return (
    <div>
      <Link to="/">
        <RiArrowLeftSLine className="w-10 h-10" />
      </Link>
      <h1
        
        className="text-2xl text-center my-10 font-bold"
      >
        Book Details
      </h1>
    </div>
  );
}

export default Header;
