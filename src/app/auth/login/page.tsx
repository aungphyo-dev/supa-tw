"use client"
import axios from "axios";
import Link from "next/link";
import {GuestLayout} from "~/components";
import {useRouter} from "next/navigation";
import {useMutation} from "@tanstack/react-query";
import {FormEvent, useEffect, useState} from "react";
import {toast, ToastContainer} from "react-toastify";
import Cookies from "js-cookie"
const Login = () => {
    const router = useRouter()
    useEffect(() => {
        router.prefetch("/profile")
    }, [router]);
    const [email, setEmail] = useState<string>("")
    const [password, setPassword] = useState<string>("")
    const userData = {email,password}
    const {isPending,isSuccess,mutate,data} = useMutation({
        mutationKey:["post","register","auth","user"],
        mutationFn : async (userData : any)=> {
            const res = await axios.post("http://127.0.0.1:8000/api/auth/login",userData)
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
            setEmail("")
            setPassword("")
            router.push("/profile")
        }
    })
    useEffect(() => {
        if  (isSuccess){
            Cookies.set('auth',data.authorization.token, { expires: 366 })
        }
    }, [isSuccess,data]);
    console.log(data,isSuccess)
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

                    <div className="col-span-6">
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

                    <div className="col-span-6 sm:flex justify-between sm:items-center gap-4">
                        <p className="text-sm text-gray-200 sm:mt-0">
                            Have not an account?
                            <Link href={"/auth/register"} className="underline">Register</Link>.
                        </p>
                        <button
                            className="mt-3 sm:mt-0 inline-block shrink-0 rounded-md border border-blue-600 bg-blue-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-transparent hover:text-blue-600 focus:outline-none focus:ring active:text-blue-500"
                        >
                            Login
                        </button>
                    </div>

                </form>
            </div>
        </GuestLayout>
    );
};

export default Login;
