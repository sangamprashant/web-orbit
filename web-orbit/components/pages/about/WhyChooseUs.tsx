import { aboutWhyChooseUs, aboutWhyChooseUsBg } from "@/assets/assets";
import Image from "next/image";
import { FaCheckCircle } from "react-icons/fa";
import PageLayout from "../../Reuse/PageLayout";

const WhyChooseUs = () => {
    const reasons = [
        {
            icon: <FaCheckCircle className="text-green-500 w-6 h-6" />,
            heading: "Tailored Solutions:",
            text: "Customized strategies that fit your unique business needs."
        },
        {
            icon: <FaCheckCircle className="text-green-500 w-6 h-6" />,
            heading: "Experienced Team:",
            text: "A dedicated team with expertise across various fields."
        },
        {
            icon: <FaCheckCircle className="text-green-500 w-6 h-6" />,
            heading: "Innovative Approach:",
            text: "Embracing the latest technologies to ensure your success."
        },
        {
            icon: <FaCheckCircle className="text-green-500 w-6 h-6" />,
            heading: "Commitment to Excellence:",
            text: "Striving for the highest standards in every project."
        }
    ];

    return (
        <PageLayout>
            <div className="flex flex-col md:flex-row gap-8 items-center">
                {/* Image Section with Background on 3 sides */}
                <div className="md:w-1/2 flex-1 ">
                    <Image
                        src={aboutWhyChooseUs}
                        alt="Why Choose Us"
                        className="rounded-lg shadow-lg mr-2"
                        width={500}
                        height={500}
                        loading="lazy"
                        style={{
                            width: "100%",
                            height: "100%"
                        }}
                    />
                </div>

                <div className="md:w-1/2">
                    <h2 className="text-3xl font-bold text-indigo-900 mb-4">Why Choose Us?</h2>
                    <h3 className="text-lg text-gray-600 mb-6">
                        We offer unparalleled services that drive growth and ensure your business stands out in today's competitive market.
                    </h3>
                    <p className="text-gray-700 mb-8">
                        Our mission is to provide each client with the tools they need to succeed. We combine deep industry knowledge, modern technology, and a relentless commitment to our customers' goals to ensure lasting success.
                    </p>

                    <div className="space-y-3">
                        {reasons.map((reason, index) => (
                            <div key={index} className="flex items-start">
                                <div className="mr-4">
                                    {reason.icon}
                                </div>
                                <div>
                                    <p className="text-gray-700 font-medium"><b>{reason.heading}</b> {reason.text}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </PageLayout>
    );
};

export default WhyChooseUs;
