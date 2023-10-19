"use client"
import {AiOutlineClose} from "react-icons/ai";
import Link from "next/link";
import {NAVIGATION_ITEMS} from "~/constants/navitems";
import {useEffect} from "react";
import anime from 'animejs'
const Menu = ({open,setOpen}:{
    open:boolean,
    setOpen:(open : boolean) => void
}) => {
    useEffect(() => {
            anime({
                targets: '.specific-unit-values-demo',
                height: open ?'100vh' : "0",
            });
        anime({
            targets: '.nav-link',
            translateX: open ? 0 :"-400px",
            delay: anime.stagger(100, {easing: 'easeOutQuad'})
        });
    }, [open]);
    return (
        <div className={`specific-unit-values-demo h-0 origin-right transition duration-500 absolute inset-0 z-[1000000] w-full overflow-hidden  bg-black`}>
            <div className="w-full p-5">
                <div className="w-full flex justify-end items-center">
                    <button className='p-2 rounded-full hover:bg-white/50 transition' onClick={()=>setOpen(!open)}>
                        <AiOutlineClose className="text-2xl text-white pointer-events-none"/>
                    </button>
                </div>
                <div className='w-full flex flex-col flex-1 gap-y-4'>
                    <Link href={"/"} className='text-gray-50 uppercase w-full py-2 nav-link'>
                        Home
                    </Link>
                    {
                        NAVIGATION_ITEMS.map(nav=>(
                            <Link href={nav.title} key={nav.title} className='nav-link text-gray-50 uppercase w-full py-2'>
                                {nav.title}
                            </Link>
                        ))
                    }
                </div>
            </div>
        </div>
    );
};

export default Menu;
