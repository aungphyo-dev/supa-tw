import {useMutation} from "@tanstack/react-query";
import {useRouter} from "next/navigation";
import {LoadingCircle} from "~/components";
import Cookies from "js-cookie";
import {useAuthContext} from "~/components/Context/AuthContext";

const Logout = ({open,setOpen}:{
    open?:boolean,
    setOpen?:(open : boolean) => void
}) => {
    const AXIOSC = useAuthContext()
    const router = useRouter()
    const {mutate,isPending} = useMutation({
        mutationKey:["post","logout","auth","user"],
        mutationFn : async ()=>{
            const res = await AXIOSC.post("/auth/logout");
            return res.data
        },
        onSuccess:()=>{
            Cookies.remove("auth")
            router.push("/")
        }
    })
    const handleLogout = () => {
        mutate()
    }
    return (
        <div className={`absolute inset-0 py-2 px-2 h-fit rounded backdrop-blur bg-gray-900/60  ${open ? "z-30 pointer-events-auto opacity-100" : "pointer-events-none opacity-0"} profile_dropdown`}>
            <button onClick={handleLogout} className='w-full px-1 md:px-4 py-2 rounded-full text-white hover:bg-gray-50/20 line-clamp-1'>{isPending ? <LoadingCircle/> :"Log out"}</button>
        </div>
    );
};

export default Logout;
