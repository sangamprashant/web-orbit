import React from 'react'

interface ThemeButtonProps {
    title: string;
    icon?: React.ReactNode;
    Ipos?: "left" | "right";
    clasName?: string
}

const ThemeButton = ({ title, icon, Ipos = "right", clasName }: ThemeButtonProps) => {
    return (
        <button className={`inline-flex items-center text-white bg-orange-500 border-0 py-2 px-6 focus:outline-none hover:bg-orange-600 rounded text-lg ${clasName}`}>
            {Ipos === "left" && icon && <span className="mr-2">{icon}</span>}
            {title}
            {Ipos === "right" && icon && <span className="ml-2">{icon}</span>}
        </button>
    );
}

export default ThemeButton;
