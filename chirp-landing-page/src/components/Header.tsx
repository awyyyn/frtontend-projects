import TwitterBTN from "./TwitterBTN" 

interface headerProps {
    toggleNav: () => void
    isOpen: boolean
}

const Header = ({ toggleNav, isOpen }:headerProps) => {   

    return (
        <header className="flex justify-between fixed top-0 w-full bg-white shadow-lg py-4 px-5 lg:px-32 md:px-16 items-center z-50  "> 
            <h1 className="text-blue-400 text-2xl font-bold italic">
                Chirp.
            </h1>

            <svg onClick={toggleNav} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 sm:hidden">
                <path strokeLinecap="round" strokeLinejoin="round" d={`${isOpen ? 'M6 18L18 6M6 6l12 12' : 'M3.75 9h16.5m-16.5 6.75h16.5'}`} className="transition-all" />  
            </svg> 


            <div className="hidden sm:flex items-center gap-x-7">
                <a href="#home" className="links">Home</a>
                <a href="#pricing" className="links">Pricing</a>
                <a href="#faq" className="links">FAQ</a>
                <TwitterBTN styles="px-4 py-2" value="Sign in with Twitter" />
            </div> 
        </header>   
    )
}

export default Header