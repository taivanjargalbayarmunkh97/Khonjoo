'use client';
//react
import { useState } from 'react';
//components
import Dropdown from '@/components/Dropdown/index';
import Hero from '@/components/Hero';
import AgencyList from '@/module/agency/template/agency';
//layout
import AgencyLayout from '@/module/agency/layout/main';

const tabItem = [
    { id: '1', name: 'Бүгд' },
    { id: '2', name: 'Контент бүтээгч' },
    { id: '3', name: 'Сошиал медиа' },
];

const Agency = () => {
    const [filter, setFilter] = useState('1');
    const [selectedOption, setSelectedOption] = useState('');

    const handleDropdownChange = (event) => {
        setSelectedOption(event.target.value);
    };

    return (
        <>
            <div className="relative">
                <Hero imageUrl={'/assets/photo/campaings.png'} />
                <div className="absolute top-[40%] left-[20%]">
                    <p className="text-[12px] font-[500] leading-[18px] text-[#8557F4] mb-[12px]">Agencies</p>
                    <p className="text-[36px] font-[500] leading-[40px] tracking-[-1.44px] text-[#FFF] mb-[24px]">
                        Marketing <span className="text-[36px] font-[700] leading-[40px] tracking-[-1.44px] text-[#FFF]">Agencies</span>
                    </p>
                    <p className="text-[16px] font-[400] leading-[28px] text-[#EAECF0]">
                        Хамгийн сүүлийн үеийн салбарын мэдээ, ярилцлага, технологи, нөөц.
                    </p>
                </div>
            </div>
            <AgencyLayout>
                <div className="flex w-[100%] justify-between mb-[32px]">
                    <div className="h-[44px] p-[4px] flex gap-[8px] rounded-[8px] border-[1px]  border-[#F2F4F7] border-[solid] bg-[#F2F4F7] mt-[48px]">
                        {tabItem.map((i) => (
                            <div
                                key={i.id}
                                className={`flex items-center px-[8px] py-[8px] cursor-pointer hover:bg-[#FFF] ${
                                    filter === i.id && 'shadow-sm rounded-[6px] bg-[#FFF]'
                                }`}
                                onClick={() => {
                                    setFilter(i.id);
                                }}
                            >
                                <p className="text-[14px] font-[600] leading-[20px]">{i.name}</p>
                            </div>
                        ))}
                    </div>
                    <div className="flex items-end justify-start">
                        <Dropdown selectedOption={selectedOption} handler={handleDropdownChange} />
                    </div>
                </div>
                <AgencyList />
            </AgencyLayout>
        </>
    );
};
export default Agency;
