import React from 'react';
import ThemeButton from '../Reuse/ThemeButton';
import AnimationComponent from '../Reuse/lottie/AnimationComponent';

const OurAgency = () => {
    return (
        <section className="text-gray-300 body-font">
            <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
                <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                    <h1 className="title-font sm:text-5xl text-5xl mb-4 font-bold text-white">
                        Our <span className='text-orange-600'>Agency</span>
                    </h1>
                    <p className="mb-8 leading-relaxed text-gray-400">
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus voluptates sint voluptatum id doloremque tempore rerum quibusdam veritatis nesciunt dolores repudiandae quis, unde quae! Quia veniam maiores ut corporis culpa!
                    </p>
                    <div className="flex justify-center">
                        <ThemeButton title='Read More' />
                    </div>
                </div>
                <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                    <AnimationComponent file="team" />
                </div>
            </div>
        </section>
    );
};

export default OurAgency;
