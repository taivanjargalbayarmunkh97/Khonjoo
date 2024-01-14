'use client';
import { Inter } from 'next/font/google';
const inter = Inter({ subsets: ['latin'] });
const Index = () => {
    let arr = [0, 1, 2, 3];
    return (
        <div>
            <p className="h-[16px] text-center text-[16px] font-[500] leading-[16px] text-[#8557F4] mt-[48px] mb-[8px]">
                Hottest <span className="h-[16px] text-center text-[16px] font-[700] leading-[16px] text-[#8557F4]">Campaign</span>
            </p>
            <div className="h-[44px] text-center mb-[32px]">
                <p className="text-[32px] font-[400] leading-[44px] text-[#050514] tracking-[-0.64px]">
                    Маркетингийн <span className="text-[32px] font-[700] leading-[44px] text-[#050514] tracking-[-0.64px]">ажлууд</span>
                </p>
            </div>
            <div className="flex gap-[32px]">
                {arr?.map(() => {
                    return (
                        <div className="w-[25%] h-[330px]">
                            <div className="pb-[20px]">
                                <img src="/assets/photo/image2.png" alt="photo" />
                            </div>
                            <div className="mb-[12px]">
                                <div className="p-[4px] rounded-[16px] bg-[#FFF] w-[73px] h-[30px] gap-[8px] border-[4px] border-[#F5F6FF] flex justify-center items-center">
                                    <p className="text-[12px] font-[500] leading-[8px]" style={{ fontFamily: inter.className }}>
                                        SG Enable
                                    </p>
                                </div>
                            </div>
                            <div className="h-[20px] flex justify-between">
                                <p className="text-[16px] font-[600] leading-[20px] tracking-[-0.32px] text-[#222]">UnAwkward</p>
                                <img src="/assets/icons/arrow-up-right.svg" alt="arrow" />
                            </div>
                        </div>
                    );
                })}
            </div>
            <div></div>
        </div>
    );
};

export default Index;
