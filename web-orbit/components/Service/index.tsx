import React from 'react';

const Services = () => {
  const services = [
    {
      title: "Shooting Stars",
      description: "Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo juice poutine, ramps microdosing banh mi pug VHS try-hard ugh iceland kickstarter tumblr live-edge tilde.",
      icon: (
        <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-6 h-6" viewBox="0 0 24 24">
          <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
        </svg>
      ),
    },
    {
      title: "The Catalyzer",
      description: "Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo juice poutine, ramps microdosing banh mi pug VHS try-hard ugh iceland kickstarter tumblr live-edge tilde.",
      icon: (
        <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-6 h-6" viewBox="0 0 24 24">
          <circle cx="6" cy="6" r="3"></circle>
          <circle cx="6" cy="18" r="3"></circle>
          <path d="M20 4L8.12 15.88M14.47 14.48L20 20M8.12 8.12L12 12"></path>
        </svg>
      ),
    },
    {
      title: "Neptune",
      description: "Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo juice poutine, ramps microdosing banh mi pug VHS try-hard ugh iceland kickstarter tumblr live-edge tilde.",
      icon: (
        <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-6 h-6" viewBox="0 0 24 24">
          <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
          <circle cx="12" cy="7" r="4"></circle>
        </svg>
      ),
    },
  ];

  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <h1 className="sm:text-5xl text-5xl font-bold title-font text-center text-gray-50 mb-20 capitalize">
          We provide the best <span className='text-orange-600'>services</span>
        </h1>
        <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="p-2 md:w-1/3 flex transition-transform transform hover:scale-105 duration-300"
            >
              <div className="glass-effect bg-black bg-opacity-20 backdrop-filter backdrop-blur-md p-4 rounded-lg shadow-md">
                <div className="w-12 h-12 inline-flex items-center justify-center rounded-2xl bg-orange-500 text-orange-100 mb-4 flex-shrink-0">
                  {service.icon}
                </div>
                <div className="flex-grow pl-6">
                  <h2 className="text-gray-50 text-lg title-font font-medium mb-2">{service.title}</h2>
                  <p className="leading-relaxed text-base text-gray-300">{service.description}</p>
                  <a className="mt-3 text-orange-500 inline-flex items-center">
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
