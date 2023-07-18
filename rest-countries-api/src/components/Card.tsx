import { countryType } from '../lib/types'
import { Suspense } from 'react';
import { LoadingCard } from '.';

const Card = (props: countryType) => { 
     

    return (
        <Suspense fallback={<LoadingCard />}>
            <div className=' rounded-lg overflow-hidden  bg-whiteHsl dark:bg-darkBlueE w-[280px] h-[380px] drop-shadow-md'> 
                <div className='h-[45%] relative '>
                    <img src={props.flags.png} className='object-fill h-full w-full absolute top-0' />
                </div>
                <div className='h-[55%] dark:text-whiteHsl font-nunito flex flex-col px-6  gap-y-3 justify-center text-darkBlueFG  '>
                    <h1 className='text-xl font-extrabold  '>{props.name.common}</h1>
                    <div className='space-y-2'>
                        <h3 className='font-bold text-sm'>Population:<span className='text-darkGray ml-[1ch] font-thin dark:text-whiteHsl text-thin'>{props.population}</span></h3>
                        <h3 className='font-bold text-sm'>Region:<span className='text-darkGray ml-[1ch] font-thin dark:text-whiteHsl text-thin'>{props.region}</span></h3>
                        <h3 className='font-bold text-sm'>Country:<span className='text-darkGray ml-[1ch] font-thin dark:text-whiteHsl text-thin'>{props.capital}</span></h3>
                    </div>
                </div>
            </div>
        </Suspense>
    )
}

export default Card