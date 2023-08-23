import photo from "/user.png";
import Biodata from "../components/Dashboard/Home/Biodata";
import InputLabeled from "../components/InputLabeled";
import Subjects from "../components/Dashboard/Home/Subjects";

export default function Home() {
  const subjects = [
    {
      subjectId: "biology",
      day: "Senin",
      time: "16:00 - 17:00",
      teacher: "Ani Budiati",
    },
    {
      subjectId: "physics",
      day: "Rabu",
      time: "19:00 - 20:00",
      teacher: "Layla Sari",
    },
    {
      subjectId: "chemistry",
      day: "Kamis",
      time: "16:00 - 17:00",
      teacher: "Suryani",
    },
    {
      subjectId: "math",
      day: "Kamis",
      time: "19:00 - 20:00",
      teacher: "Sukiyatun",
    },
  ].map((item) => {
    return (
      <Subjects
        key={item.subjectId}
        subjectId={item.subjectId}
        day={item.day}
        time={item.time}
        teacher={item.teacher}
      />
    );
  });
  return (
    <main className="flex min-h-screen w-full flex-col bg-cust-white lg:flex-row">
      <article className="flex w-full flex-col gap-5 p-5">
        <header className="mb-10">
          <h1 className="py-2 text-xl font-bold lg:text-2xl">Profil Saya</h1>
          <p className="text-xs font-light lg:text-sm">
            Berikut biodata kamu yang tersimpan. Kamu juga dapat merubahnya
            dengan menekan tombol edit. Jangan lupa berikan foto terbaikmu di
            profil yaa..
          </p>
          <hr className="my-3 opacity-30" />
        </header>
        <div className="flex flex-col items-center justify-center gap-8 text-sm lg:text-base">
          <img className="flex" src={photo} alt="nama" width="200" />
          {<InputLabeled type="file" name="photo" id="photo" />}
        </div>
        {<Biodata />}
      </article>
      <article className="w-full bg-cust-green p-5 text-cust-white lg:w-1/3">
        <header className="mb-10 ">
          <h1 className="py-2 text-center text-xl font-bold lg:text-2xl">
            Jadwal Kamu
          </h1>
          <hr className="my-3 opacity-30" />
        </header>
        <div className="flex flex-col gap-5">{subjects}</div>
      </article>
    </main>
  );
}
