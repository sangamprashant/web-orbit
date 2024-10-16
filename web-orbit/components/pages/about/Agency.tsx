import { aboutAgency, aboutAgencyImage } from '@/assets/assets'
import PageBanner from '@/components/Reuse/PageBanner'
import PageLayout from '@/components/Reuse/PageLayout'
import Image from 'next/image'

const Agency = () => {
    return (
        <>
            <PageBanner title='Discover Our' title2='Creative Agency' image={aboutAgency}  description="Empowering brands with innovative strategies, tailored solutions, and cutting-edge technology to drive success and visibility."  />
            <PageLayout>
                <div className="flex flex-col md:flex-row gap-8 items-center">
                    <div className="md:w-1/2 space-y-6">
                        <p className="text-gray-700 leading-relaxed">
                            At our agency, we specialize in crafting tailored solutions that meet the unique needs of our clients. With a dedicated team of professionals, we leverage innovative strategies and cutting-edge technology to drive growth and enhance brand visibility.
                        </p>
                        <p className="text-gray-700 leading-relaxed">
                            Our mission is to empower businesses through creativity and expertise, ensuring each project we undertake not only meets but exceeds expectations. Whether you’re looking for digital marketing, web development, or branding services, our agency is committed to your success.
                        </p>
                    </div>

                    <div className="md:w-1/2 flex-1">
                        <Image
                            src={aboutAgencyImage}
                            alt="Our Agency"
                            className="rounded-lg shadow-lg mr-2"
                            width={1000}
                            height={500}
                            loading="lazy"
                            style={{
                                width: "100%",
                                height: "100%",
                            }}
                        />
                    </div>

                </div>
            </PageLayout>
        </>
    )
}

export default Agency
