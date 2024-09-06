import AnimationComponent from '@/components/Reuse/lottie/AnimationComponent';
interface SlidersProps {
    file: string
}
const Sliders = ({ file }: SlidersProps) => {
    return (
        <div className="bg-white shadow-lg rounded-full p-2 max-w-xs">
            <div className="md:h-24 h-16" ><AnimationComponent file={file} style={{ height: "100%" }}
            /></div>
        </div>
    );
};

export default Sliders;
