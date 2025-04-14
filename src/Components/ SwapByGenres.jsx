const SwapByGenres = ({ genres }) => (
  <div className="mt-4">
    <h2 className="text-xl font-semibold">Preferred Genres:</h2>
    <div className="flex flex-wrap gap-2 mt-2">
      {genres.map((genre, idx) => (
        <span key={idx} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
          {genre}
        </span>
      ))}
    </div>
  </div>
);
export default SwapByGenres;
