import React, { Component } from 'react'
import './SubscriptionCreate.css'
import Layout from '../../components/shared/Layout/Layout'
import { Redirect } from 'react-router-dom'
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
        [name]: value
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
            <label for='input-name' className='create-label'>Subscription</label>
            <input
              className='input-name'
              placeholder='Enter Name'
              value={subscription.name}
              name='name'
              onChange={this.handleChange}
            />

            <label for='input-category' className='create-label'>Category</label>
            <select name='category' className='create-dropdown' onChange={this.handleChange}  >
              <option value=''>Select</option>
              <option value='Music'>Music</option>
              <option value='Movies and TV'>Movies & TV</option>
              <option value='Software'>Software</option>
              <option value='Gaming'>Gaming</option>
              <option value='News'>News</option>
            </select>

            <label for='input-billing-cycle' className='create-label'>Billing Cycle</label>
            <select name='billingCycle' className='create-dropdown' onChange={this.handleChange}  >
              <option value=''>Select</option>
              <option value='monthly'>Monthly</option>
              <option value='quarterly'>Quarterly</option>
              <option value='annually'>Annually</option>
            </select>


            <label for='input-auto-renew' className='create-label'>Auto-Renew</label>
            <select name='autoRenew' className='create-dropdown' onChange={this.handleChange}  >
              <option value=''>Select</option>
              <option value='true'>Yes</option>
              <option value='false'>No</option>
            </select>

            <label for='input-amount' className='create-label'>Amount</label>
            <input
              className='input-amount'
              placeholder='Amount'
              value={subscription.amount}
              name='amount'

              onChange={this.handleChange}
            />
            <label for='input-name' className='create-label'>Billing Date</label>
            <input
              className='input-billing-date'
              placeholder='MM/DD/YY'
              value={subscription.billingDate}
              name='billingDate'

              autoFocus
              onChange={this.handleChange}
            />
            
            <div className='create-website'>
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
            <div>
              <button type='submit' className="submit-button">Add</button>
            </div>
          </form>


        </div>
      </Layout>
    )
  }
}
export default SubscriptionCreate