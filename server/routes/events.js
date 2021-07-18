const express = require('express')

const router = express.Router()

// TODO: write get events function

router.get('/', (req, res) => {
  getEvents()
    .then(results => {
      res.json(results)
      return null
    })
    .catch(err => {
      console.log(err)
      res.status(500).json({ message: 'Oops, something went wrong' })
    })
})

// TODO: add save event function also

router.post('/', (req, res) => {
  saveEvent(req.body.event)
    .then(ids => {
      res.status(201).json(ids[0])
      return null
    })
    .catch(err => {
      console.log(err)
      res.status(500).json({ message: 'Oops, something went wrong' })
    })
})
