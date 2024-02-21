'use client';
import Link from 'next/link';
import route from '@/route/index';
import { useParams, useRouter } from 'next/navigation';
import { useContext, useState } from 'react';
import { AuthContext } from '@/context/auth/authContext';
import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Avatar } from '@nextui-org/react';
const Index = () => {
    const [isHover, setIsHover] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const router = useRouter();
    const {
        authState: { isLoggedIn, user },
        authFunc: { logOut },
    } = useContext(AuthContext);

    const handleMouseEnter = () => {
        setIsHover(true);
    };

    const handleMouseLeave = () => {
        setIsHover(false);
    };

    const handlePopover = () => {
        setIsOpen(!isOpen);
    };

    return (
        <header className="bg-[#ffffff] w-[100%] fixed z-[999] flex items-center justify-center">
            <nav className="flex h-[72px] items-center w-[80%] justify-between" aria-label="Global">
                <div className="w-[154px] h-[44px]">
                    <img src="/assets/icons/mainLogo.svg" alt="LOGO" width={154} />
                </div>
                <div className="flex gap-x-8">
                    <div className="p-[8px]">
                        <Link href={route.campaigns} className="text-[#050514] text-[17px] font-[500] leading-[24px] active:font-[700]">
                            Company
                        </Link>
                    </div>
                    <div className="p-[8px]">
                        <Link href={route.news} className="text-[#050514] text-[17px] font-[500] leading-[24px]">
                            News
                        </Link>
                    </div>
                    <div className="p-[8px]">
                        <Link href={route.agency} className="text-[#050514] text-[17px] font-[500] leading-[24px]">
                            Agencies
                        </Link>
                    </div>
                    <div className="p-[8px]">
                        <Link href={route.channels} className="text-[#050514] text-[17px] font-[500] leading-[24px]">
                            Channels
                        </Link>
                    </div>
                    <div className="p-[8px]">
                        <Link href="#" className="text-[#050514] text-[17px] font-[500] leading-[24px]">
                            Influencers
                        </Link>
                    </div>
                    <div className="p-[8px]">
                        <Link href={route.resources} className="text-[#050514] text-[17px] font-[500] leading-[24px]">
                            Resources
                        </Link>
                    </div>
                    <div className="p-[8px]">
                        <Link href={route.events} className="text-[#050514] text-[17px] font-[500] leading-[24px]">
                            Events
                        </Link>
                    </div>
                    <div className="p-[8px]">
                        <Link href={route.marketers} className="text-[#050514] text-[17px] font-[500] leading-[24px]">
                            Marketers
                        </Link>
                    </div>
                </div>
                <div className="flex gap-x-[16px]">
                    {/* <div className="h-[40px] w-[40px] bg-[#F9FAFB] flex justify-center">
                        <button>
                            <img src="/assets/icons/moon-01.svg" alt="dark" />
                        </button>
                    </div>
                    <div className="w-[40px] h-[40px] bg-[#F9FAFB] flex justify-center">
                        <button>
                            <img src="/assets/icons/search-md.svg" alt="dark" />
                        </button>
                    </div> */}
                    {isLoggedIn ? (
                        <Dropdown>
                            <DropdownTrigger>
                                <Avatar
                                    onClick={handlePopover}
                                    name={user?.name?.substring(0, 1)}
                                    size="md"
                                    isBordered
                                    as="button"
                                    className="text-[20px] font-serif bg-[#FD3D80] border-[#FD3D80] text-[#FFFFFF] cursor-pointer transition-transform"
                                />
                            </DropdownTrigger>
                            <DropdownMenu variant="faded" aria-label="Dropdown menu with icons">
                                <DropdownItem key="profile" className="gap-2 h-14">
                                    <p className="font-semibold text-[10px]">Signed in as</p>
                                    <p className="font-semibold text-[10px]">{user?.name}</p>
                                </DropdownItem>
                                <DropdownItem onClick={() => router.push(route.myAccount)}>My account</DropdownItem>
                                <DropdownItem onClick={logOut}>Гарах</DropdownItem>
                            </DropdownMenu>
                        </Dropdown>
                    ) : (
                        <div
                            className={`px-[16px] py-[10px] h-[40px] transition-all duration-300 cursor-pointer ${
                                isHover ? 'bg-[#f7f1f1]' : 'bg-[#FD3D80]'
                            }`}
                            onClick={() => router.push(route.signIn)}
                            onMouseEnter={handleMouseEnter}
                            onMouseLeave={handleMouseLeave}
                        >
                            <p className={`text-[14px] font-[600] leading-[20px] ${isHover ? 'text-[#FD3D80]' : 'text-[#FFFFFF]'}`}>Нэвтрэх</p>
                        </div>
                    )}
                </div>
            </nav>
        </header>
    );
};
export default Index;
