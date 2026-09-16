import { createFileRoute } from "@tanstack/react-router";
import { HomePage } from "@/components/PageBlocks";

export const Route = createFileRoute("/")({
  ssr: false,
  head: () => ({ meta: [
    { title: "Nayesha Child Healthcare | Pediatric Care" },
    { name: "description", content: "Warm, expert pediatric care for newborns, children and adolescents at Nayesha Healthcare." },
    { property: "og:title", content: "Nayesha Child Healthcare | Pediatric Care" },
    { property: "og:description", content: "Warm, expert pediatric care for every chapter of childhood." },
    { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" },
  ]}), component: HomePage,
});