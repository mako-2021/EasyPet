const express = require('express')
const passport = require('passport')
const user = require('../db/db')
require('./passportConfig')(passport)

const router = express.Router()

router.post('/login', async (req, res, next) => {
  await passport.authenticate('local', (err, user) => {
    if (err) throw err
    if (!user) res.json('Username or Password is incorrect')
    else {
      req.logIn(user, (err) => {
        if (err) throw err
        res.json('Successfully Authenticated User:' + req.user.username)
      })
    }
  })(req, res, next)
})

router.post('/register', (req, res) => {
  user.userExists(req.body.username)
    .then(result => {
      if (result) res.json('User already taken')
      if (!result) {
        user.insertNewUser(req.body.username, req.body.password)
        res.json('user created successfully' + req.body.username)
      }
      return null
    })
    .catch(err => console.log(err))
})

router.get('/user', (req, res) => {
  res.send(req.user)
})

router.get('/logout', (req, res) => {
  req.logout()
  res.redirect('/')
})

module.exports = router
