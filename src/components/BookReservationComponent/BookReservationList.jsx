import BookReservation from "./BookReservation/BookReservation";

function BookReservationList({bookReservations, status, deleteBookReservationCallBack, saveBookReservationCallBack}){

    return (
        
            <>        
              
        {bookReservations.map(bookReservation => <BookReservation key={bookReservation.idBookReservation} details={bookReservation} status={status} deleteBookReservationCallBack={deleteBookReservationCallBack} saveBookReservationCallBack={saveBookReservationCallBack} />)}
        </>
                  
  
        
    )
}
export default BookReservationList;