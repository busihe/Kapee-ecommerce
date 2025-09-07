import { Outlet } from "react-router-dom"
import Navbar from "./navbar"
import Footer from "./footer"
import ProductCard from "./product-card"
import Aftersell from "./aftersell"
import Selling from "./sellingp"
const LayoutHandling=()=>{
    return(
        <>
     <Navbar/>
    <Outlet/>
    <ProductCard/>
    <Aftersell/>
    <Selling/>
    <Footer/>
        </>
    )
}
export default LayoutHandling