import { Link } from "react-router-dom";
import logo from "../assets/images/logo.png";
export default function Payment() {
  return (
    <article className="flex h-screen flex-col font-cursive lg:flex-row">
      <div className="relative z-10 flex w-full flex-col gap-5 bg-cust-yellow p-10 lg:pl-12 ">
        <Link to="/" className="mb-5 self-center">
          <img src={logo} alt="mypi" width="400" />
        </Link>
        <header>
          <h1 className="text-xl font-bold md:text-2xl lg:text-3xl">
            Pembayaran
          </h1>
          <p className="text-sm font-light md:text-base lg:text-lg">
            Kamu dapat membayar langsung ke lokasi Bimbel kami atau Kamu dapat
            membayar dengan cara klik.. klik.. saja
          </p>
          <hr className="opacity-30" />
        </header>
        <section className="text-base font-normal md:text-lg lg:text-xl">
          <p className="mb-2">Total biaya yang harus dibayarkan:</p>
          <p className="text-3xl font-bold md:text-4xl lg:text-5xl">
            Rp.600.000
          </p>
          <br />
          <p className="mb-2">Silahkan kirim ke nomer rekening berikut:</p>
          <ul className="flex flex-col gap-1">
            <li className="text-sm font-normal">
              BCA 1234567890 a.n. Bimbel Online
            </li>
            <li className="text-sm font-normal">
              BNI 1234567890 a.n. Bimbel Online
            </li>
            <li className="text-sm font-normal">
              BRI 1234567890 a.n. Bimbel Online
            </li>
          </ul>
        </section>
      </div>
      <span className="relative z-10 h-0 w-full  border-cust-yellow max-lg:border-l-[100vw] max-lg:border-t-[10vh] max-lg:border-l-transparent lg:border-b-[100vh] lg:border-l-[20vw] lg:border-b-transparent"></span>
      <div className="absolute z-0 h-full w-full bg-hero-image bg-cover"></div>
    </article>
  );
}
