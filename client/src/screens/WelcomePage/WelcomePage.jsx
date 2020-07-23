import React from 'react'
import Layout from '../../components/shared/Layout/Layout'
import profilePic from '../../assets/images/profilePic.png'

class WelcomePage extends Component{
  render() {
    return (
      <Layout>
 <div className="user-header">
          <img src={`${profilePic}`} className='profile-image' />
          <h3 className="user-greeting">Hello, Jamie</h3>
        </div>
        
      </Layout>
    )
  }
}

export default WelcomePage