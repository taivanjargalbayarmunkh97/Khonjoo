'use client';
import BlogBlock from '@/components/BlogBlock/Index';

const Index = () => {
    let arr = [1, 2, 3];
    return (
        <div className="my-[48px] h-[100%]">
            <div className="flex justify-between mb-[32px]">
                <p className="text-[#050514] text-[32px] font-[400] leading-[44px] tracking-[-0.64px] max-md:text-[20px]">
                    Hottest{' '}
                    <span className=" text-[#050514] text-[32px] font-[700] leading-[44px] tracking-[-0.64px] max-md:text-[20px]">Нийтлэлүүд</span>
                </p>
                <div className="w-[158px] h-[40px] py-[10px] px-[16px] bg-[#8557F4]">
                    <button className="text-[#FFF] text-[14px] font-[600] leading-[20px]">Бүх мэдээг унших</button>
                </div>
            </div>
            <div className="flex gap-[32px] max-md:flex-col">
                {arr?.map((i) => {
                    return (
                        <div className=" w-[32%] h-[366px] max-md:w-[100%] max-[1080px]:h-[100%]" key={i}>
                            <BlogBlock shadow="shadow" />
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default Index;
