

const LoadingCard = () => { 
     
    return (
        <div className=' rounded-lg overflow-hidden  bg-whiteHsl dark:bg-darkBlueE w-[280px] h-[380px] drop-shadow-md '> 
            <div className='h-[45%] relative w-full bg-darkGray dark:bg-darkBlue animate-pulse delay-0 duration-300'> 
            </div>
            <div className='h-[55%] dark:text-whiteHsl font-nunito flex flex-col px-6  gap-y-3 justify-center text-darkBlueFG  '>
                <h1 className='dark:bg-darkBlue bg-darkGray w-full h-10 rounded-md animate-pulse delay-75 duration-300'></h1>
                <div className='space-y-2'>
                    <h3 className="dark:bg-darkBlue bg-darkGray w-full h-8 rounded-md animate-pulse delay-100 duration-300"></h3>
                    <h3 className="dark:bg-darkBlue bg-darkGray w-full h-8 rounded-md animate-pulse delay-150 duration-300"></h3>
                    <h3 className="dark:bg-darkBlue bg-darkGray w-full h-8 rounded-md animate-pulse delay-200 duration-300"></h3> 
                </div>
            </div>
        </div>
    )
}

export default LoadingCard