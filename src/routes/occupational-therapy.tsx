import { createFileRoute } from "@tanstack/react-router";
import { ContentPage, images } from "@/components/PageBlocks";

export const Route = createFileRoute("/occupational-therapy")({
  head: () => ({
    meta: [
      { title: "Occupational Therapy | Nayesha Child Healthcare" },
      { name: "description", content: "Pediatric occupational therapy to support daily living skills and sensory development." },
      { property: "og:title", content: "Occupational Therapy Services | Nayesha" },
      { property: "og:description", content: "Evidence-based occupational therapy for independence and daily living skills." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: () => (
    <ContentPage
      eyebrow="Daily living skills"
      title="Occupational therapy for independence."
      intro="Occupational therapy helps children develop the skills they need for everyday activities—from self-care to play to learning—building confidence and independence."
      image={images.specialtiesHeroImage}
      alt="Child engaged in occupational therapy activity"
      highlights={[
        { title: "Motor skill development", text: "Fine and gross motor skills for play, writing, and movement." },
        { title: "Sensory integration", text: "Support for processing and responding to sensory information." },
        { title: "Daily living skills", text: "Self-care, feeding, dressing, and school readiness." },
      ]}
      visuals={[images.specialtiesNewbornsImage, images.specialtiesSchoolAgeImage, images.specialtiesAdolescentImage]}
      sections={[
        {
          title: "Occupational assessment",
          text: "We evaluate your child's motor skills, sensory processing, self-care abilities, and how they engage in play and daily activities. This guides our personalized therapy approach.",
          bullets: [
            "Motor skill screening (fine and gross)",
            "Sensory processing assessment",
            "Self-care and daily living evaluation",
            "Play and school readiness observation",
          ],
        },
        {
          title: "Skill-building therapy",
          text: "Through purposeful activities and play, we help your child build the coordination, strength, and confidence needed for daily activities and learning.",
          bullets: [
            "Fine motor skill exercises",
            "Gross motor and movement activities",
            "Sensory integration activities",
            "Adaptive strategy coaching",
          ],
        },
        {
          title: "Home and school support",
          text: "We provide guidance for making your home and school environments supportive for your child's development. Practical strategies help your child succeed in familiar settings.",
          bullets: [
            "Environmental modification recommendations",
            "Daily routine adaptation strategies",
            "School collaboration and consultation",
            "Adaptive equipment recommendations when needed",
          ],
        },
      ]}
    />
  ),
});
