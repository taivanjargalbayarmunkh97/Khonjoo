const Index = () => {
    return (
        <div className="w-[100%] flex border-[#EAECF0] border-[1px] border-[solid]">
            <div className="h-[100%]">
                <img src="/assets/photo/agency.png" alt="agency" />
            </div>
            <div className="ml-[24px] flex justify-between items-center w-[100%] mr-[32px]">
                <div className="flex flex-col gap-[12px]">
                    <p className="text-[#8557F4] text-[14px] font-[600] leading-[20px]">Дизайн</p>
                    <p className="text-[#101828] text-[18px] font-[600] leading-[28px]">Agency</p>
                    <p className="text-[#475467] text-[16px] font-[400] leading-[24px]">Гоё танилцуулгыг хэрхэн бий болгох вэ...</p>
                </div>
                <div className="w-[99px] h-[44px] bg-[#26003B] flex">
                    <button className="text-[14px] font-[600] text-[#FFF] leading-[20px] w-[100%] h-[100%] hover:bg-[#FD3D80]">Танилцах</button>
                </div>
            </div>
        </div>
    );
};

export default Index;
