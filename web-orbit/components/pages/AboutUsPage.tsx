import React from 'react'
import PageHeader from '../Reuse/PageHeader'
import TeamSection from '../Team'
import OurAgency from '../OurAgency'

const AboutUsPage = () => {
    return (
        <>
            <PageHeader title='About Us' />
            <OurAgency />
            <TeamSection />
        </>
    )
}

export default AboutUsPage
