import React from 'react';
import ThemeButton from '../Reuse/ThemeButton';
import ImageUrl from "./information.png";
import Image from 'next/image';
import AnimationComponent from '../Reuse/lottie/AnimationComponent';

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
    <section className="text-gray-300 body-font">
      <div className="container px-5 py-24 mx-auto flex flex-wrap">
        <div className="lg:w-1/2 w-full mb-10 lg:mb-0 rounded-lg overflow-hidden">
          <AnimationComponent file="service" />
        </div>
        <div className="flex flex-col flex-wrap lg:py-6 -mb-10 lg:w-1/2 lg:pl-12 lg:text-left text-center">
          <h1 className='title-font sm:text-6xl text-6xl mb-4 font-bold text-white'>
            Simple <span className='text-orange-600'>Solutions</span>
          </h1>
          {services.map((service, index) => (
            <div key={index} className="flex flex-row mb-5 lg:items-start items-center gap-3">
              <div className="w-20 h-14 inline-flex items-center justify-center rounded-full bg-orange-600 text-white mb-5">
                {index + 1}
              </div>
              <div className="flex-grow">
                <h2 className="text-white text-lg title-font font-medium text-left">
                  {service.title}
                </h2>
                <p className="leading-relaxed text-gray-400 text-base">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
          <div className="flex gap-1 w-full items-center">
            <ThemeButton title='Get Started' clasName='w-full flex-1 text-center' />
            <ThemeButton title='Read More' clasName='w-full flex-1 text-center' />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SimpleService;
