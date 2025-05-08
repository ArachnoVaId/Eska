import Background from "@/components/background";
import TitleWrapper from "@/components/title-wrapper";

const KetentuanSubmisiLeanCanvas = () => {
  return (
    <section className="relative w-full bg-backgroundColor">
      <Background />

      <div className="relative min-h-screen z-50 flex flex-col space-y-12 justify-center items-center py-[200px]">
        <h2 className="font-damn max-lg:text-4xl max-xl:text-8xl text-9xl text-center text-putih">
          <TitleWrapper
            label="KETENTUAN SUBMISI LEAN CANVAS"
            color="hijau-ideas"
            variant="top-left"
            className="px-20"
          />
        </h2>

        <div className="2xl:w-[1300px] xl:w-[1000px] lg:w-[800px] w-[85%] p-1 rounded-4xl hijau-ideas">
          <div className="flex flex-col px-8 py-8 rounded-4xl bg-backgroundColor">
            <p className="text-putih max-lg:text-xl max-xl:text-2xl text-3xl text-justify font-medium">
              Peserta melakukan pengumpulan dokumen karya Lean Canvas dengan
              ketentuan:
              <ol className="list-decimal space-y-4 pl-10 mt-6">
                <li>
                  <strong>Tempat Pengumpulan Karya Lean Canvas</strong>
                  <ul className="list-disc pl-5 space-y-1 mt-2">
                    <li>
                      Peserta dapat melakukan submission melalui link yang akan
                      dikirimkan ke email ketua tim setelah panitia selesai
                      melakukan pemeriksaan kelengkapan data.
                    </li>
                    <li>
                      Email konfirmasi yang berisi submission karya lean canvas
                      akan dikirim paling lambat 1 × 24 jam setelah registrasi.
                    </li>
                    <li>
                      Peserta tidak dapat mengunggah dokumen sebanyak dua kali,
                      pastikan file yang akan diunggah sudah sesuai. Apabila
                      terjadi kesalahan, peserta dapat menghubungi panitia
                      melalui kontak yang tertera dalam jangka waktu 1 × 24 jam
                      setelah pengumpulan.
                    </li>
                  </ul>
                </li>
                <li>
                  <strong>Lean Canvas</strong>
                  <ul className="list-disc pl-5 space-y-1 mt-2">
                    <li>
                      Peserta diwajibkan menggunakan template Lean Canvas yang
                      telah disediakan panitia. Template Lean Canvas dapat
                      dilihat dan diunduh melalui{" "}
                      <span className="font-bold">
                        <a
                          href="https://bit.ly/GuidelineLeanCanvas"
                          target="_blank"
                        >
                          bit.ly/GuidelineLeanCanvas
                        </a>
                      </span>
                    </li>
                    <li>Dokumen dikumpulkan dalam bentuk pdf.</li>
                    <li>Ukuran maksimal file 10 Mb.</li>
                  </ul>
                </li>
              </ol>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default KetentuanSubmisiLeanCanvas;
