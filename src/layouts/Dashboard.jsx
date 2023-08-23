import { Outlet } from "react-router-dom";
import Navbar from "../components/Dashboard/Navbar";

export default function Dashboard() {
  return (
    <div className="flex flex-row">
      <Navbar />
      <Outlet />
    </div>
  );
}
