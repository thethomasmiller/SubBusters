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
        return <Redirect to={`/subscriptions`} />
    } 

    return (<>
        <Layout>
        <div className='subscription-edit'>
            <div className='logo-container'>
                <img className="edit-logo" src={subscription.logoURL} alt={subscription.name} />
                <form onSubmit={this.handleSubmit}>
                    <input
                        className='logo-url'
                        placeholder='Logo'
                        value={subscription.logoURL}
                        name='logo-url'
                        required
                        onChange={this.handleChange}
                    />
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
                        <option value='music'>Music</option>
                        <option value='movies'>Movies &amp; TV</option>
                        <option value='software'>Software</option>
                        <option value='gaming'>Gaming</option>
                        <option value='news'>News</option>
                        <option value='other'>Other</option>
                        
                    </select>
                    </div>
                    <div className="flex-row">
                    <p>Billing Cycle</p>
                    <select className='billing-cycle'>
                        <option value={subscription.billingCycle}>{`${subscription.billingCycle}`}</option>
                        <option value='monthly'>Monthly</option>
                        <option value='quarterly'>Quarterly</option>
                        <option value='yearly'>Yearly</option>
                    </select>
                    </div>
                    <div className="flex-row">
                    <p>Auto Renew</p>
                    <select className='auto-renew'>
                        <option value={subscription.autoRenew}>{`${subscription.autoRenew}`}</option>
                        <option value='yes'>YES</option>
                        <option value='no'>NO</option>
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