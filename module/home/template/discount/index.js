'use client';
const Index = () => {
  let arr = [0, 1, 2];

  return (
    <div className='flex gap-[32px] max-md:flex-col'>
      {arr?.map((i) => {
        return (
          <div
            className='w-[33%] h-[288px] flex justify-center max-md:w-[100%] relative'
            key={i}
          >
            <img src='assets/photo/image3.png' alt='discount' />
            <div className='absolute flex justify-center top-[28%] flex-col items-center'>
              <div className='py-[6px] px-[12px] rounded-[40px] bg-[#8557F4CC]  w-[113px] h-[32px]'>
                <p
                  className='text-[#fff] text-[14px] font-[500] leading-[20px]'
                  style={{}}
                >
                  Maker's Mark
                </p>
              </div>
              <div className='w-[32px] h-[2px] flex-shrink-0 bg-[#FD3D80] mt-[14px]' />
              <p className='text-[#fff] text-[28px] font-[600] leading-[32px] tracking-[-1.12px] pt-[8px]'>
                Breathe
              </p>{' '}
              <p className='text-[#fff] text-[14px] font-[700] leading-[20px] tracking-[-0.28px] pt-[14px]'>
                By Copacino Fujikado
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Index;
