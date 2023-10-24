const UserCard = ({user}:{user : any}) => {
    return (
        <div className='w-full flex justify-between items-center px-5 py-3'>
            <div className='flex-1 flex justify-start items-start'>
                <div className='w-[40px] h-[40px] rounded overflow-hidden'>
                    <img src="/avatar.jpg" alt="" className='block w-full h-full'/>
                </div>
                <div className="ml-2">
                    <h1 className='text-sm text-white'>{user.name}</h1>
                    <p className='text-xs text-gray-300'>@{user.username}</p>
                </div>
            </div>
            <div>
                <button className='bg-gray-200 rounded-full px-4 py-2 font-semibold text-xs'>Follow</button>
            </div>
        </div>
    );
};

export default UserCard;