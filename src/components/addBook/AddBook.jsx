import React, { useEffect, useState } from "react";
import { useAddBookMutation } from "../../features/apiSlice/apiSlice";

const AddBook = () => {
  const [name, setName] = useState("");
  const [author, setAuthor] = useState("");
  const [thumbnail, setThumbnail] = useState("");
  const [price, setPrice] = useState("");
  const [rating, setRating] = useState("");
  const [featured, setFeatured] = useState(false);
//   get Mutation Functon
const [addBook, {isLoading, isError, error, isSuccess}] = useAddBookMutation()


  // Reset form function
  const resetForm = () => {
    setName("");
    setAuthor("");
    setThumbnail("");
    setPrice("");
    setRating("");
    setFeatured(false);
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform the form submission logic here, such as dispatching an action or making an API call
    addBook({
        name,
        author,
        thumbnail,
        price,
        rating,
        featured,
    });
        resetForm();
    
    // You can send formData to your API or dispatch an action here.
    // Reset form after submission
  };

  return (
    <div>
      <main className="py-6 2xl:px-6">
        <div className="container">
          <div className="p-8 overflow-hidden bg-white shadow-cardShadow rounded-md max-w-xl mx-auto">
            <h4 className="mb-8 text-xl font-bold text-center">Add New Book</h4>
            <form onSubmit={handleSubmit} className="book-form">
              <div className="space-y-2">
                <label for="lws-bookName">Book Name</label>
                <input
                  required
                  className="text-input"
                  type="text"
                  id="lws-bookName"
                  name="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>

              <div className="space-y-2">
                <label for="lws-author">Author</label>
                <input
                  required
                  className="text-input"
                  type="text"
                  id="lws-author"
                  name="author"
                  value={author}
                  onChange={(e) => setAuthor(e.target.value)}
                />
              </div>

              <div className="space-y-2">
                <label for="lws-thumbnail">Image Url</label>
                <input
                  required
                  className="text-input"
                  type="text"
                  id="lws-thumbnail"
                  name="thumbnail"
                  value={thumbnail}
                  onChange={(e) => setThumbnail(e.target.value)}
                />
              </div>

              <div className="grid grid-cols-2 gap-8 pb-4">
                <div className="space-y-2">
                  <label for="lws-price">Price</label>
                  <input
                    required
                    className="text-input"
                    type="number"
                    id="lws-price"
                    name="price"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                  />
                </div>

                <div className="space-y-2">
                  <label for="lws-rating">Rating</label>
                  <input
                    required
                    className="text-input"
                    type="number"
                    id="lws-rating"
                    name="rating"
                    min="1"
                    max="5"
                    value={rating}
                    onChange={(e) => setRating(e.target.value)}
                  />
                </div>
              </div>

              <div className="flex items-center">
                <input
                  id="lws-featured"
                  type="checkbox"
                  name="featured"
                  className="w-4 h-4"
                  checked={featured}
                  onChange={(e) => setFeatured(e.target.checked)}
                />
                <label for="lws-featured" className="ml-2 text-sm">
                  
                  This is a featured book
                </label>
              </div>

              <button
                disabled={isLoading}
                type="submit"
                className="submit"
                id="lws-submit"
              >
                Add Book
              </button>
              {isError && <p>{error} </p>}
              {isSuccess && <p className=" text-green-300"> Successfully Book Added </p>}
            </form>
          </div>
        </div>
      </main>
    </div>
  );
};

export default AddBook;
