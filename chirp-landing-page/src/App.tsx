import {  useState } from "react";
import { Features, Footer, Header, Hero, Pricing, Tweets } from "./components"
import { motion, useScroll, AnimatePresence } from 'framer-motion';
import TwitterBTN from "./components/TwitterBTN";
  

function App() { 
  const [isSideOpen, setIsSideIsOpen] = useState(false); 
  const { scrollYProgress } = useScroll(); 

  return ( 
    <>
      <motion.div 
        className="fixed z-[99] top-0 left-0 right-0 origin-left h-1 bg-blue-500" 
        style={{scaleX: scrollYProgress}}
      />
      <Header  toggleNav={() => setIsSideIsOpen(prev => !prev)} isOpen={isSideOpen} /> 
      <AnimatePresence>
        {isSideOpen &&  
          <motion.aside  
            transition={{duration: 0.3, ease: "easeInOut"}} 
            initial={{translateX: '100%'}}
            animate={{translateX: 0}} 
            exit={{translateX: '100%'}}
            className="fixed py-20 right-0 min-w-[250px] sm:hidden bg-white h-screen z-30 shadow-2xl"
          >
            <nav className="flex flex-col gap-y-5 px-5 asidenav"> 
              <a href="#home" className="links text-2xl">Home</a>
              <a href="#pricing" className="links text-2xl">Pricing</a>
              <a href="#faq" className="links text-2xl">FAQ</a>
              <TwitterBTN styles="px-4 py-2" value="Sign in with Twitter" />
            </nav>
          </motion.aside> 
        }
      </AnimatePresence>
      <main>
        <Hero />
        <Features />
        <Tweets />
        <Pricing />
      </main>
      <Footer />
    </>
  )
}

export default App
