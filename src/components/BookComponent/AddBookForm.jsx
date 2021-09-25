import { useEffect, useState } from "react";

function AddBookForm({type, addBookCallBack}){
    const [formState, setFormState] = useState({ type: type && type[0]});
    const [errors, setErrors] = useState({ }) 

    useEffect(() => {
        setFormState({
            ...formState,
            type: type && type[0],});
     
    }, [type])

    const handleInputChange = e => {
        const{name, value} = e.target;
        console.log(formState);
        setFormState({
            ...formState,
            [name]: value,
        });
    }

    const handleAddBook = () => {
        setErrors({
            ...errors,
            author: !formState.author ? 'Author is required' : null,
            title: !formState.title ? 'Title is required' : null,
            type: !formState.type ? 'Type is required' : null,
            numberCopies: !formState.numberCopies ? 'Number Copies is required' : null,
            numberBooksAvailable: !formState.numberBooksAvailable ? 'Number Books Available is required' : null,
        });
        
        if(formState.author && formState.title && formState.type && formState.numberCopies && formState.numberBooksAvailable){
            addBookCallBack(formState)
            setErrors({})
        }
        
    }

    return (
        <div>
            <label>Author : </label>
        <input type="text" value={formState.author} name='author' onChange={handleInputChange} />
        {errors.author && <small>{errors.author}</small>}
        <br/>
        <label>Title : </label>
            <input type="text" value={formState.title} name='title' onChange={handleInputChange} />
            {errors.title && <small>{errors.title}</small>}
            <br/>
        <label>Type : </label>
            <select defaultValue={type && type[0]} name='type' onChange={handleInputChange}>{type?.map(type => <option key={type} value={type}>{type}</option>)}</select >
             {errors.type && <small>{errors.type}</small>}
            <br/>
        <label>Number Copies : </label>
        <input type="text" value={formState.numberCopies} name='numberCopies' onChange={handleInputChange} />
        {errors.numberCopies && <small>{errors.numberCopies}</small>}
        <br/>
        <label>Books available : </label>
        <input type="text" value={formState.numberBooksAvailable} name='numberBooksAvailable' onChange={handleInputChange} />
        {errors.numberBooksAvailable && <small>{errors.numberBooksAvailable}</small>}
        <br/>

            <button onClick={handleAddBook}>Add</button>
        </div>
    )
}
export default AddBookForm;