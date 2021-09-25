const ENDPOINT = 'http://localhost:8087/get/subscriptions';

const headers = {
    'Accept' : 'application/json',
    'Content-Type' : 'application/json' 
};


export const getSubscriptionsApi = async () => {
    
    const res = await fetch(ENDPOINT, {headers});
    const json = await res.json();
    return json;
}
export const getIdMembersApi = async () => {
    
    const res = await fetch(ENDPOINT + "/idMembers", {headers});
    const json = await res.json();
    console.log("les ids",json);
    return json;
    }

export const searchSubscriptionApi = async lastName => {
    let res;
    try{
        res = await fetch(`${ENDPOINT}/${lastName}`, {headers});
     


    }catch(err){
        throw "ERROR REQUEST";
    } if (res.status === 404) throw "ERROR 404";
    
    const json = await res.json();
    return json;
}

export const addSubscriptionApi = async data => {

    let res;
try{
         res = await fetch(ENDPOINT + "/" + data.idMember, {
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
    console.log("fffff",json);

    return json;
}

export const saveSubscriptionApi = async data => {
    const res = await fetch(ENDPOINT + "/" + data.idSubscription,  {
        method: 'PUT',
        body: JSON.stringify(data), 
        headers
    });
    const json = await res.json();
    return json;
}

export const deleteSubscriptionApi = async idSubscription => {
    let res;
    try {
        res = await fetch(`${ENDPOINT}/${idSubscription}`, {method: 'DELETE', headers });

    }catch(err){
        return "ERROR REQUEST"}
    if(res.status === 404){
        throw Error('cant delete 404');
    }  
const json = await res.json();
console.log(json);
return json;
    
}
