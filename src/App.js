import './App.css';
//import Navbar from './components/navbar';
import Home from './routes/Home';
import { Route, Routes } from 'react-router-dom';
import Service from './routes/Service';
import Contact from './routes/Contact';
import About from './routes/About';
import Signup from './routes/signup';
function App() {
  return (
    <div className="App">
            <Routes>
              <Route path="/" element = {<Home/>} />
              <Route path="/about" element = {<About/>} />
              <Route path="/service" element = {<Service/>} />
              <Route path="/contacts" element = {<Contact/>} />
              <Route path="/signup" element={<Signup />}/>
            </Routes>  
        
    </div>
  )
}

export default App;
