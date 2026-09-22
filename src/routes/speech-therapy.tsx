import { createFileRoute } from "@tanstack/react-router";
import { ContentPage, images } from "@/components/PageBlocks";

export const Route = createFileRoute("/speech-therapy")({
  head: () => ({
    meta: [
      { title: "Speech Therapy | Nayesha Child Healthcare" },
      { name: "description", content: "Pediatric speech and language therapy services to support communication development." },
      { property: "og:title", content: "Speech Therapy Services | Nayesha" },
      { property: "og:description", content: "Expert speech therapy for language, articulation, and communication skills." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: () => (
    <ContentPage
      eyebrow="Communication support"
      title="Speech therapy for confident communication."
      intro="Our speech-language pathologists help children develop clear communication skills through evidence-based therapy tailored to each child's unique needs."
      image="/services/Speech therapy for confident communication..jpg"
      alt="Child engaged in speech therapy with therapist"
      highlights={[
        { title: "Language development", text: "Support for vocabulary, sentence building, and comprehension." },
        { title: "Clear articulation", text: "Help with speech clarity and sound production." },
        { title: "Functional communication", text: "Real-world skills for social interaction and connection." },
      ]}
      visuals={[
        "/services/Comprehensive speech evaluation.jpg",
        "/services/SPEECH THERAPY Targeted therapy sessions.jpg",
        "/services/speech therapy Family coaching and carryover.jpg"
      ]}
      sections={[
        {
          title: "Comprehensive speech evaluation",
          text: "We assess your child's speech, language, voice, and fluency to identify areas of strength and those that benefit from support. Our evaluation guides personalized treatment planning.",
          bullets: [
            "Speech and language screening",
            "Detailed articulation assessment",
            "Language comprehension and expression testing",
            "Voice and fluency evaluation when needed",
          ],
        },
        {
          title: "Targeted therapy sessions",
          text: "Using play-based and evidence-informed techniques, we make speech therapy engaging and effective. Sessions are designed to build confidence and real communication skills.",
          bullets: [
            "Play-based speech activities",
            "Structured language exercises",
            "Social communication coaching",
            "Transition support for school environments",
          ],
        },
        {
          title: "Family coaching and carryover",
          text: "Communication develops best when practiced across all settings. We provide strategies and activities you can use at home to extend your child's progress into everyday conversations.",
          bullets: [
            "Parent-child communication strategies",
            "Home activity recommendations",
            "School collaboration and consultation",
            "Progress updates and next steps",
          ],
        },
      ]}
    />
  ),
});
