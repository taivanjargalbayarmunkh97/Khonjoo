'use client';
import WorksBlock from '@/components/WorkBlock';
import route from '@/route';
import { useRouter } from 'next/navigation';
const Index = () => {
    const router = useRouter();
    let arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
    return (
        <div className="my-[48px] w-[100%] flex flex-wrap gap-x-[36px] gap-y-[40px] justify-center cursor-pointer">
            {arr?.map((i) => {
                return (
                    <div key={i} className="w-[22.55%] shadow" onClick={() => router.push(`${route.campaigns}/${1}`)}>
                        <WorksBlock campaigns="campaign" />
                    </div>
                );
            })}
        </div>
    );
};

export default Index;
