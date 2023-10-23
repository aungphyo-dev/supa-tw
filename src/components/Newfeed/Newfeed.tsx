"use client"
import {LoadingCircle, NewfeedHeader, Tweetcard} from "~/components";
import {useAuthContext} from "~/components/Context/AuthContext";
import {useQuery} from "@tanstack/react-query";

const Newfeed = () => {
    const AXIOSC = useAuthContext()
    const {data,isLoading} = useQuery({
        queryKey : ["get","read","tweets"],
        queryFn:async ()=>{
            const res = await AXIOSC.get("/tweets")
            return res.data
        },
        refetchInterval: 1000
    })
    console.log(data)
    return (
        <main className='w-full md:border-x-[0.5px] border-gray-600'>
            <div className="w-full min-h-screen">
                <NewfeedHeader/>
                <div className="w-full flex flex-col pt-5 gap-y-5">
                    {!isLoading && data?.tweets?.map((tweet : { id: number, tweet: string }) => <Tweetcard key={tweet?.id} tweet={tweet}/>)}
                </div>
                <div className="w-full my-5 flex justify-center items-center">
                    {isLoading ? <LoadingCircle/> : <button className="w-full  bg-black hover:bg-white/20 py-2 text-white">
                        show more
                    </button>}
                </div>
            </div>
        </main>
    );
};

export default Newfeed;
