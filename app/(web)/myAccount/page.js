import MyAccountLayout from '@/module/myAccount/layout/main';
import Hero from '@/components/Hero';
import { Tabs } from '@nextui-org/react';
const Page = () => {
    return (
        <>
            <div className="relative">
                <Hero imageUrl={'/assets/photo/campaings.png'} />
                <div className="absolute top-[50%] left-[20%]">
                    <p className="text-[36px] font-[700] leading-[40px] tracking-[-1.44px] text-[#FFF]">My account</p>]
                </div>
            </div>
            <MyAccountLayout>
                <div>
                    <p>my account</p>
                </div>
            </MyAccountLayout>
        </>
    );
};
export default Page;
