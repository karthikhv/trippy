import './navbarstyles.css'
import { useState } from "react";
import { MenuItems } from './MenuItems';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
  
  const [clicked, setClicked] = useState(false);
  const navigate = useNavigate();

  const handleClick = () =>{
    setClicked(!clicked);
  }

  const handleSignup = () => {
    console.log("clicked");
    navigate("/signup");  // Redirect to the signup page
  }

  return ( 
    <>
      <nav className="NavbarItems">
        <h1 className="navbar-logo">Trippy</h1>
        <div className="menu-icons" onClick={handleClick}>
          <i className={clicked ? "fas fa-times" : "fas fa-bars"}></i>
        </div>
        <ul className={clicked? "nav-menu active" :"nav-menu"}>
          {
            MenuItems.map((item,index) =>{
              return(
                <li key={index}>
                <Link  className={item.cName} to={item.url}>
                <i className={item.icon}></i> {item.title}</Link>
            </li>
              );
            })}
          
          <button onClick={handleSignup}>Signup</button>
            
        </ul>
      </nav> 
    </>
  )
}

export default Navbar;
