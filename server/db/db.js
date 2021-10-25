const connection = require('./connection')
const bcrypt = require('bcryptjs')

// -----faq functions below -----//

function userExists (username, db = connection) {
  return db('users').select()
    .where('username', username)
    .first()
    .then(result => {
      (result === undefined)
    })
}

function userEmailExists (email, db = connection) {
  return db('users').select()
    .where('email', email)
    .first()
    .then(result => {
      return result === undefined
    })
}

function getUserByUsername (username, db = connection) {
  return db('users').select()
    .where('username', username)
    .first()
}

function updateUserByUsername (username, db = connection) {
  return db('users').select('username', 'email', 'phone', 'firstname', 'lastname', 'dob', 'address')
    .where('username', username)
    .first()
}

function users (username, db = connection) {
  return db('users').select()
}

function insertNewUser (userName, password, db = connection) {
  return bcrypt.hash(password, 10)
    .then(hashedPassword => {
      return db('users')
        .insert({ username: userName, password: hashedPassword })
    })
}

function updateUserProfile (username, updates, db = connection) {
  return db('users').where({ username: username }).update(updates)
    .then(() => getUserByUsername(username, db))
}

// -----faq functions below -----//

function getFaqs (db = connection) {
  return db('faq').select()
}

function getFaqBySearchString (searchString, db = connection) {
  return db('faq').select()
    .where('question', 'LIKE', `%${searchString}%`)
    .orWhere('answer', 'LIKE', `%${searchString}%`)
}

// -----calendar functions below -----//

function getAllEvents (db = connection) {
  return db('events')
    .select()
}

// TODO: join user db with events to display events by individual user
function addNewEvent (event, db = connection) {
  return db('events')
    .insert({ title: event.title, type: event.type, date: event.date })
}

// -----petfunctions below -----//

function getUsersPets (username, db = connection) {
  return db('pet_profile')
    .join('users', 'pet_profile.user_name', 'users.username')
    .select('pet_profile.user_name as petUserName', 'users.username as username', 'pet_profile.name', 'pet_profile.dob', 'pet_profile.type', 'pet_profile.breed', 'pet_profile.gender', 'pet_profile.id')
    .where('pet_profile.user_name', username)
}

function createNewPetProfile (data, db = connection) {
  return db('pet_profile')
    .insert(data)
}

function getPetById (id, db = connection) {
  return db('pet_profile').select()
  .where('pet_profile.id', id)
  .first()
}

function updatePetProfile (id, updates, db = connection) {
  return db('pet_profile')
  .where({ id: id})
  .update(updates)
  .then(() => getPetById(id, db))
}

module.exports = {
  userExists,
  getUserByUsername,
  updateUserProfile,
  userEmailExists,
  users,
  insertNewUser,
  getFaqs,
  getFaqBySearchString,
  getAllEvents,
  addNewEvent,
  getUsersPets,
  createNewPetProfile,
  updateUserByUsername,
  updatePetProfile,
  getPetById
}
