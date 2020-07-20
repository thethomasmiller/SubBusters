import React, { Component } from 'react'
import './SubscriptionUpdate.css'
import Layout from '../../components/shared/Layout/Layout'
import { Redirect, Link } from 'react-router-dom'
import { getSubscription, updateSubscription } from '../../services/subscriptions'


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
            updated: false
        }
    }


async componentDidMount() {
    let { id } = this.props.match.params
    const subscription = await getSubscription(id)
    this.setState({ subscription })
}

handleChange = (event) => {
    const { name, value } = event.target
    this.setState ({
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
        return <Redirect to={`/subscriptions/${this.props.match.params.id}`} />
    } 

    return (<>
        <Layout>
        <div className='subscription-edit'>
            <div className='logo-container'>
                <img className="edit-logo" src={subscription.imgURL} alt={subscription.name} />
                <form onSubmit={this.handleSubmit}>
                    <input
                        className='logo-url'
                        placeholder='Logo'
                        value={subscription.logoURL}
                        name='logo-url'
                        required
                        onChange={this.handleChange}
                    />
                    </form>
                </div>
                <form className='edit-form' onSubmit={this.handleSubmit}>
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
                        name='category'
                        required
                        onChange={this.handleChange}
                    />
                    <input
                        className='billing-cycle'
                        placeholder='Billing Cycle'
                        value={subscription.billingCycle}
                        name='billing-cycle'
                        required
                        onChange={this.handleChange}
                    />
                    <input
                        className='auto-renew'
                        placeholder='Auto renew'
                        value={subscription.autoRenew}
                        name='auto-renew'
                        required
                        onChange={this.handleChange}
                    />
                    <input
                        className='amount'
                        placeholder='Amount'
                        value={subscription.amount}
                        name='amount'
                        required
                        onChange={this.handleChange}
                    />
                    <input
                        className='billing-date'
                        placeholder='Billing Date'
                        value={subscription.billingDate}
                        name='billing-date'
                        required
                        onChange={this.handleChange}
                    />
                    <input
                        className='website-url'
                        placeholder='Website'
                        value={subscription.websiteURL}
                        name='website-url'
                        required
                        onChange={this.handleChange}
                    />
                </form>
            <button type='submit' className='update-button'>Update</button>
            <Link to='/SubscriptionDelete'>Do you want to cancel your subscription?</Link>
            </div>
        </Layout>
    </>)
}

}

export default SubscriptionUpdate