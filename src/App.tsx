import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import AboutUs from "./pages/AboutUs";
import Archetypes from "./pages/Archetypes";
import SavToWear from "./pages/SavToWear";
import Omnia from "./pages/product/Omnia";
import Weiyi from "./pages/product/Weiyi";
import Cyanne from "./pages/product/Cyanne";

function App() {
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
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
