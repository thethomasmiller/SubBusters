import React from 'react'
import './SubscriptionInfo.css'
import iconPlus from '../../assets/icons/iconPlus.png'
import { Link } from 'react-router-dom'


const SubscriptionInfo = (props) => {

    return(<>

    <div className="subscription-info">   
        <img src={props.logoURL} alt='subscription'></img>
        <p className='props-name'>{props.name}</p>
        <p className='props-billing-date'>{props.billingDate}</p>
        <p className='props-amount'>${props.amount}</p>
        <Link to = {`/subscriptions/${props._id}/update`}><img className="logo-icon" src={iconPlus} alt='subscription'></img></Link>
    </div>
   
    </>)
}

export default SubscriptionInfo
