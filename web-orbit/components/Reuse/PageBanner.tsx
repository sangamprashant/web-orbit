
interface PageBannerProps {
    title: string;
    title2?: string;
    description?: string;
    image: string
}

const PageBanner = ({ title, title2, image, description }: PageBannerProps) => {
    return (
        <div
            className="relative flex items-center justify-center h-64 md:h-80"
            style={{
                backgroundImage: `url(${image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
            }}
        >
            {/* Overlay */}
            <div className="absolute inset-0 bg-black opacity-65"></div>

            {/* Centered Text */}
            <div className="flex flex-col text-center">
                <h1 className="relative text-white text-4xl md:text-5xl font-bold z-10">
                    {title} {title2 && <span className="gradient-text">{title2}</span>}
                </h1>
                {description && <p className="text-gray-400 relative z-10 mt-3">{description}</p>}
            </div>
        </div>
    )
}

export default PageBanner
