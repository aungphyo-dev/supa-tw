"use client"
import React, {useState} from "react";
import Link from "next/link";
import Image from "next/image";
import { BiArrowBack } from "react-icons/bi";
import { LoadingCircle } from "~/components";
import { CiLocationOn } from "react-icons/ci";
import { AiOutlineLink } from "react-icons/ai";
import { FaCalendarAlt } from "react-icons/fa";
import UserInfoEditForm from "~/components/Partials/UserInfoEditForm";

const UserProfile = ({
  user,
  isLoading,
}: {
  user: any;
  isLoading: boolean;
}) => {
  const [edit, setEdit] = useState<boolean>(false)
  return (
    <>
      <div className="font-semibold text-gray-50 text-xl sticky top-0 bg-black z-[100000] backdrop-blur bg-black/80 border-b-[0.5px] border-b-gray-600 py-3 px-2 md:px-5">
        <div className="w-fit flex justify-center items-center gap-x-2">
          <Link
            href={"/"}
            className="text-xl text-white hover:bg-white/20 p-3 rounded-full"
          >
            <BiArrowBack />
          </Link>
          <div>
            <div>{isLoading ? <LoadingCircle /> : user?.name}</div>
            <p className="text-sm text-gray-400">{user?.tweets} Post</p>
          </div>
        </div>
      </div>
      <div className="w-full">
        <div className="w-full h-[240px] bg-gray-500 relative">
          {user?.cover_avatar && <Image
              src={`http://127.0.0.1:8000/storage/users/${user?.cover_avatar}`}
              alt={"Profile"}
              className="object-cover"
              priority
              fill
              sizes={"500"}
          />}
        </div>
        <div className="w-full px-2 md:px-5 mt-[-75px] mb-3 flex justify-between items-end">
          <div className="w-[150px] h-[150px] border-2 border-black rounded-full bg-gray-500 relative overflow-hidden">
            <Image
              src={!user?.profile_avatar ? "/avatar.jpg" : `http://127.0.0.1:8000/storage/users/${user?.profile_avatar}`}
              alt={"Profile"}
              className="object-cover"
              priority
              fill
              sizes={"500"}
            />
          </div>
          <button onClick={()=>setEdit(true)} className="text-white px-5 py-2 rounded-full border border-gray-600 mb-3">
            Edit profile
          </button>
          <UserInfoEditForm edit={edit} setEdit={setEdit}/>
        </div>
        <div className="w-full px-2 md:px-5">
          <div className="w-full flex flex-col">
            <h1 className="text-white font-semibold text-xl">
              {isLoading ? <LoadingCircle /> : user?.name}
            </h1>
            <p className="text-sm text-gray-400">@{user?.username}</p>
            {user?.bio && (
              <p className="text-sm text-gray-400 mt-4">{user?.bio}</p>
            )}
          </div>
          <div className="w-full flex gap-3 flex-wrap my-3">
            {user?.location && (
              <div className="w-fit flex text-gray-400 text-sm justify-center items-center gap-x-2">
                <CiLocationOn />
                <div>{user?.location}</div>
              </div>
            )}
            {user?.website && (
              <div className="w-fit flex text-sm justify-center items-center gap-x-2">
                <AiOutlineLink className="text-gray-400" />
                <a
                  href={user?.website}
                  className="text-blue-500 hover:underline "
                  target={"_blank"}
                >
                  {user?.website}
                </a>
              </div>
            )}
            <div className="w-fit flex text-gray-400 text-sm justify-center items-center gap-x-2">
              <FaCalendarAlt />
              <div>
                Joined {isLoading ? <LoadingCircle /> : user?.created_at}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserProfile;
