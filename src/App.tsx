import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import AboutUs from "./pages/AboutUs";
import Archetypes from "./pages/Archetypes";
import SavToWear from "./pages/SavToWear";
import Omnia from "./pages/product/Omnia";
import Weiyi from "./pages/product/Weiyi";
import Cyanne from "./pages/product/Cyanne";
import Savdashboard from "./pages/Savdashboard";
import { useEffect } from 'react';
import { useCookies } from "react-cookie";
import axios from "axios";
function App() {
  const [cookies, setCookie] = useCookies(['access-token','refresh-token'])
  const dummy = "hai"
  useEffect(() => {
    if(!cookies['access-token'] && !cookies['refresh-token']){
      axios.post(
        import.meta.env.VITE_MONGOTOKEN,
        {
          "key": "EmLtTIlSn9BSN9GXLXJleutnGnwraLVHzJO1O1T59QkZuzybSLWiU0hOYpvsPqjE"
        }
      )
        .then(v => {
          setCookie("access-token", v.data.access_token, {maxAge: 25*60})
          setCookie("refresh-token", v.data.refresh_token, {maxAge: 23*60*60})
        })
    }
  }, [dummy])
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<Homepage />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/archetypes" element={<Archetypes />} />
          <Route path="/savtowear" element={<SavToWear />} />
          <Route path="/product">
            <Route path="/product/omnia" element={<Omnia />} />
            <Route path="/product/weiyi" element={<Weiyi />} />
            <Route path="/product/cyanne" element={<Cyanne />} />
          </Route>
          <Route path="/savdashboard" element={<Savdashboard/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
