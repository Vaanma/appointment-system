import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Doctorlist from './components/doctorspage/Doctorlist';
import Header from './components/header/Header';
import Homepage from './components/Home/Homepage';
import Hospital from './components/hospital/Hospital';
import About from './components/about/About';
import Contact from './components/contact/Contact';
import AdminLogin from './components/adminlogin/AdminLogin';
import Login from './components/login/Login';
import Signup from './components/signup/Signup';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Homepage />} /> {/* Home route */}
        <Route path="/Doctorlist" element={<Doctorlist />} /> {/* Doctor list */}
        <Route path="/Hospital" element={<Hospital />} /> {/* Hospital route */}
        <Route path="/About" element={<About />} /> {/* About route */}
        <Route path="/Contact" element={<Contact />} /> {/* Contact route */}
        <Route path="/AdminLogin" element={<AdminLogin />} /> {/* Admin login */}
        <Route path="/Login" element={<Login/>}/>
        <Route path="/Signup" element={<Signup/>}/>
      </Routes>
    </Router>
  );
}

export default App;
