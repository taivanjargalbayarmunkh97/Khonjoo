import DetailActivity from '@/components/Detail/detailActivity';
import DetailAds from '@/components/Detail/detailAds';
import DetailCampaign from '@/components/Detail/detailBlocks';
import DetailInfo from '@/components/Detail/detailInfo';

const Index = () => {
    return (
        <div className="mt-[120px] mb-[24px]">
            <div className="w-[100%] mb-[60px]">
                <DetailCampaign />
            </div>
            <div className="flex gap-[30px]">
                <div className="w-[70%] shadow-sm h-[80%]">
                    <p className="w-[100%] p-[20px] text-[#101828] text-[48px] font-[600] leading-[60px] tracking-[-0.96px]">UnAwkward</p>
                    <div className=" w-[100%]">
                        <iframe
                            width="100%"
                            height="432px"
                            src="https://www.youtube.com/embed/U_w0MF1gUgM?controls=0&rel=0"
                            frameBorder="0"
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer"
                        ></iframe>
                    </div>
                    <div className="p-[20px]">
                        <DetailInfo />
                    </div>
                    <DetailActivity />
                </div>
                <div className="border-[1px] border-[solid] border-[#EAECF0] shadow-xs w-[30%] p-[20px] flex flex-col gap-[20px]">
                    <DetailAds />
                </div>
            </div>
        </div>
    );
};
export default Index;
