import React, { useEffect }from 'react'
import Layout from '../../components/Shared/Layout/Layout'
import axios from 'axios'


export default function SubscriptionDelete() {

  useEffect(() => {
    const apiCall = async () => {
      const result = await axios('https://subbusters.herokuapp.com/api')
      console.log(result.data)
    }
    apiCall()
  },[])


  return (
    <Layout>

  </Layout>
  )
}