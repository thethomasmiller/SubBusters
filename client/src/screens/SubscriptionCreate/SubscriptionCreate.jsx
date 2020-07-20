import React, { Component } from 'react'
import './SubscriptionCreate.css'
import Layout from '../../components/shared/Layout/Layout'
import { Redirect } from 'react-router-dom'
import { createSubscription } from '../../services/subscriptions'

 
class SubscriptionCreate extends Component {
  constructor() {
    super()
    this.state = {
      subscription: {
        name: '',
        category: '',
        billingCycyle: '',
        autoRenew: '',
        amount: '',
        billingDate: '',
        logoURL: '',
        websiteURL: '',
      },
      created: false
    }

  
        ...this.state.subscription,
        [name]: value
      }
/
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
        <div className='body'>
        <h2>Add Subscription Manually</h2>
        <form className='create-form' onSubmit={this.handleSubmit}>
          <input
            className='input-name'
            placeholder='Name'
            value={subscription.name}
            name='name'
            required
            autoFocus
            onChange={this.handleChange}
          />

          <input
            className='input-category'
            placeholder='Category'
            value={subscription.category}
            name='charge'
            required
            autoFocus
            onChange={this.handleChange}
          />

          <input
            className='input-billing-cycle'
            placeholder='Billing Cycle'
            value={subscription.billingCycyle}
            name='billingCycle'
            required
            autoFocus
            onChange={this.handleChange}
          />

          <input
            className='input-auto-renew'
            placeholder='Auto-Renew'
            value={subscription.autoRenew}
            name='autoRenew'
            required
            autoFocus
            onChange={this.handleChange}
          />

          <input
            className='input-amount'
            placeholder='Amount'
            value={subscription.amount}
            name='amount'
            required
            autoFocus
            onChange={this.handleChange}
          />

          <input
            className='input-billing-date'
            placeholder='Billing Date'
            value={subscription.billingDate}
            name='billingDate'
            required
            autoFocus
            onChange={this.handleChange}
          />

          <input
            className='input-logo-URL'
            placeholder='Logo URL'
            value={subscription.logoURL}
            name='logoURL'
            required
            autoFocus
            onChange={this.handleChange}
          />

          <input
            className='website-url'
            placeholder='Subscription Website URL'
            value={subscription.websiteURL}
            name='websiteURL'
            required
            autoFocus
            onChange={this.handleChange}
          />
        </form>

        <button type='submit' className="submit-button">Add</button>
        </div>
      </Layout>
    )

  }

}

export default SubscriptionCreate