import React, { Component } from 'react'
import './Subscriptions.css'
import Layout from '../../components/shared/Layout/Layout'
import SubscriptionInfo from '../../components/SubscriptionInfo/SubscriptionInfo'
import { Link } from 'react-router-dom'
import { getSubscriptions } from '../../services/subscriptions'
import profilePic from '../../assets/images/profilePic.png'



class Subscriptions extends Component {
  constructor() {
    super()
    this.state = {
      allSubscriptions: []
    }
  }

  async componentDidMount() {
    const allSubscriptions = await getSubscriptions()
    this.setState({
      allSubscriptions: allSubscriptions
    })
  }

  render() {
    const musicList = this.state.allSubscriptions.filter(sub => sub.category === 'Music').map((entertainment, index) =>
      <SubscriptionInfo _id={entertainment._id} logoURL={entertainment.logoURL} name={entertainment.name} billingDate={entertainment.billingDate} amount={entertainment.amount} key={index} />
    )

    const moviesList = this.state.allSubscriptions.filter(sub => sub.category === 'Movies and TV').map((entertainment, index) =>
      <SubscriptionInfo _id={entertainment._id} logoURL={entertainment.logoURL} name={entertainment.name} billingDate={entertainment.billingDate} amount={entertainment.amount} key={index} />
    )

    const softwareList = this.state.allSubscriptions.filter(sub => sub.category === 'Software').map((entertainment, index) =>
      <SubscriptionInfo _id={entertainment._id} logoURL={entertainment.logoURL} name={entertainment.name} billingDate={entertainment.billingDate} amount={entertainment.amount} key={index} />
    )

    const gamingList = this.state.allSubscriptions.filter(sub => sub.category === 'Gaming').map((entertainment, index) =>
      <SubscriptionInfo _id={entertainment._id} logoURL={entertainment.logoURL} name={entertainment.name} billingDate={entertainment.billingDate} amount={entertainment.amount} key={index} />
    )

    const newsList = this.state.allSubscriptions.filter(sub => sub.category === 'News').map((entertainment, index) =>
      <SubscriptionInfo _id={entertainment._id} logoURL={entertainment.logoURL} name={entertainment.name} billingDate={entertainment.billingDate} amount={entertainment.amount} key={index} />
    )




    return (
      <Layout>



        <div className="user-header">
          <img src={`${profilePic}`} className='profile-image' alt='profile'/>
          <h3 className="user-greeting">Whoa, Jamie</h3>
        </div>

        <div className="body-subscriptions">
          <section className="subscriptions-alert">
            <span>
              We've found subscriptions you haven't used for a while on this device.
           </span>
            <br />
            <span>
              If you've been using them in other places that's cool, just close out the table.
            </span>
            <br />
            <span>
              If these are Ghost Subscriptions,click the subscription to find out how to cancel.
            </span>
          </section>

          <div className='category-container'>
            <div className='movies-list'>
              <p className="box-bottom-border">Movies &amp; TV</p>
              {moviesList}
            </div>
            <div className='music-list'>
              <p className="box-bottom-border">Music</p>
              {musicList}
            </div>
            <div className='software-list'>
              <p className="box-bottom-border">Software</p>
              {softwareList}
            </div>
            <div>
              {gamingList}
            </div>
            <div>
              {newsList}
            </div>

          </div>
          <div className="add-subscription-button-container">

            <Link to='./add-subscription' style={{ textDecoration: 'none' }}>
              <button className='add-subscription-button' > Add A Subscription </button>
            </Link>

          </div>
        </div>
      </Layout>
    )
  }
}

export default Subscriptions