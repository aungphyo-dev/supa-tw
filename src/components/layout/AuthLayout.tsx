"use client"
import {Leftsidebar, Rightsidebar} from "~/components";
import React, {useEffect} from "react";
import {useRouter} from "next/navigation";
import Cookies from "js-cookie";
import AuthContextProvider from "~/components/Context/AuthContext";

const AuthLayout = ({children}: { children: React.ReactNode }) => {
    const router = useRouter()
    const authenticated = Cookies.get("auth");
    useEffect(() => {
        if (!Boolean(authenticated)) {
            router.push("/auth/login")
        }
        router.prefetch("/auth/login")
    }, [router, authenticated]);
    return (
            <div className='max-w-screen-xl w-full h-full flex md:grid grid-cols-12 relative'>
                {/*Left side bar*/}
                <section className='hidden md:block md:col-span-4 lg:col-span-3'>
                    <Leftsidebar/>
                </section>
                {/*New feed*/}
                <section className="flex-1 md:col-span-8 lg:col-span-6">
                    {children}
                </section>
                {/*Right side bar*/}
                <section className='col-span-3 hidden lg:block'>
                    <Rightsidebar/>
                </section>
            </div>
    );
};

export default AuthLayout;
