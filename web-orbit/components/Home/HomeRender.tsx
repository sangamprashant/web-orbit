import React from 'react'
import Home from '.'
import Services from '../Service'
import SimpleService from '../Service/SimpleService'
import OurAgency from '../OurAgency'
import TeamSection from '../Team'
import Contact from '../Contact'
import ProjectsSection from '../Projects'
import ClassOfferings from '../Class'
import PricingSection from '../Price/Prices'
import Hub from './Hub'

const HomeRender = () => {
    return (
        <>
            <Home />
            <Services />
            <SimpleService />
            <OurAgency />
            <ProjectsSection />
            <ClassOfferings />
            <PricingSection />
            <Contact />
            <TeamSection />
            <Hub />
        </>
    )
}

export default HomeRender