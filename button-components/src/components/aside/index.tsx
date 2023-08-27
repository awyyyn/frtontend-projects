// import { NavLink } from "react-router-dom"

 

const index = () => {


    return (
        <aside className="fixed top-0 left-0 w-[237px] min-w-[237px] h-screen hidden md:flex flex-col gap-y-[127px] items-center py-10 bg-stone-100 ">
          <h2 className="brand">
            <span className="text-[#F7542E]">Dev</span>
            challenges.io
          </h2>
          <nav className="">
            {/* <NavLink to='/'>
                Colors
            </NavLink>
            <NavLink to='/'>
                Typography
            </NavLink>
            <NavLink to='/'>
                Spaces
            </NavLink>
            <NavLink to='/'>
                Buttons
            </NavLink>
            <NavLink to='/'>
                Inputs
            </NavLink>
            <NavLink to='/'>
                Grids
            </NavLink> */}
          </nav>
        </aside>
    )
}

export default index
