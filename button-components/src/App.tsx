import { Aside } from "./components"
import ButtonsPage from "./pages/ButtonsPage"
 

export default function App() {


  return (
    <>
      <div className="flex h-screen min-h-[600px]">
        <Aside />
        <main className="md:ml-[237px] py-[53px]  px-[83px]">
          <ButtonsPage />
        </main>
      </div>
    </>
  )
}
