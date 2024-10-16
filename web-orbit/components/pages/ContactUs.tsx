import { contactUsBanner } from '@/assets/assets';
import Contact from '../Contact';
import PageBanner from '../Reuse/PageBanner';
import PageHeader from '../Reuse/PageHeader';

const ContactUsPage = () => {
    return (
        <>
            {/* Page Header */}
            <PageHeader title="Contact Us" />

            {/* Page Banner with Updated Title and Description */}
            <PageBanner 
                title="Get in" 
                title2="Touch with Us" 
                description="We'd love to hear from you! Whether you have questions, feedback, or inquiries, feel free to reach out and connect with our team." 
                image={contactUsBanner} 
            />

            {/* Contact Section */}
            <div className="min-h-screen w-full -my-12">
                <Contact />
            </div>
        </>
    );
}

export default ContactUsPage;
