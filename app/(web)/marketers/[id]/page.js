import Blogs from '@/module/home/template/blogs';
const Index = () => {
    return (
        <>
            <div className="mt-[113px] w-[80%]">
                <div className="flex flex-col items-center justify-center">
                    <p className="text-[#8557F4] text-[12px] font-[500] leading-[18px] mb-[15px]">2022.01.20-нд нийтлэгдсэн</p>
                    <p className="text-[#101828] text-[40px] font-[700] leading-[48px] mb-[24px] tracking-[-0.8px]">UX тойм танилцуулга</p>
                    <p className="text-[#475467] text-[18px] font-[400] leading-[26px] mb-[24px] ">
                        Хамтран ажиллагсдаа гайхшруулж, менежерүүдийнхээ сэтгэлийг хөдөлгөх сэтгэл татам илтгэлүүдийг хэрхэн бүтээх вэ?
                    </p>
                    <div className="bg-[#FFF] py-[4px] pl-[4px] border-[#F5F6FF] border-[3px] border-[solid] rounded-[16px] w-[76px] h-[30px] text-center mb-[32px]">
                        <p className="text-[#8557F4] font-[500] text-[12px]">Дизайн</p>
                    </div>
                </div>
                <div className="mb-[40px] w-[100%] flex justify-center items-center">
                    <img src="/assets/photo/blog.png" />
                </div>
            </div>
            <div className="flex justify-center bg-[#F9FAFB]">
                <div className="flex w-[80%] flex-col items-center justify-center mb-[64px]">
                    <Blogs fromDetail="fromDetail" />
                </div>
            </div>
        </>
    );
};
export default Index;
