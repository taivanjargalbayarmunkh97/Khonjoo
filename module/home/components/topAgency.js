const Index = () => {
    const arr = [0, 1, 2, 3, 4];
    return (
        <div className="my-[48px]">
            <h4 className="text-[16px] text-[##050514] font-[400] mb-[24px] text-center leading-[24x]">
                Онцлох маркетингийн <span className="text-[16px] text-[##050514] font-[700] text-center my-[40px] leading-[24px]">агентлагууд</span>
            </h4>
            <div className="w-[100%] flex justify-between">
                {arr?.map((i) => {
                    return (
                        <div key={i}>
                            <img src="/assets/icons/agency.svg" alt="agency" style={{ height: '28px' }} />
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default Index;
