"use client"
import NextTopLoader from 'nextjs-toploader';

const Progess = () => {
    return (
        <NextTopLoader
        color="red"
        initialPosition={0.08}
        crawlSpeed={200}
        height={4}
        crawl={true}
        showSpinner={false}
        easing="ease"
        speed={100}
        shadow="0 0 10px #2299DD,0 0 5px #2299DD"
        zIndex={1600}
        showAtBottom={false}
    />
    )
}

export default Progess
