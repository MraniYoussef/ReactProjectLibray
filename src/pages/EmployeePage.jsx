import { useEffect, useState } from "react";
import { addEmployeeApi, deleteEmployeeApi, getEmployeesApi, saveEmployeeApi, searchEmployeeApi } from "../api/apiEmployees";
import AddEmployeeForm from "../components/EmployeeComponent/AddEmployeeForm";
import EmployeeList from "../components/EmployeeComponent/EmployeeList";
import SearchBarEmployee from "../components/EmployeeComponent/SearchBarEmployee";

function EmployeePage() {
  const [employees , setEmployees] = useState(null);

  useEffect(() => {
    //Appel webService
    const fetchData = async () => {
      const employees = await getEmployeesApi();
      setEmployees(employees)
    }
      fetchData();   
  }, []);

 
  const filterEmployees = async keyword => {
    try{
      const filtredEmployees = await searchEmployeeApi(keyword);
      setEmployees(filtredEmployees);
    }catch(err){
      console.log(err);
    }
  }

  const addEmployee = async data => {
    try{
      const id = await addEmployeeApi(data);
      const employee = {...data, id};
      setEmployees([...employees, employee]);
    }catch(err){
      console.log(err)
    }
  }

  const deleteEmployee = async idEmployee => {
    console.log(idEmployee);
      try{
        await deleteEmployeeApi(idEmployee);
         const newEmployees = employees.filter(employee => employee.idEmployee !== idEmployee);
         setEmployees([...newEmployees]);
      }catch(err) {
        console.log(err);
      }
        }

  const saveEmployee = async data => {
    console.log(data);

    try {
      const newEmployee = await saveEmployeeApi(data);
      const newEmployees = [...employees];
      const foundEmployee = newEmployees.find(employee => employee.idEmployee === newEmployee.idEmployee);
      foundEmployee.firstName = newEmployee.firstName;
      foundEmployee.lastName = newEmployee.lastName;
      foundEmployee.password = newEmployee.password;
      foundEmployee.cin = newEmployee.cin;
      foundEmployee.email = newEmployee.email;
      setEmployees(newEmployees);
    }catch(err) {
      console.log(err);
    }
  }
    
        const resetEmployees = async () => {
         const employees = await getEmployeesApi();
         setEmployees(employees);
        }

       
  
  return (
    <>
                
                <SearchBarEmployee filterEmployeesCallBack={filterEmployees} resetEmployeesCallBack={resetEmployees} />
            {employees
            ? <EmployeeList employees={employees} deleteEmployeeCallBack={deleteEmployee} saveEmployeeCallBack={saveEmployee} /> 
            : <div> Loading...</div>
            }
                  <AddEmployeeForm  addEmployeeCallBack={addEmployee} />
         
      

    </>
  );
}

export default EmployeePage;
