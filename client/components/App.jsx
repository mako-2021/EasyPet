import React from 'react'
import { Route } from 'react-router-dom'

import { connect } from 'react-redux'

import Contact from './Contact'
import Register from './Register'
import SignIn from './SignIn'
import MyMonthlyCalendar from './MyMonthlyCalendar'

function App (props) {
  return (

    <div>
      <Route path = '/' component={Contact} />
      <Route path = '/' component={MyMonthlyCalendar} />
      <Route path = '/register' component={Register} />
      <Route path = '/login' component={SignIn} />
    </div>
  )
}

export default connect()(App)
