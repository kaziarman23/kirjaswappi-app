import { IoBookOutline } from "react-icons/io5";
import { BookDatas } from "../Api/BookDatas";
import Card from "./Card";
import { useEffect, useState } from "react";
import { GrLanguage } from "react-icons/gr";

function BookConditionSection() {
  const [book, setBook] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getData = async () => {
      setLoading(true);
      const data = await BookDatas();
      const arrData = Array.isArray(data) ? data : [data];
      setBook(arrData);
      console.log("array data: ", arrData);
      setLoading(false);
    };
    getData();
  }, []);

  if (loading) {
    return <div>Loading Books...</div>;
  }

  return (
    <div className="w-full h-full bg-slate-100">
      {/* header part */}
      {/* icon */}
      <h1 className="text-lg text-center">Exchange Condition</h1>
      <p className="text-sm text-gray-600 text-center">Either one of these</p>

      {/* card part */}
      {loading ? <p>Loading books...</p> : <Card data={book} />}

      {/* description part */}
      <div className="w-11/12 mx-auto">
        <h1 className="text-bold text-lg">Book Description</h1>
        <p className="text-gray-600">{book[0]?.description}</p>
      </div>

      <div className="bg-white flex justify-center items-center p-5 gap-5">
        <div className="flex justify-center items-center flex-col gap-3">
          <h1 className="text-gray-600 text-base">Book Condition</h1>
          <IoBookOutline className='w-8 h-8'/>
          <h3>{book[0].condition}</h3>
        </div>
        <hr className='w-[0.2px] h-24 bg-[#E4E4E4]'/>
        <div className="flex justify-center items-center flex-col gap-3">
          <h1 className="text-gray-600 text-base">Book Language</h1>
          <GrLanguage className='w-8 h-8' />
          <h3>{book[0].language}</h3>
        </div>
      </div>
    </div>
  );
}

export default BookConditionSection;
