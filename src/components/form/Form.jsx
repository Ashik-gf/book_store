import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useEditBookMutation, useGetBookQuery } from '../../features/apiSlice/apiSlice';


const Form = () => {
// allState
const [name, setName] = useState('')
const [author, setAuthor] = useState('')
const [thumbnail, setThumbnail] = useState('')
const [price, setPrice] = useState('')
const [rating, setRating] = useState('')
const [featured, setFeatured] = useState(false)

    const {bookId} = useParams();
   const {data} = useGetBookQuery(bookId)
   const [editBook, {data:book, isLoading, isError, error, isSucess}] = useEditBookMutation()
  

   useEffect(() => {
    if (data) {
      setName(data.name);
      setAuthor(data.author);
      setThumbnail(data.thumbnail);
      setPrice(data.price);
      setRating(data.rating);
      setFeatured(data.featured);
    }
  }, [data]);

  // Reset form function
  const resetForm = () => {
    setName('');
    setAuthor('');
    setThumbnail('');
    setPrice('');
    setRating('');
    setFeatured(false);
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
   editBook({id:bookId, data:{
    name,
    author,
    thumbnail,
    price,
    rating,
    featured,
   }})
   resetForm()
    
  };

  return (
    <form onSubmit={handleSubmit} className="book-form">
    <div className="space-y-2">
        <label for="lws-bookName">Book Name</label>
        <input required
         className="text-input" type="text" id="lws-bookName" 
         name="name"
         value={name}
         onChange={(e)=>setName(e.target.value)}
         />
    </div>

    <div className="space-y-2">
        <label for="lws-author">Author</label>
        <input required 
        className="text-input" 
        type="text" 
        id="lws-author" 
        name="author"
        value={author}
        onChange={(e)=>setAuthor(e.target.value)}
        />
    </div>

    <div className="space-y-2">
        <label for="lws-thumbnail">Image Url</label>
        <input required 
        className="text-input"
         type="text" 
         id="lws-thumbnail"
          name="thumbnail"
          value={thumbnail}
          onChange={(e)=>setThumbnail(e.target.value)}
          />
    </div>

    <div className="grid grid-cols-2 gap-8 pb-4">
        <div className="space-y-2">
            <label for="lws-price">Price</label>
            <input required
             className="text-input" 
             type="number"
              id="lws-price" 
              name="price"
              value={price}
              onChange={(e)=>setPrice(e.target.value)} />
        </div>

        <div className="space-y-2">
            <label for="lws-rating">Rating</label>
            <input required 
            className="text-input"
             type="number"
              id="lws-rating"
               name="rating" 
               min="1"
                max="5" 
                value={rating}
                onChange={(e)=>setRating(e.target.value)}
                />
        </div>
    </div>

    <div className="flex items-center">
        <input id="lws-featured" type="checkbox" name="featured"
         className="w-4 h-4"
         checked={featured}
         onChange={(e)=>setFeatured(e.target.checked)}
         />
        <label for="lws-featured" className="ml-2 text-sm"> This is a featured book </label>
    </div>

    <button disabled={isLoading} type="submit" className="submit" id="lws-submit">Edit Book</button>
   {isError && <p>{error} </p>} 
</form>
  )
}

export default Form