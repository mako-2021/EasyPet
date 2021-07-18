import React from 'react'

import aboutImage from '../styles/ImageAssets/AnimationOne/FAQVet.png'
import img1 from '../styles/ImageAssets/AnimationTwo/CatTwo.png'
import img2 from '../styles/ImageAssets/AnimationTwo/DogOne.png'
import img3 from '../styles/ImageAssets/AnimationTwo/CatOne.png'
import img4 from '../styles/ImageAssets/AnimationTwo/DogThree.png'
import img5 from '../styles/ImageAssets/AnimationTwo/DogTwo.png'

function About () {
  return (
    <>
      <div className='mx-auto flex items-center justify-center'>
        <img src={aboutImage}/>
      </div>

      <div className='container'>
        <p className='text-8xl flex text-left font-bold mt-36 mb-4 ml-36'>About EasyPet</p>
        <p className='text-4xl flex text-left mb-36 ml-36'>Everything you need to know to use EasyPet. This is where instructions will live.</p>
      </div>

      <div className='container grid grid-cols-2 mb-12'>
        <div>
          <img src={img1}/>
        </div>
        <div>
          <p className='text-6xl flex text-left font-bold mt-36 mb-4 ml-36'>1. Sign up for an account</p>
          <p className='text-3xl flex text-left mb-12 ml-36'>These are the intructions for creating an acocunt here.</p>
        </div>
      </div>

      <div className='container grid grid-cols-2 mb-12'>
        <div>
          <p className='text-6xl flex text-left font-bold mt-36 mb-4 ml-36'>2. Log in to your EasyPet account</p>
          <p className='text-3xl col-2 flex text-left ml-36 mb-12'>You can log in to your account here.</p>
        </div>
        <div>
          <img src={img2}/>
        </div>
      </div>

      <div className='container grid grid-cols-2 mb-12'>
        <div>
          <img src={img3}/>
        </div>
        <div>
          <p className='text-6xl flex text-left font-bold mt-36 mb-4 ml-36'>3. Add a pet to your account</p>
          <p className='text-3xl col-2 flex text-left ml-36 mb-12'>This is how you do that.</p>
        </div>
      </div>

      <div className='container grid grid-cols-2 mb-12'>
        <div>
          <p className='text-6xl flex text-left font-bold mt-36 mb-4 ml-36'>4. Add your pets details and start using their personalised calendar.</p>
          <p className='text-3xl col-2 flex text-left ml-36 mb-12'>This is how you do that.</p>
        </div>
        <div>
          <img src={img4}/>
        </div>
      </div>

      <div className='container grid grid-cols-2 mb-12'>
        <div>
          <img src={img5}/>
        </div>
        <div>
          <p className='text-6xl flex text-left font-bold mt-36 mb-4 ml-36'>5. Enjoy!</p>
          <p className='text-3xl col-2 flex text-left ml-36 mb-12'>We hope you love using EasyPet!</p>
        </div>
      </div>
    </>
  )
}

export default About