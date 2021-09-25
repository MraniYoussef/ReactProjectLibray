import { useEffect, useState } from "react";

function AddMemberForm({fonction, addMemberCallBack}){
    const [formState, setFormState] = useState({ fonction: fonction && fonction[0]});
    const [errors, setErrors] = useState({ }) 

    useEffect(() => {
        setFormState({
            ...formState,
            fonction: fonction && fonction[0],});
            console.log(fonction);
     
    }, [fonction])

    const handleInputChange = e => {
        const{name, value} = e.target;
        setFormState({
            ...formState,
            [name]: value,
        });

    }

    const handleAddMember = () => {
        setErrors({
            ...errors,
            firstName: !formState.firstName ? 'FirstName is required' : null,
            lastName: !formState.lastName ? 'LastName is required' : null,
            password: !formState.password ? 'Password is required' : null,
            cin: !formState.cin ? 'CIN is required' : null,
            address: !formState.address ? 'Address is required' : null,
            email: !formState.email ? 'Email is required' : null,
            dateOfMembership: !formState.dateOfMembership ? 'Date Of Membership is required' : null,
            fonction: !formState.fonction ? 'Function is required' : null,
        });
        
        if(formState.firstName && formState.lastName && formState.password && formState.cin && formState.address && formState.email && formState.fonction){
            addMemberCallBack(formState)
            setErrors({})
        }
        
    }

    return (
        <div>
            <label>First name :</label>
            <input type="text" value={formState.firstName} name='firstName' onChange={handleInputChange} />
            {errors.firstName && <small>{errors.firstName}</small>}
            <br/>
            <label>Last name :</label>
            <input type="text" value={formState.lastName} name='lastName' onChange={handleInputChange} />
            {errors.lastName && <small>{errors.lastName}</small>}
            <br/>      
            <label>Password :</label>
            <input type="text" value={formState.password} name='password' onChange={handleInputChange} />
            {errors.password && <small>{errors.password}</small>}
            <br/>      
            <label>CIN :</label>
            <input type="text" value={formState.cin} name='cin' onChange={handleInputChange} />
            {errors.cin && <small>{errors.cin}</small>}
            <br/>      
            <label>Address :</label>
            <input type="text" value={formState.address} name='address' onChange={handleInputChange} />
            {errors.address && <small>{errors.address}</small>}
            <br/>  
            <select defaultValue={fonction && fonction[0]} name='fonction' onChange={handleInputChange}>{fonction?.map(fonction => <option key={fonction} value={fonction}>{fonction}</option>)}</select >
                        
                        {/*             <input type="text" value={formState.type} name='type' onChange={handleInputChange} />
                         */}            {errors.fonction && <small>{errors.fonction}</small>}
                                    <br/>    
            <label>Email :</label>
            <input type="text" value={formState.email} name='email' onChange={handleInputChange} />
            {errors.email && <small>{errors.email}</small>}
            <br/>
           


            <button onClick={handleAddMember}>Add</button>
        </div>
    )
}
export default AddMemberForm;