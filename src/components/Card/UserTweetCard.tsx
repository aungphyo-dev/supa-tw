import Image from "next/image";
import {BsHeart, BsThreeDots} from "react-icons/bs";
import {FaRegComment} from "react-icons/fa6";
import {IoIosStats} from "react-icons/io";
import {IoShareOutline} from "react-icons/io5";

const UserTweetCard = ({tweet} :{tweet : any}) => {
    return (
        <div className="w-full flex gap-x-2 md:gap-x-5 px-2 md:px-5 py-5 border-b-[0.5px] border-b-gray-600">
            <div className='w-[40px] h-[40px] rounded-full bg-white relative overflow-hidden'>
                <Image sizes={"500"} fill src={tweet?.author?.image ? `http://127.0.0.1:8000/storage/users/${tweet.author.image}` : "/avatar.jpg"} alt={"Avatar"}
                       className={"block w-full h-full"}
                />
            </div>
            <div className="flex-1">
                <div className="w-full flex justify-between items-start text-white mb-3">
                    <div className="flex flex-row justify-start items-center gap-2 overflow-hidden">
                        <div className='hover:underline text-sm font-semibold'>
                            {tweet?.author?.name}
                        </div>
                        <div className='text-xs text-gray-300'>
                            {tweet?.author?.username}
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
                    {tweet?.context}
                </div>
                {tweet?.image && <div className='relative h-[200px] md:h-[400px] w-full rounded-2xl overflow-hidden'>
                    <Image fill sizes={"500"} src={tweet?.image ? `http://127.0.0.1:8000/storage/tweets/${tweet.image}` : "/avatar.jpg"} alt={"Avatar"}
                           className={"object-cover"}
                    />
                </div>}
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

export default UserTweetCard;