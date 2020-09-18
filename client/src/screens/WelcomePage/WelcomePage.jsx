import React, { Component } from 'react'
import Layout from '../../components/shared/Layout/Layout'
// import profilePic from '../../assets/images/profilePic.png'
import { Link } from 'react-router-dom'
import './WelcomePage.css'

class WelcomePage extends Component {
  render() {
    return (
      <Layout>
        <div className="user-header">
          <img src="" className='profile-image' alt='profile'/>
          <h3 className="user-greeting">Hello, Stranger</h3>
        </div> 

        <div className="welcome-container">
        <div className="welcome-image">
          <img src='https://res.cloudinary.com/dc6ncx5wp/image/upload/v1595529395/Ghost-STEAL_image_1_zy7s1z.png' alt ='ghost steal'/>
        </div>
        <div>
          <div className="welcome-paragraph">
            <p>How it Works...</p>
            <p>1. Enter your subscriptions</p>
            <p>2. Hunt the Ghosts you are paying for without using</p>
            <p>3. ZAP THEM!</p>
            <p>4. Save Money and feel good about yourself: Yeah! </p>
            <button ><Link className="welcome-button" to={`/login`} style={{textDecoration:'none'}}>Login</Link></button>
          </div>
          </div>
          </div>



      </Layout>
    )
  }
}

export default WelcomePage