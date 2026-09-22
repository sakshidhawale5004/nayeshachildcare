import { createFileRoute } from "@tanstack/react-router";
import { ContentPage, images } from "@/components/PageBlocks";

export const Route = createFileRoute("/dance-therapy")({
  head: () => ({
    meta: [
      { title: "Dance Therapy | Nayesha Child Healthcare" },
      { name: "description", content: "Dance and movement therapy to support physical, emotional, and social development." },
      { property: "og:title", content: "Dance Therapy Services | Nayesha" },
      { property: "og:description", content: "Creative movement therapy for holistic child development." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: () => (
    <ContentPage
      eyebrow="Movement and expression"
      title="Dance therapy for holistic development."
      intro="Dance and movement therapy uses creative expression and physical activity to support emotional wellbeing, body awareness, and social connection."
      image={images.specialtiesHeroImage}
      alt="Child engaged in dance therapy movement"
      highlights={[
        { title: "Body awareness", text: "Developing coordination, balance, and physical confidence." },
        { title: "Emotional expression", text: "Creative ways to express feelings and build confidence." },
        { title: "Social connection", text: "Building relationships and social skills through shared movement." },
      ]}
      visuals={[images.specialtiesNewbornsImage, images.specialtiesSchoolAgeImage, images.specialtiesAdolescentImage]}
      sections={[
        {
          title: "Movement assessment",
          text: "We observe your child's natural movement patterns, physical abilities, and how they respond to music and rhythm. This guides our therapeutic approach.",
          bullets: [
            "Movement quality and coordination observation",
            "Response to music and rhythm",
            "Emotional expression through movement",
            "Physical capability and confidence assessment",
          ],
        },
        {
          title: "Creative therapy sessions",
          text: "In a welcoming, non-judgmental space, your child explores movement, music, and self-expression. These sessions build confidence, coordination, and emotional connection.",
          bullets: [
            "Guided movement and dance activities",
            "Music-based rhythm exercises",
            "Improvisation and creative expression",
            "Group and individual sessions available",
          ],
        },
        {
          title: "Holistic wellbeing support",
          text: "Dance therapy supports physical fitness, emotional processing, social skills, and joy. We help families understand how movement supports overall development.",
          bullets: [
            "Physical fitness and motor skill development",
            "Emotional regulation through movement",
            "Social interaction and peer connection",
            "Family movement activities and encouragement",
          ],
        },
      ]}
    />
  ),
});
