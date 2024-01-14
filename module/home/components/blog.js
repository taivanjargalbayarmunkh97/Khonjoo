'use client';
import { Inter } from 'next/font/google';
const inter = Inter({ subsets: ['latin'] });

const Index = () => {
    let arr = [1, 2, 3];
    return (
        <div className="mt-[48px]">
            <div className="flex justify-between mb-[32px]">
                <p className="text-[#050514] text-[32px] font-[400] leading-[44px] tracking-[-0.64px] ">
                    Hottest <span className=" text-[#050514] text-[32px] font-[700] leading-[44px] tracking-[-0.64px]">Нийтлэлүүд</span>
                </p>
                <div className="w-[158px] h-[40px] py-[10px] px-[16px] bg-[#8557F4]">
                    <button className="text-[#FFF] text-[14px] font-[600] leading-[20px]">Бүх мэдээг унших</button>
                </div>
            </div>
            <div className="flex gap-[32px]">
                {arr?.map((i) => {
                    return (
                        <div className="w-[32%] h-[158px]">
                            <img src="/assets/photo/image.png" alt="photo" />
                            <div className="my-[20px] mx-[16px]">
                                <div className=" w-[161px] h-[30px]">
                                    <div className="bg-[#F5F6FF] py-[4px] pl-[4px] pr-[10px] flex items-center justify-center rounded-[16px] mb-[16px]">
                                        <div className="rounded-[16px] bg-[#FFF] w-[77px] h-[22px] flex py-[2px]">
                                            <img src="/assets/photo/Avatar.png" width="18px" height="16px" className="ml-[3px] mr-[6px]" />
                                            <p className="text-[#8557F4] font-[500] text-[12px]" style={{ fontFamily: inter.className }}>
                                                Дизайн
                                            </p>
                                        </div>
                                        <p className="text-[#8557F4] font-[500] text-[12px] ml-[8px]">8 мин унш</p>
                                    </div>
                                </div>
                                <div className="flex w-[100%] justify-between mt-[16px] items-center mb-[8px]">
                                    <p className="text-[18px] font-[600] leading-[4px] tracking-[-0.36px]">UX тойм танилцуулга</p>
                                    <img src="/assets/icons/right-up.svg" alt="right" />
                                </div>
                                <p className="font-[400] text-[15px] leading-[20px]">
                                    Хамтран ажиллагсдаа гайхшруулж, менежерүүдийнхээ сэтгэлийг хөдөлгөх илтгэлүүдийг хэрхэн бүтээх вэ?
                                </p>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default Index;
