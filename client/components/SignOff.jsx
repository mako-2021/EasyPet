import React from 'react'
import { signOff } from '../apis/apiPassport'

function SignOff (props) {
  function handleClick (e) {
    e.preventDefault()
    signOff()
      .then(() => {
        window.location.replace('/')
        return null
      })
      .catch(err => {
        console.log(new Error(err))
      })
  }

  return (

    <button className='transform hover:scale-110 btn cursor-pointer object-center bg-black hover:bg-gray-900 text-white font-bold rounded-md items-center justify-center col-1 h-10 px-2 m-2 hover:text-green-500' onClick={handleClick}> Log Out</button>

  )
}

export default SignOff
