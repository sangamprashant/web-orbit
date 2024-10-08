import { contactSvg_Hub, rocketSvg_Hub, serviceSvg_Hub } from '@/assets/assets';
import Image from 'next/image';
import { Title } from '../Reuse';

const Hub = () => {
    const links = [
        { title: "Get Started", description: "Start your journey with us", url: "#", icon: rocketSvg_Hub },
        { title: "Services", description: "Explore our services", url: "#", icon: serviceSvg_Hub },
        { title: "Contact Us", description: "Reach out to us for support", url: "#", icon: contactSvg_Hub }
    ];

    return (
        <div className="container mx-auto py-16 px-6">
            <div className="text-center mb-3">
                <Title first='JOIN OUR' grad='HUB' />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {links.map((link, idx) => (
                    <div key={idx} className="border rounded-lg shadow-lg p-6 hover:bg-gray-100 transition duration-300">
                        <div className="flex items-center mb-4 gap-2">
                            <div className="bg-indigo-100 flex p-4 rounded-full justify-center items-center">
                                <Image src={link.icon} alt="" height={60} width={60} />
                            </div>
                            <div>
                                <h2 className="text-2xl font-semibold">{link.title}</h2>
                                <p className="text-gray-700">{link.description}</p>
                                <a
                                    href={link.url}
                                    className="text-indigo-600 hover:text-indigo-800 font-medium"
                                >
                                    Learn More &rarr;
                                </a>
                            </div>
                        </div>

                    </div>
                ))}
            </div>
        </div>
    );
}

export default Hub;
