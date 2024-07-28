import { Navbar } from "../components/Navbar"
import { Sidebar } from "../components/Sidebar"
import { Articles } from "../views/Articles"

export const ApplicationLayout = () =>{
  return (
    <div className="application-layout"> 
      <Sidebar/>
      <div className="content">
        <Navbar/>
        <Articles/>
      </div>
    </div>
  )
}