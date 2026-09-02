import { createFileRoute } from "@tanstack/react-router";
import flooringImg from "@/assets/flooring.jpg";
import flooringVideo from "@/assets/flooring-video.mp4.asset.json";
import { ServicePage } from "@/components/ServicePage";
import { useI18n } from "@/i18n";

const title = "Tile & Porcelanato Flooring in Arizona | Mera Constructions LLC";
const description =
  "Tile and porcelanato flooring installation, inspection and maintenance — level floors with tight grout lines. Free estimate from Mera Constructions LLC: 928-322-1805.";

export const Route = createFileRoute("/flooring")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/flooring" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
    ],
    links: [{ rel: "canonical", href: "/flooring" }],
  }),
  component: FlooringPage,
});

function FlooringPage() {
  const { t } = useI18n();
  return (
    <ServicePage
      eyebrow={t("flooring.eyebrow")}
      title={t("flooring.title")}
      intro={t("flooring.intro")}
      image={flooringImg}
      imageAlt={t("flooring.alt")}
      video={flooringVideo.url}
      subServices={[
        {
          key: "A",
          title: t("flooring.s1.title"),
          body: t("flooring.s1.body"),
        },
        {
          key: "B",
          title: t("flooring.s2.title"),
          body: t("flooring.s2.body"),
        },
        {
          key: "C",
          title: t("flooring.s3.title"),
          body: t("flooring.s3.body"),
        },
      ]}
      steps={[t("step.request"), t("step.measure"), t("step.quote"), t("step.level")]}
      quoteService={t("service.flooring")}
    />
  );
}
