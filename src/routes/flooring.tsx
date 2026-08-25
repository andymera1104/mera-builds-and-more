import { createFileRoute } from "@tanstack/react-router";
import flooringImg from "@/assets/flooring.jpg";
import { ServicePage } from "@/components/ServicePage";

export const Route = createFileRoute("/flooring")({
  head: () => ({
    meta: [
      { title: "Tile Flooring — Tile & Porcelanato | Mera Constructions LLC" },
      {
        name: "description",
        content:
          "Tile and porcelanato flooring: installation, inspection and maintenance, laid level with tight grout lines. Free estimate — 928-322-1805.",
      },
      { property: "og:title", content: "Tile & Porcelain Flooring | Mera Constructions LLC" },
      {
        property: "og:description",
        content:
          "Pisos de tile y porcelanato: instalación, inspección y mantenimiento. Cotización gratuita: 928-322-1805.",
      },
    ],
  }),
  component: FlooringPage,
});

function FlooringPage() {
  return (
    <ServicePage
      eyebrow="( 02 ) — Tile Flooring / Pisos"
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
