import AnimationComponent from '@/components/Reuse/lottie/AnimationComponent';
import { motion } from 'framer-motion';

interface SlidersProps {
    file: string;
}

const Sliders = ({ file }: SlidersProps) => {
    return (
        <motion.div
            className="bg-indigo-50 shadow-lg rounded-full p-2 max-w-xs"
            whileHover={{ scale: 1.2, translateY: -5, }}
        >
            <div className="md:h-20 h-16">
                <AnimationComponent file={file} style={{ height: '100%' }} />
            </div>
        </motion.div>
    );
};

export default Sliders;
