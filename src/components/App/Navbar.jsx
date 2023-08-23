import { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { GiHamburgerMenu } from "react-icons/gi";
import NavMenu from "./NavMenu";
import logo from "../../assets/images/logo.png";

export default function Navbar() {
  const [isCollapse, setIsCollapse] = useState(true);

  // Function to collapse navigation menu
  const collapseNavigationMenu = () => {
    const navigationMenu = document.querySelector("#navbar-menu");
    const collapseButton = document.querySelector("#collapse-button");
    navigationMenu.classList.toggle("-mt-72");
    collapseButton.classList.toggle("rotate-90");

    setIsCollapse(!isCollapse);
  };

  return (
    <header className="fixed z-20 flex w-full flex-col text-sm md:text-base lg:text-lg">
      {/* Navbar */}
      <div className="flex flex-row  items-center justify-center bg-cust-black p-5">
        <a href="#">
          <img src={logo} alt="mypi" width="100px" />
        </a>
        <div className="ml-auto max-lg:hidden">
          <NavMenu collapse={collapseNavigationMenu} />
        </div>
        <button
          id="collapse-button"
          className="ml-auto text-3xl text-cust-white transition-transform ease-in lg:hidden"
          type="button"
          onClick={collapseNavigationMenu}
        >
          {isCollapse ? <GiHamburgerMenu /> : <AiOutlineClose />}
        </button>
      </div>

      {/* Collapsed navigation menu */}
      <div
        id="navbar-menu"
        className="-z-10 -mt-72 bg-cust-black opacity-90 transition-all ease-in-out lg:hidden"
      >
        <NavMenu collapse={collapseNavigationMenu} />
      </div>
    </header>
  );
}
