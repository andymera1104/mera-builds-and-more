import { createFileRoute } from "@tanstack/react-router";
import paintingImg from "@/assets/painting.jpg";
import { ServicePage } from "@/components/ServicePage";

export const Route = createFileRoute("/painting")({
  head: () => ({
    meta: [
      { title: "House Painting — Interior & Exterior | Mera Constructions LLC" },
      {
        name: "description",
        content:
          "Interior and exterior house painting: prep, prime, finish and touch-up service built for the Arizona sun. Free estimate — 928-322-1805.",
      },
      { property: "og:title", content: "House Painting | Mera Constructions LLC" },
      {
        property: "og:description",
        content:
          "Pintura para casas, interior y exterior. Preparación, acabado y mantenimiento. Cotización gratuita: 928-322-1805.",
      },
    ],
  }),
  component: PaintingPage,
});

function PaintingPage() {
  return (
    <ServicePage
      eyebrow="( 03 ) — Painting / Pintura"
      title="House Painting"
      intro="Pintura para casas — interior and exterior. Careful prep, premium coatings and crisp lines that hold up to the Arizona sun year after year."
      image={paintingImg}
      imageAlt="Painter rolling fresh exterior paint on a stucco house wall"
      subServices={[
        {
          key: "A",
          title: "Preparation / Preparación",
          body: "Wash, scrape, patch, caulk and mask — the step that decides how long the paint lasts.",
        },
        {
          key: "B",
          title: "Painting / Pintado",
          body: "Interior walls, ceilings, trim and doors; exterior stucco, siding and fascia with UV-rated coatings.",
        },
        {
          key: "C",
          title: "Maintenance / Mantenimiento",
          body: "Yearly walkthroughs, touch-ups and recoating so your color stays true.",
        },
      ]}
      steps={["Call or Request", "Color & Measure", "Written Quote", "Clean Finish"]}
      quoteService="Painting — Interior / Exterior"
    />
  );
}
