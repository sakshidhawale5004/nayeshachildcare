import { createFileRoute } from "@tanstack/react-router";
import { ContentPage, images } from "@/components/PageBlocks";

export const Route = createFileRoute("/autism-therapy")({
  head: () => ({
    meta: [
      { title: "Autism Therapy | Nayesha Child Healthcare" },
      { name: "description", content: "Comprehensive autism therapy and support services for children at Nayesha Healthcare." },
      { property: "og:title", content: "Autism Therapy Services | Nayesha" },
      { property: "og:description", content: "Expert autism therapy with evidence-informed care and family support." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: () => (
    <ContentPage
      eyebrow="Specialized support"
      title="Autism therapy tailored to your child."
      intro="We provide comprehensive autism assessment and therapy designed to support your child's unique strengths and needs with family-centered care."
      image="/services/Autism therapy tailored to your child..jpg"
      alt="Child receiving specialized autism therapy support"
      highlights={[
        { title: "Early identification", text: "Thorough developmental screening to identify needs early." },
        { title: "Evidence-based approach", text: "Proven therapies adapted to your child's individual pace." },
        { title: "Family partnership", text: "Therapy that extends into everyday life with practical parent guidance." },
      ]}
      visuals={[
        "/services/Comprehensive assessment.jpg",
        "/services/Individualized therapy plans.jpg",
        "/services/autism tHERAPY Family support and training.jpg"
      ]}
      sections={[
        {
          title: "Comprehensive assessment",
          text: "We begin with a detailed evaluation of your child's developmental history, current abilities, and family goals. Our multidisciplinary team works together to create a complete picture.",
          bullets: [
            "Detailed developmental history review",
            "Structured observation and assessment",
            "Family interview and goal setting",
            "Coordinated specialist input when needed",
          ],
        },
        {
          title: "Individualized therapy plans",
          text: "Each child receives a personalized treatment plan that builds on their strengths and addresses their specific needs through evidence-based interventions.",
          bullets: [
            "One-on-one therapy sessions",
            "Small group social skills support",
            "Sensory integration when appropriate",
            "Regular progress monitoring and adjustment",
          ],
        },
        {
          title: "Family support and training",
          text: "We believe therapy is most effective when parents are involved. We provide guidance, strategies, and support to help you understand and support your child.",
          bullets: [
            "Parent coaching and strategy sessions",
            "Practical tools for home and community",
            "Clear communication about progress",
            "Connection to community resources",
          ],
        },
      ]}
    />
  ),
});
