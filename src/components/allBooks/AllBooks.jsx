import React from "react";
import Book from "./Book";

const AllBooks = ({book}) => {
  console.log(book);
  return (
    <main className="py-12 px-6 2xl:px-6 container grid gird-cols-3 border-2">
      <div className="order-2 xl:-order-1">
        <div className=" border-2 space-y-6 md:space-y-0 md:grid grid-cols-1 lg:grid-cols-3 gap-6">
          <Book />
        </div>
      </div>
    </main>
  );
};

export default AllBooks;
