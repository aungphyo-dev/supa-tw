"use client"
import React from "react";
const GuestLayout = ({children}:{children:React.ReactNode}) => {
    return (
        <div className='absolute inset-0 flex justify-center items-center'>
            <div className="w-[450px] bg-gray-800 rounded">
                {children}
            </div>
        </div>
    );
};

export default GuestLayout;
