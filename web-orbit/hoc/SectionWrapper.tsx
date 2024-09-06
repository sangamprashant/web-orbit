import { motion } from "framer-motion";
import { staggerContainer } from "@/utils/motion";
import { styles } from "@/styles";
import React from "react";

// Define types for the HOC parameters
type StarWrapperProps = {
    idName: string;
};

// HOC function with typing for Component and idName
const StarWrapper = <P extends object>(
    Component: React.ComponentType<P>,
    idName: string
) =>
    function HOC(props: P) {
        return (
            <motion.section
                variants={staggerContainer(10, 10)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.25 }}
                className={`${styles.padding} max-w-7xl mx-auto relative z-0`}
            >
                <span className="hash-span" id={idName}>
                    &nbsp;
                </span>

                <Component {...props} />
            </motion.section>
        );
    };

export default StarWrapper;
