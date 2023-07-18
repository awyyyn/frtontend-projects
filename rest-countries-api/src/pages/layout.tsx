import { Navbar } from '../components';
import { Theme } from '../context';
import { children } from '../lib/types';
import { useEffect, useContext } from 'react';




const Layout = ({children}: children) => {  
    
    const { setTheme, theme } = useContext(Theme)

    useEffect(() => {
        if (localStorage.theme === 'dark' ||  (window.matchMedia('(prefers-color-scheme: dark)').matches) || theme) {
            setTheme(true)
            document.documentElement.classList.add('dark');
            localStorage.setItem('theme', 'dark') 
        } else {
            localStorage.removeItem('theme') 
            document.documentElement.classList.remove('dark')
        }
    }, [theme, setTheme])
    
    
    return ( 
        <>
            <Navbar />
            <main>
                {children}
            </main>
        </>
    )
}

export default Layout