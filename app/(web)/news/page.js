'use client';
import { useState } from 'react';
import NewsLayout from '@/module/news/layout/main';
import Hero from '@/components/Hero';
import BlogBlock from '@/components/BlogBlock/Index';
import Dropdown from '@/components/Dropdown/index';

let filterArray = [
    { id: 1, value: '4', label: 'Бүгд' },
    { id: 2, value: '1', label: 'Маркетинг' },
    { id: 3, value: '2', label: 'Дизайн' },
    { id: 4, value: '3', label: 'Сошиал медиа' },
];

let arr = [0, 1, 2, 3, 4, 5, 6, 7, 8];

const Index = () => {
    const [activeRole, setActiveRole] = useState(1);
    const [selectedOption, setSelectedOption] = useState('');

    const handleDropdownChange = (event) => {
        setSelectedOption(event.target.value);
    };

    return (
        <>
            <div>
                <Hero imageUrl={'/assets/photo/Hero.png'} />
            </div>
            <NewsLayout>
                <div className="flex items-center justify-between">
                    <div className="w-[100%]">
                        <div className="flex justify-start gap-[16px]">
                            {filterArray?.map((i) => {
                                return (
                                    <div
                                        key={i.id}
                                        className={`hover:text-[#FD3D80] cursor-pointer ${
                                            activeRole === i.id && 'border-[solid] border-b-[2px] border-[#FD3D80] text-[#FD3D80]'
                                        }`}
                                        onClick={() => {
                                            setActiveRole(i.id);
                                        }}
                                    >
                                        <p className="p-[4px] text-[16px] font-[500] leading-[24px]">{i?.label}</p>
                                    </div>
                                );
                            })}
                        </div>
                        <div className="border-[#EAECF0] border-[0.5px] border-[solid] w-[80%]" />
                    </div>
                    <div className="flex items-end justify-start">
                        <Dropdown selectedOption={selectedOption} handler={handleDropdownChange} />
                    </div>
                </div>
                <div className="flex flex-wrap w-[100%] gap-x-[32px] gap-y-[40px] mt-[40px]">
                    {arr?.map((i) => {
                        return (
                            <div className="w-[31.42%] shadow-md hover:shadow-xl" key={i}>
                                <BlogBlock />
                            </div>
                        );
                    })}
                </div>
            </NewsLayout>
        </>
    );
};
export default Index;

//   <div
//       key={role.id}
//       className={`flex items-center px-[8px] py-[8px] cursor-pointer hover:bg-[#FFF] ${
//           activeRole === role.id && 'shadow-sm rounded-[6px] bg-[#FFF]'
//       }`}
//       onClick={() => {
//           setActiveRole(role.id);
//       }}
//   >
//       <p className="text-[14px] font-[600] leading-[20px]">{role.name}</p>
//   </div>;
