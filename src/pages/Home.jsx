import React, { useState } from 'react'
import AllBooks from '../components/allBooks/AllBooks';
import { useGetBooksQuery } from '../features/apiSlice/apiSlice';
import PlayerLoader from '../components/ui/loaders/PlayerLoader';
import Error from '../components/ui/Error';
import Header from '../components/Header/Header';
import Book from '../components/allBooks/Book';

const Home = ({search}) => {
  const {data:books, isLoading, isError}=useGetBooksQuery();
  // what should we have 
  const [featured, setFeatured] = useState(false)
//  filterSearch
const filterdData = books.filter((book)=>book.name.toLowerCase().includes(search.toLowerCase()))



// dataShow
  let content
  if(isLoading){content= <PlayerLoader />}
  if(!isLoading && isError){content= <Error />}
  if(!isLoading && !isError && books?.length === 0){content= <p>No video Found</p>}
  if(!isLoading && !isError && books?.length > 0){content= books.map(book=> <Book key={book.id} book={book} />)}
  if(!isLoading && !isError && books?.length > 0 && featured){content=  (books.filter(book=>book.featured === true)).map(book=><Book key={book.id} book={book} />)}
  if(!isLoading && !isError && books?.length > 0 && search.length > 0){content=  filterdData.map(book=><Book key={book.id} book={book} />)}
  return (
    <div>
      <Header featured={featured} setFeatured={setFeatured}  />
      <main className="py-12 px-6 2xl:px-6 container grid gird-cols-3">
      <div className="order-2 xl:-order-1">
        <div className="space-y-6 md:space-y-0 md:grid grid-cols-1 lg:grid-cols-3 gap-6">
        {content}
        </div>
      </div>
    </main>
    </div>
  )
}

export default Home