'use client';
import HomeLayout from '@/module/home/layout/main';
import Discount from '@/module/home/components/discount';
import TopAgency from '@/module/home/components/topAgency';
import Influencers from '@/module/home/components/influencers';
import Works from '@/module/home/components/works';
import Blogs from '@/module/home/components/blog';

const Home = () => {
    return (
        <>
            <div className="mt-[73px]">
                <img src="/assets/photo/Hero.png" alt="hero" style={{ objectFit: 'cover' }} />
            </div>
            <HomeLayout>
                <h1 className="text-[32px] text-[#000] font-[400] text-center my-[40px] leading-[44px] tracking-[-0.64px]">
                    Онцгой <span className="text-[32px] text-[#000] font-[700] text-center  leading-[44px] tracking-[-0.64px]">урамшууллууд</span>
                </h1>
                <Discount />
                <TopAgency />
                <Influencers />
                <Works />
                <Blogs />
            </HomeLayout>
        </>
    );
};

export default Home;
