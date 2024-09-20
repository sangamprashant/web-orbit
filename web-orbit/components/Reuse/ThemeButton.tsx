"use client"
import React from 'react';
import { motion } from 'framer-motion';

interface ThemeButtonProps {
    title: string;
    icon?: React.ReactNode;
    Ipos?: "left" | "right";
    className?: string;
}

const ThemeButton = ({ title, icon, Ipos = "right", className }: ThemeButtonProps) => {
    return (
        <motion.button
            className={`inline-flex items-center text-white bg-orange-500 border-0 py-2 px-6 focus:outline-none hover:bg-orange-600 rounded text-lg ${className}`}
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 300 }}
        >
            {Ipos === "left" && icon && <span className="mr-2">{icon}</span>}
            {title}
            {Ipos === "right" && icon && <span className="ml-2">{icon}</span>}
        </motion.button>
    );
};

export default ThemeButton;
