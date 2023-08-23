import { useState } from "react";
import { Form } from "react-router-dom";
import Table from "./Table";
import InputLabeled from "../../InputLabeled";

export default function Biodata() {
  const [isEdit, setIsEdit] = useState(false);

  const profile = {
    personal: [
      {
        id: "name",
        name: "name",
        type: "text",
        label: "Nama",
        value: "John Doe",
        required: false,
      },
      {
        id: "email",
        name: "email",
        type: "email",
        label: "Email",
        value: "john.doe@gmail.com",
        required: false,
      },
      {
        id: "phone",
        name: "phone",
        type: "number",
        label: "No. Telp",
        value: "081234567891",
        required: false,
      },
      {
        id: "address",
        name: "address",
        type: "textarea",
        label: "Alamat",
        value: "Jl. Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        required: false,
      },
    ],
    school: [
      {
        id: "level",
        name: "level",
        type: "select",
        options: [
          {
            id: "sd",
            value: "sd",
            sound: "SD",
          },
          {
            id: "smp",
            value: "smp",
            sound: "SMP/Sederajat",
          },
          {
            id: "sma",
            value: "sma",
            sound: "SMA/Sederajat",
          },
        ],
        label: "Jenjang",
        value: "SMA",
        required: false,
      },
      {
        id: "school",
        label: "Sekolah",
        value: "SMA Negeri 1 Jakarta",
        required: false,
      },
      {
        id: "grade",
        name: "grade",
        type: "number",
        label: "Kelas",
        value: "11",
        required: false,
      },
      {
        id: "hobby",
        name: "hobby",
        type: "textarea",
        label: "Hobi",
        value: "Membaca, bermain game, menulis, dan lain-lain",
        required: false,
      },
    ],
  };

  const edit = () => {
    setIsEdit(!isEdit);
  };

  const inputPersonal = profile.personal.map((item) => {
    return <InputLabeled key={item.id} {...item} />;
  });

  const inputSchool = profile.school.map((item) => {
    return <InputLabeled key={item.id} {...item} />;
  });

  return isEdit ? (
    <Form className="my-3 mt-10 flex flex-col gap-5 text-sm lg:text-base">
      <div className="flex flex-col lg:flex-row lg:gap-5">
        <div className="flex w-full flex-col gap-2">{inputPersonal}</div>
        <div className="flex w-full flex-col gap-2">{inputSchool}</div>
      </div>
      <div className="flex flex-row gap-3 self-end">
        <button
          type="submit"
          className="rounded-md bg-cust-yellow p-2 px-4 text-cust-black"
        >
          Kirim
        </button>
        <button
          type="button"
          className="rounded-md bg-cust-pink p-2 px-4 text-cust-black"
          onClick={edit}
        >
          Batal
        </button>
      </div>
    </Form>
  ) : (
    <div className="my-3 mt-10 flex flex-col gap-5 text-sm lg:text-base">
      <div className="flex flex-col lg:flex-row lg:gap-5">
        <Table data={profile.personal} />
        <Table data={profile.school} />
      </div>
      <button
        type="button"
        onClick={edit}
        className="self-end rounded-md bg-cust-green p-2 px-4 text-cust-white"
      >
        Edit
      </button>
    </div>
  );
}
