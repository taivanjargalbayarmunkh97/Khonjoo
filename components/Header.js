'use client';
import Link from 'next/link';
import route from '@/route/index';
const Index = () => {
    return (
        <header className="bg-[#ffffff] w-[100%] fixed z-[99] flex items-center justify-center">
            <nav className="flex h-[72px] items-center w-[80%] justify-between" aria-label="Global">
                <div className="flex">
                    <div className=" mr-[32px] w-[154px] h-[44px]">
                        <img src="/assets/icons/mainLogo.svg" alt="LOGO" />
                    </div>
                    <div className="flex gap-x-1">
                        <div className="relative p-[8px]">
                            <Link href="#" className="text-[#050514] text-[15px] font-[500] leading-[24px]">
                                Campaigns
                            </Link>
                        </div>
                        <div className="relative p-[8px]">
                            <Link href="#" className="text-[#050514] text-[15px] font-[500] leading-[24px]">
                                Agencies
                            </Link>
                        </div>
                        <div className="relative p-[8px]">
                            <Link href="#" className="text-[#050514] text-[15px] font-[500] leading-[24px]">
                                Channels
                            </Link>
                        </div>
                        <div className="relative p-[8px]">
                            <Link href="#" className="text-[#050514] text-[15px] font-[500] leading-[24px]">
                                Influencers
                            </Link>
                        </div>
                        <div className="relative p-[8px]">
                            <Link href="#" className="text-[#050514] text-[15px] font-[500] leading-[24px]">
                                Resources
                            </Link>
                        </div>
                        <div className="relative p-[8px]">
                            <Link href="#" className="text-[#050514] text-[15px] font-[500] leading-[24px]">
                                Events
                            </Link>
                        </div>
                        <div className="relative p-[8px]">
                            <Link href="#" className="text-[#050514] text-[15px] font-[500] leading-[24px]">
                                Marketers
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="flex gap-x-[16px] ml-[32px]">
                    <div className="h-[40px] w-[40px] bg-[#F9FAFB] flex justify-center">
                        <button>
                            <img src="/assets/icons/moon-01.svg" alt="dark" />
                        </button>
                    </div>
                    <div className="w-[40px] h-[40px] bg-[#F9FAFB] flex justify-center">
                        <button>
                            <img src="/assets/icons/search-md.svg" alt="dark" />
                        </button>
                    </div>
                    <div className="px-[16px] py-[10px] bg-[#FD3D80] h-[40px]">
                        <a href={route.signIn} className="text-[14px] text-[#FFFFFF] font-[600] leading-[20px]">
                            Бүртгүүлэх
                        </a>
                    </div>
                </div>
            </nav>
        </header>
    );
};
export default Index;
