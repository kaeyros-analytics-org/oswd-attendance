import React from 'react'
import SignUpForm from '../components/form/SignUpForm'
import Parteners from '../components/Parteners'

const SignupModule = () => {

  return (
    <div className='relative bg-gray-300 h-screen flex flex-col items-center justify-center'>
      <h1 className='text-bold text-[1rem] sm:text-[2rem] mb-[1rem] absolute top-0 bg-white w-full flex justify-center'>Welcome to OSWD BootCamp Signup Form</h1>
      <div className='flex flex-col gap-20 mt-[2rem] w-[100%] sm:w-[80%] lg:w-[60%] '>
        <SignUpForm />
      </div>
      <Parteners /> 
    </div>
  )
}

export default SignupModule