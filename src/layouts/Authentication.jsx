import { Link, Outlet } from "react-router-dom";
import decor from "../assets/auth-decor.svg";
import logo from "../assets/images/logo.png";

export default function Authentication() {
  return (
    <div className="flex h-screen w-screen flex-col items-center justify-center bg-cust-white">
      <img src={decor} className="absolute left-0 top-0 w-1/5" />
      <Link to="/" className="relative m-10 w-2/4 md:w-1/3 lg:w-1/6">
        <img src={logo} alt="mypi" />
      </Link>
      <Outlet />
      <img src={decor} className="absolute bottom-0 right-0 w-1/5 rotate-180" />
    </div>
  );
}
