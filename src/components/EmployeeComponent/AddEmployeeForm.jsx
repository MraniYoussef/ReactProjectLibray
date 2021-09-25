import { useEffect, useState } from "react";

function AddEmployeeForm({ addEmployeeCallBack}){
    const [formState, setFormState] = useState({ });
    const [errors, setErrors] = useState({ }) 

    useEffect(() => {
        setFormState({
            ...formState,
            });
     
    }, [])

    const handleInputChange = e => {
        const{name, value} = e.target;
        console.log(formState);
        setFormState({
            ...formState,
            [name]: value,
        });
    }

    const handleAddEmployee = () => {
        setErrors({
            ...errors,
            firstName: !formState.firstName ? 'First Name is required' : null,
            lastName: !formState.lastName ? 'Last Name is required' : null,
            password: !formState.password ? 'Password is required' : null,
            cin: !formState.cin ? 'CIN is required' : null,
            email: !formState.email ? 'Email is required' : null,
        });
        
        if(formState.firstName && formState.lastName && formState.password && formState.cin && formState.email){
            addEmployeeCallBack(formState)
            setErrors({})
        }
        
    }

    return (
        <div>
            <label>First name</label>
            <input type="text" value={formState.firstName} name='firstName' onChange={handleInputChange} />
            {errors.firstName && <small>{errors.firstName}</small>}
            <br/>
            <label>Last name</label>
            <input type="text" value={formState.lastName} name='lastName' onChange={handleInputChange} />
            {errors.lastName && <small>{errors.lastName}</small>}
            <br/>
            <label>Password name</label>
            <input type="text" value={formState.password} name='password' onChange={handleInputChange} />
            {errors.password && <small>{errors.password}</small>}
            <br/>
            <label>CIN</label>
            <input type="text" value={formState.cin} name='cin' onChange={handleInputChange} />
            {errors.cin && <small>{errors.cin}</small>}
            <br/>
            <label>Email</label>
            <input type="text" value={formState.email} name='email' onChange={handleInputChange} />
            {errors.email && <small>{errors.email}</small>}
            <br/>
            

            <button onClick={handleAddEmployee}>Add</button>
        </div>
    )
}
export default AddEmployeeForm;