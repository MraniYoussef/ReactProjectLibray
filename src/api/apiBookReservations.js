const ENDPOINT = 'http://localhost:8087/get/bookReservation';

const headers = {
    'Accept' : 'application/json',
    'Content-Type' : 'application/json' 
};


export const getBookReservationsApi = async () => {
    
    const res = await fetch(ENDPOINT, {headers});
    const json = await res.json();
    return json;
}
export const getBookReservationstatusApi = async () => {
    
    const res = await fetch(ENDPOINT + "/status", {headers});
    const json = await res.json();
    return json;
}
export const getAllMembersApi = async () => {
    
    const res = await fetch(ENDPOINT + "/Members", {headers});
    const json = await res.json();
    return json;
    }

export const searchBookReservationApi = async title => {
    let res;
    try{
        res = await fetch(`${ENDPOINT}/title/${title}`, {headers});

    }catch(err){
        throw "ERROR REQUEST";
    } if (res.status === 404) throw "ERROR 404";
    
    const json = await res.json();
    return json;
}

export const addBookReservationApi = async data => {
    let res;
try{
         res = await fetch(ENDPOINT + "/" + data.idMember + "/" + data.idBook, {
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

export const saveBookReservationApi = async data => {
    const res = await fetch(ENDPOINT + "/" + data.idBookReservation,  {
        method: 'PUT',
        body: JSON.stringify(data), 
        headers
    });
    const json = await res.json();
    return json;
}

export const deleteBookReservationApi = async idBookReservation => {
    let res;
    try {
        res = await fetch(`${ENDPOINT}/${idBookReservation}`, {method: 'DELETE', headers });

    }catch(err){
        return "ERROR REQUEST"}
    if(res.status === 404){
        throw Error('cant delete 404');
    }  
const json = await res.json();
return json;
    
}
