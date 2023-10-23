"use client"
import {LoadingCircle, NewfeedHeader, Tweetcard} from "~/components";
import {useAuthContext} from "~/components/Context/AuthContext";
import {useInfiniteQuery} from "@tanstack/react-query";
import { useState} from "react";

const Newfeed = () => {
    const AXIOSC = useAuthContext()
    const {data,isLoading,fetchNextPage} = useInfiniteQuery({
        queryKey : ["get","read","tweets"],
        queryFn:async ({pageParam}: {pageParam:number})=>{
            const res = await AXIOSC.get(`/tweets?page=${pageParam}`)
            return res.data
        },
        initialPageParam: 0,
        getNextPageParam: (lastPage) => {
            return lastPage.tweets.current_page + 1
        },
    })
    console.log(data)
    return (
        <main className='w-full md:border-x-[0.5px] border-gray-600'>
            <div className="w-full min-h-screen">
                <NewfeedHeader/>
                <div className="w-full flex flex-col pt-5 gap-y-5">
                    {
                        data?.pages.map(page=>(
                            page?.tweets?.data?.map((tweet : { id: number, tweet: string }) => <Tweetcard key={tweet?.id} tweet={tweet}/>)
                        ))
                    }
                </div>
                <div className="w-full my-5 flex justify-center items-center">
                    {
                        isLoading && <LoadingCircle/>
                    }
                    {
                        (!isLoading && data?.pageParams && data?.pages[0].tweets.last_page !== data?.pageParams.length ) && <button onClick={() => fetchNextPage()}
                                className="w-full  bg-black hover:bg-white/20 py-2 text-white">
                            show more
                        </button>
                    }
                </div>
            </div>
        </main>
    );
};

export default Newfeed;
