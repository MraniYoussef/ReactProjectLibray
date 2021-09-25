import { useEffect, useRef, useState } from "react";

function SearchBarBookReservation({filterBookReservationsCallBack, resetBookReservationsCallBack}){
    const [text, setText] = useState('');

    const handleInputChange = e => {
           const value = e.target.value;
           
    setText(value); 
  }
    const inputRef = useRef();

    useEffect(() => {
        inputRef.current.focus();
    }, []);

    useEffect(() => {
         if (text) {
             filterBookReservationsCallBack(text);
              } 
        else {
             /* resetBookReservationsCallBack(); */  } 
    }, [text]);

    const handleResetBRClick = e => {
        setText('');
    }

    return (
            <div>
                <input ref={inputRef} value={text} onChange={handleInputChange} />
                <button onClick={handleResetBRClick}>Reset</button>
            </div>
    )
}

export default SearchBarBookReservation;