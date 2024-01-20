'use client';
import AgencyBLock from '@/components/Block/index';
import route from '@/route';
import { Pagination } from '@nextui-org/react';
import { useRouter } from 'next/navigation';
const Index = () => {
    const router = useRouter();
    let arr = [0, 1, 2, 3, 4, 5, 6, 7, 8];
    return (
        <div className="w-[100%] flex flex-col gap-[24px] mb-[32px] items-center">
            {arr?.map((i) => {
                return (
                    <div className="shadow-xs hover:shadow-md w-[100%]" key={i.id} onClick={() => router.push(`${route.agency}/${1}`)}>
                        <AgencyBLock />
                    </div>
                );
            })}
            <Pagination isCompact showControls total={100} initialPage={1} variant="light" size="lg" color="primary" />
        </div>
    );
};

export default Index;
