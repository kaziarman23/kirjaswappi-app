const SwapByBooks = ({ books }) => {
  if (!books || books.length === 0) return <p>No books listed.</p>;

  return (
    <div className="mt-4">
      <h2 className="text-xl font-semibold">Acceptable Books for Swap:</h2>
      <ul className="list-disc pl-5 mt-2">
        {books.map((book, idx) => (
          <li key={idx}>{book}</li>
        ))}
      </ul>
    </div>
  );
};
export default SwapByBooks;
