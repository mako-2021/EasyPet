const express = require('express')

const router = express.Router()

const { updateUserProfile, getUserByUsername, getUsersPets, updatePetProfile, createNewPetProfile, updateUserByUsername, getPetById} = require('../db/db')

router.get('/pets/:username', (req, res) => {
  const username = req.params.username
  getUsersPets(username)
    .then(results => {
      res.json(results)
      return null
    })
    .catch(err => {
      console.log(err)
      res.status(500).json({ message: 'Oops, something went wrong' })
    })
})

router.post('/pets/addpet', (req, res) => {
  const data = req.body
  createNewPetProfile(data)
    .then(results => {
      res.json(results)
      return null
    })
    .catch(err => {
      console.log(err)
      res.status(500).json({ message: 'Oops, something went wrong' })
    })
})

router.get('/pets/pet/:id', (req, res) => {
  const petId = req.params.id
  getPetById(petId)
    .then(results => {
      res.json(results)
      return null
    })
    .catch(err => {
      console.log(err)
      res.status(500).json({ message: 'Oops, something went wrong' })
    })
})

router.patch('/pets/pet/:id', (req, res) => {
  const petId = req.params.id
  updatePetProfile(petId, req.body)
    .then(results => {
      res.json(results)
      return null
    })
    .catch(err => {
      console.log(err)
      res.status(500).json({ message: 'Oops, something went wrong' })
    })
})

// ------user routes below------//

router.get('/:username', (req, res) => {
  const username = req.params.username
  updateUserByUsername(username)
    .then(results => {
      res.json(results)
      return null
    })
    .catch(err => {
      console.log(err)
      res.status(500).json({ message: 'Oops, something went wrong' })
    })
})

router.patch('/:username', (req, res) => {
  const username = req.params.username
  updateUserProfile(username, req.body)
    .then(results => {
      res.json(results)
      return null
    })
    .catch(err => {
      console.log(err)
      res.status(500).json({ message: 'Oops, something went wrong' })
    })
})

module.exports = router
