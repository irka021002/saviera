import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import AboutUs from "./pages/AboutUs";
import Archetypes from "./pages/Archetypes";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<Homepage />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/archetypes" element={<Archetypes />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
