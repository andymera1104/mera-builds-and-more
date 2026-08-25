import { createFileRoute } from "@tanstack/react-router";
import roofingImg from "@/assets/roofing.jpg";
import { ServicePage } from "@/components/ServicePage";

export const Route = createFileRoute("/roofing")({
  head: () => ({
    meta: [
      { title: "Roofing — Shingles, Lámina & Tile | Mera Constructions LLC" },
      {
        name: "description",
        content:
          "Shingle, metal (lámina) and tile roofing: installation, inspection and maintenance. Free estimate — call Mera Constructions LLC at 928-322-1805.",
      },
      { property: "og:title", content: "Roofing Services | Mera Constructions LLC" },
      {
        property: "og:description",
        content:
          "Roof installation, inspection and maintenance for shingles, lámina and tile. Cotización gratuita: 928-322-1805.",
      },
    ],
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
