"use client"
import {AuthLayout, FollowingCard, LoadingCircle} from "~/components";
import Link from "next/link";
import {BiArrowBack} from "react-icons/bi";
import {useQuery} from "@tanstack/react-query";
import AXIOSC from "~/services/AXIOSC";

const ProfileFollowingPage = () => {
    const {data, isLoading} = useQuery({
        queryKey: ["get", "auth", "profile", "user","following"],
        queryFn: async () => {
            const res = await AXIOSC.get("/auth/profile")
            return res.data
        }
    })
    console.log(data)
    return (
        <AuthLayout>
            <main className='w-full md:border-x-[0.5px] border-gray-600'>
                <div className="w-full min-h-screen">
                    <div
                        className='font-semibold text-gray-50 text-xl sticky top-0 bg-black z-[100000] backdrop-blur bg-black/80 border-b-[0.5px] border-b-gray-600 py-3 px-2 md:px-5'>
                        <div className='w-fit flex justify-center items-center gap-x-2'>
                            <Link href={"/profile"} className='text-xl text-white hover:bg-white/20 p-3 rounded-full'>
                                <BiArrowBack/>
                            </Link>
                            <div>
                                <p className='text-sm text-gray-400'>{data?.user?.followings?.length} Following</p>
                            </div>
                        </div>
                    </div>
                    {isLoading && <div className="w-full my-5 flex justify-center items-center">
                        <LoadingCircle/>
                    </div>}
                    <div className="min-h-screen w-full flex-1 flex flex-col gap-y-2 rounded">
                        {data?.user?.followings?.map((user:{id:number, user : any}) => <FollowingCard key={user?.id} user={user}/>)}
                    </div>
                </div>
            </main>
        </AuthLayout>
    );
};

export default ProfileFollowingPage;