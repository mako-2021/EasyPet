import React from 'react'
import { Route } from 'react-router-dom'

import { connect } from 'react-redux'

import Contact from './Contact'
import Register from './Register'
import SignIn from './SignIn'
import MyMonthlyCalendar from './MyMonthlyCalendar'
import AddToCalendar from './AddToCalendar'

function App (props) {
  return (

    <div>
      <Route exact path = '/contact' component={Contact} />
      <Route path = '/register' component={Register} />
      <Route path = '/login' component={SignIn} />
      <Route exact path ='/calendar' component={MyMonthlyCalendar} />
      <Route exact path='/calendar' component={AddToCalendar} />
    </div>
  )
}

export default connect()(App)
