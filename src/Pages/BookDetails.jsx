import React from "react";
import BookSection from "../Components/BookSection";
import BookConditionSection from "../Components/BookConditionSection";

function BookDetails() {
  return (
    <div className="w-full h-full mx-auto space-y-5">
      <h1 className="text-2xl text-center mt-10">
        Book Details
      </h1>
      <BookSection></BookSection>
      <BookConditionSection></BookConditionSection>
    </div>
  );
}

export default BookDetails;
