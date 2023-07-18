import { useState, createContext } from 'react'
import { children } from './lib/types'

interface initialType {
    theme: boolean
    setTheme:  React.Dispatch<React.SetStateAction<boolean>>
}

export const Theme = createContext<initialType>({
    theme: false,
    setTheme: () => null
})

const Context = ({ children }: children) => {

    const [theme, setTheme] = useState(false) 
    
    


    return (
        <Theme.Provider value={{theme, setTheme}}>
            {children}
        </Theme.Provider>
    )
}

export default Context
