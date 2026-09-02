import { createFileRoute } from "@tanstack/react-router";
import roofingImg from "@/assets/roofing.jpg";
import { ServicePage } from "@/components/ServicePage";
import { useI18n } from "@/i18n";

const title = "Roofing in Arizona — Shingles, Lámina & Tile | Mera Constructions LLC";
const description =
  "Shingle, metal (lámina) and tile roofing in Arizona: installation, inspection and maintenance by one crew. Free written estimate — call 928-322-1805.";

export const Route = createFileRoute("/roofing")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/roofing" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
    ],
    links: [{ rel: "canonical", href: "/roofing" }],
  }),
  component: RoofingPage,
});

function RoofingPage() {
  const { t } = useI18n();
  return (
    <ServicePage
      eyebrow={t("roofing.eyebrow")}
      title={t("roofing.title")}
      intro={t("roofing.intro")}
      image={roofingImg}
      imageAlt={t("roofing.alt")}
      subServices={[
        {
          key: "A",
          title: t("roofing.s1.title"),
          body: t("roofing.s1.body"),
        },
        {
          key: "B",
          title: t("roofing.s2.title"),
          body: t("roofing.s2.body"),
        },
        {
          key: "C",
          title: t("roofing.s3.title"),
          body: t("roofing.s3.body"),
        },
      ]}
      steps={[t("step.request"), t("step.measure"), t("step.quote"), t("step.built")]}
      quoteService={t("service.roofing")}
    />
  );
}
