"use client";
import AnimationComponent from "../Reuse/lottie/AnimationComponent";
import ThemeButton from "../Reuse/ThemeButton";
import "./Hero.css";
import { motion } from "framer-motion";
import Sliders from "./Sliders";
import { slideIn } from "@/utils/motion";

const Home = () => {

  return (
    <>
      <section className="text-gray-600 body-font pt-20" id="hero">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="title-font sm:text-7xl text-6xl mb-4 font-bold text-white capitalize">
              We create <br className="hidden lg:inline-block" />{" "}
              <span className="text-orange-500">solutions</span> <br className="hidden lg:inline-block" />
              for your business
            </h1>
            <p className="mb-8 leading-relaxed">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Praesentium eaque blanditiis modi temporibus exercitationem quia
              distinctio laborum repellat, quae, quis assumenda ad, quas quo
              maxime veniam minus natus facere. Quam.
            </p>
            <div className="flex justify-center">
              <ThemeButton title="Get Started" />
            </div>
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 relative">
            <div className="hero-image">
              <AnimationComponent file="home" />
            </div>

            {/* Sliders positioned */}
            <div className="absolute top-0 right-0 p-2">
              <motion.div
                variants={slideIn("left", "tween", 0.2, 1)}
                initial="hidden"
                animate="show"
                exit="hidden"
              >
                <Sliders file="planet-astro" />
              </motion.div>
            </div>
            <div className="absolute bottom-0 left-0 p-2">
              <motion.div
                variants={slideIn("right", "tween", 0.2, 1)}
                initial="hidden"
                animate="show"
                exit="hidden"
              >
                <Sliders file="robo" />
              </motion.div>
            </div>
            <div className="absolute top-0 left-0 p-2">
              <motion.div
                variants={slideIn("down", "tween", 0.2, 1)}
                initial="hidden"
                animate="show"
                exit="hidden"
              >
                <Sliders file="space-ship" />
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
