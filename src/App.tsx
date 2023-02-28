import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import AboutUs from "./pages/AboutUs";
import Archetypes from "./pages/Archetypes";
import SavToWear from "./pages/SavToWear";
import Omnia from "./pages/product/Omnia";
import Weiyi from "./pages/product/Weiyi";
import Cyanne from "./pages/product/Cyanne";
import Savdashboard from "./pages/Savdashboard";
import { useEffect, useState, useCallback } from 'react';
import { useCookies } from "react-cookie";
import axios from "axios";
function App() {
  const [cookies, setCookie] = useCookies(['access-token','refresh-token'])
  const [isAuth, setIsAuth] = useState(cookies['access-token'] || cookies['refresh-token'])
  useEffect(() => {
    if(!isAuth){
      axios.post(
        import.meta.env.VITE_MONGOTOKEN,
        {
          "key": "EmLtTIlSn9BSN9GXLXJleutnGnwraLVHzJO1O1T59QkZuzybSLWiU0hOYpvsPqjE"
        }
      )
        .then(v => {
          setCookie("access-token", v.data.access_token, {maxAge: 25*60})
          setCookie("refresh-token", v.data.refresh_token, {maxAge: 23*60*60})
          window.location.reload()
        })
    }
  }, [])
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<Homepage />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/01-archetypes" element={<Archetypes />} />
          <Route path="/sav-to-wear-01" element={<SavToWear />} />
          <Route path="/01-omnia" element={<Omnia />} />
          <Route path="/01-wei-yi" element={<Weiyi />} />
          <Route path="/01-cyanne" element={<Cyanne />} />
          <Route path="/savdashboard" element={<Savdashboard/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
