import { createFileRoute } from "@tanstack/react-router";
import { ContentPage, images } from "@/components/PageBlocks";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Nayesha | Child-First Healthcare" },
      { name: "description", content: "Discover Nayesha Healthcare's child-first philosophy, clinical standards and family-centered approach." },
      { property: "og:title", content: "About Nayesha Healthcare" },
      { property: "og:description", content: "Pediatric expertise shaped around children and the people who care for them." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: () => (
    <>
      <ContentPage
        eyebrow="Our philosophy"
        title="Care built around childhood."
        intro="Nayesha brings clinical rigor and genuine warmth together, creating an environment where children are heard and families can make informed decisions."
        image={images.aboutCareBuiltImage}
        alt="A bright, child-friendly Nayesha clinic"
        highlights={[
          { title: "Child-led visits", text: "We adapt the pace and language of care to each child." },
          { title: "Family partnership", text: "Care plans are explained, practical and made together." },
          { title: "Connected thinking", text: "We look beyond symptoms to the whole child." },
        ]}
        visuals={[images.aboutGentlerCareImage, images.aboutStandardsTrustImage, images.aboutPlaceDesignedImage]}
        sections={[
          {
            title: "A gentler care experience",
            text: "A clinic can feel unfamiliar to a child. We design every interaction—from arrival to examination—to build predictability and trust.",
            bullets: ["Explain before we examine", "Invite age-appropriate choices", "Make space for comfort and play"],
          },
          {
            title: "Standards families can trust",
            text: "Our approach combines careful clinical evaluation, responsible guidance and clear follow-up so parents always understand the next step.",
            bullets: ["Evidence-informed decisions", "Age-appropriate screening", "Coordinated referrals when needed"],
          },
          {
            title: "A place designed for children",
            text: "Light, calm interiors and welcoming play zones support children without compromising professional care.",
            bullets: ["Calm sensory environment", "Family-friendly consultation rooms", "Thoughtful accessibility"],
          },
        ]}
      />
      <section className="therapy-intro section-wrap reveal reveal-delay-1">
        <div className="therapy-content">
          <h2>Specialized Therapy Services</h2>
          <p>Beyond primary pediatric care, Nayesha offers comprehensive therapy services to support children's development and wellbeing:</p>
          <div className="therapy-grid">
            <div className="therapy-card">
              <h3>Autism Therapy</h3>
              <p>Comprehensive assessment and evidence-based therapeutic support for children on the autism spectrum.</p>
              <a href="/autism-therapy" className="text-link">Learn more ↗</a>
            </div>
            <div className="therapy-card">
              <h3>Speech Therapy</h3>
              <p>Speech and language development support for clear, confident communication.</p>
              <a href="/speech-therapy" className="text-link">Learn more ↗</a>
            </div>
            <div className="therapy-card">
              <h3>Occupational Therapy</h3>
              <p>Skill development for daily living, motor coordination, and independence.</p>
              <a href="/occupational-therapy" className="text-link">Learn more ↗</a>
            </div>
            <div className="therapy-card">
              <h3>ABA Therapy</h3>
              <p>Applied Behavior Analysis using positive reinforcement for skill building.</p>
              <a href="/aba-therapy" className="text-link">Learn more ↗</a>
            </div>
            <div className="therapy-card">
              <h3>Behavioral Therapy</h3>
              <p>Emotional regulation and positive behavior support for healthy development.</p>
              <a href="/behavioral-therapy" className="text-link">Learn more ↗</a>
            </div>
            <div className="therapy-card">
              <h3>Psychological Counseling</h3>
              <p>Compassionate counseling for emotional wellbeing and resilience.</p>
              <a href="/psychological-counseling" className="text-link">Learn more ↗</a>
            </div>
            <div className="therapy-card">
              <h3>Dance Therapy</h3>
              <p>Movement and expression for holistic physical and emotional development.</p>
              <a href="/dance-therapy" className="text-link">Learn more ↗</a>
            </div>
            <div className="therapy-card">
              <h3>Special Education</h3>
              <p>Personalized learning support for children with diverse learning needs.</p>
              <a href="/special-education" className="text-link">Learn more ↗</a>
            </div>
          </div>
        </div>
      </section>
    </>
  ),
});
