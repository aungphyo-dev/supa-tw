"use client"
import {GuestLayout} from "~/components";
import {FormEvent, useState} from "react";
import Link from "next/link";
import {useMutation} from "@tanstack/react-query";
import axios from "axios";

const Register = () => {
    const [name, setName] = useState<string>("")
    const [email, setEmail] = useState<string>("")
    const [password, setPassword] = useState<string>("")
    const [passwordConfirmation, setPasswordConfirmation] = useState<string>("")
    const data = {name,email,password,password_confirmation:passwordConfirmation}
    const {isError,error,isPending,mutate} = useMutation({
        mutationKey:["post","register","auth","user"],
        mutationFn : async (data : any)=> {
            const res = await axios.post("http://127.0.0.1:8000/api/auth/register",data)
            return res.data;
        }
    })
    console.log(isError,isPending,error)
    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        console.log({name, email, password, password_confirmation: passwordConfirmation})
    }
    return (
        <GuestLayout>
            <div className="mx-auto max-w-screen-sm px-3">
                <h1
                    className="mt-6 text-2xl font-bold text-gray-50 sm:text-3xl md:text-4xl text-center"
                >
                    Welcome to Twitter
                </h1>
                <form onSubmit={handleSubmit} className="mt-8 grid grid-cols-6 gap-6">
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
                    <div className="col-span-6 sm:flex sm:items-center sm:gap-4">
                        <button
                            className="inline-block shrink-0 rounded-md border border-blue-600 bg-blue-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-transparent hover:text-blue-600 focus:outline-none focus:ring active:text-blue-500"
                        >
                            Create an account
                        </button>

                        <p className="mt-4 text-sm text-gray-200 sm:mt-0">
                            Already have an account?
                            <Link href={"/auth/login"} className="underline">Log in</Link>.
                        </p>
                    </div>

                </form>
            </div>
        </GuestLayout>
    );
};

export default Register;
