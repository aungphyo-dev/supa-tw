"use client"
import Link from "next/link";
import {BiArrowBack} from "react-icons/bi";
import {FaCalendarAlt} from "react-icons/fa";
import {AuthLayout, LoadingCircle, Tweetcard} from "~/components";
import {useQuery} from "@tanstack/react-query";
import {AiOutlineLink} from "react-icons/ai";
import Image from "next/image";
import {CiLocationOn} from "react-icons/ci";
import AXIOSC from "~/services/AXIOSC";
import {useInfiniteQuery} from "@tanstack/react-query";


const Profile = () => {
    const {data, isLoading} = useQuery({
        queryKey: ["get", "auth", "profile", "user"],
        queryFn: async () => {
            const res = await AXIOSC.get("/auth/profile")
            return res.data
        },

    })
    const {data:tweets,fetchNextPage,isFetchingNextPage} = useInfiniteQuery({
        queryKey : ["get","read","tweets"],
        queryFn:async ({pageParam}: {pageParam:number})=>{
            const res = await AXIOSC.get(`/tweets/user/${data?.user?.id}?page=${pageParam}`)
            return res.data
        },
        initialPageParam: 0,
        getNextPageParam: (lastPage) => {
            return lastPage.tweets.current_page + 1
        },
        enabled : Boolean(data?.user)

    })
    return (
        <AuthLayout>
            <main className='w-full md:border-x-[0.5px] border-gray-600'>
                <div className="w-full min-h-screen">
                    <div
                        className='font-semibold text-gray-50 text-xl sticky top-0 bg-black z-[100000] backdrop-blur bg-black/80 border-b-[0.5px] border-b-gray-600 py-3 px-2 md:px-5'>
                        <div className='w-fit flex justify-center items-center gap-x-2'>
                            <Link href={"/"} className='text-xl text-white hover:bg-white/20 p-3 rounded-full'>
                                <BiArrowBack/>
                            </Link>
                            <div>
                                <div>
                                    {isLoading ? <LoadingCircle/> : data?.user?.name}
                                </div>
                                <p className='text-sm text-gray-400'>{data?.user?.tweets?.length} Post</p>
                            </div>
                        </div>
                    </div>
                    <div className='w-full'>
                        <div className="w-full h-[240px] bg-white"></div>
                        <div className='w-full px-2 md:px-5 mt-[-75px] mb-3 flex justify-between items-end'>
                            <div className='w-[150px] h-[150px] border-2 border-black rounded-full bg-gray-500 relative overflow-hidden'>
                                <Image src={!data?.user?.profile_avatar ? "/avatar.jpg" : data?.user?.profile_avatar}
                                       alt={"Profile"}
                                       className='object-cover'
                                       priority
                                       fill
                                       sizes={"500"}
                                />
                            </div>
                            <button className='text-white px-5 py-2 rounded-full border border-gray-600 mb-3'>
                                Edit profile
                            </button>
                        </div>
                        <div className="w-full px-2 md:px-5">
                            <div className='w-full flex flex-col'>
                                <h1 className='text-white font-semibold text-xl'>{isLoading ? <LoadingCircle/> : data?.user?.name}</h1>
                                <p className='text-sm text-gray-400'>
                                    {data?.user?.username}
                                </p>
                                {
                                    data?.user?.bio && <p className='text-sm text-gray-400 mt-4'>{data?.user?.bio}</p>
                                }
                            </div>
                            <div className="w-full flex gap-3 flex-wrap my-3">
                                {
                                    data?.user?.location && <div className='w-fit flex text-gray-400 text-sm justify-center items-center gap-x-2'>
                                        <CiLocationOn/>
                                        <div>
                                            {data?.user?.location}
                                        </div>
                                    </div>
                                }
                                {data?.user?.website && <div
                                    className='w-fit flex text-sm justify-center items-center gap-x-2'>
                                    <AiOutlineLink className="text-gray-400"/>
                                    <Link href={data?.user?.website} className="text-blue-500 hover:underline " target={"_blank"}>
                                        {data?.user?.website}
                                    </Link>
                                </div>}
                                <div className='w-fit flex text-gray-400 text-sm justify-center items-center gap-x-2'>
                                    <FaCalendarAlt/>
                                    <div>
                                        Joined {isLoading ? <LoadingCircle/> : data?.user?.created_at}
                                    </div>
                                </div>
                            </div>
                            <div className="w-full flex gap-3 flex-wrap my-3">
                                <Link href={"/profile/following"} className='w-fit hover:underline flex text-gray-400 text-sm justify-center items-center gap-x-2'>
                                    {!isLoading && data?.user?.followings.length + " following"}
                                    </Link>
                                <Link href={"/profile/followers"} className='w-fit hover:underline flex text-gray-400 text-sm justify-center items-center gap-x-2'>
                                    {!isLoading && data?.user?.followers.length + " follower"}
                                </Link>
                            </div>

                        </div>
                    </div>
                    <div className="w-ful py-5  min-h-screen border-t border-t-gray-600">
                        {
                            tweets?.pages.map( page =>(
                                page.tweets.data.map((tweet : { id: number, tweet: string }) => <Tweetcard key={tweet?.id} tweet={tweet}/>)
                            ))
                        }
                        <div className="w-full my-5 flex justify-center items-center">
                            {
                                (isLoading || isFetchingNextPage) && <LoadingCircle/>
                            }
                            {
                                (!isLoading && !isFetchingNextPage && data?.pageParams && data?.pages[0].tweets.last_page !== data?.pageParams.length ) && <button onClick={() => fetchNextPage()}
                                                                                                                                                                   className="w-full  bg-black hover:bg-white/20 py-2 text-white">
                                    show more
                                </button>
                            }
                        </div>
                    </div>
                </div>
            </main>
        </AuthLayout>
    );
};

export default Profile;
