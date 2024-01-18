'use client';
//react
import { useState } from 'react';
//components
import Dropdown from '@/components/Dropdown/index';
import Hero from '@/components/Hero';
import AgencyBLock from '@/components/Block/index';
//layout
import EventsLayout from '@/module/events/layout/main';

const tabItem = [
    { id: '1', name: 'Бүгд' },
    { id: '2', name: 'Контент бүтээгч' },
    { id: '3', name: 'Сошиал медиа' },
];

const arr = [0, 1, 2, 3, 4, 5, 6, 7, 8];

const Events = () => {
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
                    <p className="text-[12px] font-[500] leading-[18px] text-[#8557F4] mb-[12px]">Marketing Events</p>
                    <p className="text-[36px] font-[700] leading-[40px] tracking-[-1.44px] text-[#FFF]">Events</p>
                    <p className="text-[16px] font-[400] leading-[28px] text-[#EAECF0] mt-[24px]">
                        Хамгийн сүүлийн үеийн салбарын мэдээ, ярилцлага, технологи, нөөц.
                    </p>
                </div>
            </div>
            <EventsLayout>
                <div className="flex w-[100%] justify-between mb-[32px]">
                    <div className="flex w-[100%] justify-between mt-[48px] mb-[40px]">
                        <Dropdown selectedOption={selectedOption} handler={handleDropdownChange} />
                        <Dropdown selectedOption={selectedOption} handler={handleDropdownChange} />
                        <Dropdown selectedOption={selectedOption} handler={handleDropdownChange} />
                        <Dropdown selectedOption={selectedOption} handler={handleDropdownChange} />
                    </div>
                </div>
            </EventsLayout>
        </>
    );
};
export default Events;
