import { Activity, Baby, Brain, HeartPulse, Microscope, ShieldCheck, Sparkles, Stethoscope, Syringe, Users } from "lucide-react";
import heroImage from "@/assets/nayesha-hero.jpg";
import childrenImage from "@/assets/children-play.jpg";
import doctorImage from "@/assets/doctor-portrait.jpg";
import checkupImage from "@/assets/checkup-family.jpg";
import clinicImage from "@/assets/clinic-interior.jpg";
import lifestyleImage from "@/assets/mother-child.jpg";
import diagnosticsHeroImage from "@/assets/diagnostics-hero.jpg";
import diagnosticsBeforeAssessmentImage from "@/assets/diagnostics-before-assessment.jpg";
import diagnosticsDuringVisitImage from "@/assets/diagnostics-during-visit.jpg";
import diagnosticsResultsImage from "@/assets/diagnostics-results.jpg";
import resourcesHeroImage from "@/assets/resources-hero.jpg";
import resourcesFeverIllnessImage from "@/assets/resources-fever-illness.jpg";
import resourcesFoodSleepImage from "@/assets/resources-food-sleep.jpg";
import resourcesClinicVisitImage from "@/assets/resources-clinic-visit.jpg";
import storiesHeroImage from "@/assets/stories-hero.jpg";
import storiesRoutineImage from "@/assets/stories-routine.jpg";
import storiesFirstVisitImage from "@/assets/stories-first-visit.jpg";
import storiesConnectImage from "@/assets/stories-connect.jpg";
import { NayeshaButton } from "./NayeshaButton";
import { CareScene } from "./CareScene";

export const images = {
  heroImage,
  childrenImage,
  doctorImage,
  checkupImage,
  clinicImage,
  lifestyleImage,
  diagnosticsHeroImage,
  diagnosticsBeforeAssessmentImage,
  diagnosticsDuringVisitImage,
  diagnosticsResultsImage,
  resourcesHeroImage,
  resourcesFeverIllnessImage,
  resourcesFoodSleepImage,
  resourcesClinicVisitImage,
  storiesHeroImage,
  storiesRoutineImage,
  storiesFirstVisitImage,
  storiesConnectImage,
};
export const icons = { Activity, Baby, Brain, HeartPulse, Microscope, ShieldCheck, Sparkles, Stethoscope, Syringe, Users };

export function Eyebrow({ children }: { children: React.ReactNode }) { return <p className="eyebrow"><span />{children}</p>; }

export function HomePage() {
  const services = [
    { icon: Baby, title: "Newborn & infant care", text: "Feeding, growth, sleep and newborn follow-ups with calm, practical guidance." },
    { icon: Syringe, title: "Vaccination planning", text: "Clear, age-appropriate immunization support with time for every parent question." },
    { icon: Brain, title: "Growth & development", text: "Developmental screening and support built around each child’s individual pace." },
    { icon: HeartPulse, title: "Acute & ongoing care", text: "Thoughtful assessment for everyday illness and coordinated care for longer needs." },
  ];
  return <>
    <section className="home-hero">
      <img className="hero-photo" src={heroImage} alt="Pediatrician speaking with a mother and daughter in a bright clinic" width={1920} height={1152} />
      <div className="hero-wash" />
      <div className="hero-copy">
        <Eyebrow>Child healthcare, thoughtfully human</Eyebrow>
        <h1>Bright beginnings.<br /><em>Healthier tomorrows.</em></h1>
        <p>Expert pediatric care with the time, clarity and compassion every family deserves.</p>
        <div className="button-row"><NayeshaButton to="/contact">Book an appointment</NayeshaButton><NayeshaButton to="/specialties" tone="outline">Explore our care</NayeshaButton></div>
        <div className="hero-trust"><span><b>0–18</b> years cared for</span><span><b>Whole-child</b> approach</span><span><b>Family-first</b> visits</span></div>
      </div>
      <div className="hero-3d"><CareScene /></div>
    </section>
    <section className="service-band section-wrap">
      <div className="section-heading"><div><Eyebrow>Care that grows with them</Eyebrow><h2>One trusted place for<br />every little milestone.</h2></div><p>From the first newborn visit through adolescence, our team brings evidence-informed care and a reassuring human touch.</p></div>
      <div className="service-grid">{services.map(({ icon: Icon, title, text }, i) => <article className="service-card" key={title}><span className="service-number">0{i + 1}</span><Icon /><h3>{title}</h3><p>{text}</p><LinkArrow to="/specialties" /></article>)}</div>
    </section>
    <section className="story-split section-wrap">
      <div className="image-stage"><img src={childrenImage} alt="Children building with colorful wooden blocks" loading="lazy" width={1408} height={1056} /><span className="image-note">Care designed around curiosity</span></div>
      <div className="story-copy"><Eyebrow>More than a check-up</Eyebrow><h2>Children feel the difference when care feels like play.</h2><p>Our spaces, conversations and examinations are shaped around how children experience the world. We explain before we examine, make room for questions, and help young patients feel involved.</p><ul className="check-list"><li>Unhurried, child-led consultations</li><li>Clear guidance for parents and caregivers</li><li>Coordinated support across specialties</li></ul><NayeshaButton to="/about">Our approach</NayeshaButton></div>
    </section>
    <section className="doctor-feature">
      <div className="doctor-inner section-wrap"><div><Eyebrow>Meet your care team</Eyebrow><h2>Clinical expertise.<br /><em>Genuinely warm care.</em></h2><p>Our pediatric specialists combine careful listening, collaborative decisions and clear follow-through.</p><NayeshaButton to="/doctors" tone="light">Meet the team</NayeshaButton></div><img src={doctorImage} alt="A warm and experienced pediatrician" loading="lazy" width={1200} height={1408} /></div>
    </section>
    <section className="journey section-wrap"><Eyebrow>Your visit, made easier</Eyebrow><h2>Know what comes next.</h2><div className="journey-grid">{["Tell us what you need", "Meet your pediatrician", "Leave with a clear plan"].map((x,i)=><div key={x}><b>0{i+1}</b><h3>{x}</h3><p>{["Choose a visit and share the concerns you want us to understand.","We listen, examine gently and explain what we see in everyday language.","You receive practical next steps and coordinated follow-up when needed."][i]}</p></div>)}</div></section>
    <section className="quote-section section-wrap"><img src={lifestyleImage} alt="Mother and young son walking together in a park" loading="lazy" width={1408} height={1056} /><blockquote>“The best pediatric care doesn’t only treat a symptom. It helps a family feel informed, capable and supported.”<cite>Nayesha care philosophy</cite></blockquote></section>
    <Callout />
  </>;
}

export function LinkArrow({ to }: { to: "/specialties" }) { return <a href={to} className="text-link">Learn more <span>↗</span></a>; }

export function PageHero({ eyebrow, title, intro, image, alt }: { eyebrow: string; title: string; intro: string; image: string; alt: string }) {
  return <section className="page-hero section-wrap"><div><Eyebrow>{eyebrow}</Eyebrow><h1>{title}</h1><p>{intro}</p><NayeshaButton to="/contact">Talk to our care team</NayeshaButton></div><div className="page-hero-image"><img src={image} alt={alt} width={1408} height={1056} /></div></section>;
}

export function ContentPage({ eyebrow, title, intro, image, alt, highlights, sections, visuals }: { eyebrow:string; title:string; intro:string; image:string; alt:string; highlights:{title:string;text:string}[]; sections:{title:string;text:string;bullets:string[]}[]; visuals?: string[] }) {
  return <><PageHero {...{eyebrow,title,intro,image,alt}} /><section className="highlight-strip section-wrap">{highlights.map((x,i)=><div key={x.title}><b>0{i+1}</b><h3>{x.title}</h3><p>{x.text}</p></div>)}</section><section className="detail-stack section-wrap">{sections.map((s,i)=><article key={s.title} className={i%2 ? "detail-row reverse":"detail-row"}><div className="detail-visual"><img src={visuals?.[i] ?? [childrenImage,checkupImage,clinicImage,lifestyleImage][i%4]} alt="Nayesha pediatric care experience" loading="lazy" width={1408} height={1056} /></div><div><Eyebrow>{String(i+1).padStart(2,"0")} · Care detail</Eyebrow><h2>{s.title}</h2><p>{s.text}</p><ul className="check-list">{s.bullets.map(b=><li key={b}>{b}</li>)}</ul></div></article>)}</section><Callout /></>;
}

export function Callout() { return <section className="callout"><div><Eyebrow>Here when you need us</Eyebrow><h2>Let’s make their next visit a positive one.</h2></div><NayeshaButton to="/contact" tone="light">Request an appointment</NayeshaButton></section>; }