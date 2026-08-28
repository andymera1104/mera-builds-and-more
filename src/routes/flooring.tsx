import { createFileRoute } from "@tanstack/react-router";
import flooringImg from "@/assets/flooring.jpg";
import { ServicePage } from "@/components/ServicePage";

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
  return (
    <ServicePage
      eyebrow="Tile Flooring / Pisos"
      title="Tile Flooring"
      intro="Tile and porcelanato floors laid on a laser-flat base, with tight grout lines and zero lippage. Interior and exterior, kitchens, baths, patios and full-home installs."
      image={flooringImg}
      imageAlt="Tile setter installing large porcelain floor tiles"
      subServices={[
        {
          key: "A",
          title: "Installation / Instalación",
          body: "Ceramic tile and porcelanato set over a leveled, prepped substrate with proper waterproofing.",
        },
        {
          key: "B",
          title: "Inspection / Inspección",
          body: "Level, hollow-spot and grout checks — loose tile and moisture problems caught before they spread.",
        },
        {
          key: "C",
          title: "Maintenance / Mantenimiento",
          body: "Regrouting, sealing and tile replacement so floors keep looking new for years.",
        },
      ]}
      steps={["Call or Request", "On-Site Measure", "Written Quote", "Laid Level"]}
      quoteService="Tile Flooring — Tile / Porcelanato"
    />
  );
}
