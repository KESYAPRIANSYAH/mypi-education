function createCard(title, content, mapels, prices, periods, notes) {
  return (
    <div className="rounded-lg bg-cust-white shadow-md md:p-4 lg:p-6">
      <div className="mb-5 rounded-t-lg bg-cust-yellow shadow-md md:p-3 lg:p-3">
        <h2 className="text-center text-xl font-semibold sm:text-center md:text-sm">
          {title}
        </h2>
      </div>
      <p className="text-gray-600">{content}</p>
      <br />
      <div className="ml-3">
        <ul className="ml-3 list-disc">
          {mapels.map((mapel, index) => (
            <li key={index}>{mapel}</li>
          ))}
        </ul>
      </div>
      <br />
      <p className="text-center">Mulai dari</p>
      <p className="text-center">
        Rp<span className="text-2xl">{prices}</span>
        {periods}
      </p>
      <p className="text-center">{notes}</p>
    </div>
  );
}

export default function Price() {
  const cards = [
    {
      title: "PAKET MIPA",
      content: "Bimbingan belajar mandiri meliputi mata pelajaran",
      mapels: ["Matematika", "Fisika", "Kimia", "Biologi"],
      prices: "600.000",
      periods: "/bln",
      notes: "*Satu mata pelajaran, durasi empat kali pertemuan per bulan",
    },
    {
      title: "PAKET IPS",
      content: "Bimbingan belajar mandiri meliputi mata pelajaran",
      mapels: ["Sosiologi", "Sejarah", "Geografi", "Ekonomi"],
      prices: "400.000",
      periods: "/bln",
      notes: "*Satu mata pelajaran, durasi empat kali pertemuan per bulan",
    },
    {
      title: "PAKET BAHASA",
      content: "Bimbingan belajar mandiri meliputi mata pelajaran",
      mapels: [
        "Bahasa Jepang",
        "Bahasa Inggris",
        "Bahasa Indonesia",
        "Bahasa Mandarin",
      ],
      prices: "350.000",
      periods: "/bln",
      notes: "*Satu mata pelajaran, durasi empat kali pertemuan per bulan",
    },
    {
      title: "PAKET CUSTOM",
      content: "Bimbingan belajar kelompok meliputi mata pelajaran ",
      mapels: ["TK", "SD", "SMP", "SMA"],
      prices: "25.000",
      periods: "/jam",
      notes: "*Satu kali pertemuan per mata pelajaran, durasi 1 jam",
    },
  ];

  return (
    <article
      id="price"
      className=" flex-col items-center justify-center gap-10 bg-cust-green p-10"
    >
      <h1 className="text-center text-5xl font-bold text-cust-white">Harga</h1>
      <div className="flex flex-col gap-10 md:flex-col lg:flex-row lg:justify-around">
        {/* Di sini dimuat card. Diulangi sebanyak card yang ada */}
        {cards.map((card, index) => (
          <div key={index} className="md:h-full md:w-full lg:w-1/4">
            {createCard(
              card.title,
              card.content,
              card.mapels,
              card.prices,
              card.periods,
              card.notes,
            )}
          </div>
        ))}
      </div>
    </article>
  );
}
