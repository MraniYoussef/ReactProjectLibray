import { useEffect, useState } from "react";

function AddSubscriptionForm({idMembers, addSubscriptionCallBack}){
    const [formState, setFormState] = useState({idMember: idMembers && idMembers[0] });
    const [errors, setErrors] = useState({ }) 

    useEffect(() => {
        setFormState({
            ...formState,
            idMember: idMembers && idMembers[0],});
     
    }, [idMembers])

    const handleInputChange = e => {
        const{name, value} = e.target;
        console.log("fffff",formState);
        setFormState({
            ...formState,
            [name]: value,
        });
    }

    const handleAddSubscription = () => {
        setErrors({
            ...errors,
            idMember: !formState.idMember ? 'idMember is required' : null,
            
        });
        
        if(formState.idMember){
            addSubscriptionCallBack(formState)
            setErrors({})
        }
        
    }

    return (
        <div>
            <label>Id Member : </label>
            <select defaultValue={idMembers && idMembers[0]} name='idMember' onChange={handleInputChange}>{idMembers?.map(idMember => <option key={idMember} value={idMember}>{idMember}</option>)}</select >

        
        
            <button onClick={handleAddSubscription}>Add</button>
        </div>
    )
}
export default AddSubscriptionForm;