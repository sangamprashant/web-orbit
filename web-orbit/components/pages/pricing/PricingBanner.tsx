import React from 'react'

const PricingBanner = () => {
    return (
        <div
            className="relative flex items-center justify-center"
            style={{
                backgroundImage: `url('https://via.placeholder.com/1920x1080')`, // Replace with your actual image URL
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                minHeight: '500px', // Set the desired minimum height
            }}
        >
            {/* Overlay */}
            <div className="absolute inset-0 bg-black opacity-50"></div>

            {/* Content */}
            <div className="relative z-10 text-center text-white">
                <h1 className="text-8xl font-bold mb-4">Pricing that <br /> scales with you</h1>
                <p className="text-lg">
                    Choose the best plan that fits your needs and start your journey with us today!
                </p>
            </div>
        </div>
    )
}

export default PricingBanner
