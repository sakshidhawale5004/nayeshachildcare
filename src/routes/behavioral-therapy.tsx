import { createFileRoute } from "@tanstack/react-router";
import { ContentPage, images } from "@/components/PageBlocks";

export const Route = createFileRoute("/behavioral-therapy")({
  head: () => ({
    meta: [
      { title: "Behavioral Therapy | Nayesha Child Healthcare" },
      { name: "description", content: "Behavioral therapy services to support positive behavior development and emotional regulation." },
      { property: "og:title", content: "Behavioral Therapy Services | Nayesha" },
      { property: "og:description", content: "Evidence-based behavioral therapy for healthy emotional development." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: () => (
    <ContentPage
      eyebrow="Behavior support"
      title="Behavioral therapy for positive change."
      intro="Our behavioral therapists help children develop positive behaviors, emotional regulation skills, and healthy responses through evidence-based intervention strategies."
      image={images.specialtiesHeroImage}
      alt="Therapist working with child on behavior strategies"
      highlights={[
        { title: "Behavior assessment", text: "Understanding the root causes and patterns of behavior." },
        { title: "Positive reinforcement", text: "Building confidence through success and encouragement." },
        { title: "Skill development", text: "Teaching alternatives and healthy emotional responses." },
      ]}
      visuals={[images.specialtiesNewbornsImage, images.specialtiesSchoolAgeImage, images.specialtiesAdolescentImage]}
      sections={[
        {
          title: "Functional behavior analysis",
          text: "We carefully observe and analyze your child's behavior to understand what's driving it. This helps us develop strategies that address the actual needs behind the behavior.",
          bullets: [
            "Detailed behavior observation and recording",
            "Function identification (what the behavior accomplishes)",
            "Environmental and contextual analysis",
            "Collaborative problem-solving with family",
          ],
        },
        {
          title: "Intervention and coaching",
          text: "Using proven behavioral techniques, we help your child learn new, positive ways to express needs and manage emotions. Sessions are encouraging and solution-focused.",
          bullets: [
            "Replacement behavior teaching",
            "Emotional regulation practice",
            "Problem-solving skill development",
            "Positive reinforcement and rewards",
          ],
        },
        {
          title: "Family and environment support",
          text: "Behavior change works best with consistent support at home and school. We coach parents and coordinate with teachers to create unified, positive environments.",
          bullets: [
            "Parent behavior coaching",
            "Home strategy implementation",
            "School-home communication plan",
            "Ongoing monitoring and adjustment",
          ],
        },
      ]}
    />
  ),
});
