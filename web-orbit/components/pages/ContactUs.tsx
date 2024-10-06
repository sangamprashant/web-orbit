import Contact from '../Contact'
import PageHeader from '../Reuse/PageHeader'
import PageLayout from '../Reuse/PageLayout'

const ContactUsPage = () => {
    return (
        <>
            <PageHeader title='Contact Us' />
            <div className='min-h-screen  w-full -my-12'><Contact /></div>
        </>
    )
}

export default ContactUsPage
