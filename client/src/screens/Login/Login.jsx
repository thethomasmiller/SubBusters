import React from 'react'
import Layout from '../../components/shared/Layout/Layout'
import './Login.css'
import {Link} from 'react-router-dom'
import ghostLogo from '../../assets/images/ghostLogo.png'

export default function Login() {
  return (
    <>
      <Layout>

      <div className="user-header-login">
          <h3 className='never-be-haunted'>Never Be Haunted By Ghost Subscriptions Again</h3>
      </div>

      <div className='desktop-extra-logo'>
        <img src={`${ghostLogo}`} className='header-ghost' alt='ghost'/><Link style={{ textDecoration: 'none' }} to={`/subscriptions`}><h1 className= 'header-subbusters'>SubBusters</h1></Link>
      </div>
      
<div className='input-login'></div>
      <div className='input-login'>

        <div className="input-email-border">
          <div className='input-email'>
            <p>Email</p>
            <p>jamienursh@gmail.com</p>
          </div>
        </div>

        <div className="input-password-border">
          <div className='input-password'>
            <p>Password</p>
            <p>**********</p>
          </div>
        </div> 

          <button className='login-button'><Link style={{ textDecoration: 'none', color: '#004643'}} to={`/subscriptions`}>Login</Link></button>
        
        <div className="new-member">
            <p className="new-member">New Member? Sign Up</p>
        </div>
  
      </div>

      </Layout>
    </> 
  )
}

