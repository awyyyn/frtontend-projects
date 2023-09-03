import { Aside } from "./components" 
import { Outlet } from 'react-router-dom'

export default function App() {


  return (
    <>
      <div className="flex h-screen min-h-[600px]">
        <Aside />
        <main className="md:ml-[237px] py-[30px] px-[83px]">
          <Outlet />
        </main>
      </div>
    </>
  )
}
