import { useEffect, useState } from "react";
import AddBookForm from "../components/BookComponent/AddBookForm";
import BookList from "../components/BookComponent/BookList";
import SearchBar from "../components/BookComponent/SearchBar";


import {addBooksApi, deleteBooksApi, getBooksApi, getBooktypeApi, saveBooksApi, searchBookApi} from "../api/apiBooks";

function BookPage() {
  const [books , setBooks] = useState(null);
  const [type, setType] = useState(null);

  useEffect(() => {
    //Appel webService
    const fetchData = async () => {
      const books = await getBooksApi();
      console.log("ddddddd",books);
      setBooks(books)
    const type = await getBooktypeApi();
    setType(type)
    }
      fetchData();   
  }, []);

 
  const filterBooks = async keyword => {
    try{

      const filtredBooks = await searchBookApi(keyword);
      console.log(filtredBooks);
      setBooks(filtredBooks);


    }catch(err){
      console.log(err);
    }
  }

  const addBook = async data => {
    try{
      const id = await addBooksApi(data);
      const book = {...data, id};
      setBooks([...books, book]);
    }catch(err){
      console.log(err)
    }

  }

  const deleteBook = async idBook => {
      try{
        await deleteBooksApi(idBook);
         const newBooks = books.filter(book => book.idBook !== idBook);
          setBooks([...newBooks]);
      }catch(err) {
        console.log(err);
      }
        }

  const saveBook = async data => {
    console.log(data);

    try {
      const newBook = await saveBooksApi(data);
      const newBooks = [...books];
      const foundBook = newBooks.find(book => book.idBook === newBook.idBook);
      foundBook.title = newBook.title;
      foundBook.description = newBook.description;
      setBooks(newBooks);
    }catch(err) {
      console.log(err);
    }
  }
    
        const resetBooks = async () => {
         const books = await getBooksApi();
         setBooks(books);
        }

       
  
  return (
    <>
                
                <SearchBar filterBooksCallBack={filterBooks} resetBooksCallBack={resetBooks} />
            {books
            ? <BookList books={books} deleteBookCallBack={deleteBook} saveBookCallBack={saveBook} /> 
            : <div> Loading...</div>
            }
                  <AddBookForm type={type} addBookCallBack={addBook} />
         
      

    </>
  );
}

export default BookPage;
