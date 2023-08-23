import InputLabeled from "../components/InputLabeled";
import { Form, Link } from "react-router-dom";

export default function Register() {
  const inputs = [
    {
      id: "name",
      name: "name",
      label: "Nama Kamu Siapa?",
      type: "text",
      placeholder: "Masukkan nama kamu",
    },
    {
      id: "phone",
      name: "phone",
      label: "Masukkan No. Telp (WA)",
      type: "number",
      placeholder: "Masukkan nomor telepon kamu",
    },
    {
      id: "password",
      name: "password",
      label: "Masukkan password yang aman",
      type: "password",
      placeholder: "**********",
    },
    {
      id: "repeatedPassword",
      name: "repeatedPassword",
      label: "Ualangi password kamu",
      type: "password",
      placeholder: "**********",
    },
  ].map((input) => <InputLabeled key={input.id} {...input} />);

  return (
    <main className="flex w-3/4 flex-col justify-center gap-3 md:w-1/2 lg:w-1/4">
      <Form className="flex flex-col gap-3">
        {inputs}
        <Link
          to="/login"
          className="mt-5 h-full w-full rounded-md bg-cust-pink p-2 text-center text-cust-black"
        >
          Daftar
        </Link>
      </Form>
      <span className="flex flex-row justify-center gap-2">
        <p className="text-cust-black">Sudah terdaftar?</p>
        <Link to="/login" className="text-cust-blue">
          Ayo masuk
        </Link>
      </span>
    </main>
  );
}
