import { Outlet } from "react-router-dom"
import Navbar from "./navbar"
import Footer from "./footer"


import Selling from "./sellingp"
const LayoutHandling=()=>{
    return(
        <>
     <Navbar/>
    <Outlet/>
  
    <Selling/>
   
    <Footer/>
        </>
    )
}
export default LayoutHandling