import { serviceBanner } from '@/assets/assets';
import PageBanner from '../Reuse/PageBanner';
import PageHeader from '../Reuse/PageHeader';
import Services from '../Service';

const ServicePage = () => {
    return (
        <>
            <PageHeader title='Services' />

            <PageBanner
                title="Tailored"
                title2="Services for Your Growth"
                description="Discover a wide range of services designed to scale with your business needs, from web development to digital marketing and branding solutions."
                image={serviceBanner}
            />

            <Services />
        </>
    );
}

export default ServicePage;
