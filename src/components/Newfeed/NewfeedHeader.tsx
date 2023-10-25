"use client"
import {RiMenu3Fill} from "react-icons/ri";
import {LoadingCircle, Menu} from "~/components";
import Link from "next/link";
import TextareaAutosize from "react-textarea-autosize";
import {BiImage} from "react-icons/bi";
import {FormEvent, useState} from "react";
import {useMutation, useQuery, useQueryClient} from "@tanstack/react-query";
import {toast, ToastContainer} from "react-toastify";
import Image from "next/image";
import AXIOSC from "~/services/AXIOSC";

const NewfeedHeader = () => {
    const queryClient = useQueryClient()
    const [menuOpen, setMenuOpen] = useState<boolean>(false)
    const [context, setContext] = useState<string>("")
    const [image, setImage] = useState<any>(null)
    const {data : user} = useQuery({
        queryKey: ["get", "auth", "profile", "user"],
        queryFn: async () => {
            const res = await AXIOSC.get("/auth/profile")
            return res.data
        }
    })
    const {mutate,isPending} = useMutation({
        mutationKey:["post","create","tweets"],
        mutationFn:async (tweet : any)=>{
            const res = await AXIOSC.post("/tweets",tweet)
            return res.data
        },
        onSuccess:()=>{
            queryClient.invalidateQueries({queryKey: ["get", "read", "tweets"]})
            setContext("")
            setImage(null)
            toast.success('Tweet successfully created!', {
                position: "top-center",
                autoClose: 1500,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: true,
                progress: undefined,
                theme: "dark",
                delay : 500
            });
        }
    })
    const handlePost = (e : FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if(image){
            mutate({ context ,user_id : user?.user.id ,image : image})
        }else {
            mutate({ context ,user_id : user?.user.id })
        }
    }
    return (
        <>
            <div className='pt-5 sticky top-0  text-gray-50 bg-black z-[100000] backdrop-blur bg-black/80 border-b-[0.5px] border-b-gray-600'>
                    <ToastContainer/>
                <div className='px-2 md:px-5 flex justify-between items-center'>
                    <div className="font-semibold text-xl">Home</div>
                    <div className=''>
                        <button className='block md:hidden p-2 rounded-full hover:bg-white/20' onClick={()=>setMenuOpen(!menuOpen)}>
                            <RiMenu3Fill className='text-2xl pointer-events-none'/>
                        </button>
                        <Menu open={menuOpen} setOpen={setMenuOpen}/>
                    </div>
                </div>
                <div className="w-full grid grid-cols-2 mt-5 text-sm">
                    <Link href={"/"} className='w-full py-4 text-center hover:bg-white/10'>
                        For you
                    </Link>
                    <Link href={"/following"} className='w-full py-4 text-center hover:bg-white/10'>
                        Following
                    </Link>
                </div>
            </div>
            <div className='w-full flex px-2 py-5 md:px-5 gap-x-2 md:gap-x-5 border-b-[0.5px] border-b-gray-600'>
                <div className="w-[40px] h-[40px] bg-white rounded-full overflow-hidden relative">
                    <Image src={user?.user?.image ? user.user.image : "/avatar.jpg"} alt={"Avatar"} fill sizes={"500"} priority/>
                </div>
                <form onSubmit={handlePost} className="flex-1">
                    <div>

                    </div>
                    <div className=' border-b-[0.5px] border-b-gray-600'>
                        <TextareaAutosize required value={context} onChange={e=>setContext(e.target.value)} className='resize-none h-auto w-full text-gray-50 overflow-y-hidden placeholder:text-sm md:placeholder:text-[20px] border-none outline-none bg-transparent py-5 caret-gray-50'  placeholder={"What happening now?"} maxRows={10} maxLength={300}/>
                    </div>
                    <div className="w-full flex justify-between items-center py-4">
                        <div className='flex-1'>
                            <div className='w-full flex'>
                                <label htmlFor="tweet-image" className='p-2 cursor-pointer text-xl text-blue-500 rounded-full hover:bg-white/40'>
                                    <BiImage/>
                                </label>
                                <input onChange={e=>setImage(e.target.value)} type="file" id='tweet-image' accept="image/jpeg,image/jpg,image/png" className='hidden'/>
                            </div>
                        </div>
                        <div>
                            <button className="px-4 w-full py-2 text-center hover:bg-opacity-80 transition bg-blue-500 rounded-3xl text-sm text-gray-100 font-normal md:font-semibold">
                                {isPending ? <LoadingCircle/> : "Post"}
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </>
    );
};

export default NewfeedHeader;
