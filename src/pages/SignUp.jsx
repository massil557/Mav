import React from 'react'
import InputField from '../components/InputField'
import CostumeButton from '../components/CostumeButton'
const SignUp = () => {
  return (
    <div className="min-h-screen min-w-full  flex justify-center ">
      <div className="m">
        <div className=" w-[450px] h-[450px] rounded-[10px] ">
          <h1 className=" p-5 text-3xl font-poppins-semibold text-center">
            Sign Up
          </h1>
          <div className=" w-full flex justify-center ">
            <select className="w-[350px] h-[40px] mt-[30px] pl-4 rounded-[15px]   focus:outline-none  bg-gray-200 text-start  font-poppins-regular text-md">
              <option value="" disabled selected>
                Select Account Type
              </option>
              <option>Client Account</option>
              <option>magazine Account</option>
            </select>
          </div>
          <div className=" w-full flex justify-center">
            <InputField
              placeholder={'Email'}
              styles={
                'w-[350px] h-[40px] mt-[30px] rounded-[15px]  p-4 focus:outline-none  bg-gray-200 text-start  font-poppins-regular text-md'
              }
              type={'email'}
            />
          </div>
          <div className=" w-full flex justify-center">
            <InputField
              placeholder={'Phone Number'}
              styles={
                'w-[350px] h-[40px] mt-[30px] rounded-[15px]  p-4 focus:outline-none  bg-gray-200 text-start  font-poppins-regular text-md'
              }
              type={'text'}
            />
          </div>
          <div className=" w-full flex justify-center">
            <InputField
              placeholder={'Password'}
              styles={
                'w-[350px] h-[40px] mt-[30px] rounded-[15px]  p-4 focus:outline-none  bg-gray-200 text-start  font-poppins-regular text-md'
              }
              type={'password'}
            />
          </div>
          <div className=" w-full flex justify-center">
            <InputField
              placeholder={'Confirm Password'}
              styles={
                'w-[350px] h-[40px] mt-[30px] rounded-[15px]  p-4 focus:outline-none  bg-gray-200 text-start  font-poppins-regular text-md'
              }
              type={'password'}
            />
          </div>
          <div>
            <div className=" w-full flex justify-center ">
              <select
                className="w-[350px] h-[40px] mt-[30px] pl-4 rounded-[15px]   focus:outline-none  bg-gray-200 text-start  font-poppins-regular text-md "
                placeholder="Sex"
              >
                <option value="" disabled selected>
                  Sex
                </option>
                <option>Male</option>
                <option>Female</option>
              </select>
            </div>
            <div className=" w-full flex justify-center">
              <CostumeButton
                text={'Sign Up'}
                w={'300px'}
                hg={'35px'}
                black={true}
                styles={'mt-[30px]'}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SignUp
