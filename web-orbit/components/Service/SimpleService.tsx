import React from 'react';
import ThemeButton from '../Reuse/ThemeButton';
import AnimationComponent from '../Reuse/lottie/AnimationComponent';

// Define service items with title and description
const services = [
  {
    title: 'Contact Us',
    description: 'Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo juice poutine.',
  },
  {
    title: 'Consult',
    description: 'Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo juice poutine.',
  },
  {
    title: 'Place Order',
    description: 'Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo juice poutine.',
  },
  {
    title: 'Payment',
    description: 'Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo juice poutine.',
  }
];

const SimpleService = () => {
  return (
    <section className="body-font bg-gray-50 py-16">
      <div className="container mx-auto flex flex-wrap items-center">
        {/* Animation Section */}
        <div className="lg:w-1/2 w-full mb-10 lg:mb-0 rounded-lg overflow-hidden">
          <AnimationComponent file="service" />
        </div>

        {/* Service Descriptions Section */}
        <div className="flex flex-col lg:w-1/2 lg:pl-12 text-center lg:text-left">
          <h1 className='text-5xl font-bold text-indigo-900 mb-6'>
            Simple <span className='gradient-text'>Solutions</span>
          </h1>

          {/* Service List */}
          {services.map((service, index) => (
            <div key={index} className="flex items-start mb-8">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 inline-flex items-center justify-center rounded-full bg-indigo-900 text-white font-bold text-lg">
                  {index + 1}
                </div>
              </div>
              <div className="ml-4">
                <h2 className="text-xl font-semibold text-indigo-800 mb-2">
                  {service.title}
                </h2>
                <p className="leading-relaxed text-gray-700">
                  {service.description}
                </p>
              </div>
            </div>
          ))}

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
