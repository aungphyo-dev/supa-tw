"use client"
import Link from "next/link";
import {BsThreeDots, BsTwitter} from "react-icons/bs";
import {NAVIGATION_ITEMS} from "~/constants/navitems";
import {BiHome} from "react-icons/bi";
import {useQuery} from "@tanstack/react-query";
import {LoadingCircle, Logout} from "~/components";
import Image from "next/image";
import anime from "animejs";
import {useEffect, useState} from "react";
import {useAuthContext} from "~/components/Context/AuthContext";

const Leftsidebar = () => {
    const AXIOSC = useAuthContext()
    const [open, setOpen] = useState<boolean>(false)
    useEffect(() => {
        anime({
            targets: '.profile_dropdown',
            translateY: open ? '-65px' : "0",
            direction:"normal",
        });
    }, [open]);
    const {data, isLoading, error} = useQuery({
        queryKey: ["get", "auth", "profile", "user"],
        queryFn: async () => {
            const res = await AXIOSC.get("/auth/profile")
            return res.data
        }
    })
    return (
        <section className='sticky top-0 w-full flex flex-col items-stretch h-screen px-1 md:px-5 overflow-y-auto'>
            <div className='flex-1 flex items-center md:items-stretch flex-col space-y-4 my-4'>
                <Link href={"/"} className='text-2xl text-gray-50 px-2 md:px-6 py-2'>
                    <BsTwitter/>
                </Link>
                <Link scroll={false} className='text-gray-50 text-2xl space-x-4 hover:bg-white/50 transition flex justify-start w-fit items-center rounded-full md:rounded-3xl py-2 px-2 md:px-6' href="/">
                    <div>
                        <BiHome/>
                    </div>
                    <div className='text-xl hidden md:block'>
                        Home
                    </div>
                </Link>
                {
                    NAVIGATION_ITEMS.map(nav => <Link className='text-gray-50 text-2xl space-x-4 hover:bg-white/50 transition flex justify-start w-fit items-center rounded-full md:rounded-3xl py-2 px-2 md:px-6' href={`/${nav.title.toLowerCase()}`} key={nav.title}>
                        <div>
                            <nav.icon/>
                        </div>
                        <div className='text-xl hidden md:block'>
                            {nav.title}
                        </div>
                    </Link>)
                }
                <button className="hidden md:block px-1 md:px-4 w-full py-2 text-center hover:bg-opacity-80 transition bg-blue-500 rounded-3xl text-lg text-gray-100 font-semibold">
                    Tweet
                </button>
            </div>
            <div className='w-full relative'>
                <Logout open={open} setOpen={setOpen}/>
                <button onClick={()=>setOpen(!open)} className=" px-1 md:px-4 flex justify-center md:justify-between items-center w-full py-2 text-center hover:bg-white/20 transition bg-transparent rounded-full md:rounded-3xl text-gray-100 my-4">
                    <div className='flex justify-start items-center gap-x-3'>
                        <div className='w-8 h-8 bg-gray-500 relative rounded-full overflow-hidden'>
                            <Image src={!data?.user?.profile_avatar ? "/avatar.jpg" : data?.user?.profile_avatar}
                                   alt={"Profile"}
                                   className='object-cover'
                                   priority
                                   fill
                                   sizes={"500"}
                            />
                        </div>
                        <div className='text-start hidden md:block'>
                            <div className='font-semibold text-sm'> {isLoading ? <LoadingCircle/> : data?.user?.name}</div>
                            <div className='text-xs'> {data?.user?.username}</div>
                        </div>
                    </div>
                    <div className="hidden md:block">
                        <BsThreeDots/>
                    </div>
                </button>
            </div>
        </section>
    );
};

export default Leftsidebar;
