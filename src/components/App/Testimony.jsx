import or1 from "../../assets/images/Ellipse 10.png";

function Card() {
  return (
    <div className="flex w-72 flex-col gap-2 rounded-lg bg-cust-white p-3">
      <p className="text-sm md:text-base lg:text-lg">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum fuga
        iusto minima, cumque fugit ducimus dolor quis minus rem quia sunt! Ad
        minus ratione mollitia consequuntur laudantium velit nostrum adipisci?
      </p>
      <div className="flex flex-row gap-5 border-t-2 border-t-cust-gray p-2">
        <div>
          <img src={or1} alt="orang1" width="50" className="shadow-sm" />
        </div>
        <div>
          <p className="text-sm lg:text-base">Jane Dune</p>
          <p className="text-xs lg:text-sm">SMA Negeri 1 Batang</p>
          <p className="text-xs lg:text-sm">Batang, Jawa Tengah</p>
        </div>
      </div>
    </div>
  );
}

export default function Testimony() {
  return (
    <article id="textimony" className="flex flex-col gap-10 bg-cust-green p-10">
      <header>
        <h1 className="text-center text-xl font-bold text-cust-white md:text-2xl lg:text-3xl">
          Testimoni Belajar Bareng Mypi
        </h1>
      </header>
      <div className="flex flex-wrap gap-5">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </article>
  );
}
