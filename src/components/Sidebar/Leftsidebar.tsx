import Link from "next/link";
import {BsThreeDots, BsTwitter} from "react-icons/bs";
import {NAVIGATION_ITEMS} from "~/constants/navitems";

const Leftsidebar = () => {
    return (
        <section className='fixed w-72 flex flex-col items-stretch h-screen px-5'>
            <div className='h-full flex items-stretch flex-col space-y-4 my-4'>
                <Link href={"/"} className='text-2xl text-gray-50 px-6 py-2'>
                    <BsTwitter/>
                </Link>
                {
                    NAVIGATION_ITEMS.map(nav => <Link className='text-gray-50 text-2xl space-x-4 hover:bg-white/50 transition flex justify-start w-fit items-center rounded-3xl py-2 px-6' href={`/${nav.title.toLowerCase()}`} key={nav.title}>
                        <div>
                            <nav.icon/>
                        </div>
                        <div>
                            {nav.title}
                        </div>
                    </Link>)
                }
                <button className="px-4 w-full py-2 text-center hover:bg-opacity-80 transition bg-blue-500 rounded-3xl text-lg text-gray-100 font-semibold">
                    Tweet
                </button>
            </div>
            <button className="px-4 flex justify-between items-center w-full py-2 text-center hover:bg-white/20 transition bg-transparent rounded-3xl text-gray-100 my-4">
                <div className='flex justify-start items-center gap-x-3'>
                    <div className='w-8 h-8 rounded-full bg-gray-500'></div>
                    <div className='text-start'>
                        <div className='font-semibold text-sm'>Typle</div>
                        <div className='text-xs'>typle@gmail.com</div>
                    </div>
                </div>
                <div>
                    <BsThreeDots/>
                </div>
            </button>
        </section>
    );
};

export default Leftsidebar;
