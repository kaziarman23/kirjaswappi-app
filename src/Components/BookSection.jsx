import React, { useEffect, useState } from "react";
import BookDetails from "../Pages/BookDetails";

const BookSection = () => {

  const [bookData, setBookData] = useState(null);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     const data = await BookDetails();
  //     setBookData(data); 
  //     console.log("Book data:", data); 
  //   };

    // fetchData();
  // }, []);

  return (
    <div className="w-full h-full flex justify-center items-center flex-col gap-5">
      <div className="w-4/5 flex justify-center items-center">
        <img
          src="/book1.png"
          alt="book photo"
          className="object-cover w-4/5 h-full"
        />
      </div>
      <section className="w-full bg-slate-100 flex justify-center items-center flex-col gap-3 p-2">
        <h1 className="text-2xl font-bold">
          this is a book title
        </h1>
        <h3 className="text-lg font-semibold">
          author name
        </h3>
        <div className="w-full flex justify-center items-center gap-2 text-xs">
          <p className="border-r border-gray-600 leading-none p-1">
            Biography
          </p>
          <p className="border-r border-gray-600 leading-none p-1">
            Autobiography
          </p>
          <p className="leading-none p-1">
            Personal narrative
          </p>
        </div>
      </section>
    </div>
  );
};

export default BookSection;
