import React from 'react';
import ThemeButton from '../Reuse/ThemeButton';
import { Title } from '../Reuse';

const ServicesOfferings = () => {
    // Sample service data
    const services = [
        { name: "Full-Stack Development", description: "Comprehensive web development services using modern technologies like React, Node.js, and MongoDB.", icon: "F" },
        { name: "UI/UX Design", description: "Professional design services to create user-friendly interfaces and seamless experiences.", icon: "U" },
        { name: "Project Management", description: "Effective management of web projects from planning to execution, using agile methodologies.", icon: "P" },
        { name: "Cloud Deployment", description: "Seamless deployment of web applications on cloud platforms like AWS, Azure, and DigitalOcean.", icon: "C" },
        { name: "API Integration", description: "Integration of third-party APIs for enhancing functionality and scalability of web apps.", icon: "A" },
        { name: "Database Optimization", description: "Optimized database solutions for performance, scalability, and security.", icon: "D" },
        { name: "Consulting & Strategy", description: "Expert advice and strategic planning for scaling your web applications.", icon: "C" },
        { name: "Performance Auditing", description: "Comprehensive audits of your web applications to identify bottlenecks and optimize for speed and efficiency.", icon: "P" },
    ];

    return (
        <section className="text-gray-900 body-font">
            <div className="container mx-auto py-12">
                <div className="text-center mb-10">
                    <Title first="OUR SERVICE" grad="OFFERINGS" />
                    <p className="text-gray-500 leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
                        We provide a range of services to empower businesses with efficient web solutions, project management, and seamless deployment strategies. Explore our offerings to take your web presence to the next level.
                    </p>
                </div>
                <div className="flex flex-wrap  sm:mx-auto sm:mb-2 -mx-2">
                    {services.map((service, index) => (
                        <div key={index} className="p-2 sm:w-1/2 w-full">
                            <div className="bg-gray-100 rounded flex p-4 h-full items-center">
                                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" className="text-indigo-500 w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
                                    <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                                    <path d="M22 4L12 14.01l-3-3"></path>
                                </svg>
                                <div>
                                    <span className="title-font font-medium">{service.name}</span>
                                    <p className="text-gray-600 mt-1">{service.description}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className='text-center mt-2'>
                    <ThemeButton title='Get Started' />
                </div>
            </div>
        </section>
    );
};

export default ServicesOfferings;
