import { createFileRoute } from "@tanstack/react-router";
import fenceImg from "@/assets/fence.jpg";
import { ServicePage } from "@/components/ServicePage";

export const Route = createFileRoute("/fence")({
  head: () => ({
    meta: [
      { title: "Wood Fences & Residential Construction | Mera Constructions LLC" },
      {
        name: "description",
        content:
          "Custom wood fence construction plus residential builds, additions and remodels. Free estimate from Mera Constructions LLC — 928-322-1805.",
      },
      { property: "og:title", content: "Fence & Residential Construction | Mera Constructions LLC" },
      {
        property: "og:description",
        content:
          "Construcción de fences de madera y construcciones residenciales. Cotización gratuita: 928-322-1805.",
      },
    ],
  }),
  component: FencePage,
});

function FencePage() {
  return (
    <ServicePage
      eyebrow="( 04 ) — Fence & Residential"
      title={"Fence &\nResidential"}
      intro="Custom wood fencing — cedar, pressure-treated and privacy styles — plus full residential construction: new builds, additions and remodels, framed square from the footing up."
      image={fenceImg}
      imageAlt="New cedar wood privacy fence with a residential framing project behind it"
      subServices={[
        {
          key: "A",
          title: "Wood Fence / Fence de Madera",
          body: "Privacy, picket and ranch-style fences set in concrete footings with straight, plumb posts.",
        },
        {
          key: "B",
          title: "Residential Construction",
          body: "New residential builds, additions, patios and remodels — framing, roofing and finish work in-house.",
        },
        {
          key: "C",
          title: "Inspection & Maintenance",
          body: "Post, gate and structure checks, board replacement, staining and sealing.",
        },
      ]}
      steps={["Call or Request", "On-Site Measure", "Written Quote", "Built Square"]}
      quoteService="Fence & Residential Construction"
    />
  );
}
