import React from 'react'
import SignUpForm from '../components/form/SignUpForm'
import Parteners from '../components/Parteners'

const SignupModule = () => {

  return (
    <div className='relative bg-gray-100 h-[100%] flex flex-col items-center justify-center'>
      <h1 className='text-center text-bold text-[1rem] sm:text-[2rem] mb-[1rem] sticky top-0 bg-white text-gray-600 w-full flex justify-center'>Welcome to OSWD BootCamp Signup Form</h1>
      <div className='flex flex-col border border-white rounded-3xl justify-center gap-20 mt-[2rem] w-[100%] sm:w-[80%] lg:w-[50%] bg-slate-100'>
        <SignUpForm />
      </div>
      <div className='sticky flex justify-center bottom-0 lg:relative w-[100%] bg-gray-100 lg:bg-transparent'>
        <Parteners /> 
      </div>
    </div>
  )
}

export default SignupModule