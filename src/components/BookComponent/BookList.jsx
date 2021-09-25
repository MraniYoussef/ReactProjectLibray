import Book from "./Book/Book";

function BookList({books, deleteBookCallBack, saveBookCallBack}){

    return (
        <>
           {books.map(book => <Book key={book.idBook} details={book} deleteBookCallBack={deleteBookCallBack} saveBookCallBack={saveBookCallBack} />)}
           
        </>
    )
}
export default BookList;