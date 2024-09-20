import React from 'react';
import ThemeButton from '../Reuse/ThemeButton';
import AnimationComponent from '../Reuse/lottie/AnimationComponent';

const OurAgency = () => {
  return (
    <section className="body-font bg-gray-900 py-16">
      <div className="container mx-auto flex flex-col md:flex-row items-center px-5">
        {/* Text Section */}
        <div className="lg:flex-grow md:w-1/2 lg:pr-16 flex flex-col items-center md:items-start text-center md:text-left mb-10 md:mb-0">
          <h1 className="title-font text-5xl font-bold text-white mb-6">
            Our <span className="gradient-text">Agency</span>
          </h1>
          <p className="leading-relaxed text-gray-400 mb-8">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus voluptates sint voluptatum id doloremque tempore rerum quibusdam veritatis nesciunt dolores repudiandae quis, unde quae! Quia veniam maiores ut corporis culpa!
          </p>
          <div className="flex justify-center md:justify-start">
            <ThemeButton 
              title='Read More' 
              className='px-8 py-3 bg-orange-600 text-white rounded-md hover:bg-orange-500 transition duration-300'
            />
          </div>
        </div>

        {/* Animation Section */}
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <AnimationComponent file="team" />
        </div>
      </div>
    </section>
  );
};

export default OurAgency;
