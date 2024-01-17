import CampaignsLayout from '@/module/campaigns/layout/main';
import Hero from '@/components/Hero';
import Works from '@/module/campaigns/template/campaign';
const Index = () => {
    return (
        <>
            <div>
                <Hero imageUrl={'/assets/photo/Hero.png'} />
            </div>
            <CampaignsLayout>
                <Works />
            </CampaignsLayout>
        </>
    );
};
export default Index;
