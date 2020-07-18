import React from 'react'
import './App.css'
import Login from './screens/Login/Login'
// import SubscriptionCreate from './screens/SubscriptionCreate/SubscriptionCreate'
import SubscriptionDelete from './screens/SubscriptionDelete/SubscriptionDelete'
// import SubscriptionUpdate from './screens/SubscriptionsUpdate/SubscriptionsUpdate'
// import Subscriptions from './screens/Subscriptions/Subscriptions'
import { Route, Switch } from 'react-router-dom'

const App = () => {
  return (<>
    <div>
      <Switch>
        <Route exact path='/' component={Login}/>
        {/* <Route exact path='/subscriptions' component={Subscriptions}/> */}
        {/* <Route path='/add-subscription' component={SubscriptionCreate}/> */}
        {/* <Route exact path='/subscriptions/:id/update' component={SubscriptionUpdate}/> */}
        <Route exact path='/subscriptions/:id' component={SubscriptionDelete} />
      </Switch>
    </div>
  </>)
}

export default App
