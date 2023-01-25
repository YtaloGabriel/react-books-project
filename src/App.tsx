import { BrowserRouter, Routes, Route } from "react-router-dom"
import { GlobalStorage } from "./GlobalContext";

import Header from "./components/Header/Header"
import Home from "./components/Home/Home"
import Footer from "./components/Footer/Footer"

function App() {
  return (
    <div className="App">
      <GlobalStorage>
        <BrowserRouter>
          <Header />

          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>

          <Footer />
        </BrowserRouter>
      </GlobalStorage>
    </div>
  )
}

export default App
