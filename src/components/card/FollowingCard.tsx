import Link from "next/link";

const FollowingCard = ({user}:{user : any}) => {
    return (
        <div className='w-full flex justify-between items-center px-5 py-3 hover:bg-white/20 cursor-pointer'>
            <div className='flex-1 flex justify-start items-start'>
                <div className='w-[40px] h-[40px] rounded overflow-hidden'>
                    <img src="/avatar.jpg" alt="" className='block w-full h-full'/>
                </div>
                <div className="ml-2">
                    <Link href={`/profile/${user.id}`} className='text-sm text-white hover:underline'>{user.name}</Link>
                    <p className='text-xs text-gray-300'>@{user.username}</p>
                </div>
            </div>
            <div>
                <button className='border text-red-500 border-red-500 rounded-full px-4 py-2 font-semibold text-xs'>Unfollow</button>
            </div>
        </div>
    );
};

export default FollowingCard;