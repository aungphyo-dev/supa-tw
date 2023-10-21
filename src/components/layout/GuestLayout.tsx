"use client"
import React from "react";
import Image from "next/image";
const GuestLayout = ({children}:{children:React.ReactNode}) => {
    return (
        <div className="w-full flex justify-center items-center">
            <main className='w-full'>
                {children}
            </main>
        </div>
    );
};

export default GuestLayout;
