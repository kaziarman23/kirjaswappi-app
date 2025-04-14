import { BookDetails } from "../Api/BookDetails";

function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-br from-purple-200 to-pink-300 text-center">
      <h1 className="text-5xl font-bold mb-4">
        📚 KirjaSwappi
      </h1>
      <p className="text-lg mb-8">
        Swap books. Share stories. Join the book loving
        community.
      </p>
      <a
        href="/book-details"
        className="bg-purple-600 text-white px-6 py-3 rounded-full hover:bg-purple-700"
      >
        View Book Details
      </a>
    </div>
  );
}

export default Home;
