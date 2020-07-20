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
            <label for='input-name'>Subscription</label>
            <input
              className='input-name'
              placeholder='Enter Name'
              value={subscription.name}
              name='name'
            
              autoFocus
              onChange={this.handleChange}
            />
            <div className='select'>
            <label for='input-category'>Category</label>
            <select name='category' className='input-category' onChange={this.handleChange}  >
              <option value=''>Select</option>
              <option value='music'>Music</option>
              <option value='movies-and-tv'>Movies &amp; TV</option>
              <option value='software'>Software</option>
              <option value='gaming'>Gaming</option>
              <option value='news'>News</option>
            </select>
            </div>

            <div className='select'>
            <label for='input-billing-cycle'>Billing Cycle</label>
            <select name='billing-cycle' className='input-billing-cycle' onChange={this.handleChange}  >
              <option value=''>Select</option>
              <option value={subscription.billingCycyle}>Monthly</option>
              <option value='quarterly'>Quarterly</option>
              <option value='annually'>Annually</option>
            </select>
            </div>

            <label for='input-auto-renew'>Auto-Renew</label>
            <select name='auto-renew' className='input-auto-renew' onChange={this.handleChange}  >
              <option value=''>Select</option>
              <option value='true'>Yes</option>
              <option value='false'>No</option>
            </select>

            <label for='input-amount'>Amount</label>
            <input
              className='input-amount'
              placeholder='Amount'
              value={subscription.amount}
              name='amount'
              
              onChange={this.handleChange}
            />
            <label for='input-name'>Billing Date</label>
            <input
              className='input-billing-date'
              placeholder='MM/DD/YY'
              value={subscription.billingDate}
              name='billingDate'
              
              autoFocus
              onChange={this.handleChange}
            />
            <label for='input-logo-url'>Logo URL</label>
            <input
              className='input-logo-url'
              placeholder='Enter URL'
              value={subscription.logoURL}
              name='logoURL'
              
              autoFocus
              onChange={this.handleChange}
            />
            <label for='input-website-url'>Website URL</label>
            <input
              className='website-url'
              placeholder='Enter URL'
              value={subscription.websiteURL}
              name='websiteURL'
              
              autoFocus
              onChange={this.handleChange}
            />
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