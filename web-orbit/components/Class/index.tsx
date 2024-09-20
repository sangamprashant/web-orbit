import React from 'react';
import ThemeButton from '../Reuse/ThemeButton';

const ClassOfferings = () => {
    // Sample class data
    const classes = [
        { name: "MERN Basics", description: "Introduction to MERN stack including MongoDB, Express, React, and Node.js.", icon: "M" },
        { name: "Advanced MERN", description: "Deep dive into advanced topics and best practices in MERN development.", icon: "A" },
        { name: "Full Stack Development", description: "Learn full stack development with real-world MERN projects.", icon: "F" },
        { name: "Front-End Mastery", description: "Master front-end development with React and related technologies.", icon: "F" },
        { name: "Back-End Techniques", description: "Explore advanced back-end development with Node.js and Express.", icon: "B" },
        { name: "Database Management", description: "Understand MongoDB and other database management systems.", icon: "D" },
        { name: "Deployment Strategies", description: "Learn about deployment strategies and tools for MERN applications.", icon: "D" },
    ];

    return (
        <section className="text-gray-600 body-font">
            <div className="py-24 mx-auto">
                <div className="text-center mb-10">
                    <h1 className="sm:text-6xl text-6xl font-medium text-center title-font text-gray-50 mb-4">Our Class <span className='text-orange-500'>Offerings</span></h1>
                    <p className="text-gray-400 leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
                        Explore our range of classes to master MERN stack and related technologies. From basics to advanced topics, we offer a comprehensive learning experience.
                    </p>
                </div>
                <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
                    {classes.map((classItem, index) => (
                        <div key={index} className="p-2 sm:w-1/2 w-full">
                            <div className="bg-gray-100 rounded flex p-4 h-full items-center">
                                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" className="text-indigo-500 w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
                                    <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                                    <path d="M22 4L12 14.01l-3-3"></path>
                                </svg>
                                <div>
                                    <span className="title-font font-medium">{classItem.name}</span>
                                    <p className="text-gray-600 mt-1">{classItem.description}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className='text-center mt-2'>
                    <ThemeButton title='Enroll Now' />
                </div>
            </div>
        </section>
    );
};

export default ClassOfferings;
