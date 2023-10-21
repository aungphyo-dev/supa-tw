"use client"
import {GuestLayout} from "~/components";
import Link from "next/link";
import axios from "axios";
import {useMutation} from "@tanstack/react-query";
import {RegisterData} from "~/constants/types";
import {useState} from "react";
import {string} from "postcss-selector-parser";

const Register = () => {
    const [data,setData] = useState<RegisterData>({
        name : "",
        email : "",
        password : "",
        password_confirmation : ""
    })
    const {mutate,isError,isPending,isSuccess} = useMutation({
        mutationKey:['post','auth','register'],
        mutationFn:async (data:{data : RegisterData})=>{
            const res = await axios.post("http://127.0.0.1:8000/api/auth/register",data)
            return res.data
        }
    });
    console.log(isError,isPending,isSuccess)
    return (
        <GuestLayout>
            <form className='w-full h-full flex flex-col justify-center items-center  p-8'>
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
