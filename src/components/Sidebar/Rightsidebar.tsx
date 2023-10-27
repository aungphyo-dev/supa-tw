"use client"
import {BsSearch} from "react-icons/bs";
import {useQuery} from "@tanstack/react-query";
import { UserCard} from "~/components";
import AXIOSC from "~/services/AXIOSC";

const Rightsidebar = () => {
    const {data} = useQuery({
        queryKey: ["get","users"],
        queryFn: async () => {
            const res = await AXIOSC.get("/auth/users")
            return res.data
        }
    })
    return (
        <div className="w-full flex flex-col sticky top-0 h-screen overflow-hidden">
            <div className="w-full px-5">
                <div className="py-5 flex w-full">
                    <label htmlFor="search">
                        <BsSearch className='text-xl text-white absolute left-[35px] top-[36px]'/>
                    </label>
                    <input type="text" id='search' placeholder="Search" className='pl-[45px] text-white placeholder:text-gray-400 w-full outline-none bg-[#202327] focus:bg-transparent rounded-full border border-[#202327] focus:border-blue-500 py-3'/>
                </div>
            </div>
            <div className="w-full   text-white mb-4 px-5">
                <div className="w-full">
                    <h1 className='text-white font-semibold text-lg'>Who to follow you?</h1>
                </div>
            </div>
            <div className="w-full flex-1 flex flex-col rounded">
                {data?.users?.map((user:{id:number, user : any}) => <UserCard key={user?.id} user={user}/>)}
            </div>
        </div>
    );
};

export default Rightsidebar;
