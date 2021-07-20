import React from 'react'
import { Route, Redirect, Switch } from 'react-router-dom'
import { connect } from 'react-redux'

import Contact from './Contact'
import Register from './Register'
import SignIn from './SignIn'
import UserProfile from './UserProfile'
import MyMonthlyCalendar from './MyMonthlyCalendar'
import Header from './Header'
import Footer from './Footer'
import FaqList from './FaqList'
import Navbar from './Nav'
import SearchFAQ from './SearchFAQ'
import Home from './Home'
import About from './About'
import AddToCalendar from './AddToCalendar'

function App (props) {
  return (
    <>

      <Route exact path="/">
        <Redirect to="/home" />
      </Route>
      <Header/>
      <Navbar />
      <Route exact path = '/home' component={Home} />
      <Route exact path = '/contact' component={Contact} />
      <Route exact path = '/calendar' component={MyMonthlyCalendar} />
      <Route exact path = '/calendar' component={AddToCalendar} />
      <Route exact path = '/register' component={Register} />
      <Route exact path = '/login' component={SignIn} />
      <Route exact path = '/user' component={UserProfile} />
      <Route exact path = '/faq' component={FaqList} />
      <Route exact path="/search/:searchString" component={SearchFAQ} />
      <Route exact path = '/about' component={About} />
      <Footer/>

    </>
  )
}

export default connect()(App)
