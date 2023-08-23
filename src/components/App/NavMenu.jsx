import { Link } from "react-router-dom";

export default function NavMenu(params) {
  const { collapse } = params;

  const navMenu = [
    {
      id: "",
      name: "Home",
    },
    {
      id: "price",
      name: "Harga",
    },
    {
      id: "facility",
      name: "Fasilitas",
    },
    {
      id: "testimony",
      name: "Testimoni",
    },
  ].map((item) => {
    return (
      <li
        key={item.id}
        className="text-center text-cust-white hover:text-cust-yellow"
      >
        <a href={`#${item.id}`} onClick={collapse}>
          {item.name}
        </a>
      </li>
    );
  });

  return (
    <nav className="flex flex-col items-center justify-center gap-5 max-lg:p-5 lg:flex-row lg:gap-10">
      {/* Navigation Menu */}
      <ul className="flex flex-col items-center justify-center gap-5 lg:flex-row">
        {navMenu}
      </ul>

      {/* Auth button */}
      <ul className="flex  flex-row items-center justify-center gap-2">
        <li className="h-fit w-20 rounded-md border-cust-white bg-cust-shoft-pink p-2 text-center text-cust-black transition-colors ease-in hover:bg-cust-white">
          <Link to="/login">Masuk</Link>
        </li>
        <li className="h-fit w-20 rounded-md border-cust-white bg-cust-pink p-2 text-center text-cust-black transition-colors ease-in hover:bg-cust-white">
          <Link to="/register">Daftar</Link>
        </li>
      </ul>
    </nav>
  );
}
