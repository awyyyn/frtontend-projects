 

interface cardProps {
    icon?: string
    title: string
    paragraph: string
    alt: string
    imgStyles?: string
}


const Card = ({
        alt, icon, imgStyles, paragraph, title
    }: cardProps) => {


    return (
        <div className='border border-slate-300 p-4 py-6 rounded-md space-y-3  md:w-[48%]'>
            <img src={icon} alt={alt} className={`${imgStyles} w-10`} />
            <h1 className="text-black font-bold text-md md:text-xl">{title}</h1>
            <p className="text-slate-500 md:text-lg">
                {paragraph}
            </p>
        </div>
    )
}

export default Card
