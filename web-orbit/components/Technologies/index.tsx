"use client";
import React, { useState } from 'react';
import { IconType } from 'react-icons';
import { IoLogoCapacitor, IoLogoElectron } from "react-icons/io5";
import {
    SiExpress,
    SiMongodb,
    SiNodedotjs,
    SiReact
} from 'react-icons/si';
import { TbBrandNextjs } from "react-icons/tb";
import { Title } from '../Reuse';
import './technologies.css';

const Technologies: React.FC = () => {
    const [selectedTech, setSelectedTech] = useState<string>('Capacitor.js');

    const techDetails: Record<string, string> = {
        "MongoDB": "MongoDB is a document database, which means it stores data in JSON-like documents.",
        "Express.js": "Express.js is a web application framework for Node.js, designed for building web applications and APIs.",
        "React.js": "React.js is a JavaScript library for building user interfaces, allowing developers to create single-page applications.",
        "Node.js": "Node.js is a JavaScript runtime built on Chrome's V8 JavaScript engine, allowing server-side scripting.",
        "Next.js": "Next.js is a React framework for building server-side rendered applications with support for static site generation.",
        "Capacitor.js": "Capacitor.js is an open-source native runtime for building Web Native apps, allowing developers to run web apps natively across iOS, Android, and the web.",
        "Electron": "Electron is a framework for building cross-platform desktop applications using web technologies.",
    };

    const handleTechClick = (title: string) => {
        setSelectedTech(title);
    };

    const toggleMenu = () => {
        // Toggle menu logic can be added here.
    }

    return (
        <section className="py-16">
            <div className="container mx-auto px-6 overflow-hidden">
                <div className="text-center mb-12">
                    <Title first='Technologies' grad='We Use' />
                    <p className="text-lg text-gray-400">
                        Here are the technologies we use in development. Click on any technology to learn more about it.
                    </p>
                </div>
                <div className="flex flex-col md:flex-row items-center justify-center">
                    <div className="technologies-details flex-1">
                        {Object.entries(techDetails).map(([tech, detail]) => (
                            <div key={tech} className="mb-6">
                                <h3 className={`text-xl font-semibold text-${selectedTech === tech ? "indigo-900" : "gray-400"}`}>{tech}</h3>
                                <p className={`text-sm font-semibold text-${selectedTech === tech ? "indigo-700" : "gray-300"}`}>{detail}</p>
                            </div>
                        ))}
                    </div>
                    <div className='flex-1 h-full md:mt-0'>
                        <TechnologiesUI handleTechClick={handleTechClick} toggleMenu={toggleMenu} selectedTech={selectedTech} />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Technologies;


interface TechnologiesUIProps {
    handleTechClick: (title: string) => void;
    toggleMenu: () => void;
    selectedTech: string;
}

const TechnologiesUI = ({ handleTechClick, toggleMenu, selectedTech }: TechnologiesUIProps) => {
    return (
        <div className='technologies mt-10'>
            <div className="container-technologies active">
                <div className={`toggle-menu bg-${selectedTech === "Capacitor.js" ? "indigo-900" : ""}`} onClick={toggleMenu}>
                    <ul>
                        <TechnologyItem icon={IoLogoCapacitor} title="Capacitor.js" index={1} onClick={handleTechClick} selectedTech={selectedTech} />
                    </ul>
                </div>
                <ul className="menu">
                    <TechnologyItem icon={SiMongodb} title="MongoDB" index={1} onClick={handleTechClick} selectedTech={selectedTech} />
                    <TechnologyItem icon={SiExpress} title="Express.js" index={2} onClick={handleTechClick} selectedTech={selectedTech} />
                    <TechnologyItem icon={SiReact} title="React.js" index={3} onClick={handleTechClick} selectedTech={selectedTech} />
                    <TechnologyItem icon={SiNodedotjs} title="Node.js" index={4} onClick={handleTechClick} selectedTech={selectedTech} />
                    <TechnologyItem icon={TbBrandNextjs} title="Next.js" index={5} onClick={handleTechClick} selectedTech={selectedTech} />
                    <TechnologyItem icon={IoLogoElectron} title="Electron" index={6} onClick={handleTechClick} selectedTech={selectedTech} />
                </ul>
            </div>
        </div>
    );
};

interface TechnologyItemProps {
    icon: IconType;
    title: string;
    index: number;
    onClick: (title: string) => void;
    selectedTech: string;
}

const TechnologyItem: React.FC<TechnologyItemProps> = ({ icon: Icon, title, index, onClick, selectedTech }) => {
    return (
        <li style={{ '--i': index } as React.CSSProperties}>
            <a onClick={() => onClick(title)} className={`${selectedTech === title ? "bg-indigo-900 text-white" : "text-indigo-900"}`}>
                <Icon size={50} title={title} />
            </a>
        </li>
    );
};