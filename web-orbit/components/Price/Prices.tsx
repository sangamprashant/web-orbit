import { Title } from "../Reuse";

const PricingSection = () => {
  return (
    <section className="text-gray-600 body-font overflow-hidden">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-12">
          <Title first="PRICING" grad="PLANS" />
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base text-gray-500">
            Choose the best plan that fits your web development and management needs.
          </p>
        </div>

        <div className="flex flex-wrap -m-4 justify-center">
          {/* Portfolio Plan */}
          <div className="p-4 xl:w-1/4 md:w-1/2 w-full">
            <div className="h-full p-6 rounded-lg border-2 border-gray-300 flex flex-col relative overflow-hidden">
              <h2 className="text-sm tracking-widest title-font mb-1 font-medium">Portfolio Plan</h2>
              <h1 className="text-5xl text-gray-900 leading-none flex items-center pb-4 mb-4 border-b border-gray-200">
                <span>₹5,000</span>
              </h1>
              <p className="flex items-center text-gray-600 mb-2">
                Single page portfolio website
              </p>
              <p className="flex items-center text-gray-600 mb-2">
                Additional ₹2,000 for animation
              </p>
              <button className="flex items-center mt-auto text-white bg-gray-400 border-0 py-2 px-4 w-full focus:outline-none hover:bg-gray-500 rounded">
                Choose Plan
              </button>
            </div>
          </div>


          {/* Beginner Friendly Plan */}
          <div className="p-4 xl:w-1/4 md:w-1/2 w-full">
            <div className="h-full p-6 rounded-lg border-2 border-gray-300 flex flex-col relative overflow-hidden">
              <h2 className="text-sm tracking-widest title-font mb-1 font-medium">Beginner Friendly</h2>
              <h1 className="text-5xl text-gray-900 leading-none flex items-center pb-4 mb-4 border-b border-gray-200">
                <span>₹15,000</span>
              </h1>
              <p className="flex items-center text-gray-600 mb-2">
                Simple static website (up to 5 pages)
              </p>
              <button className="flex items-center mt-auto text-white bg-gray-400 border-0 py-2 px-4 w-full focus:outline-none hover:bg-gray-500 rounded">
                Choose Plan
              </button>
            </div>
          </div>

          {/* Basic Plan */}
          <div className="p-4 xl:w-1/4 md:w-1/2 w-full">
            <div className="h-full p-6 rounded-lg border-2 border-gray-300 flex flex-col relative overflow-hidden">
              <h2 className="text-sm tracking-widest title-font mb-1 font-medium">Basic Plan</h2>
              <h1 className="text-5xl text-gray-900 leading-none flex items-center pb-4 mb-4 border-b border-gray-200">
                <span>₹25,000</span>
              </h1>
              <p className="flex items-center text-gray-600 mb-2">
                Web hosting & maintenance
              </p>
              <p className="flex items-center text-gray-600 mb-2">
                Up to 10 pages website
              </p>
              <button className="flex items-center mt-auto text-white bg-gray-400 border-0 py-2 px-4 w-full focus:outline-none hover:bg-gray-500 rounded">
                Choose Plan
              </button>
            </div>
          </div>

          {/* Standard Business Plan */}
          <div className="p-4 xl:w-1/4 md:w-1/2 w-full">
            <div className="h-full p-6 rounded-lg border-2 border-gray-300 flex flex-col relative overflow-hidden">
              <h2 className="text-sm tracking-widest title-font mb-1 font-medium">Standard Business Plan</h2>
              <h1 className="text-5xl text-gray-900 leading-none flex items-center pb-4 mb-4 border-b border-gray-200">
                <span>₹40,000</span>
              </h1>
              <p className="flex items-center text-gray-600 mb-2">
                Business website with up to 15 pages
              </p>
              <p className="flex items-center text-gray-600 mb-2">
                SEO optimization and analytics integration
              </p>
              <button className="flex items-center mt-auto text-white bg-gray-400 border-0 py-2 px-4 w-full focus:outline-none hover:bg-gray-500 rounded">
                Choose Plan
              </button>
            </div>
          </div>

          {/* Professional Plan */}
          <div className="p-4 xl:w-1/4 md:w-1/2 w-full">
            <div className="h-full p-6 rounded-lg border-2 border-orange-500 flex flex-col relative overflow-hidden">
              <span className="bg-orange-500 text-white px-3 py-1 tracking-widest text-xs absolute right-0 top-0 rounded-bl">POPULAR</span>
              <h2 className="text-sm tracking-widest title-font mb-1 font-medium">Professional Plan</h2>
              <h1 className="text-5xl text-gray-900 leading-none flex items-center pb-4 mb-4 border-b border-gray-200">
                <span>₹50,000</span>
              </h1>
              <p className="flex items-center text-gray-600 mb-2">
                Full-stack web development
              </p>
              <p className="flex items-center text-gray-600 mb-2">
                API integration & deployment
              </p>
              <button className="flex items-center mt-auto text-white bg-orange-500 border-0 py-2 px-4 w-full focus:outline-none hover:bg-orange-600 rounded">
                Choose Plan
              </button>
            </div>
          </div>

          {/* Enterprise Plan */}
          <div className="p-4 xl:w-1/4 md:w-1/2 w-full">
            <div className="h-full p-6 rounded-lg border-2 border-gray-300 flex flex-col relative overflow-hidden">
              <h2 className="text-sm tracking-widest title-font mb-1 font-medium">Enterprise Plan</h2>
              <h1 className="text-5xl text-gray-900 leading-none flex items-center pb-4 mb-4 border-b border-gray-200">
                <span>₹1,50,000</span>
              </h1>
              <p className="flex items-center text-gray-600 mb-2">
                Custom enterprise-level solutions
              </p>
              <p className="flex items-center text-gray-600 mb-2">
                Dedicated support & maintenance
              </p>
              <button className="flex items-center mt-auto text-white bg-gray-400 border-0 py-2 px-4 w-full focus:outline-none hover:bg-gray-500 rounded">
                Choose Plan
              </button>
            </div>
          </div>

          {/* Ultimate Plan */}
          <div className="p-4 xl:w-1/4 md:w-1/2 w-full">
            <div className="h-full p-6 rounded-lg border-2 border-gray-300 flex flex-col relative overflow-hidden">
              <h2 className="text-sm tracking-widest title-font mb-1 font-medium">Ultimate Plan</h2>
              <h1 className="text-5xl text-gray-900 leading-none flex items-center pb-4 mb-4 border-b border-gray-200">
                <span>₹2,00,000</span>
              </h1>
              <p className="flex items-center text-gray-600 mb-2">
                Complete digital solution for large enterprises
              </p>
              <p className="flex items-center text-gray-600 mb-2">
                Advanced security, scalability, and cloud integration
              </p>
              <p className="flex items-center text-gray-600 mb-2">
                24/7 priority support and consultation
              </p>
              <button className="flex items-center mt-auto text-white bg-gray-400 border-0 py-2 px-4 w-full focus:outline-none hover:bg-gray-500 rounded">
                Choose Plan
              </button>
            </div>
          </div>

          {/* Custom Plan */}
          <div className="p-4 xl:w-1/4 md:w-1/2 w-full">
            <div className="h-full p-6 rounded-lg border-2 border-gray-300 flex flex-col relative overflow-hidden">
              <h2 className="text-sm tracking-widest title-font mb-1 font-medium">Custom Plan</h2>
              <h1 className="text-5xl text-gray-900 leading-none flex items-center pb-4 mb-4 border-b border-gray-200">
                <span>Negotiable</span>
              </h1>
              <p className="flex items-center text-gray-600 mb-2">
                Custom web solution tailored to your needs
              </p>
              <p className="flex items-center text-gray-600 mb-2">
                Flexible features and ongoing support
              </p>
              <button className="flex items-center mt-auto text-white bg-gray-400 border-0 py-2 px-4 w-full focus:outline-none hover:bg-gray-500 rounded">
                Contact Us
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default PricingSection;
