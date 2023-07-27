import twitter from '../assets/Twitter.svg';


interface btnprops {
    styles?: string
    value: string
}

const TwitterBTN = ({styles, value}: btnprops) => {  

    return ( 
        <button className={`${styles} text-white gap-x-3 group justify-center py-3 items-center border-none rounded-md bg-blue-400 flex`}>
            <img src={twitter} alt='twitter' className='group-hover:animate-bounce' />
            <span>
                {value}
            </span>
        </button>
    )
}

export default TwitterBTN