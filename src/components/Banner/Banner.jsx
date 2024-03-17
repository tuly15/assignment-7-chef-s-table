// import banner from '../../assets/banner.jpeg'
import './Banner.css';
const Banner = () => {
    return (
        <div>
            <div className="hero rounded-[24px] min-h-[600px] bga" >

                <div className="hero-content text-center text-neutral-content">
                    <div className="">
                        <h1 className="mb-6 max-w-[897px] lg:leading-[76px] text-white text-2xl lg:text-[53px] font-bold">Discover an exceptional cooking class tailored for you!</h1>
                        <p className="mb-10 max-w-[933px] text-lg text-white">Embark on a culinary journey with personalized cooking classes, tailored to your preferences and skill level for an exceptional experience.</p>
                        <div className="flex flex-wrap gap-6 justify-center">
                            <button className="btn p-0 border-none bg-[#0BE58A] rounded-[50px] w-[187px] h-[65px]  font-semibold text-xl">Explore Now</button>
                            <button className="btn bg-transparent p-0 rounded-[50px] w-[187px] h-[65px]  font-semibold text-xl text-white border-[2px] border-white">Our Feedback</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;