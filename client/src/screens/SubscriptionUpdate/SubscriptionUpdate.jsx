import React, { Component } from 'react'
import './SubscriptionUpdate.css'
import Layout from '../../components/shared/Layout/Layout'
import { Redirect, Link } from 'react-router-dom'
import { getSubscription, updateSubscription } from '../../services/subscriptions'
import profilePic from '../../assets/images/profilePic.png'
//import iconArrow from '../../assets/icons/iconArrow.png'



class SubscriptionUpdate extends Component {
  constructor(props) {
    super(props)

    this.state = {
      subscription: {
        name: '',
        category: '',
        billingCycle: '',
        autoRenew: '',
        amount: '',
        billingDate: '',
        logoURL: '',
        websiteURL: ''
      },
      updated: false,

      categories: [
        'Music','Movies and TV', 'Software', 'Gaming', 'News', 'Other'
      ],

      billingCycle: [
        'Monthly', 'Quarterly', 'Yearly'
      ],

      renewOptions: [
        'Yes', 'No'
      ]
    } 
  }

  filterCategories = (passedCategory) => {
    return this.state.categories.filter(category => { return category !== passedCategory })
  }

  filterBilling = (passedCycle) => {
    return this.state.billingCycle.filter(billing => { return billing !== passedCycle })
  }

  filterRenew = (passedOptions) => {
    return this.state.renewOptions.filter(renew => { return renew !== passedOptions })
  }

  async componentDidMount() {
    let { id } = this.props.match.params
    const subscription = await getSubscription(id)
    this.setState({ subscription })
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
    let { id } = this.props.match.params
    const updated = await updateSubscription(id, this.state.subscription)
    this.setState({ updated })
  }


  render() {

    const { subscription, updated } = this.state

    if (updated) {
      return <Redirect to={`/subscriptions`} />
    }

    return (<>
      <Layout>

        <div className="user-header">
          <img src={`${profilePic}`} className='profile-image' />
          <h3 className="user-greeting">Hello, Jamie</h3>
        </div>

        <div className='subscription-edit'>
          <div className='logo-container'>
            <img className="edit-logo" src={subscription.logoURL} alt={subscription.name} />
            <form onSubmit={this.handleSubmit}>
              <input
                className='logo-name'
                placeholder='Name'
                value={subscription.name}
                name='name'
                required
                autoFocus
                onChange={this.handleChange}
              />
            </form>
          </div>
          <form className='edit-form' onSubmit={this.handleSubmit}>
            <div className="flex-row">
              <p>Name</p>
              <input
                className='input-name'
                placeholder='Name'
                value={subscription.name}
                name='name'
                required
                autoFocus
                onChange={this.handleChange}
              />
            </div>
            <div className="flex-row">
              <p>Category</p>
              <select className='input-category'>

                <option value={subscription.category}>{`${subscription.category}`}</option>

                {this.filterCategories(subscription.category).map(category => (
                    <option>{category}</option>
                ))}

              </select>
            </div>
            <div className="flex-row">
              <p>Billing Cycle</p>
              <select className='billing-cycle'>

                <option value={subscription.billingCycle}>{`${subscription.billingCycle}`}</option>

                {this.filterBilling(subscription.billingCycle).map(billingCycle => (
                    <option>{billingCycle}</option>
                ))}
                
              </select>
            </div>
            <div className="flex-row">
              <p>Auto-Renew</p>
              <select className='auto-renew'>

                <option value={subscription.autoRenew}>{`${subscription.autoRenew}`}</option>

                {this.filterRenew(subscription.autoRenew).map (renewOptions => (
                    <option>{renewOptions}</option>
                ))}

              </select>
            </div>
            <div className="flex-row">
              <p>Amount</p>
              <input
                className='amount'
                placeholder='Amount'
                value={subscription.amount}
                name='amount'
                required
                onChange={this.handleChange}
              />
            </div>
            <div className="flex-row">
              <p>Billing Date</p>
              <input
                className='billing-date'
                placeholder='MM/DD/YY'
                value={subscription.billingDate}
                name='billingDate'
                required
                onChange={this.handleChange}
              />
            </div>
            <div className="flex-row">
              <p>Website</p>
              <input
                className='website-url'
                placeholder='Website'
                value={subscription.websiteURL}
                name='websiteURL'
                onChange={this.handleChange}
              />
            </div>

            <div className="change-buttons">

              <Link to={`/subscriptions/${this.props.match.params.id}`}>
                <button className='unsubscribe-button'>Unsubscribe</button>
              </Link>
              <button type='submit' className='update-button'>Update</button>

            </div>
          </form>

        </div>
      </Layout>
    </>)
  }

}

export default SubscriptionUpdate