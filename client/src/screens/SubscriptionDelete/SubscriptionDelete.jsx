import React, { Component } from 'react'
import Layout from '../../components/Shared/Layout/Layout'
import { getSubscription, deleteSubscription, getSubscriptions } from '../../services/subscriptions'
import {Link} from 'react-router-dom'


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
        <div>
          <img className="logo" src={subscription.logoURL} alt={subscription.name} />
          <h2>{subscription.name}</h2>
        </div>
        <div>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras fermentum consectetur ligula, vel fringilla odio. Nam imperdiet mattis ante, vel.</p>
          
          <button className="delete-button" ><Link className="external" to={`/subscription/${subscription.websiteURL}`} >Delete Link</Link></button>
          <button className="delete-button" onClick={()=> deleteSubscription(subscription._id)}>Delete Subscription</button>
          <button className="dashboard" onClick={()=> getSubscriptions(subscription)} >Back to Dashboard</button>
      
        </div>
      </Layout>

    )
  }
}

export default SubscriptionDelete 