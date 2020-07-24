import React, { Component } from 'react'
import './SubscriptionCreate.css'
import Layout from '../../components/shared/Layout/Layout'
import { Link, Redirect } from 'react-router-dom'
import { createSubscription } from '../../services/subscriptions'
import profilePic from '../../assets/images/profilePic.png'



class SubscriptionCreate extends Component {
  constructor() {
    super()
    this.state = {
      subscription: {
        name: '',
        category: '',
        billingCycle: '',
        autoRenew: '',
        amount: '',
        billingDate: '',
        logoURL: '',
        websiteURL: '',
      },
      created: false
    }
  }
  handleChange = (event) => {
    const { name, value } = event.target
    this.setState({
      subscription: {
        ...this.state.subscription,
        [name]: value,
        logoURL:"https://res.cloudinary.com/alienora/image/upload/v1595446140/Subscription_logo_placeholder_on9w2v.png"
      }
    })
  }

  handleSubmit = async (event) => {
    event.preventDefault()
    const created = await createSubscription(this.state.subscription)
    this.setState({ created })
  }

  render() {
    const { subscription, created } = this.state
    if (created) {
      return <Redirect to={'/subscriptions'} />

    }
    return (
      <Layout>

        <div className="user-header">
          <img src={`${profilePic}`} className='profile-image' />
          <h3 className="user-greeting">Hello, Jamie</h3>
        </div>

        <div className='body-create'>
          <h2 className='add-subscription-title'>Add Subscription Manually</h2>
          <form className='create-form' onSubmit={this.handleSubmit}>
            <div className= 'input-container'>
            <label for='input-name' className='create-label'>Subscription</label>
            <input
              className='input-name'
              placeholder='Enter Name'
              value={subscription.name}
              name='name'
              onChange={this.handleChange}
            />
            </div>
            <div className= 'input-container'>
            <label for='input-category' className='create-label'>Category</label>
            <select name='category' className='create-dropdown' onChange={this.handleChange}  >
              <option value=''>Select</option>
              <option value='Music'>Music</option>
              <option value='Movies and TV'>Movies & TV</option>
              <option value='Software'>Software</option>
              <option value='Gaming'>Gaming</option>
              <option value='News'>News</option>
            </select>
            </div>
            <div className= 'input-container'>
            <label for='input-billing-cycle' className='create-label'>Billing Cycle</label>
            <select name='billingCycle' className='create-dropdown' onChange={this.handleChange}  >
              <option value=''>Select</option>
              <option value='monthly'>Monthly</option>
              <option value='quarterly'>Quarterly</option>
              <option value='annually'>Annually</option>
            </select>
            </div>
<div div className= 'input-container'>
            <label for='input-auto-renew' className='create-label'>Auto-Renew</label>
            <select name='autoRenew' className='create-dropdown' onChange={this.handleChange}  >
              <option value=''>Select</option>
              <option value='true'>Yes</option>
              <option value='false'>No</option>
            </select>
            </div>

            <div  className= 'input-container'>
            <label for='input-amount' className='create-label'>Amount</label>
            <input
              className='input-amount'
              placeholder='Amount'
              value={subscription.amount}
              name='amount'
              onChange={this.handleChange}
            />
            </div>
            
           <div  className= 'input-container'>
            <label for='input-name' className='create-label'>Billing Date</label>
            <input
              className='input-billing-date'
              placeholder='MM/DD/YY'
              value={subscription.billingDate}
              name='billingDate'
              autoFocus
              onChange={this.handleChange}
            />
            </div> 
              
            <div className='input-container'>
            <label for='input-website-url'className='create-label'>Website</label>
            <input
              className='website-url'
              placeholder='Enter address'
              value={subscription.websiteURL}
              name='websiteURL'

              autoFocus
              onChange={this.handleChange}
            />
            </div>
            <div className='create-buttons'>
              <Link to='/subscriptions' style={{ textDecoration: 'none' }}><button className="submit-button">Back</button></Link>   
              <button type='submit' className="submit-button">Add</button>
            </div>
          </form>


        </div>
      </Layout>
    )
  }
}
export default SubscriptionCreate