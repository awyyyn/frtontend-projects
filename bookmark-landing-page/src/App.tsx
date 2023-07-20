import Navbar from "./components/Navbar"
import heroSvg from "./assets/illustration-hero.svg"
import tab1Svg from "./assets/illustration-features-tab-1.svg"
import tab2Svg from "./assets/illustration-features-tab-2.svg"
import tab3Svg from "./assets/illustration-features-tab-3.svg" 
import { Button, Card, Tab } from "./components"
import { ChangeEvent, useState } from "react"
import { browser, faqs } from "./constants"



function App() { 
  const [isNavOpen, setIsNavOpen] = useState(false)
  const [tab, setTab] = useState(0);
  const [ans, setAns] = useState<number | null>(null)
  const [email, setEmail] = useState('')
  const [emailErr, setEmailErr] = useState(false)

  const emailRegEx = /^[a-zA-Z0-9]+(?:\.[a-zA-Z0-9]+)*@[a-zA-Z0-9]+(?:\.[a-zA-Z0-9]+)*$/
  const handleTab = (num:number) => setTab(num);
  const handleFaq = (num: number) => {
    if(ans === num) {
      setAns(null)
    }else{
      setAns(num)
    }
  }

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    if(emailRegEx.test(e.target.value)){
      setEmailErr(false)
    }else{
      setEmailErr(true) 
    }
    setEmail(e.target.value)
  }
  


  return ( 
    <>
      <header>
        <Navbar isNavOpen={isNavOpen} handleNav={() => setIsNavOpen(pre => !pre)} />
      </header>
      <main>
        <section className="flex flex-col-reverse w-screen sm:flex-row py-20 sm:pb-2">
          <div className="sm:w-[50%] px-3 sm:px-20  flex flex-col justify-center space-y-10  py-10">
            <h1 className="text-dark-blue font-semibold text-center sm:text-left   text-4xl">A Simple Bookmark <br /> Manager</h1>
            <p className="text-center px-6 sm:px-0 sm:text-left text-grayish-blue"> 
              A clean and simple interface to organize your favorite websites. Open a new browser tab and see your sites load instantly. Try it for free.
            </p>
            <div className="flex justify-evenly sm:justify-start sm:gap-x-4 ">
              <Button 
                type="primary"
                value="Get it on Chrome"
              />
              <Button 
                type="secondary"
                value="Get in on Firefox"
              />
            </div>
          </div>
          <div className="flex py-10 sm:min-h-[500px] sm:w-[50%]  relative">
            <img src={heroSvg} className=" z-[2] object-contain" alt="asd" />
            <div className=" 
              bg-soft-blue 
              h-[200px] xs:h-[60%] sm:h-[45%]  md:h-[58%]
              w-[315px] sm:w-[85%] xs:w-[80%]
              absolute 
              z-[0] 
              right-0 
              mt-16 xs:mt-[20%] sm:mt-[32%] md:mt-[20%]
              rounded-l-full
            " />
          </div>
        </section>


        <section id="features" className="py-20">
          <div className="flex flex-col items-center gap-y-4">
            <h1 className="text-dark-blue font-bold text-3xl">Features</h1>
            <p className="text-center px-6 sm:max-w-[50%] text-grayish-blue md:px-20">
              Our aim is to make it quick and easy for you to access your favourite websites. Your bookmarks sync between your devices so you can access them on the go.
            </p>
          </div>
          <div className="flex flex-col  sm:flex-row py-7 sm:justify-center sm:mx-[10vw] md:mx-[15vw]">
            <button onClick={() => handleTab(0)} className={`feature__btn ${tab == 0 && 'text-dark-blue font-bold'}`}>
              Simple Bookmarking
              {tab == 0 && <div className="btn__active" />}
            </button>
            <button onClick={() => handleTab(1)} className={`feature__btn ${tab == 1 && 'text-dark-blue font-bold'}`}>
              Speedy Searching
              {tab == 1 && <div className="btn__active" />}
            </button>
            <button onClick={() => handleTab(2)} className={`feature__btn ${tab == 2 && 'text-dark-blue font-bold'}`}>
              Easy Sharing
              {tab == 2 && <div className="btn__active" />}
            </button>
          </div>
          <div>
            {tab === 0 && 
              <Tab  
                svg={tab1Svg} 
                title="Bookmark in one click"
                paragraph="Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favourites sites."
              />
            }
            {tab === 1 && 
              <Tab  
                title="Intelligent search"
                paragraph="Our powerful search feature will help you find saved sites in no time at all. No need yo trawl through all of your bookmarks"
                svg={tab2Svg} 
              />
            }
            {tab === 2 &&
              <Tab  
                title="Share your bookmarks"
                paragraph="Easily share your bookmarks and collections with others. Create a shareable link that you can send ay the click of a button"
                svg={tab3Svg} 
              />
            }
          </div>
        </section>


        <section className="flex flex-col sm:mt-16  py-20 gap-y-10" id="pricing">
          <div className="flex flex-col items-center gap-y-4">
            <h1 className="text-dark-blue font-bold text-3xl ">Download the extension</h1>
            <p className="text-center px-6 sm:max-w-[50%] text-grayish-blue md:px-20">
              We'e got more browsers in the pipeline. Please do let us know if you've got a favourite you'd like us to prioritize.
            </p>
          </div>
          <div className="flex  sm:h-[500px] px-10 gap-y-10 flex-col sm:flex-row sm:justify-center  sm:gap-x-10 items-center">
            {browser.map((item) => (
              <Card key={item.title} {...item} />
            ))}
          </div>
        </section>


        <section className="flex flex-col sm:mt-16 py-10 gap-y-10" >
          <div className="flex flex-col items-center gap-y-4">
            <h1 className="text-dark-blue font-bold text-3xl text-center px-6">Download the extension</h1>
            <p className="text-center px-6 sm:max-w-[50%] text-grayish-blue md:px-20">
              Here are some of our FAQs. If you have any other questions you'd like answered please feel free to email us.
            </p>

          </div>

          <div className="flex flex-col px-6 sm:items-center ">
            {faqs.map((faq) => (
              <div key={faq.id} className="border-t cursor-pointer group border-grayish-blue py-5 last:border-b sm:w-[50%]">
                <button onClick={() => handleFaq(faq.id)} className="flex justify-between w-full ">
                  <span className="group-hover:text-soft-red">{faq.question}</span>

                  {ans !== faq.id ?
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="w-5 h-5 text-soft-blue ">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                    </svg> :
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="w-5 h-5 text-soft-red">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
                    </svg>
                  } 

                </button>
                <p className={`text-grayish-blue mt-5 ${ans === faq.id ? 'block' : 'hidden'}`} >
                  {faq.answer}
                </p>
              </div> 
            ))}
          </div>

          <Button 
            type="primary"
            styles="max-w-fit self-center my-3"
            value="More info"
          />

        </section>



        <section className="bg-soft-blue py-12 flex justify-center" id="contact">
            <div className=" sm:w-[80%] md:w-[60%] gap-y-7 flex flex-col items-center">
              <h2 className="uppercase text-[13px] text-white tracking-widest font-semibold">35,000+ already joined</h2>
              <h1 className="text-white font-semibold px-8 sm:px-0 text-2xl sm:text-3xl tracking-wider sm:max-w-[400px] text-center  ">
                Stay up-to-date with what we're doing
              </h1>
              <div className="flex flex-col sm:flex-row px-9 sm:px-0 rounded-md w-full sm:w-auto  justify-between sm:gap-5 gap-x-5 gap-y-7 ">
                <div className={`relative w-full sm:w-[255px] border-2 ${emailErr ? 'border-soft-red bg-soft-red' : 'border-white bg-white'}  rounded-md flex items-center `}>
                  <input 
                    className="h-full py-3 px-4 w-full font-normal rounded-md focus:outline-none " 
                    placeholder="Enter you email address"
                    onChange={(e) => handleChange(e)}
                    value={email}
                  />
                  <div className={`absolute right-3 ${emailErr ? 'block' : 'hidden'}`}>
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20">
                        <g fill="none" fill-rule="evenodd">
                          <circle cx="10" cy="10" r="10" fill="#FA5959"/>
                          <g fill="#FFF" transform="translate(9 5)">
                            <rect width="2" height="7" rx="1"/>
                            <rect width="2" height="2" y="8" rx="1"/>
                          </g>
                        </g>
                      </svg> 
                  </div>
                  <span className={`italic absolute ${emailErr ? 'block' : 'hidden'}  bg-soft-red text-white text-xs w-full px-2 border border-soft-red rounded-b-md top-full`}>Whoops, make sure it's an email</span>
                </div>
                <button className="bg-soft-red rounded-md text-white px-5 py-2 font-normal border border-soft-red hover:bg-white hover:text-soft-red">
                  Contact Us
                </button>
              </div>
            </div>
        </section>
      </main>
      <footer className="py-10 gap-y-8 sm:px-20 hover:text-soft-red bg-dark-blue flex flex-col sm:flex-row sm:justify-between items-center">
        <svg width="148" height="25" xmlns="http://www.w3.org/2000/svg">
          <g fill="none" fillRule="evenodd">
            <path d="M37 6.299h5.227c.746 0 1.434.155 2.062.466.629.311 1.123.735 1.484 1.27s.542 1.12.542 1.754c0 .672-.165 1.254-.495 1.746-.33.491-.762.868-1.297 1.129v.15c.697.248 1.25.643 1.661 1.185.41.541.616 1.191.616 1.95 0 .735-.196 1.385-.588 1.951a3.817 3.817 0 0 1-1.587 1.307c-.665.305-1.403.457-2.212.457H37V6.299zm5.04 5.45c.548 0 .986-.152 1.316-.457.33-.305.495-.688.495-1.148 0-.448-.159-.824-.476-1.13-.318-.304-.738-.457-1.26-.457H39.52v3.192h2.52zm.28 5.619c.61 0 1.086-.159 1.428-.476.342-.317.513-.731.513-1.241 0-.51-.174-.927-.522-1.251-.349-.324-.847-.485-1.494-.485H39.52v3.453h2.8zm12.927 2.595c-1.307 0-2.492-.308-3.556-.924a6.711 6.711 0 0 1-2.511-2.53c-.61-1.07-.915-2.246-.915-3.528 0-1.281.305-2.457.915-3.528a6.711 6.711 0 0 1 2.51-2.529C52.756 6.308 53.94 6 55.248 6c1.306 0 2.492.308 3.556.924a6.711 6.711 0 0 1 2.51 2.53c.61 1.07.915 2.246.915 3.527 0 1.282-.305 2.458-.915 3.528a6.711 6.711 0 0 1-2.51 2.53c-1.064.616-2.25.924-3.556.924zm0-2.39a4.52 4.52 0 0 0 2.258-.578 4.177 4.177 0 0 0 1.615-1.624c.392-.697.588-1.494.588-2.39 0-.896-.196-1.692-.588-2.389a4.177 4.177 0 0 0-1.615-1.624 4.52 4.52 0 0 0-2.258-.579 4.47 4.47 0 0 0-2.25.579 4.195 4.195 0 0 0-1.605 1.624c-.392.697-.588 1.493-.588 2.39 0 .895.196 1.692.588 2.389a4.195 4.195 0 0 0 1.605 1.624 4.47 4.47 0 0 0 2.25.578zm15.353 2.39c-1.307 0-2.492-.308-3.556-.924a6.711 6.711 0 0 1-2.51-2.53c-.61-1.07-.915-2.246-.915-3.528 0-1.281.305-2.457.914-3.528a6.711 6.711 0 0 1 2.511-2.529C68.108 6.308 69.294 6 70.6 6c1.307 0 2.492.308 3.556.924a6.711 6.711 0 0 1 2.51 2.53c.61 1.07.915 2.246.915 3.527 0 1.282-.305 2.458-.914 3.528a6.711 6.711 0 0 1-2.511 2.53c-1.064.616-2.25.924-3.556.924zm0-2.39a4.52 4.52 0 0 0 2.259-.578 4.177 4.177 0 0 0 1.614-1.624c.392-.697.588-1.494.588-2.39 0-.896-.196-1.692-.588-2.389a4.177 4.177 0 0 0-1.614-1.624 4.52 4.52 0 0 0-2.259-.579 4.47 4.47 0 0 0-2.25.579 4.195 4.195 0 0 0-1.605 1.624c-.392.697-.588 1.493-.588 2.39 0 .895.196 1.692.588 2.389a4.195 4.195 0 0 0 1.606 1.624 4.47 4.47 0 0 0 2.249.578zM79.83 6.3h2.52v5.73h.15l4.89-5.73h3.043v.149L85.6 11.973l5.338 7.542v.149h-3.08l-3.994-5.693-1.512 1.773v3.92h-2.52V6.299zM93.779 6h3.248l3.546 9.39h.15L104.268 6h3.267v13.365h-2.501v-6.589l.15-2.221h-.15l-3.398 8.81h-1.96l-3.416-8.81h-.149l.15 2.221v6.59h-2.483V6zm20.8 0h2.894l5.021 13.365h-2.781l-1.12-3.192h-5.115l-1.12 3.192h-2.781L114.579 6zm3.193 7.859l-1.176-3.36-.486-1.606h-.149l-.485 1.606-1.195 3.36h3.49zM124.553 6h4.872c.871 0 1.646.18 2.324.541.678.361 1.204.862 1.577 1.503.374.64.56 1.366.56 2.175 0 .858-.27 1.62-.812 2.286a4.617 4.617 0 0 1-2.044 1.447l-.018.13 3.584 5.134v.15h-2.894l-3.453-5.022h-1.176v5.021h-2.52V6zm4.853 6.03c.573 0 1.04-.175 1.4-.523.361-.349.542-.79.542-1.326 0-.51-.172-.945-.514-1.306-.342-.361-.806-.542-1.39-.542h-2.371v3.696h2.333zm7.23-6.03h2.52v5.73h.15l4.89-5.73h3.043v.15l-4.835 5.525 5.34 7.541v.15h-3.08l-3.996-5.694-1.512 1.773v3.92h-2.52V6z" fill="#FFFFFF" fill-rule="nonzero"/>
            <g>
                <circle fill="#5267DF" cx="12.5" cy="12.5" r="12.5"/>
                <path d="M9 9v10l3.54-3.44L16.078 19V9a2 2 0 0 0-2-2H11a2 2 0 0 0-2 2z" fill="#FFFFFF"/>
            </g>
          </g>
        </svg>
        <div className="flex flex-col sm:flex-row gap-y-4 sm:justify-between items-center gap-x-8 ">
            <a href="#feature" className="text-white uppercase text-center tracking-widest hover:text-soft-red">features</a>
            <a href="#pricing" className="text-white uppercase text-center tracking-widest hover:text-soft-red">pricing</a>
            <a href="#contact" className="text-white uppercase text-center tracking-widest hover:text-soft-red">Contact</a>
        </div>
        <div className="flex gap-x-12 items-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="group cursor-pointer" width="24" height="24">
            <path fill="#FFF" className="group-hover:fill-soft-red" fill-rule="evenodd" d="M22.675 0H1.325C.593 0 0 .593 0 1.325v21.351C0 23.407.593 24 1.325 24H12.82v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116c.73 0 1.323-.593 1.323-1.325V1.325C24 .593 23.407 0 22.675 0z"/>
          </svg>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" className="group cursor-pointer"  height="20">
            <path fill="#FFF" className="group-hover:fill-soft-red" fill-rule="evenodd" d="M24 2.557a9.83 9.83 0 0 1-2.828.775A4.932 4.932 0 0 0 23.337.608a9.864 9.864 0 0 1-3.127 1.195A4.916 4.916 0 0 0 16.616.248c-3.179 0-5.515 2.966-4.797 6.045A13.978 13.978 0 0 1 1.671 1.149a4.93 4.93 0 0 0 1.523 6.574 4.903 4.903 0 0 1-2.229-.616c-.054 2.281 1.581 4.415 3.949 4.89a4.935 4.935 0 0 1-2.224.084 4.928 4.928 0 0 0 4.6 3.419A9.9 9.9 0 0 1 0 17.54a13.94 13.94 0 0 0 7.548 2.212c9.142 0 14.307-7.721 13.995-14.646A10.025 10.025 0 0 0 24 2.557z"/>
          </svg>
          
        </div>
      </footer>
    </>
  )
}

export default App
