import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import './bootstrap/bootstrap.css'
import './bootstrap/bootstrap.js'

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import About from './pages/About';
import Offerings from './pages/Offerings';
import Resources from './pages/Resources';
import Collections from './pages/Collections';
import Partner from './pages/Partner';
import GetInTouch from './pages/GetInTouch';
import Category from './pages/Category';
import Product from './pages/Product';
import ScrollToTop from './context/ScrollToTop';


let App = () => {
    return (
        <BrowserRouter>
            <ScrollToTop />
            <Navbar />
            <main>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about-us" element={<About />} />
                    <Route path="/offerings" element={<Offerings />} />
                    <Route path="/resources" element={<Resources />} />
                    <Route path="/collections" element={<Collections />} />
                    <Route path="/partner-with-us" element={<Partner />} />
                    <Route path="/get-in-touch" element={<GetInTouch />} />
                    <Route path="/:category" element={<Category />} />
                    <Route path="/:category/:title" element={<Product />} />
                </Routes>
            </main>
            <Footer />
        </BrowserRouter>
    )
}

export default App;