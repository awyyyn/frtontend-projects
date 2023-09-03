import { Link, NavLink } from "react-router-dom"

 

const index = () => {


    const links = [
        {
            path: "/colors",
            name: "Colors"
        },
        {
            path: "/typography",
            name: "Typography"
        },
        {
            path: "/spaces",
            name: "Spaces"
        },
        {
            path: "/buttons",
            name: "Buttons"
        },
        {
            path: "/inputs",
            name: "Inputs"
        },
        {
            path: "/grids",
            name: "Grid"
        },
    ]


    return (
        <aside className="fixed top-0 left-0 w-[237px] min-w-[237px] h-screen hidden md:flex flex-col gap-y-[127px] pl-[56.5px] py-10 bg-stone-100 ">
            <Link to="/">
                <h2 className="brand">
                    <span className="text-[#F7542E]">Dev</span>
                    challenges.io
                </h2>
            </Link>
            <nav className="flex flex-col gap-y-[35px]">
                {links.map(({name, path}, i) => (
                    <NavLink 
                        key={i} 
                        to={path}     
                        className={({isActive}) => isActive ? 'active-link links' : 'inactive-link links' }
                    >
                        {name}
                    </NavLink>
                ))}
            </nav>
        </aside>
    )
}

export default index
