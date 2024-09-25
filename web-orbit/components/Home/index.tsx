import { Suspense } from "react";
import ThemeButton from "../Reuse/ThemeButton";
import "./Hero.css";
import HeroSide from "./HeroSide";

const Home = () => {
  return (
    <section className="text-indigo-900 body-font pt-20" id="hero">
      <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        {/* Text Section */}
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-8 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center flex-1">
          <h1 className="title-font sm:text-7xl text-6xl mb-4 font-bold capitalize leading-tight">
            We create <br className="hidden lg:inline-block" />
            <span className="gradient-text">innovative solutions</span> <br className="hidden lg:inline-block" />
            for your business
          </h1>
          <p className="mb-8 leading-relaxed text-lg text-gray-700">
            Transform your ideas into reality with our cutting-edge web development services.
            We specialize in crafting beautiful, responsive websites that drive results and engage users.
          </p>
          <div className="flex justify-center">
            <ThemeButton title="Get Started" />
          </div>
        </div>

        {/* Image Section */}
        <div className="lg:max-w-lg lg:w-full md:w-1/2 relative w-full h-96 flex-shrink-0">
          <Suspense fallback={<LoadingSpinner />}>
            <HeroSide />
          </Suspense>
        </div>
      </div>
    </section>
  );
};

export default Home;


const LoadingSpinner = () => {
  return <>
    loading</>
}