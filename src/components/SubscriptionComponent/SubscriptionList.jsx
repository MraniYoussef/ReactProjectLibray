import Subscription from "./Subscription/Subscription";

function SubscriptionList({subscriptions, deleteSubscriptionCallBack, saveSubscriptionCallBack}){

    return (
        <>
           {subscriptions.map(subscription => <Subscription key={subscription.idSubscription} details={subscription} deleteSubscriptionCallBack={deleteSubscriptionCallBack} saveSubscriptionCallBack={saveSubscriptionCallBack} />)}
           
        </>
    )
}
export default SubscriptionList;