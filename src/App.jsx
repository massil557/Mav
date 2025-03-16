import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { SharedLayout } from './components/SharedLayout'
import Home from './pages/Home'
import Shop from './pages/Shop'
import OnSales from './pages/OnSales'
import Login from './pages/Login'
import SignUp from './pages/SignUp'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SharedLayout />}>
            <Route index element={<Home />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/onSales" element={<OnSales />} />
          </Route>
          <Route path="/Login" element={<Login />} />
          <Route path="/SignUp" element={<SignUp />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
