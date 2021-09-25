const ENDPOINT = 'http://localhost:8087/get/members';

const headers = {
    'Accept' : 'application/json',
    'Content-Type' : 'application/json' 
};


export const getMembersApi = async () => {
    
    const res = await fetch(ENDPOINT, {headers});
    const json = await res.json();
    return json;
}
export const getMemberFunctionApi = async () => {
    
    const res = await fetch(ENDPOINT + "/fonction", {headers});
    const json = await res.json();
    return json;
}

export const searchMemberApi = async lastName => {
    let res;
    try{
        res = await fetch(`${ENDPOINT}/${lastName}`, {headers});


    }catch(err){
        throw "ERROR REQUEST";
    } if (res.status === 404) throw "ERROR 404";
    
    const json = await res.json();
    return json;
}

export const addMemberApi = async data => {
    console.log("aaaaa", data);
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
/*     console.log("aaappp",json);
 */
    return json;
}

export const saveMemberApi = async data => {
    const res = await fetch(ENDPOINT + "/" + data.idMember,  {
        method: 'PUT',
        body: JSON.stringify(data), 
        headers
    });
    const json = await res.json();

    return json;
}

export const deleteMemberApi = async idMember => {
    let res;
    try {
        res = await fetch(`${ENDPOINT}/${idMember}`, {method: 'DELETE', headers });

    }catch(err){
        return "ERROR REQUEST"}
    if(res.status === 404){
        throw Error('cant delete 404');
    }  
const json = await res.json();
console.log(json);
return json;
    
}
