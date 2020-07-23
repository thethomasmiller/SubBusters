import React from 'react'
import Layout from '../../components/shared/Layout/Layout'
import './Login.css'
import {Link} from 'react-router-dom'

export default function Login() {
  return (
    <>
      <Layout>

      <div className="user-header-login">
          <h3 className='never-be-haunted'>Never Be Haunted By Ghost Subscriptions Again</h3>
      </div>

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
            <a className="new-member">New Member? Sign Up</a>
        </div>
  
      </div>

      </Layout>
    </> 
  )
}

