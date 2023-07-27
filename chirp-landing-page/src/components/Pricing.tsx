import check from '../assets/Checkmark.svg' 
import TwitterBTN from './TwitterBTN'

const Pricing = () => {
    
    const priceFeature = [
        {
            id: 0,
            desc: "Unlimited* scheduled tweets and threads."
        },
        {
            id: 1,
            desc: "Schedule up to 3 weeks in advance."
        },
        {
            id: 2,
            desc: "Real-time audience analytics tracking up to 5k followers."
        }
    ]

    return (
        <section className='p-5 py-16 space-y-4 sm:px-8 mx:px-16 lg:py-36 lg:px-32' id='pricing' >
            <h1 className='text-center font-bold text-4xl'>One simple price plan.</h1>
            <p className='px-3 text-center mx-auto text-slate-500 sm:max-w-[500px]'>
                Start growing your twitter account by analyzing your follower's patters.
            </p>
            <br />  
            <div className="mx-auto space-y-3 bg-[#f6f2772e] max-w-[420px] px-5 md:px-8 py-6 rounded-lg border border-yellow-600">
                <div>
                    <h2 className='text-slate-500'>Monthly</h2>
                    <h1 className='text-5xl md:text-4xl font-bold'>$9<span className='text-slate-500 text-lg font-thin'>/mo</span></h1>
                </div>
                <hr />
                {priceFeature.map(({id, desc}: {id: number, desc: string}) => (
                    <div className="flex gap-x-3 items-start" key={id}>
                        <img src={check} alt='checkmark' className='h-6' />
                        <p className='text-slate-500 text-lg'>
                            {desc}
                        </p>
                    </div>
                ))}
                
                <hr />
                    
                <TwitterBTN
                    styles='w-full'
                    value='Start Trial with Twitter'
                />
            </div>
        </section>
    )
}

export default Pricing