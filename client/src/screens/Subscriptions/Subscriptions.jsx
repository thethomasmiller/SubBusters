import React from 'react'
import './Subscriptions.css'
import Layout from '../../components/shared/Layout/Layout'

import { Link } from 'react-router-dom'


const Subscriptions = () => {
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

        {/* <SubscriptionCategory />
        <SubscriptionCategory />
        <SubscriptionCategory /> */}
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

export default Subscriptions