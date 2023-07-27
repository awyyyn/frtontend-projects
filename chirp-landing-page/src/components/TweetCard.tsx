import twitter from '../assets/Twitter (Blue).svg'

interface cardProps {
    profile: string
    name: string
    username: string
    tweet: string
    likes: number
    date: string
    profileAlt: string
}

const TweetCard = ({ date, profile, likes, profileAlt, name, tweet, username } : cardProps) => {
    return (
        <div className="p-6 bg-white rounded-md space-y-3 sm:min-w-[300px] md:max-w-[410px]  h-min">
            <div className="flex justify-between items-center ">
                <div className='flex gap-x-2'>    
                    <img src={profile} alt={profileAlt} loading='lazy' />
                    <div className='-space-y-1 '>
                        <h1 className='font-bold'>{name}</h1>
                        <h2 className="text-sm text-slate-500">{username}</h2>
                    </div>
                </div>
                <img src={twitter} alt="twitter" />
            </div>
            <div>
                <p className="text-slate-500">
                    {tweet}
                </p>
            </div>
            <div className='flex justify-between'>
                <div className='inline-flex space-x-1 my-auto'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-red-600">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                    </svg>
                    <span className='text-slate-500'>{likes}</span>    
                </div>
                <p className='text-slate-400'>{date}</p>
            </div>
        </div>
    )
}

export default TweetCard