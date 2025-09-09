import { BrowserRouter, Routes, Route } from "react-router-dom";
import LayoutHandling from "./components/Layout";
import Home from "./components/Home";
import ProductCard from "./components/product-card";
import Aftersell from "./components/aftersell";
import Selling from "./components/sellingp";
import ContactUs from "./components/contact";
import Elements from "./components/elements";
import BlogPage from "./components/blog";
import MyShop from "./components/myshop";
import KapeePage from "./components/page";
import FeaturedProducts from "./components/home1";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LayoutHandling />}>
          {/* Default home */}
          <Route index element={<Home />} />

        
          <Route path="/home" element={<Home />} />
         

       
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/product-card" element={<ProductCard />} />
          <Route path="/aftersell" element={<Aftersell />} />
          <Route path="/sellingp" element={<Selling />} />

          <Route path="/elements" element={<Elements />} />

          <Route path="/blog" element={<BlogPage />} />
          <Route path="/myshop" element={<MyShop />} />
          <Route path="/page" element={<KapeePage />} />
            <Route path="/home1" element={<FeaturedProducts />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
