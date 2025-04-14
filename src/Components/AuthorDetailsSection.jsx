import React from "react";

function AuthorDetailsSection() {
  return (
    <div className="w-full h-full bg-slate-100 overflow-hidden">
      <div className="w-11/12 mx-auto mb-4">
        {/* author details */}
        <div className="flex items-center justify-start gap-1 my-5">
          <img
            src="/location.png"
            alt="author location"
            className="object-cover w-4 h-4"
          />
          <h1>Senate Square, Helsinki</h1>
        </div>
        <div>
          <p className="text-gray-600 text-start mb-2">offered by</p>
          <div className="flex items-center justify-between">
            <div className="flex items-center justify-start gap-1">
              <img
                src="/profile.jpg"
                alt="Author Profile"
                className="object-cover w-6 h-6 rounded-full"
              />
              <h1 className="text-xs">Raisa Binte Hossain</h1>
            </div>
            <div className="flex items-center justify-start gap-1">
              <img
                src="/uparrow.png"
                alt="persentage"
                className="object-cover w-4 h-4"
              />
              <h1 className="text-xs">95% Positive Swaps</h1>
            </div>
          </div>
        </div>
        <hr className="w-full my-5 bg-gray-200" />

        {/* author other collection */}
        <div className="flex justify-between items-center mb-4">
          <h1>More From This User</h1>
          <h1>see more</h1>
        </div>
        <div className="grid grid-cols-2 gap-2">
          <div className="flex justify-center items-center flex-col">
            <img
              src="/book2.png"
              alt="book 2"
              className="object-cover w-5/6 rounded-lg"
            />
            <div className="flex justify-center items-center flex-col">
              <h1 className="text-sm text-center">Man’s Search for Meaning.</h1>
              <p className="text-sm">by Viktor Frankl's</p>
            </div>
          </div>

          <div className="flex justify-center items-center flex-col">
            <img
              src="/book2.png"
              alt="book 2"
              className="object-cover w-5/6 rounded-lg"
            />
            <div className="flex justify-center items-center flex-col">
              <h1 className="text-sm text-center">Man’s Search for Meaning.</h1>
              <p className="text-sm">by Viktor Frankl's</p>
            </div>
          </div>

          <div className="flex justify-center items-center flex-col">
            <img
              src="/book2.png"
              alt="book 2"
              className="object-cover w-5/6 rounded-lg"
            />
            <div className="flex justify-center items-center flex-col">
              <h1 className="text-sm text-center">Man’s Search for Meaning.</h1>
              <p className="text-sm">by Viktor Frankl's</p>
            </div>
          </div>

          <div className="flex justify-center items-center flex-col">
            <img
              src="/book2.png"
              alt="book 2"
              className="object-cover w-5/6 rounded-lg"
            />
            <div className="flex justify-center items-center flex-col">
              <h1 className="text-sm text-center">Man’s Search for Meaning.</h1>
              <p className="text-sm">by Viktor Frankl's</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AuthorDetailsSection;
