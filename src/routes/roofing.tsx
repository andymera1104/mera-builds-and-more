import { createFileRoute } from "@tanstack/react-router";
import roofingImg from "@/assets/roofing.jpg";
import { ServicePage } from "@/components/ServicePage";

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
  return (
    <ServicePage
      eyebrow="( 01 ) — Roofing / Techos"
      title="Roofing"
      intro="Shingles, lámina (metal) and tile roofs built for Arizona heat and monsoon rain. Every roof we touch gets installation, inspection and maintenance done by the same crew."
      image={roofingImg}
      imageAlt="Roofer laying asphalt shingles on a residential roof"
      subServices={[
        {
          key: "A",
          title: "Installation / Instalación",
          body: "Shingles, lámina (metal) and tile — installed square with proper flashing, underlayment and ventilation.",
        },
        {
          key: "B",
          title: "Inspection / Inspección",
          body: "Full roof check after storms and each season — leaks, lifting shingles and drainage found early.",
        },
        {
          key: "C",
          title: "Maintenance / Mantenimiento",
          body: "Gutter clearing, sealant and patch repairs that keep the roof working for decades.",
        },
      ]}
      steps={["Call or Request", "On-Site Measure", "Written Quote", "Built Square"]}
      quoteService="Roofing — Shingles / Lámina / Tile"
    />
  );
}
