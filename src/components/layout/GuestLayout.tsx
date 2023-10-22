"use client"
import React, {useEffect} from "react";
import {useRouter} from "next/navigation";
import Cookies from "js-cookie";
const GuestLayout = ({children}:{children:React.ReactNode}) => {
    const router = useRouter()
    useEffect(() => {
        router.prefetch("/")
    }, [router]);
    const authenticated = Cookies.get("auth");
    if  (Boolean(authenticated)){
        router.push("/")
    }
    return (
        <div className="w-full flex justify-center items-center">
            <main className='w-full'>
                {children}
            </main>
        </div>
    );
};

export default GuestLayout;
