import { createFileRoute } from "@tanstack/react-router";
import { ContentPage, images } from "@/components/PageBlocks";

export const Route = createFileRoute("/aba-therapy")({
  head: () => ({
    meta: [
      { title: "ABA Therapy | Nayesha Child Healthcare" },
      { name: "description", content: "Applied Behavior Analysis (ABA) therapy services for children with autism and developmental needs." },
      { property: "og:title", content: "ABA Therapy Services | Nayesha" },
      { property: "og:description", content: "Evidence-based ABA therapy to support skill development and positive behavior." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: () => (
    <ContentPage
      eyebrow="Behavioral therapy"
      title="ABA therapy for skill building."
      intro="Applied Behavior Analysis (ABA) is an evidence-based approach that uses positive reinforcement to help children develop new skills and reduce challenging behaviors."
      image={images.specialtiesHeroImage}
      alt="Child engaged in ABA therapy session"
      highlights={[
        { title: "Skill development", text: "Build communication, social, and daily living skills progressively." },
        { title: "Positive reinforcement", text: "Motivation-based learning that celebrates your child's progress." },
        { title: "Measurable outcomes", text: "Clear tracking of goals and regular progress updates." },
      ]}
      visuals={[images.specialtiesNewbornsImage, images.specialtiesSchoolAgeImage, images.specialtiesAdolescentImage]}
      sections={[
        {
          title: "Individualized treatment",
          text: "ABA therapy begins with a functional behavior assessment to understand what skills to teach and what behaviors to support. We create a customized program based on your child's specific goals.",
          bullets: [
            "Functional behavior assessment",
            "Custom skill development plan",
            "Targeted behavior support strategies",
            "Data-driven progress tracking",
          ],
        },
        {
          title: "One-on-one sessions",
          text: "Your child receives dedicated time with a certified therapist who uses evidence-based ABA techniques to teach new skills in a supportive, encouraging environment.",
          bullets: [
            "Intensive one-on-one therapy",
            "Skill generalization across settings",
            "Positive reinforcement strategies",
            "Real-world application practice",
          ],
        },
        {
          title: "Family involvement and carryover",
          text: "We provide comprehensive parent training so you can support learning at home and reinforce skills in everyday situations. Consistency across environments accelerates progress.",
          bullets: [
            "Parent training sessions",
            "Home program development",
            "Behavior management strategies",
            "Regular family meetings and updates",
          ],
        },
      ]}
    />
  ),
});
