
import { Button } from '.' 

interface cardProps {
    svg: string
    title: string
    minVersion: number
    align: string
}

const Card = ({minVersion, svg, title, align}:cardProps) => {
    return (
        <div className={`${align} flex flex-col items-center h-[350px] max-w-[350px] justify-center shadow-lg shadow-slate-400 rounded-xl`}>
            <div className='px-4 py-7 gap-y-6   flex flex-col gap-y- items-center'>
                <img src={svg} />
                <div className='space-y-1 text-center'>
                    <h1 className='text-dark-blue font-bold text-xl'>Add to {title}</h1>
                    <h2 className='text-grayish-blue text-sm '>Minimum version {minVersion}</h2>
                </div>
            </div>
            <div className='px-4 py-4 border-t-4 border-slate-300 border-dotted border-spacing-x-7 '>
                <Button 
                    type='primary'
                    value='Add & install Extension'
                />
            </div>
        </div>
    )
}

export default Card