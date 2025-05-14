import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { SharedLayout } from './components/SharedLayout'
import { useEffect } from 'react'
import Home from './pages/Home'
import Shop from './pages/Shop'
import OnSales from './pages/OnSales'
import Login from './pages/Login'
import SignUp from './pages/SignUp'
import Lenis from '@studio-freight/lenis'
import Admin from './pages/Admin'
import Magazine from './pages/Magazine'
import InsertProduct from './pages/InsertProduct'
import DetailedProduct from './pages/DetailedProduct'
import Client from './pages/Client'
import DetailedProductAdmin from './pages/DetailedProductAdmin'
import MagazineInscription from './pages/MagazineInscription'
import MenProducts from './pages/MenProduct'
// In your index.js or App.js
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import WomenProducts from './pages/womenProducts'
import IASearch from './pages/IASearch'

function App() {
  useEffect(() => {
    const lenis = new Lenis()
    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)
  })
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SharedLayout />}>
            <Route index element={<Home />} />
            {/* <Route path="/shop" element={<Shop />} /> */}
            <Route path="/womenProducts" element={<WomenProducts />} />

            <Route path="/menProducts" element={<MenProducts />} />
            <Route path="/onSales" element={<OnSales />} />
            <Route path="/product/:id" element={<DetailedProduct />} />
            <Route
              path="/productDetailed/:id"
              element={<DetailedProductAdmin />}
            />
            <Route path="/iASearch" element={<IASearch />} />
          </Route>
          <Route path="/Login" element={<Login />} />
          <Route path="/SignUp" element={<SignUp />} />
          <Route path="/Admin" element={<Admin />} />
          <Route path="/Magazine" element={<Magazine />} />
          <Route path="/InsertProduct" element={<InsertProduct />} />
          <Route path="/Client" element={<Client />} />
          <Route
            path="/MagazineInscription"
            element={<MagazineInscription />}
          />
          <Route path="newMagazine/:id" element={<MagazineInscription />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
