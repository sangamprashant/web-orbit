
interface TitleProps {
    first: string;
    grad?: string
}

const Title = ({ first, grad }: TitleProps) => {
    return (
        <h1 className="sm:text-6xl text-6xl font-bold title-font mb-4 text-indigo-900">
            {first} {grad && <span className="gradient-text">{grad}</span>}
        </h1>
    )
}

export default Title