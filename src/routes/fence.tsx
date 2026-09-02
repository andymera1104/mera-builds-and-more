import { createFileRoute } from "@tanstack/react-router";
import fenceImg from "@/assets/fence.jpg";
import fenceVideo from "@/assets/fence-video.mp4.asset.json";
import { ServicePage } from "@/components/ServicePage";
import { useI18n } from "@/i18n";

const title = "Wood Fences & Residential Construction in Arizona | Mera Constructions LLC";
const description =
  "Custom wood fence construction plus residential builds, additions and remodels across Arizona. Free estimate from Mera Constructions LLC — 928-322-1805.";

export const Route = createFileRoute("/fence")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/fence" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
    ],
    links: [{ rel: "canonical", href: "/fence" }],
  }),
  component: FencePage,
});

function FencePage() {
  const { t } = useI18n();
  return (
    <ServicePage
      eyebrow={t("fence.eyebrow")}
      title={t("fence.title")}
      intro={t("fence.intro")}
      image={fenceImg}
      imageAlt={t("fence.alt")}
      video={fenceVideo.url}
      subServices={[
        {
          key: "A",
          title: t("fence.s1.title"),
          body: t("fence.s1.body"),
        },
        {
          key: "B",
          title: t("fence.s2.title"),
          body: t("fence.s2.body"),
        },
        {
          key: "C",
          title: t("fence.s3.title"),
          body: t("fence.s3.body"),
        },
      ]}
      steps={[t("step.request"), t("step.measure"), t("step.quote"), t("step.built")]}
      quoteService={t("service.fence")}
    />
  );
}
