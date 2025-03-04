import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Lock, User } from "lucide-react";
import { Button } from '@mantine/core'
import {useDispatch, useSelector} from 'react-redux'
import {useForm} from 'react-hook-form'
import { Loader } from "@mantine/core";

function Register() {

  // const dispatch = useDispatch();
  const {loading} = useSelector((state) => state.auth);
  const { register, handleSubmit} = useForm();
  console.log(loading);
  const onSubmit = (data) => {
    console.log(data)
    // dispatch(SignUp(data));
  }
  
  return (
    <div className="flex min-h-screen justify-center items-center bg-gray-100">
      <motion.div
        className="w-full mx-w-md p-8 bg-white shadow-xl rounded-2xl"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-2xl font-bold text-gray-800 text-center mb-6">Create an Account</h2>
        <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
            <div className="relative flex items-center pb-2 border-b border-gray-300">
                <User className="text-gray-400 mr-2" size={20}/>
                <input type="text" name="name" placeholder="Full Name" className="w-full bg-transparent focus:outline-none border-none" required {...register('name')}/>
            </div>


          <div className="relative flex items-center pb-2 border-b border-gray-300">
            <Mail className="text-gray-400 mr-2" size={20}/>
          <input type="email" name="email" placeholder="Email Address" required {...register('email')} className="w-full bg-transparent focus:outline-none border-none" />
          </div>


          <div className="relative flex items-center pb-2 border-b border-gray-300">
            <Lock className="text-gray-400 mr-2" size={20}/>
          <input type="password" name="password" placeholder="Password" required {...register('password')} className="w-full bg-transparent focus:outline-none border-none" />
            </div>
         

          <div className="relative flex items-center pb-2 border-b border-gray-300">
            <Lock className="text-gray-400 mr-2" size={20}/>
          <input type="password" name="confirmPassword" placeholder="Confirm Password" required {...register('confirmPassword')} className="w-full bg-transparent focus:outline-none border-none" />
          </div>


          <Button type="submit" fullWidth className="w-full bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold py-3 rounded-lg shadow-md hover:scale-105 transition-all flex items-center justify-center gap-2">
            {loading ? <Loader size={16} color="white"/> : 'Signup'}
          </Button>
        </form>

        <p className="text-center text-sm text-gray-600 mt-4">
          Already have an account?{' '}
          <a href="/login" className="text-blue-500 font-medium">
            Sign In
          </a>
        </p>
      </motion.div>
    </div>
  );
}

export default Register;
