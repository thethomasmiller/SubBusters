import React, { Component } from 'react'
import Layout from '../../components/shared/Layout/Layout'
import { getSubscription, deleteSubscription, getSubscriptions } from '../../services/subscriptions'
import { Link } from 'react-router-dom'
import './SubscriptionDelete.css'
import profilePic from '../../assets/images/profilePic.png'




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

        <div className="user-header">
          <img src={`${profilePic}`} className='profile-image' alt='profile' />
          <h3 className="user-greeting">Hello, Jamie</h3>
        </div>

        <div className='bottom-line'>
          <div className="container">
            <img className="logo" src={subscription.logoURL} alt={subscription.name} />
            <h2>{subscription.name}</h2>
          </div>
        </div>

        <div>
          <p className="paragraph-text">Unfortunately, we can't actually delete an account for you but if you click the link below, we'll re-direct you back to your suscriber's site.</p>
          <button className="delete-link" ><a target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'red' }} className="external" href={subscription.websiteURL} >Click Here!</a></button>

          <button className="delete-button" onClick={() => deleteSubscription(subscription._id)}><Link style={{ textDecoration: 'none', color: '#e16162' }} to={`/subscriptions`}>Delete from Dashboard</Link></button>

          <button className="dashboard-button" onClick={() => getSubscriptions(subscription)} ><Link style={{ textDecoration: 'none', color: '#004643' }} to={`/subscriptions`} >Back to Dashboard</Link></button>

        </div>
      </Layout>

    )
  }
}

export default SubscriptionDelete

