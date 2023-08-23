import { useState } from "react";
import {
  BiHome,
  BiPackage,
  BiSolidChevronsLeft,
  BiSolidChevronsRight,
} from "react-icons/bi";
import logo from "../../assets/images/logo2.png";
import { Link, NavLink } from "react-router-dom";

export default function Navbar() {
  const [isCollapse, setIsCollapse] = useState(true);

  // Function to collapse navigation menu
  const collapseElement = () => {
    const collapsedElements = document.getElementsByClassName("collapsed");
    const navbar = document.getElementById("navbar");

    for (let i = 0; i < collapsedElements.length; ++i) {
      let item = collapsedElements[i];
      item.classList.toggle("hidden");
    }

    if (isCollapse) {
      navbar.classList.remove("w-40");
      navbar.classList.add("w-20");
    } else {
      navbar.classList.remove("w-20");
      navbar.classList.add("w-40");
    }

    setIsCollapse(!isCollapse);
  };

  const navMenu = [
    {
      id: "home",
      to: "",
      name: "Beranda",
      icon: <BiHome />,
    },
    {
      id: "package",
      to: "p",
      name: "Paket",
      icon: <BiPackage />,
    },
  ].map((item) => {
    return (
      <li key={item.id}>
        <NavLink
          className={({ isActive }) =>
            `flex cursor-pointer flex-row gap-2 px-2 text-left  text-cust-white hover:text-cust-yellow ${
              isActive ? "border-l-2 border-cust-white" : ""
            }}`
          }
          to={item.to}
          end
        >
          <span className="text-sm lg:text-xl">{item.icon}</span>
          <span className="collapsed text-xs lg:text-sm">{item.name}</span>
        </NavLink>
      </li>
    );
  });

  return (
    <aside
      id="navbar"
      className="relative flex w-40 flex-col gap-7 bg-cust-black px-5 py-10 transition-all ease-in"
    >
      <header className="flex flex-col gap-5">
        <Link to="/" className="collapsed self-center">
          <img src={logo} alt="mypi" width="75px" />
        </Link>
        <hr className="text-cust-gray" />
        <span
          onClick={collapseElement}
          className="cursor-pointer self-center text-sm text-cust-white lg:text-xl"
        >
          {isCollapse ? <BiSolidChevronsLeft /> : <BiSolidChevronsRight />}
        </span>
        <hr className="text-cust-gray" />
      </header>
      <nav>
        <ul className="flex flex-col gap-5">{navMenu}</ul>
      </nav>
    </aside>
  );
}
