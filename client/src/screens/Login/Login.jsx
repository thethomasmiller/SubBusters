import React from 'react'
import Layout from '../../components/shared/Layout/Layout'
import './Login.css'

export default function Login() {
  return (
    <div>
      <Layout>
        <div className='input-login'>
        <div className='input-email'><label>Email</label><input></input></div>
         <div className='input-password'><label>Password</label><input></input></div> 
        <button className='login-button' >Login</button>
        <div className="new-member"><a className="new-member">New Member? Sign Up</a></div>
          </div>
      </Layout>
    </div> 
  )
}


