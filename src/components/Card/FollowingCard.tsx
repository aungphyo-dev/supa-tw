import Link from "next/link";
import Image from "next/image";
import Cookies from "js-cookie";
import UnFollowButton from "~/components/Partials/UnfollowButton";
import FollowButton from "~/components/Partials/FollowButton";

const FollowingCard = ({ following }: { following: any }) => {
  return (
    <div className="w-full flex justify-between items-center px-5 py-3 hover:bg-white/20 cursor-pointer">
      <div className="flex-1 flex justify-start items-start">
        <div className="w-[40px] h-[40px] rounded overflow-hidden relative">
          <Image
            fill
            sizes={"500"}
            src={
              following.following_user.profile_avatar
                ? following.following_user.profile_avatar
                : "/avatar.jpg"
            }
            alt=""
            className="block w-full h-full"
          />
        </div>
        <div className="ml-2">
          <Link
            href={`/profile/${following.following_id}`}
            className="text-sm text-white hover:underline"
          >
            {following.following_user.name}
          </Link>
          <p className="text-xs text-gray-300">
            @{following.following_user.username}
          </p>
        </div>
      </div>
      <div>
          <div>
              <UnFollowButton unfollow_id={following.following_id}/>
          </div>
      </div>
    </div>
  );
};

export default FollowingCard;
