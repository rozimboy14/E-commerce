//style
import "./Navbar.css";

//icons
import Arrow from "../../assets/svg/Arrow";
import Cart from "../../assets/svg/Cart";
import Search from "../../assets/svg/Search";
import UserCircle from "../../assets/svg/userCircle";
import MenuBurger from "../../assets/svg/MenuBurger";

function Navbar() {
  return (
    <div className="navbar">
      <div className="container">
        <div className="navbar-row">
          <div className="logo">
            <button className="menu-burger-btn">
              <span className="menu-burger"></span>
              <span className="menu-burger"></span>
              <span className="menu-burger"></span>
            </button>
            <h1>SHOP.CO</h1>
          </div>
          <nav className="navbar-links">
            <a className="navbar-link arrow-link" href="#">
              Shop <Arrow />
            </a>
            <a className="navbar-link" href="#">
              On Sale
            </a>
            <a className="navbar-link" href="#">
              New Arrivals
            </a>
            <a className="navbar-link" href="#">
              Brands
            </a>
          </nav>

      
          <div className="navbar-buttons">
     <input type="checkbox"  id="check" />
          <label className="navbar-search" for="check">
         
        <i className="nav-search">
        <Search />
        </i>
       
       <input type="text" className="navbar-input" placeholder="type....." />
     </label>
        
            <button className="navbar-btn">
              <Cart />
            </button>
            <button className="navbar-btn">
              <UserCircle />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
