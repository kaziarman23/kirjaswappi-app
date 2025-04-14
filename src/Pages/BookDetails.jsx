import BookSection from "../Components/BookSection";
import BookConditionSection from "../Components/BookConditionSection";
import AuthorDetailsSection from "../Components/AuthorDetailsSection";
import Footer from '../Components/Footer';
import Header from '../Components/Header';

function BookDetails() {
  return (
    <div className="w-full h-full mx-auto">
      <Header />
      <BookSection />
      <BookConditionSection />
      <AuthorDetailsSection />
      <Footer />
    </div>
  );
}

export default BookDetails;
