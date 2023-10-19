import Link from "next/link";
import {BiArrowBack} from "react-icons/bi";
import {FaCalendarAlt} from "react-icons/fa";

const Profile = () => {
    return (
        <main className='w-full md:border-x-[0.5px] border-gray-600'>
            <div className="w-full min-h-screen">
                <div className='font-semibold text-gray-50 text-xl sticky top-0 bg-black z-[100000] backdrop-blur bg-black/10 border-b-[0.5px] border-b-gray-600 py-3 px-2 md:px-5'>
                    <div className='w-fit flex justify-center items-center gap-x-2'>
                        <Link href={"/"} className='text-xl text-white hover:bg-white/20 p-3 rounded-full'>
                            <BiArrowBack/>
                        </Link>
                        <div>
                            <div>Typle</div>
                            <p className='text-sm text-gray-400'>0 Post</p>
                        </div>
                    </div>
                </div>
                <div className='w-full'>
                    <div className="w-full h-[240px] bg-white"></div>
                    <div className='w-full px-2 md:px-5 mt-[-75px] mb-3 flex justify-between items-end'>
                        <div className='w-[150px] h-[150px] rounded-full bg-gray-500'></div>
                        <button className='text-white px-5 py-2 rounded-full border border-gray-600 mb-3'>
                            Edit profile
                        </button>
                    </div>
                    <div className="w-full px-2 md:px-5">
                        <div className='w-full flex flex-col'>
                            <h1 className='text-white font-semibold text-xl'>Typle</h1>
                            <p className='text-sm text-gray-400'>@typle</p>
                        </div>
                        <div className="w-full mt-3">
                            <div className='w-fit flex text-gray-400 text-sm justify-center items-center gap-x-2'>
                                <FaCalendarAlt/>
                                <div>
                                    Joined August 2023
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-full px-2 py-5 md:px-5 min-h-screen"></div>
            </div>
        </main>
    );
};

export default Profile;
