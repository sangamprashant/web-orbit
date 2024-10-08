
const pricingPlans = [
    {
        name: "Portfolio Plan",
        price: "₹5,000",
        features: ["Single page portfolio website", "Additional ₹2,000 for animation"],
        buttonText: "Choose Plan",
        borderColor: "border-gray-300",
        bgColor: "bg-gray-400",
        hoverColor: "hover:bg-gray-500",
    },
    {
        name: "Beginner Friendly",
        price: "₹15,000",
        features: ["Simple static website (up to 5 pages)"],
        buttonText: "Choose Plan",
        borderColor: "border-gray-300",
        bgColor: "bg-gray-400",
        hoverColor: "hover:bg-gray-500",
    },
    {
        name: "Basic Plan",
        price: "₹25,000",
        features: ["Web hosting & maintenance", "Up to 10 pages website"],
        buttonText: "Choose Plan",
        borderColor: "border-gray-300",
        bgColor: "bg-gray-400",
        hoverColor: "hover:bg-gray-500",
    },
    {
        name: "Standard Business Plan",
        price: "₹40,000",
        features: [
            "Business website with up to 15 pages",
            "SEO optimization and analytics integration",
        ],
        buttonText: "Choose Plan",
        borderColor: "border-gray-300",
        bgColor: "bg-gray-400",
        hoverColor: "hover:bg-gray-500",
    },
    {
        name: "Professional Plan",
        price: "₹50,000",
        features: ["Full-stack web development", "API integration & deployment"],
        buttonText: "Choose Plan",
        borderColor: "border-orange-500",
        bgColor: "bg-orange-500",
        hoverColor: "hover:bg-orange-600",
        popular: true,
    },
    {
        name: "Enterprise Plan",
        price: "₹1,50,000",
        features: ["Custom enterprise-level solutions", "Dedicated support & maintenance"],
        buttonText: "Choose Plan",
        borderColor: "border-gray-300",
        bgColor: "bg-gray-400",
        hoverColor: "hover:bg-gray-500",
    },
    {
        name: "Ultimate Plan",
        price: "₹2,00,000",
        features: [
            "Complete digital solution for large enterprises",
            "Advanced security, scalability, and cloud integration",
            "24/7 priority support and consultation",
        ],
        buttonText: "Choose Plan",
        borderColor: "border-gray-300",
        bgColor: "bg-gray-400",
        hoverColor: "hover:bg-gray-500",
    },
    {
        name: "Custom Plan",
        price: "Negotiable",
        features: [
            "Custom web solution tailored to your needs",
            "Flexible features and ongoing support",
        ],
        buttonText: "Contact Us",
        borderColor: "border-gray-300",
        bgColor: "bg-gray-400",
        hoverColor: "hover:bg-gray-500",
    },
];

const PriceMapDisplay = () => {
    return (
        <div className="flex flex-wrap -m-4 justify-center">
            {pricingPlans.map((plan, index) => (
                <div key={index} className="p-4 xl:w-1/4 md:w-1/2 w-full">
                    <div className={`h-full p-6 rounded-lg border-2 ${plan.borderColor} flex flex-col relative overflow-hidden`}>
                        {plan.popular && (
                            <span className="bg-orange-500 text-white px-3 py-1 tracking-widest text-xs absolute right-0 top-0 rounded-bl">
                                POPULAR
                            </span>
                        )}
                        <h2 className="text-sm tracking-widest title-font mb-1 font-medium">{plan.name}</h2>
                        <h1 className="text-5xl text-gray-900 leading-none flex items-center pb-4 mb-4 border-b border-gray-200">
                            <span>{plan.price}</span>
                        </h1>
                        {plan.features.map((feature, idx) => (
                            <p key={idx} className="flex items-center text-gray-600 mb-2">
                                {feature}
                            </p>
                        ))}
                        <button
                            className={`flex items-center mt-auto text-white ${plan.bgColor} border-0 py-2 px-4 w-full focus:outline-none ${plan.hoverColor} rounded`}
                        >
                            {plan.buttonText}
                        </button>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default PriceMapDisplay
