
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from './pages/Home';
import Book from './components/allBooks/Book';
import EditBook from './components/editBook/EditBook';
import AddBook from './components/addBook/AddBook';
import Navbar from './components/Navbar/Navbar';
import { useState } from "react";
function App() {
  const [search, setSearch]= useState(" ")
  return (
    <Router>
            <Navbar search={search} setSearch={setSearch} />
            <Routes>
                <Route path="/" element={<Home search={search} />} />
                <Route path={`/books/:bookId`} element={<Book />} />
                <Route path="/books/add" element={<AddBook />} />
                <Route path="/books/edit/:bookId" element={<EditBook />} />
            </Routes>
        
        </Router>
  );
}

export default App;
