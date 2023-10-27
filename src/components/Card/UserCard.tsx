import Link from "next/link";
import Image from "next/image";
import FollowButton from "~/components/Partials/FollowButton";
import Cookies from "js-cookie";
import UnFollowButton from "~/components/Partials/UnfollowButton";

const UserCard = ({user}:{user : any}) => {
    return (
        <div className='w-full flex justify-between items-center px-5 py-3  hover:bg-white/20 cursor-pointer'>
            <div className='flex-1 flex justify-start items-start'>
                <div className='w-[40px] h-[40px] relative rounded overflow-hidden'>
                    <Image fill sizes={"500"} src="/avatar.jpg" alt="" className='block w-full h-full'/>
                </div>
                <div className="ml-2 max-w-[9rem] overflow-hidden">
                    <Link href={`/profile/${user.id}`} className='text-sm text-white hover:underline truncate'>{user.name}</Link>
                    <p className='text-xs text-gray-300 truncate'>@{user.username}</p>
                </div>
            </div>
            <div>
                {
                    Boolean(user.followers.find((follow : any)=> follow.follower_id.toString() === Cookies.get('userId')))
                    ? <UnFollowButton unfollow_id={user.id}/> : <FollowButton follow_id={user.id}/>
                }
            </div>
        </div>
    );
};

export default UserCard;