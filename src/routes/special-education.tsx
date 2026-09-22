import { createFileRoute } from "@tanstack/react-router";
import { ContentPage, images } from "@/components/PageBlocks";

export const Route = createFileRoute("/special-education")({
  head: () => ({
    meta: [
      { title: "Special Education Support | Nayesha Child Healthcare" },
      { name: "description", content: "Specialized educational support and learning assistance for children with diverse learning needs." },
      { property: "og:title", content: "Special Education Services | Nayesha" },
      { property: "og:description", content: "Personalized educational support for children with learning differences." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: () => (
    <ContentPage
      eyebrow="Educational support"
      title="Special education for every learner."
      intro="We provide personalized educational support designed for children with learning differences, developmental needs, or other learning challenges."
      image={images.specialtiesHeroImage}
      alt="Child engaged in specialized learning session"
      highlights={[
        { title: "Learning assessment", text: "Understanding your child's learning style and strengths." },
        { title: "Individualized instruction", text: "Teaching methods adapted to how your child learns best." },
        { title: "School support", text: "Collaboration with schools to ensure consistent learning support." },
      ]}
      visuals={[images.specialtiesNewbornsImage, images.specialtiesSchoolAgeImage, images.specialtiesAdolescentImage]}
      sections={[
        {
          title: "Comprehensive learning evaluation",
          text: "We assess your child's learning strengths, challenges, and potential barriers to learning. This helps us create targeted support strategies.",
          bullets: [
            "Academic skill assessment",
            "Learning style identification",
            "Attention and processing evaluation",
            "Emotional and social factors in learning",
          ],
        },
        {
          title: "Personalized instruction",
          text: "Using evidence-based teaching strategies, we provide one-on-one or small group instruction tailored to your child's learning needs and pace.",
          bullets: [
            "Multi-sensory learning approaches",
            "Scaffolded skill instruction",
            "Adaptive learning materials",
            "Positive reinforcement and encouragement",
          ],
        },
        {
          title: "School collaboration and transition",
          text: "We work closely with your child's school to ensure consistent support and to help with transitions between grades and educational settings.",
          bullets: [
            "School consultation and recommendation",
            "IEP collaboration when applicable",
            "Transition planning and support",
            "Progress monitoring and communication",
          ],
        },
      ]}
    />
  ),
});
