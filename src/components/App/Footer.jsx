import { GrMail } from "react-icons/gr";

export default function Footer() {
  return (
    <footer className="flex justify-around bg-cust-black p-5">
      <ul>
        <li className="flex flex-row gap-2">
          <span className="h-full text-2xl text-cust-white">
            <GrMail />
          </span>
          <span className="text-cust-white">mypi.edu@gmail.com</span>
        </li>
      </ul>
    </footer>
  );
}
