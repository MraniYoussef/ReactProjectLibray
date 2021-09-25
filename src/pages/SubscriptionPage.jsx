import { useEffect, useState } from "react";
import { addSubscriptionApi, deleteSubscriptionApi, getIdMembersApi, getSubscriptionsApi, saveSubscriptionApi, searchSubscriptionApi } from "../api/apiSubscription";
import AddSubscriptionForm from "../components/SubscriptionComponent/AddSubscriptionForm";
import SearchBarSubscription from "../components/SubscriptionComponent/SearchBarSubscription";
import SubscriptionList from "../components/SubscriptionComponent/SubscriptionList";



function SubscriptionPage() {
  const [subscriptions , setSubscriptions] = useState(null);
  const [idMembers, setIdMembers] = useState(null);

  useEffect(() => {
    //Appel webService
    const fetchData = async () => {
      const subscriptions = await getSubscriptionsApi();
      console.log("ddddddd",subscriptions);
      setSubscriptions(subscriptions)
      const idMembers = await getIdMembersApi();
      setIdMembers(idMembers)
    }
      fetchData();   
  }, []);

 
  const filterSubscriptions = async keyword => {
    try{

      const filtredSubscriptions = await searchSubscriptionApi(keyword);
      console.log(filtredSubscriptions);
      setSubscriptions(filtredSubscriptions);


    }catch(err){
      console.log(err);
    }
  }

  const addSubscription = async data => {
    try{
      const id = await addSubscriptionApi(data);
      const subscription = {...data, id};
      setSubscriptions([...subscriptions, subscription]);
    }catch(err){
      console.log(err)
    }
  }

  const deleteSubscription = async idSubscription => {
    console.log(idSubscription);
      try{
        await deleteSubscriptionApi(idSubscription);
         const newSubscriptions = subscriptions.filter(subscription => subscription.idSubscription !== idSubscription);
         setSubscriptions([...newSubscriptions]);
      }catch(err) {
        console.log(err);
      }
        }

  const saveSubscription = async data => {
    console.log(data);

    try {
      const newSubscription = await saveSubscriptionApi(data);
      const newSubscriptions = [...subscriptions];
      const foundSubscription = newSubscriptions.find(subscription => subscription.idSubscription === newSubscription.idSubscription);
      foundSubscription.title = newSubscription.title;
      foundSubscription.BlockageDaysPeriod = newSubscription.BlockageDaysPeriod;
      foundSubscription.unblockDate = newSubscription.unblockDate;
      foundSubscription.isBlocked = newSubscription.isBlocked;
      foundSubscription.dateMembership = newSubscription.dateMembership;
      setSubscriptions(newSubscriptions);
    }catch(err) {
      console.log(err);
    }
  }
    
        const resetSubscriptions = async () => {
         const subscriptions = await getSubscriptionsApi();
         setSubscriptions(subscriptions);
        }

       
  
  return (
    <>
                
                <SearchBarSubscription filterSubscriptionsCallBack={filterSubscriptions} resetSubscriptionsCallBack={resetSubscriptions} />
            {subscriptions
            ? <SubscriptionList subscriptions={subscriptions} deleteSubscriptionCallBack={deleteSubscription} saveSubscriptionCallBack={saveSubscription} /> 
            : <div> Loading...</div>
            }
                  <AddSubscriptionForm idMembers={idMembers}  addSubscriptionCallBack={addSubscription} />
         
      

    </>
  );
}

export default SubscriptionPage;
