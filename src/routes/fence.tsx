import { createFileRoute } from "@tanstack/react-router";
import fenceImg from "@/assets/fence.jpg";
import { ServicePage } from "@/components/ServicePage";

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
