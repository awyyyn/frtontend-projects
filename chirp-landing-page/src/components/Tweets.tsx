import saraMay from '../assets/userAvatar01.svg'; 
import jack from '../assets/userAvatar07.svg';
import jessica from '../assets/userAvatar08.svg';
import TweetCard from "./TweetCard"; 



const userTweets = [
    {
        name: "Sara May",
        username: '@sara_may',
        tweet: "I just tried out @chirp and it's amazing, love all the analytics I can see.",
        likes: 2,
        date: 'March 2, 2021',
        profile: saraMay,
        profileAlt: 'sara profile'
    },
    {
        name: "Jack Scott",
        username: '@jackscott_',
        tweet: "I initially started using Chirp to support the co-founder as I personally knew him, but after having tried it out for a few weeks, I can genuinely say this changed my Twitter game.",
        likes: 32,
        date: 'March 2, 2021',
        profile: jack,
        profileAlt: 'jack profile'
    },
    {
        name: "Jessica May",
        username: '@jmay98',
        tweet: "Absolutely love everything about Chirp, from the design to how everything works smoothly.",
        likes: 221,
        date: 'March 2, 2021',
        profile: jessica,
        profileAlt: 'jessica profile'
    }
]

const Tweets = () => {
    return (
        <section className="p-5 py-14 space-y-14 sm:px-8 md:px-16 lg:px-32 bg-[#ace7fb96]">
            <h1 className='text-4xl font-bold'>What our customers say</h1>
            <div      
                className='flex flex-col gap-y-6 sm:flex-row sm:gap-x-6  overflow-scroll lg:overflow-hidden md:justify-be   '
            >
                {userTweets.map(tweet => (
                    <TweetCard
                        key={tweet.username}
                        {...tweet}
                    />
                ))}
            </div>
        </section>
    )
}

export default Tweets