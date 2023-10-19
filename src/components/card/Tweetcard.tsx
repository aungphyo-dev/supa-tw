import Image from "next/image";
import {BsHeart, BsThreeDots} from "react-icons/bs";
import {FaRegComment} from "react-icons/fa6";
import {IoIosStats} from "react-icons/io";
import {IoShareOutline} from "react-icons/io5";

const Tweetcard = () => {
    return (
        <div className="w-full flex gap-x-2 md:gap-x-5 lg:gap-x-9 px-2 md:px-5 py-5 border-b-[0.5px] border-b-gray-600">
            <div className='w-[40px] h-[40px] rounded-full bg-white'></div>
            <div className="flex-1">
                <div className="w-full flex justify-between items-start text-white mb-3">
                    <div className="flex flex-col md:flex-row justify-start items-start md:items-center gap-2">
                        <div className='text-sm font-semibold'>
                            Userblabla
                        </div>
                        <div className='text-xs text-gray-300'>
                            @username
                        </div>
                        <div className='text-xs text-gray-300'>
                            Oct 14
                        </div>
                    </div>
                    <button className="">
                        <BsThreeDots/>
                    </button>
                </div>
                <div className='text-sm text-white mb-5'>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias aperiam dolorem dolores explicabo fuga ipsam laborum libero magnam numquam obcaecati quaerat quas qui reprehenderit, rerum soluta ullam veniam vero, voluptates!
                </div>
                <div className='relative h-[200px] md:h-[400px] w-full rounded-2xl overflow-hidden'>
                    <Image src={"/supablog.png"} alt={"Tweet"} fill priority sizes="500" className='object-cover aspect-auto'/>
                </div>
                <div className="my-3 w-full flex justify-between items-center text-gray-300">
                    <div className="flex justify-start items-center gap-x-2">
                        <button>
                            <BsHeart/>
                        </button>
                        <div>
                            3
                        </div>
                    </div>
                    <div className="flex justify-start items-center gap-x-2">
                        <button>
                            <FaRegComment/>
                        </button>
                        <div>
                            3
                        </div>
                    </div>
                    <div className="flex justify-start items-center gap-x-2">
                        <button>
                            <IoIosStats/>
                        </button>
                        <div>
                            3
                        </div>
                    </div>
                    <div className="flex justify-start items-center">
                        <button>
                            <IoShareOutline/>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Tweetcard;

