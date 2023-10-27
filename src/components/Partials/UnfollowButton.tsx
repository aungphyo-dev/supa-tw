import {useMutation, useQueryClient} from "@tanstack/react-query";
import AXIOSC from "~/services/AXIOSC";
import {LoadingCircle} from "~/components";

const UnFollowButton = ({unfollow_id}:{unfollow_id : number}) => {
    const queryClient = useQueryClient()
    const {isPending,mutate} = useMutation({
        mutationKey:["post","user","unfollow"],
        mutationFn:async (id : number)=>{
            const res = await AXIOSC.post("/unfollow",{unfollow_id : id})
            return res.data
        },
        onSuccess:()=>{
            queryClient.invalidateQueries(
                {queryKey: ["get","users"]},
            )
            queryClient.invalidateQueries({
                queryKey:["get", "auth", "profile", "user"]
            })
            queryClient.invalidateQueries({
                queryKey:["get", "auth", "user", "followings"]
            })
        }
    })
    const handleUnFollow = () => {
        mutate(unfollow_id)
    }
    return (
        <button onClick={handleUnFollow} className="border text-red-500 border-red-500 rounded-full px-4 py-2 font-semibold text-xs">
            {isPending ? <LoadingCircle/> :"UnFollow"}
        </button>
    );
};

export default UnFollowButton;
