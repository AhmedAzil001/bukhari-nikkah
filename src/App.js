import './App.css';
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import Pricing from './Components/Pricing/Pricing';
import About from './Components/About/About';
import Login from "./Components/Login/Login";
import Register from "./Components/Register/Register";
import Password from './Components/Login/Password';
import Footer from './Components/footer/Footer';

function App() {
  return (
    <Router>
      <Header/>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/about' element={<About />}/>
        <Route path='/login' element={<Login />}/>
        <Route path='/password' element={<Password />}/>
        <Route path='/register' element={<Register />}/>
        <Route path='/pricing' element={<Pricing />}/>
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
