"use client"
import React, { useEffect, useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form';
import { ClientRegistrationFormValues } from './signupForm.td';
import { useRouter } from 'next/navigation';
import ThreeDotsLoadingAnimation from '@/components/loaders/TreeDotsLoading';
import toast from 'react-hot-toast';
import { Checkbox } from '@/components/ui/checkbox';
import { Calendar } from '@/components/ui/calendar';
import { DatePickerDemo } from '@/components/ui/DatePicker';


const SignUpForm = () => {

  const [isLoading, setIsLoading] = useState<boolean>(false); 

  const router = useRouter (); 

  // // +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//   console.log("++++++++++++++++++++++++++++++++++++++++++++++++++++++")
  const [ establishUser, setEstablishedUser ] = useState ()

  const getAllClients = async () => {
    try {
        const users = await fetch(`/api/ows_bootcamp_users`, {
          cache: "no-store", 
          // next: { revalidate: 10 }, 
        });

        if (!users.ok) {
            throw new Error("Failed to fetch users"); 
        } else {
            const test = await users.json()
            setEstablishedUser (test)
        }
    } catch (error) {
        console.log("Error loading attendancesToday: ", error); 
    }
  }

  console.log("999999", establishUser)

  useEffect (() => {
      getAllClients ()
  }, [])

//   console.log("++++++++++++++++++++++++++++++++++++++++++++++++++++++")
  // +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


  const [ isStudent, setIsStudent ] = useState ({
    name: "Student", 
    status: false, 
  }); 

  const [ none, setNone ] = useState ({
    name: "None", 
    status: true, 
  }); 
  const [ isLow, setLow ] = useState ({
    name: "Low", 
    status: false, 
  }); 
  const [ isHigh, setHigh ] = useState ({
    name: "High", 
    status: false, 
  }); 
  const [ isExpert, setExpert ] = useState ({
    name: "Expert", 
    status: false, 
  }); 

  const [ selectedLevel, setSelectedLevel ] = useState ({
    name: "None", 
    status: true, 
  }); 

  const handleStudentSelection  = () => {
    setIsStudent ((isStudent) => ({ ...isStudent, status: !isStudent.status}))
  }

  const handleNoneSelection  = () => {
    setNone ((none) => ({ ...none, status: true})); 
    setLow ((isLow) => ({ ...isLow, status: false})); 
    setHigh ((isHigh) => ({ ...isHigh, status: false})); 
    setExpert ((isExpert) => ({ ...isExpert, status: false})); 
    // changeSelected ()
    setSelectedLevel ({ name: none.name, status: true})
  }

  const handleLowlSelection  = () => {
    setNone ((none) => ({ ...none, status: false})); 
    setLow ((isLow) => ({ ...isLow, status: true})); 
    setHigh ((isHigh) => ({ ...isHigh, status: false})); 
    setExpert ((isExpert) => ({ ...isExpert, status: false})); 
    // changeSelected ()
    setSelectedLevel ({ name: isLow.name, status: true}); 
  }

  const handleHighSelection  = () => {
    setNone ((none) => ({ ...none, status: false})); 
    setLow ((isLow) => ({ ...isLow, status: false})); 
    setHigh ((isHigh) => ({ ...isHigh, status: true})); 
    setExpert ((isExpert) => ({ ...isExpert, status: false})); 
    // changeSelected ()
    setSelectedLevel ({ name: isHigh.name, status: true}); 
  }
  const handleExpertSelection  = () => {
    setNone ((none) => ({ ...none, status: false})); 
    setLow ((isLow) => ({ ...isLow, status: false})); 
    setHigh ((isHigh) => ({ ...isHigh, status: false})); 
    setExpert ((isExpert) => ({ ...isExpert, status: true})); 
    // changeSelected ()
    setSelectedLevel ({ name: isExpert.name, status: true}); 
  }

  const [ oswdMenber, setoswdMenber ] = useState ({
    name: "OSWD Member", 
    status: false , 
  }); 

  const handleOSWMemberSelection = () => {
    setoswdMenber ({ name: oswdMenber.name, status: true})
  }

  // console.log("selectedLevelselectedLevel", selectedLevel)

  const {
    register, 
    handleSubmit, 
    formState: { errors, isSubmitting, isSubmitted, isValid}, 
    reset, 
    getValues, 
  } = useForm<ClientRegistrationFormValues> (); 

  const onSubmit: SubmitHandler<ClientRegistrationFormValues> = async (data) => {
    console.log(data, "////////");
    // toast.success("User Registred Succesfully"); 
    // reset ()
    // return
    setIsLoading (true)
    data = {
        ...data, 
        rLanguageLevel: selectedLevel?.name
    }
    try {
      const result = await fetch(`/api/ows_bootcamp_users`, {
          method: "POST", 
          headers: {
              "Content-type": "application/json", 
          }, 
          body: JSON.stringify(data)
          // body: data!
      }); 

      if (result.ok) {
          setIsLoading(false);
          toast.success("User Registred Succesfully"); 
          router.refresh(); 

          router.push("/"); 
          setIsLoading (false)
          // try {
          //   const users = await fetch(`/api/users/signup`, {
          //       cache: "no-store", 
          //       // next: { revalidate: 10 }, 
          //   }); 
      
          //   if (!users.ok) {
          //       throw new Error("Failed to fetch users"); 
          //   } else {
          //       const test = await users.json()
          //       setEstablishedUser (test)
          //   }
          // } catch (error) {
          //     console.log("Error loading attendancesToday: ", error); 
          // }
      } else {
        setIsLoading (false)
        toast.error("User Could not be registered"); 
        throw new Error("Problem pour enregistrer un user. ")
      }
    } catch (error) {
      toast.error("User Could not be registered"); 
      console.log(error)
    }
    reset ();
  }
  const [date, setDate] = React.useState<Date | undefined>(new Date())
  return (
    <form className='flex flex-col p-[1rem] sm:pt-[2rem] justify-center gap-3 overflow-x-hidden overflow-y-auto w-[100%] sm:h-auto' onSubmit={handleSubmit(onSubmit)}>

      {/* +++++++++ FIRSTNAME LASTNAME +++++++++++ */}

      <div className='sm:grid sm:grid-cols-[repeat(2,1fr)] sm:gap-3'>
        <div>
            <label htmlFor="" className='text-gray-500'>First Name</label>
            <input 
                {...register("name", {
                    required: "Prenom Obligatoire", 
                } )}
                type='text' 
                placeholder='Entrer votre Prenom ici'
                className='py-3 px-4 rounded-2xl text-black border-[1px] border-gray outline-none w-full'
            />
            <p className='text-[.9rem]' style={{
                color: "red"
            }}>
                { errors?.name?.message }
            </p>
        </div>

        <div>
            <label htmlFor="" className='text-gray-500'>Last Name</label>
            <input 
                {...register("surname", {
                    required: "Nom Obligatoire", 
                } )}
                type='text' 
                placeholder='Entrer votre Nom ici'
                className='py-3 px-4 rounded-2xl text-black border-[1px] border-gray outline-none w-full'
            />
            <p className='text-[.9rem]' style={{
                color: "red"
            }}>
                { errors?.surname?.message }
            </p>
        </div>

      </div>

      {/* +++++++++ FIRSTNAME LASTNAME +++++++++++ */}

      {/* +++++++++ PHONE EMAIL +++++++++++ */}

      <div className='sm:grid sm:grid-cols-[repeat(2,1fr)] sm:gap-3'>
          <div>
              <label htmlFor="" className='text-gray-500'>Phone Number</label>
              <input 
                  {...register("phoneNumber", {
                      required: "Contact est obligatoire", 
                      minLength: {
                          value: 9, 
                          message: "Numero doit etre au moins 9 chiffres"
                      }
                  } )}
                  type='number' 
                  placeholder='Entrez votre contact ici'
                  className='py-3 px-4 rounded-2xl text-black border-[1px] border-gray outline-none w-full'
              />
              <p className='text-[.9rem]' style={{
                  color: "red"
              }}>
                  { errors?.phoneNumber ? "Contact est obligatoire. Numero doit etre au moins 9 chiffres." : "" }
              </p>
          </div>
          <div>
              <label htmlFor="" className='text-gray-500'>Email</label>
              <input 
                  {...register("email", {
                      required: "Email Obligatoire", 
                  } )}
                  type='text' 
                  placeholder='Entrex votre addresse email ici'
                  className='py-3 px-4 rounded-2xl text-black border-[1px] border-gray outline-none w-full'
              />
              {/* <p className='text-[.9rem]' style={{
                  color: "red"
              }}>
                  { errors?.contact_email?.message }
              </p> */}
          </div>
      </div>

      {/* +++++++++ PHONE EMAIL +++++++++++ */}

      {/* +++++++++ GENDER DATEOFBIRTH +++++++++++ */}

      <div className='sm:grid sm:grid-cols-[repeat(2,1fr)] sm:gap-3'>
          <div>
              <label htmlFor="" className='text-gray-500'>Sex</label>
              <input 
                  {...register("gender" )}
                  type='text' 
                  placeholder='Entrez votre Gender'
                  className='py-3 px-4 rounded-2xl text-black border-[1px] border-gray outline-none w-full'
              />
          </div>
          <div>
              <label htmlFor="" className='text-gray-500'>Date of Birth</label>
              {/* <Calendar
                    mode="single"
                    selected={date}
                    onSelect={setDate}
                    className="rounded-md border"
                /> */}
            {/* <DatePickerDemo /> */}
              <input 
                  {...register("dateOfBirth", {
                      // required: "Entrez nom de votre compagnie", 
                  })}
                  type='date' 
                  placeholder='Entrez votre date de naissance'
                  className='py-3 px-4 rounded-2xl text-black border-[1px] border-gray outline-none w-full'
              />
          </div>
      </div>

      {/* +++++++++ GENDER DATEOFBIRTH +++++++++++ */}

      <div className='sm:grid sm:grid-cols-[repeat(5,1fr)] sm:gap-3'>
          <div onChange={ () => handleStudentSelection () } className={ "flex flex-row justify-around bg-white py-[.5rem] px-[1rem] rounded-3xl cursor-pointer" }>
            <input 
                // {...register("company_name", {
                //     required: "Entrez nom de votre compagnie", 
                // })}
                name='student'
                type='checkbox' 
                // onChange={ () => handleSemaSelection () }
                // onChange={ () => handleStudentSelection() }
                checked={ isStudent.status }
                className='cursor-pointer rounded-2xl text-black border-[1px] border-gray outline-none w-full'
            />
            <label htmlFor="" className='cursor-pointer text-black'>Student</label>
          </div>

      </div>
      {

        isStudent?.status && 
        (
        <div className='sm:grid sm:grid-cols-[repeat(2,1fr)] sm:gap-3'>
          <div>
              <label htmlFor="" className='text-gray-500'>Faculty</label>
              <input 
                  {...register("faculty", {
                      // required: "Entrez nom de votre compagnie", 
                  })}
                  type='text' 
                  placeholder='Enter your faculty Name'
                  className='py-3 px-4 rounded-2xl text-black border-[1px] border-gray outline-none w-full'
              />
          </div>

          <div>
              <label htmlFor="" className='text-gray-500'>Research Domain</label>
              <input 
                  {...register("researchDomain", {
                      // required: "Entrez nom de votre compagnie", 
                  })}
                  type='text' 
                  placeholder='Enter your Research domain'
                  className='py-3 px-4 rounded-2xl text-black border-[1px] border-gray outline-none w-full'
              />
          </div>

        </div>
        )
      }

      {
        !isStudent?.status && 
        (
          <div className='sm:grid sm:grid-cols-[repeat(1,1fr)] sm:gap-3'>
            <div>
                <label htmlFor="" className='text-gray-500'>Profession</label>
                <input 
                    {...register("profession", {
                        // required: "Entrez nom de votre compagnie", 
                    })}
                    type='text' 
                    placeholder='Enter your Profession'
                    className='py-3 px-4 rounded-2xl text-black border-[1px] border-gray outline-none w-full'
                />
            </div>
          </div>
        )
      }
      R Language Level:

      <div className='w-[100%] flex flex-col gap-4'>

        <div className='sm:grid sm:grid-cols-[repeat(4,minmax(100px,_1fr))] flex flex-row gap-1 justify-start sm:gap-2  w-[60%]'>
            {/* grid grid-cols-[repeat(3,minmax(300px,_1fr))] */}
            {/* flex flex-row gap-3 justify-around  */}
            <div onChange={ () => handleNoneSelection () } className={ "flex flex-row justify-around gap-2 bg-white py-[.5rem] px-[1rem] rounded-3xl cursor-pointer" }>
                <input 
                    name='none'
                    type='checkbox' 
                    onChange={ () => handleNoneSelection() }
                    checked={ none.status }
                    className='cursor-pointer rounded-2xl text-black border-[1px] border-gray outline-none w-full'
                />
                <label htmlFor="" className='cursor-pointer text-black'>None</label>
            </div>
            <div onClick={ () => handleLowlSelection () } className={ "flex flex-row justify-center gap-2 bg-white py-[.5rem] px-[1rem] rounded-3xl cursor-pointer" }>
                <input 
                    name='isLow'
                    type='checkbox' 
                    onChange={ () => handleLowlSelection() }
                    checked={ isLow.status }
                    className='cursor-pointer py-4 px-4 rounded-2xl text-black border-[1px] border-gray outline-none w-full'
                />
                <label htmlFor="" className='cursor-pointer text-black'>Low</label>
            </div>

        </div>
        
        <div className='sm:grid sm:grid-cols-[repeat(4,minmax(100px,_1fr))] flex flex-row gap-1 justify-start sm:gap-2  w-[60%]'>
            {/* space-y-1 leading-none */}
            <div onClick={ () => handleHighSelection() } className={ "flex flex-row justify-center gap-2 bg-white py-[.5rem] px-[1rem] rounded-3xl cursor-pointer" }>
                <input 
                    name='isHigh'
                    type='checkbox' 
                    onChange={ () => handleHighSelection() }
                    checked={ isHigh.status }
                    className='cursor-pointer py-4 px-4 rounded-2xl text-black border-[1px] border-gray outline-none w-full'
                />
                <label htmlFor="" className='cursor-pointer text-black'>High</label>
            </div>
            <div onClick={ () => handleExpertSelection() } className={ "flex flex-row justify-center gap-2 bg-white py-[.5rem] px-[1rem] rounded-3xl cursor-pointer" }>
                <input 
                    name='isExpert'
                    type='checkbox' 
                    onChange={ () => handleExpertSelection() }
                    checked={ isExpert.status }
                    className='cursor-pointer py-4 px-4 rounded-2xl text-black border-[1px] border-gray outline-none w-full'
                />
                <label htmlFor="" className='cursor-pointer text-black'>Expert</label>
            </div>
        </div>
      </div>

      Are you a member of OWSD?
      <div className='sm:grid sm:grid-cols-[repeat(4,1fr)] sm:gap-3'>
          <div onChange={ () => handleOSWMemberSelection () } className={ "flex flex-row justify-around gap-2 bg-white py-[.5rem] px-[1rem] rounded-3xl cursor-pointer" }>
            <input 
                // {...register("company_name", {
                //     required: "Entrez nom de votre compagnie", 
                // })}
                name='oswdMenber'
                type='checkbox' 
                // onChange={ () => handleSemaSelection () }
                // onChange={ () => handleOSWMemberSelection() }
                checked={ oswdMenber.status }
                className='cursor-pointer rounded-2xl text-black border-[1px] border-gray outline-none w-[20px]'
            />
            {/* <Checkbox /> */}
            <label htmlFor="" className='cursor-pointer text-black'>OSWD Member?</label>
          </div>

      </div>

      <div className="mt-4 w-full">
          <button
              // disabled={ isValid || isLoading ? false : true}
              className={` ${ isValid ? "bg-backgroundOSWD text-white hover:bg-slate-950" : "bg-slate-300 text-white" } border border-white w-[100px]  py-4 px-4 rounded-2xl `}
          >
              {isLoading ? <ThreeDotsLoadingAnimation color="white" /> : <>Save</>}
          </button>
      </div>
    </form>
  )
}

export default SignUpForm