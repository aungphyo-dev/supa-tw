"use client"
import {GuestLayout} from "~/components";
import {FormEvent, useEffect, useState} from "react";
import Link from "next/link";
import {useMutation} from "@tanstack/react-query";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import {useRouter} from "next/navigation";
const Register = () => {
    const router = useRouter()
    useEffect(() => {
        router.prefetch("/auth/login")
    }, [router]);
    const [name, setName] = useState<string>("")
    const [email, setEmail] = useState<string>("")
    const [password, setPassword] = useState<string>("")
    const [passwordConfirmation, setPasswordConfirmation] = useState<string>("")
    const userData = {name,email,password,password_confirmation:passwordConfirmation}
    const {isPending,mutate,data} = useMutation({
        mutationKey:["post","register","auth","user"],
        mutationFn : async (userData : any)=> {
            const res = await axios.post("http://127.0.0.1:8000/api/auth/register",userData)
            return res.data;
        },
        onError:()=>{
            toast.error('Something went wrong!', {
                containerId:"error",
                position: "top-center",
                autoClose: 5500,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
                delay : 1000
            });
        },
        onSuccess:()=>{
            setName("")
            setEmail("")
            setPassword("")
            setPasswordConfirmation("")
            toast.success('User register successfully!', {
                containerId:"success",
                position: "top-center",
                autoClose: 5500,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
                delay : 1000
            });
        }
    })
    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        mutate(userData)
    }
    return (
        <GuestLayout>
            <ToastContainer/>
            <div className="mx-auto h-screen max-w-screen-sm px-3 flex flex-col justify-center items-center">
                <h1
                    className="w-full mt-6 text-2xl font-bold text-gray-50 sm:text-3xl md:text-4xl text-center"
                >
                    Welcome to Twitter
                </h1>
                <form onSubmit={handleSubmit} className="w-full mt-8 grid grid-cols-6 gap-6">
                    <div className="col-span-6">
                        <label
                            htmlFor="FirstName"
                            className="block text-sm font-medium text-white"
                        >
                            Name
                        </label>

                        <input
                            type="text"
                            value={name}
                            onChange={(e)=>setName(e.target.value)}
                            id="name"
                            name="name"
                            className="p-2 mt-1 w-full rounded-md outline-none text-white border focus:border-blue-500 bg-[#16181C] text-sm shadow-sm"
                        />
                    </div>
                    <div className="col-span-6">
                        <label htmlFor="Email" className="block text-sm font-medium text-white">
                            Email
                        </label>

                        <input
                            type="email"
                            value={email}
                            onChange={(e)=>setEmail(e.target.value)}
                            id="Email"
                            name="email"
                            className="p-2 mt-1 w-full rounded-md outline-none text-white border focus:border-blue-500 bg-[#16181C] text-sm shadow-sm"
                        />
                    </div>

                    <div className="col-span-6 sm:col-span-3">
                        <label
                            htmlFor="Password"
                            className="block text-sm font-medium text-white"
                        >
                            Password
                        </label>

                        <input
                            type="password"
                            value={password}
                            onChange={(e)=>setPassword(e.target.value)}
                            id="Password"
                            name="password"
                            className="p-2 mt-1 w-full rounded-md outline-none text-white border focus:border-blue-500 bg-[#16181C] text-sm shadow-sm"
                        />
                    </div>

                    <div className="col-span-6 sm:col-span-3">
                        <label
                            htmlFor="PasswordConfirmation"
                            className="block text-sm font-medium text-white"
                        >
                            Password Confirmation
                        </label>

                        <input
                            type="password"
                            value={passwordConfirmation}
                            onChange={(e)=>setPasswordConfirmation(e.target.value)}
                            id="PasswordConfirmation"
                            name="password_confirmation"
                            className="p-2 mt-1 w-full rounded-md outline-none text-white border focus:border-blue-500 bg-[#16181C] text-sm shadow-sm"
                        />
                    </div>
                    <div className="col-span-6 sm:flex justify-between sm:items-center gap-4">
                        <p className="text-sm text-gray-200">
                            Already have an account?
                            <Link href={"/auth/login"} className="underline">Log in</Link>.
                        </p>
                        <button
                            className="mt-3 sm:mt-0 inline-block shrink-0 rounded-md border border-blue-600 bg-blue-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-transparent hover:text-blue-600 focus:outline-none focus:ring active:text-blue-500"
                        >
                            Create an account
                        </button>
                    </div>

                </form>
            </div>
        </GuestLayout>
    );
};

export default Register;
