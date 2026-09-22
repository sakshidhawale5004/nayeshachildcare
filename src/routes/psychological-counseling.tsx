import { createFileRoute } from "@tanstack/react-router";
import { ContentPage, images } from "@/components/PageBlocks";

export const Route = createFileRoute("/psychological-counseling")({
  head: () => ({
    meta: [
      { title: "Child Psychological Counseling | Nayesha Child Healthcare" },
      { name: "description", content: "Professional psychological counseling and emotional support for children and families." },
      { property: "og:title", content: "Psychological Counseling Services | Nayesha" },
      { property: "og:description", content: "Compassionate counseling to support your child's emotional and mental health." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: () => (
    <ContentPage
      eyebrow="Emotional wellness"
      title="Psychological counseling for growing minds."
      intro="Our child psychologists provide compassionate, evidence-based counseling to support your child's emotional wellbeing, resilience, and healthy development."
      image={images.specialtiesHeroImage}
      alt="Child in supportive counseling session"
      highlights={[
        { title: "Emotional support", text: "Safe space to express feelings and develop coping skills." },
        { title: "Family counseling", text: "Support for the whole family navigating changes and challenges." },
        { title: "Coping strategies", text: "Evidence-based techniques for managing anxiety, stress, and emotions." },
      ]}
      visuals={[images.specialtiesNewbornsImage, images.specialtiesSchoolAgeImage, images.specialtiesAdolescentImage]}
      sections={[
        {
          title: "Assessment and understanding",
          text: "We begin by listening carefully to understand your child's experiences, concerns, and strengths. This helps us create a supportive approach tailored to their needs.",
          bullets: [
            "Comprehensive psychological assessment",
            "Developmental and family history review",
            "Collaborative goal setting with child and family",
            "Identification of strengths and resources",
          ],
        },
        {
          title: "Therapy and skill building",
          text: "Using evidence-based approaches like cognitive-behavioral therapy, play therapy, and art therapy, we help children understand their feelings and develop healthy coping strategies.",
          bullets: [
            "Individual counseling sessions",
            "Coping skill development",
            "Emotional regulation support",
            "Age-appropriate therapeutic techniques",
          ],
        },
        {
          title: "Family and system support",
          text: "Children thrive when their family environment is supportive. We work with parents and coordinate with schools to create consistent, nurturing environments for your child.",
          bullets: [
            "Family sessions and psychoeducation",
            "Parenting guidance and support",
            "School consultation and collaboration",
            "Community resource connection",
          ],
        },
      ]}
    />
  ),
});
