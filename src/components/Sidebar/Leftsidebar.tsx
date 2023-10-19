import Link from "next/link";
import {BsThreeDots, BsTwitter} from "react-icons/bs";
import {NAVIGATION_ITEMS} from "~/constants/navitems";
import {BiHome} from "react-icons/bi";

const Leftsidebar = () => {
    return (
        <section className='sticky top-0 w-full flex flex-col items-stretch h-screen px-1 md:px-5 overflow-y-auto'>
            <div className='flex-1 flex items-center md:items-stretch flex-col space-y-4 my-4'>
                <Link href={"/"} className='text-2xl text-gray-50 px-2 md:px-6 py-2'>
                    <BsTwitter/>
                </Link>
                <Link className='text-gray-50 text-2xl space-x-4 hover:bg-white/50 transition flex justify-start w-fit items-center rounded-full md:rounded-3xl py-2 px-2 md:px-6' href="/">
                    <div>
                        <BiHome/>
                    </div>
                    <div className='text-xl hidden md:block'>
                        Home
                    </div>
                </Link>
                {
                    NAVIGATION_ITEMS.map(nav => <Link className='text-gray-50 text-2xl space-x-4 hover:bg-white/50 transition flex justify-start w-fit items-center rounded-full md:rounded-3xl py-2 px-2 md:px-6' href={`/${nav.title.toLowerCase()}`} key={nav.title}>
                        <div>
                            <nav.icon/>
                        </div>
                        <div className='text-xl hidden md:block'>
                            {nav.title}
                        </div>
                    </Link>)
                }
                <button className="hidden md:block px-1 md:px-4 w-full py-2 text-center hover:bg-opacity-80 transition bg-blue-500 rounded-3xl text-lg text-gray-100 font-semibold">
                    Tweet
                </button>
            </div>
            <button className="px-1 md:px-4 flex justify-center md:justify-between items-center w-full py-2 text-center hover:bg-white/20 transition bg-transparent rounded-full md:rounded-3xl text-gray-100 my-4">
                <div className='flex justify-start items-center gap-x-3'>
                    <div className='w-8 h-8 rounded-full bg-gray-500'></div>
                    <div className='text-start hidden md:block'>
                        <div className='font-semibold text-sm'>Typle</div>
                        <div className='text-xs'>typle@gmail.com</div>
                    </div>
                </div>
                <div className="hidden md:block">
                    <BsThreeDots/>
                </div>
            </button>
        </section>
    );
};

export default Leftsidebar;
