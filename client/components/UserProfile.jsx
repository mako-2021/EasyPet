import React, { useState, useEffect } from 'react'
import Axios from 'axios'
import { connect } from 'react-redux'
import AddressFinder from './AddressFinder'
import profileImage from '../../server/public/ImageAssets/AnimationOne/TwoDogs.png'

function UserProfile (props) {
  const initialState = {userName: '', email: '', phone: '', firstName: '', lastName: '', dob: '', address: '' }
  const [data, setData] = useState(initialState)


  // useEffect (() =>{
  //   Axios({
  //     method: 'GET',
  //     withCredentials: true,
  //     url: 'http://localhost:3000/user'
  //   }).then((res) => {
  //     setData(res)
  //     return null
  //   })
  //     .catch(err => console.log(err.message))
  // })

  function handleChange (evt) {
    const {name, value} = evt.target
    setData({
        ...data,
        [name]: value
    })
  }

  
  return (
    <>
    <div className='bg-scroll bg-cover' style={{ backgroundImage: `url(${profileImage})` }}>
      <div className='container h-screen inline'>
        <p className='text-5xl items-left font-bold mb-5 ml-20 text-black'>User Profile</p>
        <p className='text-2xl items-left font-bold text-white ml-20'>Account Details:</p>
        <form className='flex items-center grid grid-cols-1 grid-rows-6 w-3/12 h-64' id='profile-form'>
          <label className='ml-20' for='username'>Username</label>
          <input className='rounded-md shadow-sm col-1 h-12 ml-20 p-4' type='text' id='username' name='username' placeholder='Enter Username' onChange={(e) => handleChange(e.target.value)}/>
          <label className='ml-20'  for='email'>Email</label>
          <input className='rounded-md shadow-sm col-1 h-12 ml-20 p-4' type='text' id='email' name='email' placeholder='Enter Email Address' onChange={(e) => updateEmail(e.target.value)}/>      
          <label  className='ml-20' for='phone'>Phone Number</label>
          <input className='rounded-md shadow-sm col-1 h-12 ml-20 p-4' type='int' id='phone' name='phone' placeholder='Enter Phone Number' onChange={(e) => updatePhoneNumber(e.target.value)}/>      
        </form>
        <p className='text-2xl items-left font-bold text-white mt-12 ml-20'>Personal Details:</p>
        <form className='flex items-center grid grid-cols-1 grid-rows-6 w-3/12 h-64 mb-2' id='profile-form'>
          <label className='ml-20'>First Name</label>
          <input className='rounded-md shadow-sm col-1 h-12 ml-20 p-4' type='text' id='firstName' name='firstName' placeholder='Enter First Name' onChange={(e) => updateFirstName(e.target.value)}/>
          <label className='ml-20'>Last Name</label>
          <input className='rounded-md shadow-sm col-1 h-12 ml-20 p-4' type='text' id='lastName' name='lastName' placeholder='Enter Last Name' onChange={(e) => updateLastName(e.target.value)}/>      
          <label className='ml-20'>Date of Birth</label>
          <input className='rounded-md shadow-sm col-1 h-12 ml-20 p-4' type='date' id='dob' name='dob' placeholder='Enter DOB' onChange={(e) => updateDob(e.target.value)}/>
        </form>
        <AddressFinder/>
        </div>
    </div>
    </>
  )
}

function mapStateToProps (state) {
  return {
    user: state.user
  }
}

export default connect(mapStateToProps)(UserProfile)
