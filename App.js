import './App.css';
import { AuthProvider } from './Context/AuthContext';
import Signup from './Signup';
import { Container } from 'react-bootstrap';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Dashboard from './Dashboard';
import Login from './Login';
import Webpage from './Webpage';
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import About from "./pages/About";
import Contact from "./pages/Contact";

function App() {
  return (
    <Container className='d-flex align-items justify-content-center' style={{ minHeight: '100vh' }}>
      <div className='w-100' style={{ maxWidth: "400px" }}>
        <Router>
          <AuthProvider>
            <Routes>
              <Route path="/signup" element={<Signup />} />
              <Route path="/login" element={<Login />} />
              <Route exact path="/" element={<Dashboard />} />
              <Route path="/home" element={<Home />} />
              <Route path="/menu" element={<Menu />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/webpage" element={<Webpage />} />
            </Routes>
          </AuthProvider>
        </Router>

      </div>
    </Container>
  );
}

export default App;
