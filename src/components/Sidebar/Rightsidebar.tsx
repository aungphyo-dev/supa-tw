"use client"
import {BsSearch} from "react-icons/bs";
import {useQuery} from "@tanstack/react-query";
import { UserCard} from "~/components";
import AXIOSC from "~/services/AXIOSC";

const Rightsidebar = () => {
    const {data} = useQuery({
        queryKey: ["get", "auth", "users"],
        queryFn: async () => {
            const res = await AXIOSC.get("/auth/users")
            return res.data
        }
    })
    return (
        <div className="w-full flex flex-col sticky top-0 h-screen overflow-hidden px-5">
            <div className="w-full">
                <div className="py-5 flex w-full">
                    <label htmlFor="search">
                        <BsSearch className='text-xl text-white absolute left-[35px] top-[36px]'/>
                    </label>
                    <input type="text" id='search' placeholder="Search" className='pl-[45px] placeholder:text-gray-400 w-full outline-none bg-[#202327] focus:bg-transparent rounded-full border border-[#202327] focus:border-blue-500 py-3'/>
                </div>
            </div>
            <div className="w-full   text-white mb-4">
                <div className="w-full">
                    <h1 className='text-white font-semibold text-lg'>Who to follow you?</h1>
                </div>
            </div>
            <div className="w-full flex-1 flex flex-col gap-y-2 bg-[#202327] rounded">
                {data?.users?.data?.map((user:{id:number, user : any}) => <UserCard key={user?.id} user={user}/>)}
            </div>
        </div>
    );
};

export default Rightsidebar;
