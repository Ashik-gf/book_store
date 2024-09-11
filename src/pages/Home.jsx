import React, { useState } from "react";
import { useGetBooksQuery } from "../features/apiSlice/apiSlice";
import PlayerLoader from "../components/ui/loaders/PlayerLoader";
import Error from "../components/ui/Error";
import Header from "../components/Header/Header";
import Book from "../components/allBooks/Book";

const Home = ({ search }) => {
  const { data: books, isLoading, isError } = useGetBooksQuery();
  const [featured, setFeatured] = useState(false);

  // Ensure books array is defined before filtering
  const filteredData = books
    ? books.filter((book) =>
        book.name.toLowerCase().includes(search?.toLowerCase())
      )
    : [];

  console.log(filteredData);

  // Handle content display
  let content;
  if (isLoading) {
    content = <PlayerLoader />;
  } else if (isError) {
    content = <Error />;
  } else if (!isLoading && !isError && books?.length === 0) {
    content = <p>No books found</p>;
  } else if (books?.length > 0) {
    content =
      search?.length > 0
        ? filteredData.map((book) => <Book key={book.id} book={book} />)
        : books.map((book) => <Book key={book.id} book={book} />);
  }

  // Handle featured books filter
  if (!isLoading && !isError && books?.length > 0 && featured) {
    content = books
      .filter((book) => book.featured === true)
      .map((book) => <Book key={book.id} book={book} />);
  }

  return (
    <div>
    <Header featured={featured} setFeatured={setFeatured} />
    <main className="py-12 px-6 2xl:px-6 container grid gird-cols-3">
      <div className="order-2 xl:-order-1">
        <div className="space-y-6 md:space-y-0 md:grid grid-cols-1 lg:grid-cols-3 gap-6">
          {content}
        </div>
      </div>
    </main>
  </div>
  );
};

export default Home;
