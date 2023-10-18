import {Leftsidebar} from "~/components";

const Home = () => {

    return (
        <div className="w-full h-full flex justify-center items-center relative">
            <div className='max-w-screen-xl w-full h-full flex relative'>
                <Leftsidebar/>
                <main></main>
                <section></section>
            </div>
        </div>
    );
};

export default Home;
