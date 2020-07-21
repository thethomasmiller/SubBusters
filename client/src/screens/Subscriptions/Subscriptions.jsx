import React, { Component }from 'react'
import './Subscriptions.css'
import Layout from '../../components/shared/Layout/Layout'
import SubscriptionInfo from '../../components/SubscriptionInfo/SubscriptionInfo'
import { Link } from 'react-router-dom'
import {getSubscriptions} from '../../services/subscriptions'





class Subscriptions extends Component {
  constructor() {
    super()
    this.state = {
      allSubscriptions: []
    }
  }

  async componentDidMount(){
    const allSubscriptions = await getSubscriptions()
    this.setState({
      allSubscriptions: allSubscriptions
    })
  }
 
  render() {
    const subscriptionList = this.state.allSubscriptions.map((subscription, index) =>
      <SubscriptionInfo _id={subscription._id} logoURL={subscription.logoURL} name={subscription.charge} billingDate={subscription.lastUsed} amount={subscription.amount} key = {index} />
    
    )
    
  return (
    <Layout>
      <div className="user-header"><h3 className="user-greeting">Whoa, Jamie</h3></div>
      <div classname="body-subscriptions">
        <section className="subscriptions-alert">
          <span>
            We've found subscriptions you haven't used for a while on this device.
           </span>
          <span>
            If you've been using them in other places that's cool, just close out the table.
            </span>
          <span>
            If these are Ghost Subscriptions,click the subscription to find out how to cancel.
            </span>
        </section>

        <div>
          {subscriptionList}
        </div>
        
        
        <div className="add-subscription-link-button">
          <button >
            <Link to='./add-subscription'>
              Add Subscription
          </Link>
          </button>
        </div>
      </div>
    </Layout>
  )
}
}

export default Subscriptions