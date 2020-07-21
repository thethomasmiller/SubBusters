import React from 'react'
import './SubscriptionInfo.css'


const SubscriptionInfo = (props) => {

    return(<>

    <div className="subscription-info">   
        <img src={props.logoURL}></img>
        <p>{props.name}</p>
        <p>{props.billingDate}</p>
        <p>{props.amount}</p>
    </div>
   
    </>)
}

export default SubscriptionInfo
