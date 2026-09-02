import { createFileRoute } from "@tanstack/react-router";
import paintingImg from "@/assets/painting.jpg";
import paintingVideo from "@/assets/painting-video.mp4.asset.json";
import { ServicePage } from "@/components/ServicePage";
import { useI18n } from "@/i18n";

const title = "House Painting in Arizona — Interior & Exterior | Mera Constructions LLC";
const description =
  "Interior and exterior house painting: prep, prime, finish and touch-up service built for the Arizona sun. Free estimate from Mera Constructions LLC — 928-322-1805.";

export const Route = createFileRoute("/painting")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/painting" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
    ],
    links: [{ rel: "canonical", href: "/painting" }],
  }),
  component: PaintingPage,
});

function PaintingPage() {
  const { t } = useI18n();
  return (
    <ServicePage
      eyebrow={t("painting.eyebrow")}
      title={t("painting.title")}
      intro={t("painting.intro")}
      image={paintingImg}
      imageAlt={t("painting.alt")}
      video={paintingVideo.url}
      subServices={[
        {
          key: "A",
          title: t("painting.s1.title"),
          body: t("painting.s1.body"),
        },
        {
          key: "B",
          title: t("painting.s2.title"),
          body: t("painting.s2.body"),
        },
        {
          key: "C",
          title: t("painting.s3.title"),
          body: t("painting.s3.body"),
        },
      ]}
      steps={[t("step.request"), t("step.color"), t("step.quote"), t("step.finish")]}
      quoteService={t("service.painting")}
    />
  );
}
