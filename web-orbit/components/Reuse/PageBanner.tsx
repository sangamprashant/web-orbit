
interface PageBannerProps {
    title: string;
    title2?: string;
    image: string
}

const PageBanner = ({ title, title2, image }: PageBannerProps) => {
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
            <div className="absolute inset-0 bg-black opacity-50"></div>

            {/* Centered Text */}
            <h1 className="relative text-white text-4xl md:text-5xl font-bold z-10">
                {title} {title2 && <span className="gradient-text">{title2}</span>}
            </h1>
        </div>
    )
}

export default PageBanner
