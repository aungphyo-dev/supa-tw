"use client"
import {AiOutlineClose} from "react-icons/ai";
import { BiImageAdd} from "react-icons/bi";
import {FormEvent, useEffect, useState} from "react";
import ImagePreview from "~/components/Partials/ImagePreview";
import {useMutation, useQueryClient} from "@tanstack/react-query";
import AXIOSC from "~/services/AXIOSC";
import {toast, ToastContainer} from "react-toastify";
import anime from "animejs";

const UserInfoEditForm = ({edit,setEdit}:{
    edit:boolean,
    setEdit : (e : boolean) =>void
}) => {
    const queryClient = useQueryClient();
    const [profile, setProfile] = useState<any>(null);
    const [cover, setCover] = useState<any>(null)
    const [bio, setBio] = useState<string>("")
    const [website, setWebsite] = useState<string>("")
    const [location, setLocation] = useState<string>("")
    const {isPending,mutate,data,error} = useMutation({
        mutationKey:["put","user","update"],
        mutationFn:async (userData:any)=>{
            const res = await AXIOSC.put("/auth/update",userData);
            return res.data;
        },
        onSuccess:()=>{
            queryClient.invalidateQueries({queryKey: ["get", "auth", "profile", "user"]})
            toast.success('User successfully updated!', {
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
    useEffect(() => {
        anime({
            targets: '.bgMenu',
            opacity: edit ? '1' : "0",
            direction:"normal",
        });
        anime({
            targets: '.bgEdit',
            height: edit ? '100vh' : "0",
            direction:"normal",
        });
    }, [edit]);
    const handleChange = (e : FormEvent)=>{
        e.preventDefault()
        const userData = {
            profile_avatar:profile,cover_avatar:cover,bio,website,location

        }
        mutate(userData)
    }
    return (
        <>
            <ToastContainer/>
            <div className={`bgMenu fixed inset-0 h-screen opacity-0 ${edit ? "pointer-events-auto" : "pointer-events-none"} bg-white/10 backdrop-blur z-[100000000]`} onClick={()=>setEdit(false)}></div>
            <div className='bgEdit fixed inset-0 h-0 overflow-hidden bg-white/10 backdrop-blur z-[1000000000]  pointer-events-none'>
                <form onSubmit={handleChange} className='pointer-events-auto h-[90vh] max-w-screen-sm mx-auto my-[5vh]  overflow-y-auto bg-black px-4 rounded'>
                    <div className="w-full flex py-3 justify-between items-center sticky top-0 backdrop-blur bg-black/20 z-[1000000000] ">
                        <div className="flex justify-center items-center">
                            <button type={"button"}
                                className="text-xl text-white hover:bg-white/20 p-3 rounded-full mr-2"
                            >
                                <AiOutlineClose />
                            </button>
                            <div className="text-white text-xl font-semibold">Edit Profile</div>
                        </div>
                        <button type={"submit"} className='text-black font-semibold text-sm bg-gray-300 px-4 py-2 rounded-full'>save</button>
                    </div>
                    <div className='mb-6'>
                        <div className="w-full h-[200px] bg-black flex justify-center items-center">
                            {!cover && <label htmlFor="cover-avatar"
                                    className='p-2 cursor-pointer text-xl text-blue-500 rounded-full hover:bg-white/40'>
                                <BiImageAdd/>
                            </label>}
                            <input type="file" onChange={e=>setCover(e.target?.files?.[0])} id='cover-avatar' accept="image/jpeg,image/jpg,image/png" className='hidden'/>
                            <ImagePreview image={cover} className='w-full h-[200px] rounded-none'/>
                        </div>
                        <div className="w-[100px] h-[100px] rounded-full bg-black -mt-[45px] mx-5 flex justify-center items-center">
                            {!profile &&  <label htmlFor="profile-avatar"
                                    className='p-2 cursor-pointer text-xl text-blue-500 rounded-full hover:bg-white/40'>
                                <BiImageAdd/>
                            </label>}
                            <input onChange={e=>setProfile(e.target?.files?.[0])} type="file" id='profile-avatar' accept="image/jpeg,image/jpg,image/png" className='hidden'/>
                            <ImagePreview image={profile} className='h-[100px] w-[100px] rounded-full border-2 border-gray-600'/>
                        </div>
                    </div>
                    <div>
                        <div className='mb-6'>
                            <label
                                htmlFor="name"
                                className="block text-white overflow-hidden rounded-md border border-gray-200 px-3 py-2 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600"
                            >
                                <span className="text-xs font-medium text-gray-700"> Name </span>
                                <input
                                    type="text"
                                    id="name"
                                    className="mt-1 w-full border-none p-0 focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm bg-black text-white"
                                />
                            </label>
                        </div>
                        <div className='mb-6'>
                            <label
                                htmlFor="bio"
                                className="block text-white overflow-hidden rounded-md border border-gray-200 px-3 py-2 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600"
                            >
                                <span className="text-xs font-medium text-gray-700"> Bio </span>

                                <input
                                    type="text"
                                    id="bio"
                                    value={bio}
                                    onChange={e=>setBio(e.target.value)}
                                    className="mt-1 w-full border-none p-0 focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm bg-black text-white"
                                />
                            </label>
                        </div>
                        <div className='mb-6'>
                            <label
                                htmlFor="website"
                                className="block text-white overflow-hidden rounded-md border border-gray-200 px-3 py-2 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600"
                            >
                                <span className="text-xs font-medium text-gray-700"> Website </span>
                                <input
                                    type="text"
                                    id="website"
                                    value={website}
                                    onChange={e=>setWebsite(e.target.value)}
                                    className="mt-1 w-full border-none p-0 focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm bg-black text-white"
                                />
                            </label>
                        </div>
                        <div className='mb-6'>
                            <label
                                htmlFor="location"
                                className="block text-white overflow-hidden rounded-md border border-gray-200 px-3 py-2 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600"
                            >
                                <span className="text-xs font-medium text-gray-700"> Location </span>
                                <input
                                    type="text"
                                    id="location"
                                    value={location}
                                    onChange={e=>setLocation(e.target.value)}
                                    className="mt-1 w-full border-none p-0 focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm bg-black text-white"
                                />
                            </label>
                        </div>
                    </div>
                </form>
            </div>
        </>
    );
};

export default UserInfoEditForm;
