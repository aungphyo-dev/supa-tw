import {useMutation, useQueryClient} from "@tanstack/react-query";
import AXIOSC from "~/services/AXIOSC";
import {LoadingCircle} from "~/components";

const FollowButton = ({follow_id}:{follow_id : number}) => {
    const queryClient = useQueryClient()
    const {isPending,mutate} = useMutation({
        mutationKey:["post","user","follow"],
        mutationFn:async (id : number)=>{
            const res = await AXIOSC.post("/follow",{following_id : id})
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
    const handleFollow = () => {
        mutate(follow_id)
    }
  return (
    <button onClick={handleFollow} className="border text-gray-100 border-gray-500 rounded-full px-4 py-2 font-semibold text-xs">
        {isPending ? <LoadingCircle/> :"Follow"}
    </button>
  );
};

export default FollowButton;
