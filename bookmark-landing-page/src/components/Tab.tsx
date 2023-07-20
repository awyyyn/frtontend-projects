 
import { Button } from '.'


interface tabProps {
    svg: string
    title: string
    paragraph: string 
}

const Tab = ({svg, title, paragraph}: tabProps) => {


    return ( 
        <div className='flex flex-col-reverse w-screen sm:flex-row py-5 sm:pb-2'>
            <div className={`flex py-10 sm:min-h-[500px] sm:w-[50%]  relative justify-end px-5 `}>
            <img src={svg} className=" z-[2] object-contain" alt="asd" />
            <div className=" 
                bg-soft-blue 
                h-[200px] xs:h-[60%] sm:h-[45%]  md:h-[58%]
                w-[315px] sm:w-[85%] xs:w-[80%]
                absolute 
                z-[0] 
                left-0 
                mt-16 xs:mt-[20%] sm:mt-[32%] md:mt-[20%]
                rounded-r-full
            " />
            </div>
            <div className="sm:w-[50%] px-3 sm:px-20  flex flex-col justify-center space-y-10  py-10">
                <h1 className="text-dark-blue font-bold text-center sm:text-left text-2xl  sm:text-4xl">{title}</h1>
                <p className="text-center sm:pr-20 px-6 sm:px-0 sm:text-left text-grayish-blue"> 
                    {paragraph}
                </p>
                <Button 
                    type='primary'
                    value='More Info'
                    styles='max-w-fit mx-auto sm:mx-0'
                />
            </div>
        </div> 
    )
}

export default Tab