import React from 'react';
import ThemeButton from '../Reuse/ThemeButton';
import AnimationComponent from '../Reuse/lottie/AnimationComponent';

const OurAgency = () => {
  return (
    <section className="body-font py-16 bg-gray-900">
      <div className="container mx-auto flex flex-col md:flex-row items-center p-20">
        {/* Text Section */}
        <div className="lg:flex-grow md:w-1/2 lg:pr-16 flex flex-col items-center md:items-start text-center md:text-left mb-10 md:mb-0">
          <h1 className="title-font text-5xl font-bold text-white mb-6">
            Our <span className="gradient-text">Agency</span>
          </h1>
          <p className="leading-relaxed text-gray-400 mb-8">
            At our agency, we specialize in crafting tailored solutions that meet the unique needs of our clients. With a dedicated team of professionals, we leverage innovative strategies and cutting-edge technology to drive growth and enhance brand visibility.
          </p>
          <p className="leading-relaxed text-gray-400 mb-8">
            Our mission is to empower businesses through creativity and expertise, ensuring each project we undertake not only meets but exceeds expectations. Whether you’re looking for digital marketing, web development, or branding services, our agency is committed to your success.
          </p>
          <h2 className="text-2xl font-semibold text-white mb-4">Why Choose Us?</h2>
          <ol className="list- list-inside text-gray-400 mb-8 custom-tick">
            <li>Tailored Solutions: Customized strategies that fit your unique business needs.</li>
            <li>Experienced Team: A dedicated team with expertise across various fields.</li>
            <li>Innovative Approach: Embracing the latest technologies to ensure your success.</li>
            <li>Commitment to Excellence: Striving for the highest standards in every project.</li>
          </ol>
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
