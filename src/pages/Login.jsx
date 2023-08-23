import { Fragment, useState } from "react";
import InputLabeled from "../components/InputLabeled";
import { Link, Form } from "react-router-dom";
import Modal from '../components/Modal';

export default function Login() {
  const [showModal, setShowModal] = useState(false);
  const inputs = [
    {
      id: "id",
      name: "id",
      label: "Masukkan Email atau No. Telp",
      type: "text",
      placeholder: "Ketik salah satu di sini",
    },
    {
      id: "password",
      name: "password",
      label: "Masukkan Password Kamu",
      type: "password",
      placeholder: "**********",
    },
  ].map((input) => <InputLabeled key={input.id} {...input} />);

  return (
    <Fragment>
    <main className="flex w-3/4 flex-col justify-center gap-3 md:w-1/2 lg:w-1/4">
        <h1 className="text-xl text-cust-pink">Hore... Kamu Kembali</h1>
        <Form className="flex flex-col gap-3">
          {inputs}
          <button className="self-end text-cust-pink" onClick={()=>
          setShowModal(true)}>
            Lupa Password?
          </button>
          <Link
            to="/dashboard"
            className="mt-5 h-full w-full rounded-md bg-cust-pink p-2 text-center text-cust-black"
          >
            Masuk
          </Link>
        </Form>
        <span className="flex flex-row justify-center gap-2">
          <p className="text-cust-black">Belum terdaftar?</p>
          <Link to="/register" className="text-cust-blue">
            Daftar yuk
          </Link>
        </span>
    </main>
    <Modal isVisible={showModal} onClose={()=>
        setShowModal(false)}/>
    </Fragment>
  );
}
