

export interface children {
    children: React.ReactNode
}


interface flags {
    svg: string
    png: string
    alt: string
}
 
 
interface translation {
    common: string
    official: string
}

interface translations {
    ara: string
    bre: string
    ces: string
    cym: string
    deu: string
    est: string 
    fra: string
    hrv: string
    hun: string
    ita: string
    jpn: string
    nld: string
    per: string
    pol: string
    rus: string
    slk: string
    spa: string
    srp: string
    swe: string
    tur: string
    urd: string
    zho: string
}

interface regionalBlocs {
    acronym: string
    name: string
}

interface postalCode {
    format: string
    regex: string
}

interface name extends translation { 
    nativeName: {
        eng: translation
        fil: translation 
    } 
}

export interface countryType { 
    topLevelDomain: string
    aplha2Code: string 
    aplha3Code: string
    callingCodes: string[] 
    altSpellings: string[]  
    demonym: string
    area: number 
    boders: string[]
    nativeName: string
    numericCode: string
    flags: flags
    // currencies: { name: string }
    languages: unknown
    translations: translations
    regionalBlocs: regionalBlocs[]
    
    
    capital: string[] | string
    cca2: string
    cca3: string
    ccn3: string
    cioc: string
    fifa: string
    flag: string
    
    independent: boolean
    landlocked: boolean
    latlng: number[]
    maps: {
        googleMaps: string
        openStreetMaps: string
    }
    borders: string[]
    name: name
    population: number
    postalCode: postalCode
    region: string
    startOfWeek: string
    status: string
    subregion: string
    timezones: string[]
    tld: string[]
    unMember: boolean
}