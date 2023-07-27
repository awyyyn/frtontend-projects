import user1 from '../assets/userAvatar01.svg'
import user2 from '../assets/userAvatar02.svg'
import user3 from '../assets/userAvatar03.svg'
import user4 from '../assets/userAvatar04.svg'
import user5 from '../assets/userAvatar05.svg'
import user6 from '../assets/userAvatar06.svg'
import user7 from '../assets/userAvatar07.svg'
import user8 from '../assets/userAvatar08.svg'
import user9 from '../assets/userAvatar09.svg'
import heroImg from '../assets/Hero Image (Desktop View).png'
import heroImg2 from '../assets/Hero Image (Tablet View).png'
import TwitterBTN from './TwitterBTN'

const Hero = () => {

    return ( 
        <section id='home' className='flex flex-col lg:flex-row-reverse bg-[#f6fadf64] px-5 md:px-16 md:gap-x-4 lg:px-32 lg:pb-10 gap-y-10 pt-20 sm:pt-28 pb-5 lg:justify-between '>
            <div className=' lg:flex lg:justify-end'>
                <img src={heroImg} alt='heroImage' loading='lazy' className='block sm:hidden lg:block lg:object-contain lg:max-w-[650px] md:min-w-[300px] lg:w-[400px]' />
                <img src={heroImg2} alt='heroImage' loading='lazy' className='hidden sm:block lg:hidden' />
            </div>
            <div className='space-y-4 lg:pt-5'>
                <h1 className='font-bold text-3xl sm:text-4xl lg:max-w-[700px] lg:text-6xl tracking-wider'>
                    Twitter analytics taken to a whole new level.
                </h1>
                <p className='text-slate-600 lg:max-w-[700px] tracking-wider'>
                    Chirp is suite of Twitter analytics that will help you better understand your audience which tweets they like, and most importantly, when they are the most active on Twitter.
                </p>
                <div className='flex flex-col sm:flex-row flex-wrap'>
                    <TwitterBTN styles='w-full sm:w-[250px] lg:w-fit lg:px-5' value="sign in with Twitter" />
                    <a href='#' >
                        <div className='bg-none items-center border-none gap-x-2 justify-center w-full sm:w-[150px] flex text-blue-900 font-bold py-3 '>
                            <span>
                                Learn more
                            </span>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="w-4 h-4">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                            </svg> 
                        </div>
                    </a>
                </div>

                <div className='flex flex-col gap-y-3  py-5'>
                    <div className='flex -space-x-5 ring-white'>
                        <img src={user9} alt='user9' className='' />
                        <img src={user8} alt='user8' className='' />
                        <img src={user7} alt='user7' className='' />
                        <img src={user6} alt='user6' className='' />
                        <img src={user5} alt='user5' className='' />
                        <img src={user4} alt='user4' className='' />
                        <img src={user3} alt='user3' className='' />
                        <img src={user2} alt='user2' className='' />
                        <img src={user1} alt='user1' className='' />
                    </div>
                    <p className='tracking-widest'>
                        Join <span className='text-blue-500 font-bold'>195</span> others who have analyzed their followers and <br className='hidden lg:block' />
                        scheduled <span className='text-blue-500 font-bold'>1342</span> tweets!
                    </p>
                </div>
            </div>
        </section>
    )
}

export default Hero