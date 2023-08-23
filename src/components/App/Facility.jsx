import decoration from "../../assets/images/DekorKiri.png";
import decoration2 from "../../assets/images/Dekor Kanan.png";
import f1 from "../../assets/images/Ellipse 10.png";
import f2 from "../../assets/images/Ellipse 11.png";
import f3 from "../../assets/images/Ellipse 12.png";

export default function Facility() {
  return (
    <article id="facility">
      <div className="my-10 flex flex-col items-center justify-between lg:flex-row lg:space-x-20">
        <div className="hidden lg:block">
          <img src={decoration} className="h-screen" alt="Dekor Kiri" />
        </div>

        <div className="flex flex-col items-center justify-center lg:items-center">
          <div>
            <h1 className="mt-8 text-center text-3xl font-bold lg:mt-0 lg:text-center lg:text-5xl">
              Fasilitas
            </h1>
          </div>
          <div className="mt-8 grid grid-cols-1 gap-8 lg:mt-20 lg:grid-cols-3 lg:gap-20">
            <div className="text-center">
              <img
                src={f1}
                className="mx-auto h-32 w-32"
                alt="Gambar Fasilitas 1"
              />
              <h1 className="mt-4 text-xl font-bold">Waktu yang Fleksibel</h1>
              <p className="mt-2">
                Tidak perlu lagi mengkhawatirkan waktu belajar. Kami menyediakan
                jam belajar yang fleksibel sesuai permintaan
              </p>
            </div>

            <div className="text-center">
              <img
                src={f2}
                className="mx-auto h-32 w-32"
                alt="Gambar Fasilitas 2"
              />
              <h1 className="mt-4 text-xl font-bold">Fasilitas Modern</h1>
              <p className="mt-2">
                Nikmati lingkungan belajar dengan fasilitas modern dan nyaman
                untuk mendukung kesuksesan Anda
              </p>
            </div>

            <div className="text-center">
              <img
                src={f3}
                className="mx-auto h-32 w-32"
                alt="Gambar Fasilitas 3"
              />
              <h1 className="mt-4 text-xl font-bold">Pengajar Profesional</h1>
              <p className="mt-2">
                Belajar dari pengajar yang berpengalaman dan ahli di bidangnya
                untuk meraih hasil terbaik
              </p>
            </div>

            <div className="text-center">
              <img
                src={f1}
                className="mx-auto h-32 w-32"
                alt="Gambar Fasilitas 1"
              />
              <h1 className="mt-4 text-xl font-bold">Waktu yang Fleksibel</h1>
              <p className="mt-2">
                Tidak perlu lagi mengkhawatirkan waktu belajar. Kami menyediakan
                jam belajar yang fleksibel sesuai permintaan
              </p>
            </div>

            <div className="text-center">
              <img
                src={f2}
                className="mx-auto h-32 w-32"
                alt="Gambar Fasilitas 2"
              />
              <h1 className="mt-4 text-xl font-bold">Fasilitas Modern</h1>
              <p className="mt-2">
                Nikmati lingkungan belajar dengan fasilitas modern dan nyaman
                untuk mendukung kesuksesan Anda
              </p>
            </div>

            <div className="text-center">
              <img
                src={f3}
                className="mx-auto h-32 w-32"
                alt="Gambar Fasilitas 3"
              />
              <h1 className="mt-4 text-xl font-bold">Pengajar Profesional</h1>
              <p className="mt-2">
                Belajar dari pengajar yang berpengalaman dan ahli di bidangnya
                untuk meraih hasil terbaik
              </p>
            </div>
          </div>
        </div>

        <div className="hidden lg:block">
          <img src={decoration2} className="h-screen" alt="Dekor Kanan" />
        </div>
      </div>
    </article>
  );
}
