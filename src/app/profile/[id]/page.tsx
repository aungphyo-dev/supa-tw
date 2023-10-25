"use client"
import {AuthLayout, UserProfile, UserTweetLayout} from "~/components";
import {useQuery} from "@tanstack/react-query";
import AXIOSC from "~/services/AXIOSC";
import {useParams} from "next/navigation";


const UserProfileByID = () => {
    const {id} = useParams()
    const {data, isLoading} = useQuery({
        queryKey: ["get", "auth", "profile", "user",id],
        queryFn: async () => {
            const res = await AXIOSC.get(`/auth/user/${id}`)
            return res.data
        }
    })

    return (
        <AuthLayout>
            <main className='w-full md:border-x-[0.5px] border-gray-600'>
                <div className="w-full min-h-screen">
                    <UserProfile user={data?.user} isLoading={isLoading}/>
                    <UserTweetLayout id={data?.user?.id} user={data?.user}/>
                </div>
            </main>
        </AuthLayout>
    );
};

export default UserProfileByID;
