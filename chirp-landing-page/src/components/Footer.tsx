import twitter from '../assets/Twitter (Black).svg'
 
const Footer = () => {


    return (
        <footer className="flex flex-col md:flex-row md:justify-between md:items-center p-5 py-5 bg-[#ace7fb96] space-y-4 sm:px-8 md:px-16 lg:px-32">
            <h1 className='text-blue-500 font-bold italic text-2xl'>Chirp</h1>
            <div className="flex gap-x-4 my-auto">
                <img src={twitter} alt='twitter' />
                <a href='#' className='font-normal text-xl '>Privacy Policy</a>
                <a href='#' className='font-normal text-xl '>Terms of Use</a>
            </div>
        </footer>
    )
}

export default Footer