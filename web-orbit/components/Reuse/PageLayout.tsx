import React from "react";

interface PageLayoutProps {
    children: React.ReactNode;
}

const PageLayout = ({ children }: PageLayoutProps) => {
    return (
        <section className="text-gray-600 body-font overflow-hidden">
            <div className="container px-5 pt-6 pb-16 mx-auto">
                {children}
            </div>
        </section>
    )
}

export default PageLayout
