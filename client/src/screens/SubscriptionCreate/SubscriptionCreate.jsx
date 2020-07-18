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
        charge: '',
        category: '',
        subscription: '',
        billingCycyle: '',
        autoRenew: '',
        amount: '',
        lastUsed: '',
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
        <form className='create-form' onSubmit={this.handleSubmit}>
          <input
            className='input-charge'
            placeholder='Charge'
            value={subscription.charge}
            name='charge'
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

          <select value
            className='input-subscription'
            placeholder='Subscription'
            value={subscription.subscription}
            name='subscription'
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
            className='input-last-used'
            placeholder='Last Used'
            value={subscription.lastUsed}
            name='lastUsed'
            required
            autoFocus
            onChange={this.handleChange}
          />
          <button type='submit' className="submit-button">Submit</button>

        </form>
      </Layout>
    )

  }

}

export default SubscriptionCreate