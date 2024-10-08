import { Title } from "../Reuse";
import PriceMapDisplay from "./PriceMapDisplay";



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
        <PriceMapDisplay />
      </div>
    </section>
  );
};

export default PricingSection;
