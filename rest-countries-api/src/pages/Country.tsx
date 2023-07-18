import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import Layout from './layout'
import { countryType } from '../lib/types'; 

const Country = () => {
    const { cca2 } = useParams()
    const [country, setCountry] = useState<countryType>();

    
    useEffect(() => {
        async function getCountryData() {
            const data = await fetch(`https://restcountries.com/v3.1/alpha/${cca2}`)
            const res = await data.json()
            console.log(res) 
            setCountry(res[0]);
        }
        getCountryData()
    }, [setCountry, cca2]);

    
    return (
        <Layout>
            <div className='flex flex-col px-8'>
                <div className='flex py-10 px-2 '>
                    <Link to={'/'} className='flex shadow-around dark:text-whiteHsl px-4 items-center py-2 gap-x-3 dark:bg-darkBlueE'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18" />
                        </svg> 
                        <span>Back</span>
                    </Link>
                </div>
                <div className='px-2 flex flex-col gap-y-8 md:justify-evenly md:flex-row'> 
                    <img src={country?.flags.png} alt={country?.flags.alt} className='min-h-[200px] min-w-[300px] md:max-w-[600px] md:min-h-[300px] max-h-[400px] md:w- bg-blue-500' /> 
                    <div className='dark:text-whiteHsl md:px-16 md:py-10 md:w-[55%]'>
                        <h1 className='text-extrabold text-3xl'>{country?.name.common}</h1>
                        <div className='flex flex-col md:flex-row gap-y-10 mt-5 md:justify-between w-full   '>
                            <div className='w-full md:w-[50%] md:pr-10 md:space-y-3 '>
                                <h2 className='text-normal'>Official Name: <span className='text-thin dark:text-slate-200'>{country?.name.official}</span></h2>
                                <h2 className='text-normal'>Population: <span className='text-thin dark:text-slate-200'>{country?.population}</span></h2>
                                <h2 className='text-normal'>Region: <span className='text-thin dark:text-slate-200'>{country?.region}</span></h2>
                                <h2 className='text-normal'>Sub Region: <span className='text-thin dark:text-slate-200'>{country?.subregion}</span></h2>
                                <h2 className='text-normal'>Capital: <span className='text-thin dark:text-slate-200'>{country?.capital && country?.capital[0]}</span></h2>
                            </div>
                            <div className='w-full md:w-[50%] md:px-10 md:space-y-3'>
                                <h2 className='text-normal'>Top Level Domain: <span className='text-thin dark:text-slate-200'>{country?.tld[0]}</span></h2>
                                <h2 className='text-normal'>Timezone: <span className='text-thin dark:text-slate-200'>{country?.timezones[0]}</span></h2>
                                <h2 className='text-normal'>Independent: 
                                    <span className='text-thin dark:text-slate-200'>
                                        {country?.independent ? ' Yes' : ' No'}
                                    </span>
                                </h2> 
                            </div>
                        </div>
                        <div className='flex flex-col md:flex-row md:items-start py-2 mt-5 justify-between '>
                            <h1 className='mb-3'>Border Countries:</h1>
                            <div className='flex gap-4 flex-1 flex-wrap justify-center'>
                                {
                                    country?.boders &&
                                    country?.borders.map((border) => (
                                        <div className='px-5 py-2 shadow-around-sm ml-4' key={border}>
                                            {border}
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default Country