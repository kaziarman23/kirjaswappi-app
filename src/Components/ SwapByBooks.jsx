const SwapByBooks = ({ data }) => {
  return (
    <div className="flex justify-center items-center gap-4 overflow-x-scroll lg:overflow-hidden bg-slate-100 p-5">
      {data.map((book, index) => (
        <div
          key={index}
          className="w-4/5 h-32 flex justify-center items-center bg-[#DEE7F5] p-4 rounded-xl shadow-md"
        >
          <div className="w-1/3 sm:w-1/2 flex justify-center items-center">
            <img
              src="/book_mark.png"
              alt={book.author}
              className="object-cover w-6 h-6 md:w-12 lg:w-16 md:h-12 lg:h-16"
            />
          </div>
          <div className="w-2/3 sm:w-1/2">
            <h1 className="ont-bold text-base md:text-lg lg:text-xl xl:text-2xl">{book?.title}</h1>
            <h5 className="text-sm md:text-lg lg:text-xl xl:text-2xl">{book?.author}</h5>
          </div>
        </div>
      ))}
    </div>
  );
};
export default SwapByBooks;
