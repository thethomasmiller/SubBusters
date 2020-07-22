import React from 'react'
import './SubscriptionInfo.css'
import iconPlus from '../../assets/icons/iconPlus.png'
import { Link } from 'react-router-dom'


const SubscriptionInfo = (props) => {

    return(<>

    <div className="subscription-info">   
        <img src={props.logoURL}></img>
        <p>{props.name}</p>
        <p>{props.billingDate}</p>
        <p>${props.amount}</p>
        <Link to = {`/subscriptions/${props._id}/update`}><img className="logo-icon" src={iconPlus}></img></Link>
    </div>
   
    </>)
}

export default SubscriptionInfo
