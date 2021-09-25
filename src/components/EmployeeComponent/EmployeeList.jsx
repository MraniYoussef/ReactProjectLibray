import Employee from "./Employee/Employee";

function EmployeeList({employees,  deleteEmployeeCallBack, saveEmployeeCallBack}){

    return (
        <div>
           {employees.map(employee => <Employee key={employee.idEmployee} details={employee}   deleteEmployeeCallBack={deleteEmployeeCallBack} saveEmployeeCallBack={saveEmployeeCallBack} />)}
           
        </div>
    )
}
export default EmployeeList;