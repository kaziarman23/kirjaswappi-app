const SwapByBooks = ({ data }) => {
  

  return (
    <div className="flex justify-center items-center gap-4 overflow-x-scroll bg-slate-100 p-5">
      {data.map((book, index) => (
        <div
          key={index}
          className="w-4/5 h-32 flex justify-center items-center bg-[#DEE7F5] p-4 rounded-xl shadow-md"
        >
          <div className="w-1/3">
            <img
              src="/book_mark.png"
              alt={book.author}
              className="object-cover w-6 h-6"
            />
          </div>
          <div className="w-2/3">
            <h1 className="font-bold text-base">{book?.title}</h1>
            <h5 className="text-sm">{book?.author}</h5>
          </div>
        </div>
      ))}
    </div>
  );
};
export default SwapByBooks;
