import Menu from "./Menu";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AboutUs from "./AboutUs";
import Footer from "./Footer";
import Header from "./Header";
import Home from "./Home";
import SpecialDishes from "./SpecialDishes";
// import './App.css'
function App() {
  return (
    <>
      <Router>
      <Header/>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/menu" element={<Menu />} />
          <Route exact path="/about" element={<AboutUs />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
