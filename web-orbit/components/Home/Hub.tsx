import React from 'react';
import { FaRocket, FaCogs, FaEnvelope } from 'react-icons/fa'; // Importing icons from react-icons
import { Title } from '../Reuse';

const Hub = () => {
    const links = [
        { title: "Get Started", description: "Start your journey with us", url: "#", icon: <FaRocket /> },
        { title: "Services", description: "Explore our services", url: "#", icon: <FaCogs /> },
        { title: "Contact Us", description: "Reach out to us for support", url: "#", icon: <FaEnvelope /> }
    ];

    return (
        <div className="container mx-auto py-16 px-6">
            <div className="text-center mb-3">

                <Title first='JOIN OUR' grad='HUB' />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {links.map((link, idx) => (
                    <div key={idx} className="border rounded-lg shadow-lg p-6 hover:bg-blue-50 transition duration-300">
                        <div className="flex items-center mb-4">
                            <span className="text-3xl text-indigo-600 mr-4">{link.icon}</span> {/* Icon */}
                            <h2 className="text-2xl font-semibold">{link.title}</h2>
                        </div>
                        <p className="text-gray-700 mb-6">{link.description}</p>
                        <a
                            href={link.url}
                            className="text-indigo-600 hover:text-indigo-800 font-medium"
                        >
                            Learn More &rarr;
                        </a>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Hub;
