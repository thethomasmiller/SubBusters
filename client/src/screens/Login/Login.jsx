import React from 'react'
import Layout from '../../components/shared/Layout/Layout'
import './Login.css'

export default function Login() {
  return (
    <div>
      <Layout>
        <div className='input-login'>
        <div className='input-email'><label>email</label><input></input></div>
         <div className='input-password'><label>password</label><input></input></div> 
        <button>Login</button>
        <div><a>New Member? Sign Up</a></div>
          </div>
      </Layout>
    </div>
  )
}


