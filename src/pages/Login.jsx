import React from 'react'
import { useState } from 'react'
import InputField from '../components/InputField'
import { Link } from 'react-router-dom'

const Login = () => {
  const [loggedInUser, setLoggedInUser] = useState({
    password: '',
    email: '',
  })

  return (
    <div className="min-h-screen min-w-full  flex justify-center items-center">
      <div>
        <div className=" w-[450px] h-[450px] rounded-[10px] ">
          <h1 className=" p-5 text-3xl font-poppins-semibold text-center">
            Login
          </h1>

          <div className=" w-full flex justify-center">
            <InputField
              placeholder={'Email'}
              styles={
                'w-[350px] h-[40px] mt-[30px] rounded-[15px]  p-4 focus:outline-none  bg-gray-200 text-start  font-poppins-regular text-md'
              }
              type={'email'}
              value={loggedInUser.email}
              setValue={(e) => {
                setLoggedInUser({ ...loggedInUser, email: e.target.value })
              }}
            />
          </div>
          <div className=" w-full flex justify-center">
            <InputField
              placeholder={'Password'}
              styles={
                'w-[350px] h-[40px] mt-[30px] rounded-[15px]  p-4 focus:outline-none  bg-gray-200 text-start  font-poppins-regular text-md'
              }
              type={'password'}
              value={loggedInUser.password}
              setValue={(e) => {
                setLoggedInUser({ ...loggedInUser, password: e.target.value })
              }}
            />
          </div>
          <div className=" w-full flex mt-[30px] justify-center">
            <Link
              to={'/SignUp'}
              className="font-poppins-regular  text-blue-500 text-left"
            >
              Don't have an account? Sign up!
            </Link>
          </div>
          <div className="w-full flex mt-[20px] justify-center">
            <Link className="font-poppins-regular text-blue-500 text-left">
              Forgot your password?
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login
