import { BrowserRouter } from 'react-router-dom'
import { Route } from 'react-router-dom'
import { Routes } from 'react-router-dom'
import LayoutHandling from './components/Layout'
import Home from './components/Home'
import ProductCard from './components/product-card'
import Aftersell from './components/aftersell'
import Selling from './components/sellingp' 

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<LayoutHandling/>}>
       <Route index element={<Home/>}/>
       <Route  path='/home' element={<Home/>}/>
        <Route path='/product-card' element={<ProductCard/>}/>
        <Route path='/aftersell' element={<Aftersell/>}/>
        <Route path='/sellingp' element={<Selling/>}/>
      </Route>
   
    </Routes>
      
    </BrowserRouter>
  )
}

export default App
