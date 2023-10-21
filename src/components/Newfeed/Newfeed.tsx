"use client"
import {NewfeedHeader, Tweetcard} from "~/components";

const Newfeed = () => {
    return (
        <main className='w-full md:border-x-[0.5px] border-gray-600'>
            <div className="w-full min-h-screen">
                <NewfeedHeader/>
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
