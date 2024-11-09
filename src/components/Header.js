import { Logo_URL } from "../utils/const";

const HeaderComponent = () => (
    <div id="container">
      <div className="header-container">
        <div className="header__logo">
          <img
            className="logo"
            src= {Logo_URL}
            alt="log0.png"
          ></img>
        </div>
        {/* <div className="header__search">
          <input type="text" placeholder="Search..." />
        </div> */}
        <nav className="header__nav">
          <button className="header__button">Home</button>
          <button className="header__button">About</button>
          <button className="header__button">Contact Us</button>
          <button className="header__button">Cart</button>
        </nav>
        {/* <div className="header__user">
          <img src="https://via.placeholder.com/32" alt="User Icon" />
        </div>  */}
      </div>
    </div>
  );

  export default HeaderComponent;