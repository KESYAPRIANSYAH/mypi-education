import { useState } from "react";
import InputLabeled from "../components/InputLabeled";
import { packages, levels, subjects } from "../../data/packages";
import { Link } from "react-router-dom";

export default function Package() {
  const { bahasa, custom, ips, mipa } = packages;

  const [packageOptions, setPackageOptions] = useState([
    bahasa,
    custom,
    ips,
    mipa,
  ]);

  const [inputed, setInputed] = useState({
    level: "",
    packageId: "",
  });

  const changeLevelInputed = (e) => {
    const { value } = e.target;

    if (value === "sd" || value === "smp") {
      setPackageOptions([bahasa, custom]);
    } else {
      setPackageOptions([bahasa, custom, ips, mipa]);
    }

    setInputed({
      ...inputed,
      level: value,
    });
  };

  const changePackageInputed = (e) => {
    const { value } = e.target;
    setInputed({
      ...inputed,
      packageId: value,
    });
  };

  const inputs = {
    level: {
      id: "level",
      name: "level",
      type: "select",
      label: "Jenjang",
      onchange: changeLevelInputed,
      options: levels.map((item) => {
        return {
          id: item.id,
          value: item.id,
          content: item.name,
        };
      }),
    },
    package: {
      id: "package",
      name: "package",
      type: "select",
      label: "Paket",
      onchange: changePackageInputed,
      options: packageOptions.map((item) => {
        return {
          id: item.id,
          value: item.id,
          content: item.name,
        };
      }),
    },
  };

  return (
    <main className="flex min-h-screen w-full flex-col gap-5 bg-cust-white p-5 text-cust-black lg:p-10">
      <header>
        <h1 className="mb-3 text-xl font-bold lg:text-2xl">Pilih Paket</h1>
        <p className="mb-2 text-xs font-light lg:text-sm">
          Silahkan pilih paket bimbingan belajar yang telah tersedia. Kamu juga
          dapat memilih bimbingan belajar per mata kuliah sesuai kebutuhan kamu.
        </p>
        <hr />
      </header>
      <form className="flex flex-col gap-3">
        <InputLabeled {...inputs.level} />
        <InputLabeled {...inputs.package} />
        {inputed.packageId !== "" && (
          <p className="text-sm font-normal lg:text-base">
            {
              packageOptions.find((item) => item.id === inputed.packageId)
                .description
            }
          </p>
        )}
        {inputed.packageId === "custom" &&
          subjects.map((item) => {
            return (
              <InputLabeled
                type="checkbox"
                id={item.id}
                key={item.id}
                content={item.name}
              />
            );
          })}
        <Link
          to="/payment"
          className="self-end rounded-md bg-cust-green p-2 text-cust-white"
        >
          Pesan
        </Link>
      </form>
    </main>
  );
}
