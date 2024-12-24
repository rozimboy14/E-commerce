//style
import Close from "../../assets/svg/close";
import "./Header.css";


function Header() {
  return (
    <header className="header">
      <div className="container">
        <div className="header-row">
          <h3 className="header-title">
            Sign up and get 20% off to your first order.
          </h3>
          <a className="header-title" href="#">
            Sign Up Now
          </a>
          <i>      <Close/></i>
       
      
        </div>
      </div>
    </header>
  );
}

export default Header;
