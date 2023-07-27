import Card from "./Card";
import moon from '../assets/moon-svgrepo-com.svg';
import newspaper from '../assets/rolled-up-newspaper-svgrepo-com.svg';
import analytics from '../assets/analytics-chart-diagram-svgrepo-com.svg';
import nerd from '../assets/nerd-face-svgrepo-com.svg'

const Features = () => {

    const tweetFeature = [
        {
            icon: analytics,
            title: 'Analytics',
            paragraph: 'We constantly monitor your audience as it grows -- so you can Tweet when your followers are most likely to be online and ready to engage with your content.',
            alt: "analytic"
        },
        {
            icon: nerd,
            title: 'Smart Analyzer',
            paragraph: "Chirp automatically recognizes your followers most active times and automatically sends you notifications if you're missing out an opportunity",
            alt: "nerd icon"
        },
        {
            icon: newspaper,
            title: 'Scheduled Your Tweets',
            paragraph: 'Quality tweets drive tons of engagement. With Chirp, you can write tweets in an advance and schedule them when your audience is most likely to read.',
            alt: "rolled paper"
        },
        {
            icon: moon,
            title: 'Dark Mode',
            paragraph: 'Friendly on the eyes, no matter what time you write your tweets. All colors are chosen to make sure your eyes are at ease at all times.',
            alt: "dark mode"
        }
    ]

    return (
        <section className='p-5 py-16 space-y-4 sm:px-8 md:px-16 lg:px-32'>
            <h1 className='font-bold text-3xl max-w-[400px]'>
                Features that help you Tweet smarter
            </h1>
            <div className="md:justify-between flex-col gap-y-5 flex md:flex-row md:gap-x-5 md:gap-y-8 flex-wrap">
                {tweetFeature.map(feature => (
                    <Card 
                        key={feature.title}
                        {...feature}
                    />
                ))}
            </div>
        </section>
    )
}

export default Features