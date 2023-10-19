import {Leftsidebar, Newfeed, Rightsidebar} from "~/components";

const Home = () => {

    return (
        <div className="w-full h-full flex justify-center items-center relative">
            <div className='max-w-screen-xl w-full h-full flex md:grid grid-cols-12 relative'>
                {/*Left side bar*/}
                <section className='md:col-span-4 lg:col-span-3'>
                    <Leftsidebar/>
                </section>
                {/*New feed*/}
                <section className="flex-1 md:col-span-8 lg:col-span-6">
                    <Newfeed/>
                </section>
                {/*Right side bar*/}
                <section className='col-span-3 hidden lg:block'>
                    <Rightsidebar/>
                </section>
            </div>
        </div>
    );
};

export default Home;
