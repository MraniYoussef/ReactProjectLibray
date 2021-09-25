import { useEffect, useState } from "react";
import { getBooksApi } from "../../api/apiBooks";
import { getMembersApi } from "../../api/apiMembers";

function AddBookReservationForm({status, addBookReservationCallBack}){
    const [formState, setFormState] = useState({status: status && status[0] });
    const [errors, setErrors] = useState({ }) ;
    const [members, setMembers] = useState(null);
    const [books, setBooks] = useState(null);


    useEffect(() => {
        setFormState({
            ...formState,
            status: status && status[0], });
     
    }, [status])

    useEffect (() => {
        getBooksApi().then(setBooks);
        getMembersApi().then(setMembers);
    },[])
    const handleInputChange = e => {
        const{name, value} = e.target;
        console.log(formState);
        setFormState({
            ...formState,
            [name]: value,
        });
    }

    const handleAddBookReservation = () => {
        setErrors({
            ...errors,
            idMember: !formState.idMember ? 'Id Member is required' : null,
            idBook: !formState.idBook ? 'Id Book is required' : null,
        });
        
        if(formState.idMember && formState.idBook){
            addBookReservationCallBack(formState)
            setErrors({})
        }
        
    }

    return (
        <div>
            <label>Id Member</label>
            
            <select defaultValue={status && status[0]} name='status' onChange={handleInputChange}>{status?.map(status => <option key={status} value={status}>{status}</option>)}</select >
{/*             <input type="text" value={formState.type} name='type' onChange={handleInputChange} />
 */}            {errors.type && <small>{errors.type}</small>}
            <br/>
            <select defaultValue={members && members[0]} name='idMember' onChange={handleInputChange}>{members?.map(member => <option key={member.idMember} value={member.idMember}>{member.idMember} : {member.lastName}</option>)}</select >
            <select defaultValue={books && books[0]} name='idBook' onChange={handleInputChange}>{books?.map(book => <option key={book.idBook} value={book.idBook}>{book.idBook} : {book.title}</option>)}</select >


            <button onClick={handleAddBookReservation}>Add</button>
        </div>
    )
}
export default AddBookReservationForm;