const express = require('express')
 
const User = require('../db/db')

const router = express.Router()

router.post('/login', (req, res, next) => {
  passport.authenticate("local", (err, user, info) => {
    if (err) throw err
    if (!user) res.send("No User Exists")
    else {
      req.logIn(user, (err) => {
        if (err) throw err
        res.send("Successfully Authenticated")
        console.log(req.user)
      })
    }
  })(req, res, next)
})
router.post('/register', (req, res) => {
  User.userExists({ username: req.body.username }, async (err, doc) => {
    if (err) throw err;
    if (doc) res.send("User Already Exists")
    if (!doc) {
      const hashedPassword = await bcrypt.hash(req.body.password, 10)

      const newUser = new User({
        username: req.body.username,
        password: hashedPassword,
      })
      await newUser.save()
      res.send("User Created")
    }
  })
})
router.get('/user', (req, res) => {
  res.send(req.user)
})

module.exports = router
