import Background from "@/components/background";
import HighlightedLabel from "@/components/ideas/timeline/highlighted-label";
import TitleWrapper from "@/components/title-wrapper";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ReactNode } from "react";

const RegistrationInformationLeanCanvas = () => {
  const textClassName =
    "text-putih text-justify max-lg:text-xl max-xl:text-2xl text-3xl font-medium";

  return (
    <section className="relative w-full bg-backgroundColor">
      <Background />

      <div className="relative min-h-screen z-50 flex justify-center items-center py-40">
        <div className="flex flex-col space-y-12 items-center">
          <h2 className="font-damn max-lg:text-5xl max-xl:text-8xl text-9xl text-center text-putih">
            <TitleWrapper
              label="LEAN CANVAS REGISTRATION"
              color="hijau-ideas"
              variant="top-left"
              className="px-20"
            />
          </h2>
          <Card>
            <div className={cn(textClassName, "space-y-6")}>
              <p>
                <span className="font-bold">IDEAS Batch 11</span> akan
                membawakan <span className="italic">sustainability</span>{" "}
                sebagai fokus utama National Business Plan Competition dan
                Insight Series. IDEAS mengangkat tema tersebut untuk merespons
                keadaan serta tantangan yang ada saat ini yang penuh dengan
                ketidakpastian.
              </p>
              <p>
                Tema ini tidak hanya relevan dengan isu global, tetapi juga
                memberikan manfaat yang luas bagi semua pihak yang terlibat.
                Dengan membangun bisnis berkelanjutan, peserta tidak hanya
                menciptakan keuntungan finansial tetapi juga kontribusi nyata
                untuk masa depan yang lebih baik. Kompetisi ini menjadi langkah
                penting dalam membentuk generasi wirausaha yang inovatif,
                tangguh, dan peduli terhadap keberlanjutan.
              </p>
            </div>
          </Card>
          <Card>
            <div className={cn(textClassName, "space-y-6")}>
              {" "}
              <p>
                Terdapat tiga tahapan seleksi lomba pada{" "}
                <span className="font-bold">
                  IDEAS Batch 11 National Business Plan Competition
                </span>
                , yaitu Tahap Lean Canvas, Tahap Proposal, dan Tahap Final,
                dengan Tahap Lean Canvas sebagai tahapan pertama dari rangkaian
                lomba. Pelaksanaan Tahap Lean Canvas rincian sebagai berikut:
              </p>
              <div className="flex flex-col items-center space-y-4">
                <HighlightedLabel>LEAN CANVAS REGISTRATION</HighlightedLabel>
                <HighlightedLabel>April 7th – May 1st, 2025</HighlightedLabel>
              </div>
              <p className="font-semibold mt-4 text-center">
                Dengan biaya pendaftaran gratis
              </p>
            </div>{" "}
          </Card>
          <Card>
            <div className={cn(textClassName, "space-y-6")}>
              <p>
                Para partisipan dimohon untuk memeriksa kelengkapan identitas
                dan memastikan kesesuaian format pengumpulan Lean Canvas sesuai
                dengan peraturan yang telah ditetapkan oleh panitia pada
                Guideline Lean Canvas IDEAS National Business Plan Competition
                Batch 11 dan Guideline Lean Canvas.
              </p>
              <div className="flex flex-col items-center space-y-4">
                <Button
                  variant="hijauHover"
                  size="icon"
                  className={cn(textClassName, "font-semibold italic")}
                  asChild
                >
                  <a
                    href="https://bit.ly/IDEASGeneralGuideline"
                    target="_blank"
                  >
                    General Guideline{" "}
                    <br className="max-lg:block hidden" />
                    IDEAS Batch 11
                  </a>
                </Button>
                <Button
                  variant="hijauHover"
                  size="icon"
                  className={cn(textClassName, "font-semibold italic")}
                  asChild
                >
                  <a href="https://bit.ly/GuidelineLeanCanvas" target="_blank">
                    Guideline Lean Canvas
                  </a>
                </Button>
              </div>
            </div>
          </Card>
          <Card>
            <div className={cn(textClassName, "space-y-6")}>
              <p className="font-semibold">Ketentuan Peserta:</p>
              <ul className="list-disc pl-10 space-y-2">
                <li>Peserta merupakan Warga Negara Indonesia.</li>
                <li>
                  Peserta lomba IDEAS Batch 11 merupakan mahasiswa aktif
                  S1/D3/D4/Sederajat dari Perguruan Tinggi Negeri maupun Swasta
                  yang terhitung pada saat pengumpulan lean canvas.
                </li>
                <li>Satu tim terdiri dari tiga orang.</li>
                <li>
                  Peserta diperkenankan berasal dari angkatan, jurusan,
                  fakultas, dan institusi yang berbeda.
                </li>
                <li>
                  Peserta tidak diperkenankan mewakili dua tim atau lebih.
                </li>
                <li>
                  Setiap perguruan tinggi diperkenankan mengirimkan lebih dari
                  satu perwakilan tim.
                </li>
                <li>
                  Peserta tidak dapat digantikan hingga akhir rangkaian acara
                  IDEAS Batch 11.
                </li>
                <li>
                  Panitia The 19th Management’s Event tidak diperkenankan
                  mengikuti kompetisi IDEAS Batch 11.
                </li>
              </ul>
            </div>
          </Card>
          <Card>
            <div className={cn(textClassName, "space-y-6")}>
              <p>
                Apabila partisipan memiliki pertanyaan lebih lanjut, dapat
                menghubungi kontak di bawah ini:
              </p>
              <p>
                <a href="https://wa.me/6285730414826" target="_blank">
                  Elizabeth (085730414826)
                </a>
                <br />{" "}
                <a href="https://wa.me/6285179875827" target="_blank">
                  {" "}
                  Fitrah (085179875827)
                </a>
              </p>
            </div>
          </Card>
          <Button
            variant="hijauHover"
            size="icon"
            className={cn(textClassName, "font-semibold italic")}
            asChild
          >
            <a href="/registration/ideas/register">Register Now!</a>
          </Button>
        </div>
      </div>
    </section>
  );
};

const Card = ({ children }: { children: ReactNode }) => {
  return (
    <div className="relative 2xl:w-[1300px] xl:w-[1000px] lg:w-[800px] w-[85%] p-1 rounded-4xl hijau-ideas">
      <div className="w-full flex px-5 py-8 bg-backgroundColor rounded-4xl">
        {children}
      </div>
    </div>
  );
};

export default RegistrationInformationLeanCanvas;
