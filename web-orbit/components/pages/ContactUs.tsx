import { contactUsBanner } from '@/assets/assets'
import Contact from '../Contact'
import PageBanner from '../Reuse/PageBanner'
import PageHeader from '../Reuse/PageHeader'
import PageLayout from '../Reuse/PageLayout'

const ContactUsPage = () => {
    return (
        <>
            <PageHeader title='Contact Us' />
            <PageBanner title='Contact' title2='Us' image={contactUsBanner} />
            <div className='min-h-screen  w-full -my-12'><Contact /></div>
        </>
    )
}

export default ContactUsPage
