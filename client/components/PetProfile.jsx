import React, { useState, useEffect } from 'react'
import profileImage from '../../server/public/ImageAssets/AnimationTwo/petprofile.png'

// import { sendUserUpdates } from '../actions/index'
// import { getUser } from '../apis/apiPassport'
import { getPetData, updatePetProfile } from '../apis/apiClient'

function PetProfile (props) {
  const initialState = [{ name: '', dob: '', type: '', breed: '', gender: '', user_name: '' }]
  const [data, setData] = useState(initialState)
  const petId = props.match.params.id
  const [isSendingMessage, setIsSendingMessage] = useState(false)

  useEffect(() => {
    return getPetData(petId)
      .then(pet => {
        setData(pet)
        return null
      })
      .catch(err => {
        console.log(err.message)
        return null
      })
  }, [petId])

  function handleChange (evt) {
    const { name, value } = evt.target
    setData({
      ...data,
      [name]: value
    })
  }

  function handleSubmit (e) {
    e.preventDefault()
    const petdata = data
    const updatedPetId = petId
    updatePetProfile(updatedPetId, petdata)
    setIsSendingMessage(true)
    setTimeout(() => window.location.reload(), 1000 )
  }

  return (
    <>
      <div className='bg-contain bg-center bg-no-repeat bg-scroll mb-20' style={{ backgroundImage: `url(${profileImage})` }}>
        <div className='container h-screen inline'>
          <p className='text-5xl items-left font-bold mb-5 mt-12 ml-20 text-black'>Pet Profile</p>
          <form className='flex items-center grid grid-cols-1 w-4/12 ml-20' id='profile-form'>
            <p className='text-2xl items-left font-bold text-white'>Pets Details</p>
            <label className='mt-2' htmlFor='username'>Pets Name</label>
            <input className='rounded-md shadow-sm col-1 h-12 p-4 mt-2 mb-2' type='text' id='name' name='name' required value={data.name} placeholder='Enter Name' onChange={handleChange}/>
            <label className='mt-2' htmlFor='phone'>Pets Type</label>
            <input className='rounded-md shadow-sm col-1 h-12 p-4 mt-2 mb-2' type='text' id='type' name='type' required value={data.type} placeholder='Enter Type' onChange={handleChange}/>
            <label className='mt-2' htmlFor='firstname'>Pets Breed</label>
            <input className='rounded-md shadow-sm col-1 h-12 p-4 mt-2 mb-2' type='text' id='breed' name='breed' required value={data.breed} placeholder='Enter Breed' onChange={handleChange}/>
            <label className='mt-2' htmlFor='lastname'>Pets Gender</label>
            <input className='rounded-md shadow-sm col-1 h-12 p-4 mt-2 mb-2' type='text' id='gender' name='gender' required value={data.gender} placeholder='Enter Gender' onChange={handleChange}/>
            <label className='mt-2' htmlFor='dob'>Pets Date of Birth</label>
            <input className='rounded-md shadow-sm col-1 h-12 p-4 mt-2 mb-2' type='date' id='dob' name='dob' required value={data.dob} placeholder='Enter Date Of Birth' onChange={handleChange}/>
          </form>

          <button className='transform hover:scale-110 hover:text-green-500 btn bg-black hover:bg-gray-900 text-white font-bold rounded-md items-center justify-center col-1 h-12 w-1/3 ml-20 mt-2 mb-2' onClick={handleSubmit} type="submit" name="next"> Submit Updates </button>
          {isSendingMessage && <p className='mx-auto text-s flex justify-center items-center -mt-12 mb-20 text-white text-bold'>Your pets info is now up to date, easy! </p>}
        </div>
      </div>
    </>
  )
}

export default (PetProfile)
