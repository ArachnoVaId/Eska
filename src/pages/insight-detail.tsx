import { useParams } from "react-router-dom";
import NotFound from "@/pages/notfound";
import { insightCornerData } from "@/components/ideas/insight-corner/insight-corner-data";
import Background from "@/components/background";
import { parsedMarkdown } from "@/lib/utils";

const InsightDetail = () => {
  const { slug } = useParams();
  const insight = insightCornerData.find((item) =>
    item.href.endsWith(slug ?? ""),
  );

  if (!insight) {
    return <NotFound />;
  }

  return (
    <main className="flex flex-col overflow-x-hidden">
      <section className="relative w-full bg-backgroundColor">
        <Background />

        <div className="relative min-h-screen z-50 flex flex-col space-y-12 justify-center items-center py-32">
          <div className="max-lg:w-[85%] max-2xl:w-[1000px] w-[1536px] flex flex-col items-center justify-center max-lg:space-y-8 space-y-14">
            <h2 className="font-damn max-lg:text-4xl max-xl:text-8xl text-9xl text-center text-putih">
              {insight.title}
            </h2>

            <div className="w-[85%]">
              <img
                src={insight.image}
                alt={insight.title}
                className="w-full h-full object-cover rounded-3xl"
                draggable={false}
              />
            </div>
            <div className="w-full p-2 rounded-3xl hijau-ideas">
              <div className="w-full rounded-3xl bg-backgroundColor max-lg:px-5 max-lg:py-6 px-8 py-9">
                <p
                  className="text-putih max-lg:text-xl max-xl:text-2xl text-3xl text-justify"
                  dangerouslySetInnerHTML={{
                    __html: parsedMarkdown(insight.content),
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default InsightDetail;
