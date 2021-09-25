import { useEffect, useRef, useState } from "react";

function SearchBarEmployee({filterEmployeesCallBack, resetEmployeesCallBack}){
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
            filterEmployeesCallBack(text); } 
        else {
            resetEmployeesCallBack();}
    }, [text]);

    const handleResetClick = e => {
        setText('');
    }

    return (
            <div>
                <input ref={inputRef} value={text} onChange={handleInputChange} />
                <button onClick={handleResetClick}>Reset</button>
            </div>
    )
}

export default SearchBarEmployee;