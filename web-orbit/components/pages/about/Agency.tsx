import { aboutAgency } from '@/assets/assets'
import PageBanner from '@/components/Reuse/PageBanner'
import PageLayout from '@/components/Reuse/PageLayout'
import Image from 'next/image'

const Agency = () => {
    return (
        <>
            {/* Banner Section */}
            <PageBanner title='Our' title2='Agency' image={aboutAgency} />

            <PageLayout>
                <div className="flex flex-col md:flex-row gap-8 items-center">
                    {/* Image Section */}
                    <div className="md:w-1/2 flex-1">
                        <Image
                            src={aboutAgency}
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

                    {/* Content Section */}
                    <div className="md:w-1/2">
                        <p className="text-gray-700 leading-relaxed">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
                            beatae pariatur tenetur, itaque enim cum commodi, id rerum, quidem
                            corporis eveniet consequuntur similique placeat nobis. Quos dolores
                            quis molestias illum. Lorem ipsum dolor sit amet consectetur
                            adipisicing elit. Sed facere dignissimos voluptates rerum beatae
                            aliquam nesciunt repellat obcaecati dolorum.
                        </p>
                    </div>
                </div>
            </PageLayout>
        </>
    )
}

export default Agency
