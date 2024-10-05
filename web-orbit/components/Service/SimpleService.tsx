import React from 'react';
import ThemeButton from '../Reuse/ThemeButton';
import { RiContactsBook3Line } from "react-icons/ri";
import { FaOpencart } from "react-icons/fa6";
import { MdConnectWithoutContact } from "react-icons/md";
import { SiContactlesspayment } from "react-icons/si";
import AnimationComponent from '../Reuse/lottie/AnimationComponent';

// Define service items with title, description, and icons
const services = [
  {
    title: 'Contact Us',
    description: 'Reach out to us for any inquiries, support, or partnership opportunities. Our team is here to assist you with all your needs.',
    icon: <RiContactsBook3Line fontSize={50} />
  },
  {
    title: 'Consult',
    description: 'Get expert advice on your projects or business needs. Our consultation services are tailored to provide insightful guidance and strategies.',
    icon: <MdConnectWithoutContact fontSize={50} />
  },
  {
    title: 'Place Order',
    description: 'Seamlessly place orders for our products or services. Enjoy a smooth and easy ordering process with support available at every step.',
    icon: <FaOpencart fontSize={50} />
  },
  {
    title: 'Payment',
    description: 'We offer secure and flexible payment options for your convenience. Complete your transactions with confidence through our trusted payment gateway.',
    icon: <SiContactlesspayment fontSize={50} />
  }
];


const SimpleService = () => {
  return (
    <section className="body-font bg-gray-50 py-16">
      <h1 className='text-5xl font-bold text-indigo-900 mb-6 text-center'>
        Simple <span className='gradient-text'>Solutions</span>
      </h1>
      <div className="container mx-auto flex flex-wrap items-center py-6">

        {/* Animation Section */}
        <div className="lg:w-1/2 w-full mb-10 lg:mb-0 rounded-lg overflow-hidden">
          <AnimationComponent file="service" />
        </div>

        {/* Service Descriptions Section */}
        <div className="flex flex-col lg:w-1/2 lg:pl-12 text-center lg:text-left">

          {/* Service List */}
          <section className="text-gray-600 body-font">
            <div className="py-3 flex flex-wrap">
              {services.map((service, index) => (
                <div key={index} className="flex relative pt-10 sm:items-center mx-auto py-1">
                  <div className="h-full w-6 absolute inset-0 flex items-center justify-center">
                    <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
                  </div>
                  <div className="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-indigo-500 text-white relative z-10 title-font font-medium text-sm">
                    {index + 1}
                  </div>
                  <div className="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
                    <div className="flex-shrink-0 w-24 h-24 bg-indigo-100 text-indigo-500 rounded-full inline-flex items-center justify-center">
                      {service.icon}
                    </div>
                    <div className="flex-grow sm:pl-6 mt-6 sm:mt-0">
                      <h2 className="font-medium title-font text-indigo-900 mb-1 text-xl">{service.title}</h2>
                      <p className="leading-relaxed">{service.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Call to Action Buttons */}
          <div className="flex gap-4 justify-center lg:justify-start mt-6">
            <ThemeButton title='Get Started' className='px-8 py-3 bg-indigo-900 text-white rounded hover:bg-indigo-700' />
            <ThemeButton title='Read More' className='px-8 py-3 bg-white text-indigo-900 border border-indigo-900 rounded hover:bg-indigo-100' />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SimpleService;
