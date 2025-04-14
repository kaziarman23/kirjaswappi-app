import { IoBookOutline } from "react-icons/io5";
import { BookDatas } from "../Api/BookDatas";
import { useEffect, useState } from "react";
import { GrLanguage } from "react-icons/gr";
import OpenForOffers from "./ OpenForOffers";
import SwapByBooks from "./ SwapByBooks";
import SwapByGenres from "./ SwapByGenres";

function BookConditionSection() {
  const [book, setBook] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getData = async () => {
      setLoading(true);
      const data = await BookDatas();
      const arrData = Array.isArray(data) ? data : [data];
      setBook(arrData);
      // console.log("array data: ", arrData);
      setLoading(false);
    };
    getData();
  }, []);

  if (loading) {
    return <div>Loading Books...</div>;
  }

  const condition = book[0].swapCondition.conditionType;

  return (
    <div className="w-full h-full bg-slate-100">
      {/* header part */}
      {/* icon */}
      <h1 className="text-lg text-center md:text-xl lg:text-2xl">
        Exchange Condition
      </h1>
      <p className="text-sm text-gray-600 text-center md:text-xl">
        Either one of these
      </p>

      {/* Dynamic Swap View */}
      {condition === "ByBooks" && <SwapByBooks books={book} />}
      {condition === "ByGenres" && <SwapByGenres genres={book} />}
      {condition === "OpenForOffers" && <OpenForOffers data={book} />}

      {/* description part */}
      <div className="w-11/12 mx-auto mb-2 xl:w-4/5">
        <h1 className="text-bold text-lg">Book Description</h1>
        <p className="text-gray-600">{book[0]?.description}</p>
      </div>

      <div className="bg-white flex justify-center items-center p-5 gap-5">
        <div className="flex justify-center items-center flex-col gap-3">
          <h1 className="text-gray-600 text-base sm:text-lg md:text-xl lg:text-2xl">
            Book Condition
          </h1>
          <IoBookOutline className="w-8 h-8 md:w-12 lg:w-16 md:h-12 lg:h-16" />
          <h3 className='font-bold'>{book[0].condition}</h3>
        </div>
        <hr className="w-[0.2px] h-24 bg-[#E4E4E4]" />
        <div className="flex justify-center items-center flex-col gap-3">
          <h1 className="text-gray-600 text-base sm:text-lg md:text-xl lg:text-2xl">
            Book Language
          </h1>
          <GrLanguage className="w-8 h-8 md:w-12 lg:w-16 md:h-12 lg:h-16" />
          <h3 className='font-bold'>{book[0].language}</h3>
        </div>
      </div>
    </div>
  );
}

export default BookConditionSection;
