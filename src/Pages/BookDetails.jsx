import BookSection from "../Components/BookSection";
import BookConditionSection from "../Components/BookConditionSection";
import AuthorDetailsSection from "../Components/AuthorDetailsSection";

function BookDetails() {
  return (
    <div className="w-full h-full mx-auto">
      <h1 className="text-2xl text-center my-10">Book Details</h1>
      <BookSection />
      <BookConditionSection />
      <AuthorDetailsSection />
    </div>
  );
}

export default BookDetails;
