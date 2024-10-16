import { careerBanner } from '@/assets/assets'; // Assuming this imports the correct image
import PageHeader from '@/components/Reuse/PageHeader';
import React from 'react';

// Separate titles and descriptions for the sections
const headerContent = {
    title: "Join Our Team",
    description: "Shape the future with us by working on innovative projects in a collaborative environment."
};

const bannerContent = {
    title: "Careers",
    description: "Explore exciting opportunities to grow your career and make an impact by joining our dynamic team.",
};

const whyWorkWithUs = [
    {
        title: "Innovative Projects",
        description: "Work on cutting-edge projects that challenge the norm and drive positive change in industries.",
    },
    {
        title: "Career Growth",
        description: "We believe in the growth of our team members through continuous learning and development opportunities.",
    },
    {
        title: "Collaborative Environment",
        description: "Be part of a collaborative culture where diverse perspectives and teamwork are celebrated.",
    },
];

const similarOpenings = [
    {
        title: "Frontend Developer",
        location: "Remote | Full-time",
        description: "Join our team as a Frontend Developer working with React, Tailwind, and cutting-edge UI technologies.",
    },
    {
        title: "Backend Developer",
        location: "New York, USA | Full-time",
        description: "Backend Developer needed for designing APIs and scalable services using Node.js.",
    },
    {
        title: "UX/UI Designer",
        location: "San Francisco, USA | Full-time",
        description: "We’re looking for a creative UX/UI designer to deliver great user experiences across all platforms.",
    },
];

const CureerLayout = () => {
    return (
        <>
            {/* Page Header */}
            <PageHeader title={headerContent.title}/>

            {/* Banner Section */}
            <div className="relative flex items-center justify-center h-64 md:h-80 bg-gray-200 flex-col" style={{
                backgroundImage: `url(${careerBanner})`, // Replace with your actual image URL
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }}>
                {/* Overlay */}
                <div className="absolute inset-0 bg-black opacity-65"></div>

                {/* Centered Text */}
                <h1 className="relative text-white text-4xl md:text-5xl font-bold z-10">
                    {bannerContent.title}
                </h1>
                <p className='relative text-center mt-4 max-w-2xl z-10 text-gray-400'>
                    {bannerContent.description}
                </p>
            </div>

            {/* Why Work with Us Section */}
            <div className="py-16 bg-gray-50">
                <div className="max-w-6xl mx-auto px-4">
                    <h2 className="text-3xl font-bold text-indigo-900 text-center mb-8">Why Work with Us?</h2>
                    <p className="text-lg text-gray-600 text-center mb-12">
                        We foster innovation and collaboration in a diverse and inclusive environment, ensuring that each individual thrives and achieves their full potential.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {whyWorkWithUs.map((item, index) => (
                            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                                <h3 className="text-xl font-bold text-indigo-800 mb-2">{item.title}</h3>
                                <p className="text-gray-600">{item.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Similar Openings Section */}
            <div className="py-16 bg-gray-100">
                <div className="max-w-6xl mx-auto px-4">
                    <h2 className="text-3xl font-bold text-indigo-900 text-center mb-8">Similar Openings</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {similarOpenings.map((opening, index) => (
                            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                                <h3 className="text-xl font-bold text-indigo-800 mb-2">{opening.title}</h3>
                                <p className="text-gray-600">{opening.location}</p>
                                <p className="text-gray-700 mt-4">{opening.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};

export default CureerLayout;
