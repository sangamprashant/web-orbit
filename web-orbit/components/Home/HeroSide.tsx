
"use client"
import { slideIn } from "@/utils/motion";
import { motion } from "framer-motion";
import Sliders from "./Sliders";
const HeroSide = () => {
    return (
        <>
            <img
                src="/home/hero/hero.svg"
                alt="Hero Banner"
                className="object-contain w-full h-full absolute inset-0"
                style={{ width: "100%" }}
            />

            {/* Animated Sliders */}
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
        </>
    )
}

export default HeroSide