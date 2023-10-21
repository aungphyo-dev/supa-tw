"use client"
import {GuestLayout} from "~/components";
import Link from "next/link";
import {RegisterData} from "~/constants/types";
import {FormEvent, useEffect, useState} from "react";
import {useRegisterMutation} from "~/services/authApi";

const Register = () => {
    const [register,{isLoading,data}] = useRegisterMutation();
    const [name, setName] = useState<string>("mg mg")
    const [email, setEmail] = useState<string>("mm@gmail.com")
    const [password, setPassword] = useState<string>("asdffdsa")
    const [passwordConfirmation, setPasswordConfirmation] = useState<string>("asdffdsa")
    const handleSubmit = async (e:FormEvent<HTMLFormElement>) => {
      e.preventDefault()
        register({name,email,password,password_confirmation : passwordConfirmation}).unwrap()
    }
    useEffect(() => {
        if(!isLoading){
            console.log(data)
        }
    }, [isLoading,data]);
    return (
        <GuestLayout>
            <form onSubmit={handleSubmit} className='w-full h-full flex flex-col justify-center items-center  p-8'>
                <div className="text-xl text-white font-semibold">Register Your Account</div>
                <div className='w-full mb-4'>
                    <label className='block w-full text-white mb-2' htmlFor="name">Name</label>
                    <input type="text" id='name' className='block w-full px-2 py-2 border-none outline-none text-gray-900 rounded' required/>
                </div>
                <div className='w-full mb-4'>
                    <label className='block w-full text-white mb-2' htmlFor="email">Email</label>
                    <input type="email" id='email' className='block w-full px-2 py-2 border-none outline-none text-gray-900 rounded' required/>
                </div>
                <div className='w-full mb-4'>
                    <label className='block w-full text-white mb-2' htmlFor="password">Password</label>
                    <input type="password" id='password' className='block w-full px-2 py-2 border-none outline-none text-gray-900 rounded' required/>
                </div>
                <div className='w-full mb-6'>
                    <label className='block w-full text-white mb-2' htmlFor="confirm_password">Confirm Password</label>
                    <input type="password" id='confirm_password' className='block w-full px-2 py-2 border-none outline-none text-gray-900 rounded' required/>
                </div>
                <div className="w-full flex justify-between items-center">
                    <p className='text-white'>
                        Already have an account? <Link href={'/auth/login'} className='text-blue-500 underline'>Login</Link>
                    </p>
                    <button className='px-6 py-2 rounded  text-center text-white bg-blue-500'>Register</button>
                </div>
            </form>
        </GuestLayout>
    );
};

export default Register;
