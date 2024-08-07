import { Navbar } from "../components/Navbar"
import { Sidebar } from "../components/Sidebar"
import { Articles } from "../views/Articles"
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
export const ApplicationLayout = () =>{
  return (
    <div className="application-layout"> 
      <Router>
        <Sidebar/>
        <div className="content">
          <Navbar/>
          <Routes>
              <Route path="/articles" element={<Articles/>} />
          </Routes>
        </div>
      </Router>
    </div>
  )
}