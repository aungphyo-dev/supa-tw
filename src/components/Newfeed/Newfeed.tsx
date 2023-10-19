"use client"
import Link from "next/link";
import {Tweetcard} from "~/components";

const Newfeed = () => {
    return (
        <main className='w-full border-x-[0.5px] border-gray-600'>
            <div className="w-full min-h-screen pt-2">
                <div className='font-semibold text-gray-50 text-xl pt-5 sticky top-0 bg-black z-[100000] backdrop-blur bg-black/10 border-b-[0.5px] border-b-gray-600'>
                    <div className='px-2 md:px-5'>Home</div>
                    <div className="w-full grid grid-cols-2 mt-5 text-sm">
                        <Link href={"/"} className='w-full py-4 text-center hover:bg-white/10'>
                            For you
                        </Link>
                        <Link href={"/"} className='w-full py-4 text-center hover:bg-white/10'>
                            Following
                        </Link>
                    </div>
                </div>
                <div className='w-full flex px-2 py-5 md:px-5 gap-x-2 md:gap-x-5 lg:gap-x-9 border-b-[0.5px] border-b-gray-600'>
                    <div className="w-[40px] h-[40px] bg-white rounded-full"></div>
                    <div className="flex-1">
                        <div></div>
                        <div className=' border-b-[0.5px] border-b-gray-600'>
                            <input type="text" className='w-full text-gray-50 placeholder:text-sm md:placeholder:text-[20px] border-none outline-none bg-transparent py-5 caret-gray-50' placeholder={"What happening now?"}/>
                        </div>
                        <div className="w-full flex justify-between items-center py-4">
                            <div></div>
                            <div>
                                <button className="px-4 w-full py-2 text-center hover:bg-opacity-80 transition bg-blue-500 rounded-3xl text-sm text-gray-100 font-normal md:font-semibold">
                                    Post
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-full flex flex-col py-5 gap-y-5">
                    <Tweetcard/>
                    <Tweetcard/>
                    <Tweetcard/>
                    <Tweetcard/>
                    <Tweetcard/>
                    <Tweetcard/>
                    <Tweetcard/>
                    <Tweetcard/>
                    <Tweetcard/>
                    <Tweetcard/>
                    <Tweetcard/>
                    <Tweetcard/>
                    <Tweetcard/>
                    <Tweetcard/>
                    <Tweetcard/>
                    <Tweetcard/>
                    <Tweetcard/>
                    <Tweetcard/>
                    <Tweetcard/>
                </div>
            </div>
        </main>
    );
};

export default Newfeed;
