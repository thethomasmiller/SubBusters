import React from 'react'
import './SubscriptionInfo.css'
import subscription from '../../../../models/subscription'

const SubscriptionInfo = (props) => {

    return(<>

    <div>   
        <img src={props.logoURL}></img>
        <p>{props.name}</p>
        <p>{props.billingDate}</p>
        <p>{props.amount}</p>
    </div>
   
    </>)
}

export default SubscriptionInfo
