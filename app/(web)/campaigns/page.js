import CampaignsLayout from '@/module/campaigns/layout/main';
import Hero from '@/components/Hero';
import Works from '@/module/campaigns/template/campaign';

const Campaigns = () => {
    return (
        <>
            <div className="relative">
                <Hero imageUrl={'/assets/photo/campaings.png'} />
                <div className="absolute top-[40%] left-[20%]">
                    <p className="text-[12px] font-[500] leading-[18px] text-[#8557F4] mb-[12px]">Campaigns</p>
                    <p className="text-[36px] font-[500] leading-[40px] tracking-[-1.44px] text-[#FFF] mb-[24px]">
                        Marketing <span className="text-[36px] font-[700] leading-[40px] tracking-[-1.44px] text-[#FFF]">campaigns</span>
                    </p>
                    <p className="text-[16px] font-[400] leading-[28px] text-[#EAECF0]">
                        Хамгийн сүүлийн үеийн салбарын мэдээ, ярилцлага, технологи, нөөц.
                    </p>
                </div>
            </div>
            <CampaignsLayout>
                <Works />
            </CampaignsLayout>
        </>
    );
};
export default Campaigns;
