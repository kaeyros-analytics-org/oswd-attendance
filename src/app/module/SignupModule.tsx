import React from 'react'
import SignUpForm from '../components/form/SignUpForm'
import Parteners from '../components/Parteners'

const SignupModule = () => {

  return (
    <div className='bg-gray-300 h-screen flex flex-col items-center justify-center'>
      <h1 className='text-bold text-[20px]'>Welcome to OSWD BootCamp Signup Form</h1>
      <div className='flex gap-20'>
        <SignUpForm />
        <Parteners /> 
      </div>

    </div>
  )
}

export default SignupModule