import { useState } from "react";
import logo from "../../assets/logo.svg";

const Header = () => {
  const [isOpen, setIsOpen] = useState<Boolean>(false);

  return (
    <div className="container__header container__app">
      <header className="header flex py-[40px] items-center">
        <a href="#" className="header__company">
          <img src={logo} alt="logo"></img>
        </a>
        <div className="header__content">
          <button
            onClick={() => (isOpen ? setIsOpen(false) : setIsOpen(true))}
            className="header__btnbar"
          >
            <i className="fas fa-bars" style={{ color: "#8e99af" }}></i>
          </button>
          <div className="header__contentleft justify-between items-center">
            <ul className="header__contentdesc flex">
              <li className="header__contentdescitem mr-[30px]">
                <a href="#">Features</a>
              </li>
              <li className="header__contentdescitem mr-[30px]">
                <a href="#">Pricing</a>
              </li>
              <li className="header__contentdescitem">
                <a href="#">Resources</a>
              </li>
            </ul>
            <ul className="header__btn flex items-center justify-between">
              <li className="header__contentdescitem mr-[30px]">
                <a href="#">Login</a>
              </li>
              <li className="header__contentdescitem">
                <a href="#">SignUp</a>
              </li>
            </ul>
          </div>
        </div>
      </header>
      {isOpen && (
        <ul className="header__nav rounded-[10px] text-center px-[20px] py-[10px]">
          <li className="header__navitem py-[10px]">
            <a href="#">Features</a>
          </li>
          <li className="header__navitem p-[10px]">
            <a href="#">Pricing</a>
          </li>
          <li className="header__navitem p-[10px]">
            <a href="#">Resources</a>
          </li>
          <li className="header__navitem p-[10px]">
            <a href="#">Login</a>
          </li>
          <li className="header__navitem p-[10px]">
            <a href="#" className="header__btnsignup">
              SignUp
            </a>
          </li>
        </ul>
      )}
    </div>
  );
};

export default Header;
