import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import About from "./pages/About";
import Contact from "./pages/Contact";
import { Route, Routes } from "react-router-dom";

function Dashboard() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
      <Route path="/home" element={<Home />} />

        <Route path="/menu" exact component={Menu} />
        <Route path="/about" exact component={About} />
        <Route path="/contact" exact component={Contact} />
      </Routes>
      <Footer />
    </div>
  );
}

export default Dashboard;
