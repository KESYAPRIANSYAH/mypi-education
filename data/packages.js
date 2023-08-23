const levels = [
  {
    id: "sd",
    name: "SD",
  },
  {
    id: "smp",
    name: "SMP",
  },
  {
    id: "sma",
    name: "SMA",
  },
];

const subjects = [
  {
    id: "bahasa-indonesia",
    name: "Bahasa Indonesia",
  },
  {
    id: "bahasa-inggris",
    name: "Bahasa Inggris",
  },
  {
    id: "matematika",
    name: "Matematika",
  },
  {
    id: "fisika",
    name: "Fisika",
  },
  {
    id: "kimia",
    name: "Kimia",
  },
  {
    id: "biologi",
    name: "Biologi",
  },
  {
    id: "geografi",
    name: "Geografi",
  },
  {
    id: "sejarah",
    name: "Sejarah",
  },
  {
    id: "sosiologi",
    name: "Sosiologi",
  },
  {
    id: "ekonomi",
    name: "Ekonomi",
  },
  {
    id: "ipa",
    name: "IPA",
  },
  {
    id: "ips",
    name: "IPS",
  },
];

const packages = {
  mipa: {
    id: "mipa",
    name: "MIPA",
    description:
      "MIPA adalah singkatan dari Matematika dan Ilmu Pengetahuan Alam. Di dalam paket ini kami menyediakan layanan bimbingan belajar mandiri yang meliputi mata pelajaran Matematika, Fisika, Kimia, dan Biologi. Paket ini hanya tersedia untuk jenjang SMA",
    price: 600000,
    subjects: ["matematika", "fisika", "kimia", "biologi"],
    level: ["sma"],
  },
  ips: {
    id: "ips",
    name: "IPS",
    description:
      "IPS adalah singkatan dari Ilmu Pengetahuan Sosial. Di dalam paket ini kami menyediakan layanan bimbingan belajar mandiri yang meliputi mata pelajaran Geografi, Sejarah, Sosiologi, dan Ekonomi. Paket ini hanya tersedia untuk jenjang SMA",
    price: 400000,
    subjects: ["geografi", "sejarah", "sosiologi", "ekonomi"],
    level: ["sma"],
  },
  bahasa: {
    id: "bahasa",
    name: "Bahasa",
    description:
      "Di dalam paket ini kami menyediakan layanan bimbingan belajar mandiri yang meliputi mata pelajaran Bahasa Indonesia dan Bahasa Inggris. Paket ini tersedia untuk jenjang SD, SMP, dan SMA",
    price: 250000,
    subjects: ["bahasa-indonesia", "bahasa-inggris"],
    level: ["sd", "smp", "sma"],
  },
  custom: {
    id: "custom",
    name: "Custom",
    description:
      "Paket ini memungkinkan Anda untuk memilih mata pelajaran yang Anda inginkan. Paket ini tersedia untuk jenjang SD, SMP, dan SMA.",
    price: 25000,
    subjects: [
      "bahasa-indonesia",
      "bahasa-inggris",
      "matematika",
      "fisika",
      "kimia",
      "biologi",
      "geografi",
      "sejarah",
      "sosiologi",
      "ekonomi",
      "ipa",
      "ips",
    ],
    level: ["sd", "smp", "sma"],
  },
};

export { levels, subjects, packages };
