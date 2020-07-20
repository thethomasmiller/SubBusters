import React, { Component } from 'react'
import Layout from '../../components/shared/Layout/Layout'
import { getSubscription, deleteSubscription, getSubscriptions } from '../../services/subscriptions'
import { Link } from 'react-router-dom'
import './SubscriptionDelete.css'


class SubscriptionDelete extends Component {
  constructor() {
    super()

    this.state = {
      subscription: {
        name: "",
        category: "",
        billingCycle: "",
        autoRenew: "",
        amount: "",
        billingDate: "",
        logoURL: "",
        websiteURL: ""
 
      }
    }
  }

  async componentDidMount() {
    let { id } = this.props.match.params
    const subscription = await getSubscription(id)
    this.setState({ subscription })

  } 

  render() {
    const { subscription } = this.state
    return (
      <Layout>
        <div className="container">
          <img className="logo" src={subscription.logoURL} alt={subscription.name} />
          <h2>{subscription.name}</h2>
        </div>
        <div>
          <p className="paragraph-text">Unfortunately, we can't actually delete an account for you but if click the link below, we'll re-directyou back to your suscriber's site.</p>
          <button className="delete-link" ><Link style={{textDecoration: 'none', color: 'red'}}  className="external" to={`/subscription/${subscription.websiteURL}` } >Delete Link</Link></button>

          <button className="delete-button" onClick={() => deleteSubscription(subscription._id)}>Delete from Dashboard</button>

          <button className="dashboard-button" onClick={() => getSubscriptions(subscription)} >Back to Dashboard</button>
      
        </div>
      </Layout>

    )
  }
}

export default SubscriptionDelete 

