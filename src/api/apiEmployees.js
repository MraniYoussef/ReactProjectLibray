const ENDPOINT = 'http://localhost:8087/get/employees';

const headers = {
    'Accept' : 'application/json',
    'Content-Type' : 'application/json' 
};


export const getEmployeesApi = async () => {
    
    const res = await fetch(ENDPOINT, {headers});
    const json = await res.json();
    return json;
}

export const searchEmployeeApi = async lastName => {
    let res;
    try{
        res = await fetch(`${ENDPOINT}/${lastName}`, {headers});


    }catch(err){
        throw "ERROR REQUEST";
    } if (res.status === 404) throw "ERROR 404";
    
    const json = await res.json();
    return json;
}

export const addEmployeeApi = async data => {
    let res;
try{
         res = await fetch(ENDPOINT, {
            method: 'POST',
            body: JSON.stringify(data),
            headers
        });
    }catch(err){
            throw "ERROR REQUEST";
    }if (res.status === 404){
        throw "CANT ADD 404 "
    }
    
    const json = await res.json();
    return json;
}

export const saveEmployeeApi = async data => {
    const res = await fetch(ENDPOINT + "/" + data.idEmployee,  {
        method: 'PUT',
        body: JSON.stringify(data), 
        headers
    });
    const json = await res.json();
    return json;
}

export const deleteEmployeeApi = async idEmployee => {
    let res;
    try {
        res = await fetch(`${ENDPOINT}/${idEmployee}`, {method: 'DELETE', headers });

    }catch(err){
        return "ERROR REQUEST"}
    if(res.status === 404){
        throw Error('cant delete 404');
    }  
const json = await res.json();
console.log(json);
return json;
    
}