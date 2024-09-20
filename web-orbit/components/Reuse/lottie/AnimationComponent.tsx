"use client";
import lottie from "lottie-web";
import { HTMLAttributes, useEffect, useRef } from "react";
import animationData from "./animation.json";
import Center from "./center.json";
import PlanetAstro from "./planet-astro.json";
import Robo from "./robo.json";
import Service from "./service.json";
import SpaceShip from "./space-ship.json";
import Team from "./team.json";
import Home from "./home.json";

interface AnimationComponentProps extends HTMLAttributes<HTMLDivElement> {
  file: string; // Prop used to select the animation
}

const AnimationComponent = ({ file, ...props }: AnimationComponentProps) => {
  const animationContainer = useRef<HTMLDivElement | null>(null);

  const animations = [
    { name: "home", data: animationData },
    { name: "home2", data: Home },
    { name: "planet-astro", data: PlanetAstro },
    { name: "robo", data: Robo },
    { name: "space-ship", data: SpaceShip },
    { name: "center", data: Center },
    { name: "service", data: Service },
    { name: "team", data: Team },
  ];

  const selectedAnimation = animations.find((anim) => anim.name === file)?.data;

  useEffect(() => {
    if (selectedAnimation && animationContainer.current) {
      const animationInstance = lottie.loadAnimation({
        container: animationContainer.current!,
        renderer: "svg",
        loop: true,
        autoplay: true,
        animationData: selectedAnimation,
      });

      return () => {
        animationInstance.destroy();
      };
    }
  }, [selectedAnimation]);

  return <div ref={animationContainer} {...props}></div>;
};

export default AnimationComponent;
