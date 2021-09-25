import { useEffect, useState } from "react";
import { addBookReservationApi, deleteBookReservationApi, getBookReservationsApi, getBookReservationstatusApi, saveBookReservationApi, searchBookReservationApi } from "../api/apiBookReservations";
import BookReservationList from "../components/BookReservationComponent/BookReservationList";
import SearchBarBookReservation from "../components/BookReservationComponent/SearchBarBookReservation";
import AddBookReservationForm from "../components/BookReservationComponent/AddBookReservationForm";



function BookReservationPage() {
  const [bookReservations , setbookReservations] = useState(null);
  const [status, setStatus] = useState(null);

  useEffect(() => {
    //Appel webService
    const fetchData = async () => {
      const bookReservations = await getBookReservationsApi();
      setbookReservations(bookReservations)
      const status = await getBookReservationstatusApi();
      setStatus(status)
    }
      fetchData();   
  }, []);

  const filterBookReservations = async keyword => {
    try{
      const filtredBookReservations = await searchBookReservationApi(keyword);
      console.log("hhhh",filtredBookReservations);

      setbookReservations(filtredBookReservations);


    }catch(err){
      console.log(err);
    }
  }

  const addBookReservation = async data => {
    try{
      const id = await addBookReservationApi(data);
      const bookReservation = {...data, ...id};
      console.log("here", bookReservation);
      setbookReservations([...bookReservations, bookReservation]);
    }catch(err){
      console.log(err)
    }
  }

  const deleteBookReservation = async idBookReservation => {
    console.log(idBookReservation);
      try{
        await deleteBookReservationApi(idBookReservation);
         const newBookReservations = bookReservations.filter(bookReservation => bookReservation.idBookReservation !== idBookReservation);
         setbookReservations([...newBookReservations]);
      }catch(err) {
        console.log(err);
      }
        }

  const saveBookReservation = async data => {
    console.log(data);

    try {
      const newBookReservation = await saveBookReservationApi(data);
      const newBookReservations = [...bookReservations];
      const foundBookReservation = newBookReservations.find(bookReservation => bookReservation.idBookReservation === newBookReservation.idBookReservation);
      foundBookReservation.member.idBookReservation = newBookReservation.member.idBookReservation;
      
      setbookReservations(newBookReservations);
    }catch(err) {
      console.log(err);
    }
  }
  const resetBookReservations = async () => {
    const bokReservations = await getBookReservationsApi;
    setbookReservations(bokReservations);
   }

       
  
  return (
    <>
          <SearchBarBookReservation filterBookReservationsCallBack={filterBookReservations} resetBookReservationsCallBack={resetBookReservations} />
               {bookReservations
            ? <BookReservationList bookReservations={bookReservations} status={status} deleteBookReservationCallBack={deleteBookReservation} saveBookReservationCallBack={saveBookReservation} /> 
            : <div> Loading...</div>
            }
              <AddBookReservationForm status={status} addBookReservationCallBack={addBookReservation} />
         
    </>
  );
}

export default BookReservationPage;

