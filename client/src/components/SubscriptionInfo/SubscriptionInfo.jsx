import React from 'react'
import './SubscriptionInfo.css'
import iconPlus from '../../assets/icons/iconPlus.png'


const SubscriptionInfo = (props) => {

    return(<>

    <div className="subscription-info">   
        <img src={props.logoURL}></img>
        <p>{props.name}</p>
        <p>{props.billingDate}</p>
        <p>${props.amount}</p>
        <img src={iconPlus}></img>
    </div>
   
    </>)
}

export default SubscriptionInfo
