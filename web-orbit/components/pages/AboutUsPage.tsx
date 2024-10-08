import PageHeader from '../Reuse/PageHeader'
import TeamSection from '../Team'
import Agency from './about/Agency'
import WhyChooseUs from './about/WhyChooseUs'

const AboutUsPage = () => {
    return (
        <>
            <PageHeader title='About Us' />
            <Agency />
            <WhyChooseUs />
            <TeamSection />
        </>
    )
}

export default AboutUsPage
