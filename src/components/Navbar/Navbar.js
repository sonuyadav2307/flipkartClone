import React ,{useState} from "react";
import { MenuItems } from "./MenuItems";
import './Navbar.css';
import {Link} from 'react-router-dom'
import { useSelector, useDispatch } from "react-redux";
import { addSearch } from "../../actions";
const Navbar = () => {
  const [font, setFont]= useState(true)
  const [search, setSearch] = useState([])
  const dispatch = useDispatch()
  const searchBox = useSelector((state) => state.search);
  const kartLogo = useSelector((state) => state.kart);
  const handleClick = () =>{
    setFont(!font)
  }
  const handleSearch = (e) => {
    dispatch(addSearch(e.target.value,'this is dispatched'))
    setSearch(e.target.value)
  }
  return (
    <nav className="NavbarItems">
      <Link to='/'><h1 className="navbar-logo">MyKart</h1></Link>
      
      <div className="menu-icon " onClick={handleClick}><i className={ font ?"fas fa-bars" : "fas fa-times"}></i></div>
      <div className='buttonNinp'>
      <input type='text' className='inp' value={search} onChange={(e) => handleSearch(e)} placeholder='Search anything....'/>
     
      <button className='go'>Go</button>
      
      </div>

      
      <ul className={font ? 'nav-menu' : 'nav-menu active'}>
        {MenuItems.map((item, index) => {
          return (
            <li key={index}>
              <a className={item.cName} key={index} href={item.url}>
                {item.title}
              </a>
            </li>
          );
        })}
      </ul>
      <Link to='/Kart'><div className="shopping-kart"><i className="fas fa-shopping-cart"></i></div></Link>
     <p>{kartLogo.length}</p>
    </nav>
  );
};

export default Navbar;
