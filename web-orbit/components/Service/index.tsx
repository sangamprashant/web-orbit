import React from 'react';
import { ECOMMERCE, SEO, WEBSITE } from '../Reuse/SVG';

const Services = () => {
  const services = [
    {
      title: "Custom Website Design",
      description: "We create unique and visually appealing websites tailored to your business needs. Our designs prioritize user experience and responsiveness across all devices.",
      icon: WEBSITE,
    },
    {
      title: "E-commerce Solutions",
      description: "Boost your sales with our comprehensive e-commerce platforms that offer secure payment options, inventory management, and seamless checkout experiences.",
      icon: ECOMMERCE,
    },
    {
      title: "SEO Optimization",
      description: "Increase your online visibility with our expert SEO services. We optimize your website to rank higher in search engine results, driving more traffic to your business.",
      icon: SEO
    },
  ];

  return (
    <section className="text-indigo-900 body-font" id='service'>
      <div className="container px-5 py-24 mx-auto">
        <h1 className="sm:text-5xl text-5xl font-bold title-font text-center text-indigo-900 mb-20 capitalize">
          We provide the best <span className='gradient-text'>services</span>
        </h1>
        <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="p-2 md:w-1/3 flex transition-transform transform hover:scale-105 duration-300"
            >
              <div className="glass-effect bg-opacity-20 backdrop-filter backdrop-blur-md p-4 rounded-lg shadow-md service-card">
                <div className="w-12 h-12 inline-flex items-center justify-center rounded-2xl bg-indigo-900 text-orange-100 mb-4 flex-shrink-0">
                  <img src={service.icon} alt="k" className='w-6' />
                </div>
                <div className="flex-grow pl-6">
                  <h2 className="text-indigo-900 text-lg title-font font-medium mb-2">{service.title}</h2>
                  <p className="leading-relaxed text-base text-indigo-800">{service.description}</p>
                  <a className="mt-3 text-indigo-600 inline-flex items-center">
                    Learn More
                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                      <path d="M5 12h14M12 5l7 7-7 7"></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
