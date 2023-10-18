import {Leftsidebar, Tweetcard} from "~/components";

const Home = () => {

    return (
        <div className="w-full h-full flex justify-center items-center relative">
            <div className='max-w-screen-xl w-full h-full grid grid-cols-12 relative'>
                <section className='col-span-3'>
                    <Leftsidebar/>
                </section>
                <main className='col-span-6 border-x-[0.5px] border-gray-600'>
                    <div className="w-full min-h-screen pt-2">
                       <div className='font-semibold text-gray-50 text-xl p-5 sticky top-0 bg-black z-[100000]'>
                           Home
                       </div>
                        <div className='w-full grid grid-cols-12 gap-x-9 p-5 border-b-[0.5px] border-b-gray-600'>
                            <div className="col-span-1">
                                <div className="w-[40px] h-[40px] bg-white rounded-full"></div>
                            </div>
                            <div className="col-span-11">
                                <div></div>
                                <div className=' border-b-[0.5px] border-b-gray-600'>
                                    <input type="text" className='w-full text-gray-50 placeholder:text-lg border-none outline-none bg-transparent py-5 caret-gray-50' placeholder={"What happening now?"}/>
                                </div>
                                <div className="w-full flex justify-between items-center py-4">
                                    <div></div>
                                    <div>
                                        <button className="px-4 w-full py-2 text-center hover:bg-opacity-80 transition bg-blue-500 rounded-3xl text-sm text-gray-100 font-semibold">
                                            Post
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="w-full flex flex-col py-5 gap-y-5">
                            {
                                Array.from({length : 5}).map((_,i)=>(
                                    <Tweetcard/>
                                ))
                            }
                        </div>
                    </div>
                </main>
                <section className='col-span-3'></section>
            </div>
        </div>
    );
};

export default Home;
