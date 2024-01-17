import Image from 'next/image';
const Index = ({ imageUrl }) => {
    return (
        <div className="mt-[73px] w-[100%]">
            <img src={imageUrl} alt="hero" style={{ objectFit: 'cover', width: '100%', height: '100%' }} />
        </div>
    );
};
export default Index;
