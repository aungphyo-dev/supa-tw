import {LoadingCircle, Tweetcard} from "~/components";
import {useInfiniteQuery} from "@tanstack/react-query";
import AXIOSC from "~/services/AXIOSC";

const UserTweetLayout = ({id,user}:{id : any,user : any}) => {
    const {data:tweets,fetchNextPage,isFetchingNextPage,isLoading} = useInfiniteQuery({
        queryKey : ["get","read","tweets"],
        queryFn:async ({pageParam}: {pageParam:number})=>{
            const res = await AXIOSC.get(`/tweets/user/${id}?page=${pageParam}`)
            return res.data
        },
        initialPageParam: 0,
        getNextPageParam: (lastPage) => {
            return lastPage.tweets.current_page + 1
        },
        enabled : Boolean(user)
    })
    return (
        <div className="w-ful py-5  min-h-screen border-t border-t-gray-600">
            {
                tweets?.pages.map( page =>(
                    page.tweets.data.map((tweet : { id: number, tweet: string }) => <Tweetcard key={tweet?.id} tweet={tweet}/>)
                ))
            }
            <div className="w-full my-5 flex justify-center items-center">
                {
                    (isFetchingNextPage || isLoading) && <LoadingCircle/>
                }
                {
                    (!isFetchingNextPage && !isLoading && tweets?.pageParams && tweets?.pages[0].tweets.last_page !== 1 && tweets?.pages[0].tweets.last_page !== tweets?.pageParams.length ) && <button onClick={() => fetchNextPage()} className="w-full  bg-black hover:bg-white/20 py-2 text-white">
                        show more
                    </button>
                }
            </div>
        </div>

    );
};

export default UserTweetLayout;
