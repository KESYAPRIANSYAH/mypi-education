import logo from "../../assets/images/logo.png";

export default function Hero() {
  return (
    <article className="flex h-screen flex-col lg:flex-row">
      <div className="relative z-10 flex w-full flex-col items-center justify-center bg-cust-yellow pt-24 lg:pl-12 lg:pt-0">
        <div className="font-cursive flex flex-col items-center justify-center gap-5 p-10 text-xl font-bold text-cust-pink md:text-2xl lg:text-left lg:text-3xl">
          <img src={logo} alt="mypi" width="400px" />
          <q>Bersama MyPi mewujudkan mimpi</q>
        </div>
        <div className="text-md font-cursive flex flex-col gap-5 p-10 text-center text-cust-black md:text-lg lg:text-left lg:text-xl">
          <h1>
            <span className="text-xl text-cust-purple">K</span>
            enalan yuk sama MyPi
          </h1>
          <p>
            Bimbel yang akan bantu kamu wujudkan mimpi jadi juara kelas.
            Membantumu memecahkan soal-soal sulit dengan cara Brainly. Bersama
            pengajar yang tentunya berkompeten cantik-cantik dan handsome...
          </p>
        </div>
      </div>
      <span className="relative z-10 h-10 w-full border-cust-yellow max-lg:border-x-[50vw] max-lg:border-t-[10vh] max-lg:border-x-transparent lg:border-y-[50vh] lg:border-l-[10vw] lg:border-y-transparent"></span>
      <div className="absolute z-0 h-full w-full bg-hero-image bg-cover"></div>
    </article>
  );
}
