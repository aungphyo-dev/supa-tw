import {BsSearch} from "react-icons/bs";

const Rightsidebar = () => {
    return (
        <div className="w-full h-screen flex flex-col sticky top-0">
            <div className="w-full">
                <div className="p-5 flex w-full relative">
                    <label htmlFor="search">
                        <BsSearch className='text-xl text-white absolute left-[35px] top-[36px]'/>
                    </label>
                    <input type="text" id='search' placeholder="Search" className='pl-[45px] placeholder:text-gray-400 w-full outline-none bg-[#202327] focus:bg-transparent rounded-full border border-[#202327] focus:border-blue-500 py-3'/>
                </div>
            </div>
        </div>
    );
};

export default Rightsidebar;
