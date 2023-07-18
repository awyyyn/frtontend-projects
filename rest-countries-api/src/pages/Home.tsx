import { Listbox, Transition } from "@headlessui/react";
import { Card, LoadingCard } from "../components"
import { countryType } from "../lib/types";
import Layout from "./layout";
import { Fragment, useEffect, useState } from 'react'
import { filter } from "../constant";
import { Link } from "react-router-dom";




const Home = () => {
    const [isLoading, setIsLoading] = useState(false)
    const [notFound, setNotFound] = useState(false)
    const [region, setRegion] = useState('Filter by Region')
    const [countries, setCountries] = useState<countryType[]>()

    async function getAllCountriesFN () {
        setIsLoading(true)
        const res = await fetch(`https://restcountries.com/v3.1/all`)
        const data = await res.json();
        setCountries(data);
        setIsLoading(false)
    }

    async function getCountryByRegion (region: string) {
        setIsLoading(true)
        const res = await fetch(`https://restcountries.com/v3.1/region/${region}`)
        const data = await res.json();
        setCountries(data);
        setIsLoading(false)
    }

    useEffect(() => {
        getAllCountriesFN();
    }, [])
     

    const searchCountry = async(e: React.ChangeEvent<HTMLInputElement>) => {
        setIsLoading(true)
        if(e.target.value == ""){
            setIsLoading(false)
            setNotFound(false)
            return getAllCountriesFN()
        }
        const res = await fetch(`https://restcountries.com/v3.1/name/${e.target.value}`)
        const data = await res.json()
        if(data.status == 404) {
            setIsLoading(false)
            return setNotFound(true) 
        }
        setIsLoading(false)
        setNotFound(false)
        setCountries(data) 
    }

    return (
        <Layout>
            <section className='flex flex-col relative w-full px-10 md:px-24 gap-y-10 md:py-10 py-8 '> 
                <div className="w-full flex md:flex-row gap-2 md:px-4 flex-col items-center md:justify-between relative   h-[130px] md:h-auto ">   
                    <div className="flex shadow-md bg-whiteHsl items-center px-5 py-1 gap-2 rounded-md w-full md:w-[300px] min-w-full md:min-w-max dark:bg-darkBlueE">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-darkGray dark:text-whiteHsl">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                        </svg> 
                        <input placeholder="Search for a country..." onChange={searchCountry} className="h-full font-normal py-2 focus:outline-none w-full dark:bg-darkBlueE dark:text-whiteHsl" />
                    </div>
                    <Listbox value={region} onChange={setRegion} as="div" className='absolute md:right-4 z-50 md:left-auto left-0  top-20 md:top-0 w-[200px]  '> 
                        <Listbox.Button className='flex items-center bg-whiteHsl shadow-md rounded-md px-5 py-3 justify-between gap-x-5 w-full dark:bg-darkBlueE dark:text-whiteHsl'>
                            {region}
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                            </svg> 
                        </Listbox.Button>  
                        <Transition 
                            as={Fragment}
                            enter="transition ease-out duration-100"
                            enterFrom="transform opacity-0 scale-95"
                            enterTo="transform opacity-100 scale-100"
                            leave="transition ease-in duration-75"
                            leaveFrom="transform opacity-100 scale-100"
                            leaveTo="transform opacity-0 scale-95"
                            >
                            <Listbox.Options  > 
                                <div className="flex flex-col px-5 bg-whiteHsl dark:text-whiteHsl dark:bg-darkBlueE mt-1 rounded-md py-2 shadow-md gap-y-2 ">
                                    {filter.map((region, index) => (
                                        <Listbox.Option key={index} value={region} onClick={() => getCountryByRegion(region)}  >
                                            {({active}) => (
                                                <div className="text-left flex justify-between cursor-pointer ">
                                                    <p>
                                                        {region}
                                                    </p>
                                                    {active && <>
                                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 dark:text-whiteHsl">
                                                            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                                                        </svg> 
                                                    </>}
                                                </div>
                                            )}
                                        </Listbox.Option> 
                                    ))}
                                </div>
                            </Listbox.Options>
                        </Transition>
                    </Listbox>
                </div> 
                <div className="flex flex-wrap flex-1 w-full gap-10 md:gap-16  justify-center">
                    { notFound ? 
                        <div className="dark:text-whiteHsl">
                            <h1 className="text-3xl">
                                No Country found
                            </h1>
                        </div>:
                    isLoading ? <>
                        {[1, 2, 3, 4].map((i) => (
                            <LoadingCard key={i} />
                        ))}
                    </> :
                        countries?.map(country => ( 
                        <Link to={`/country/${country.cca2}`} onClick={() => console.log(country.fifa)} key={country.name.official}>
                            <Card  {...country} /> 
                        </Link>
                    ))}
                </div>
            </section>
        </Layout>
    )
}

export default Home