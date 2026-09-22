import { Activity, Baby, Brain, BookOpen, HeartPulse, Microscope, Music, ShieldCheck, Sparkles, Stethoscope, Syringe, Users, ArrowRight } from "lucide-react";
import heroImage from "@/assets/nayesha-hero.jpg";
import childrenImage from "@/assets/children-play.jpg";
import doctorImage from "@/assets/doctor-portrait.jpg";
import checkupImage from "@/assets/checkup-family.jpg";
import clinicImage from "@/assets/clinic-interior.jpg";
import lifestyleImage from "@/assets/mother-child.jpg";
import homeStoryPlayImage from "@/assets/home-story-play.jpg";
import homeCarePhilosophyImage from "@/assets/home-care-philosophy.jpg";
import aboutGentlerCareImage from "@/assets/about-gentler-care.jpg";
import aboutPlaceDesignedImage from "@/assets/about-place-designed.jpg";
import aboutCareBuiltImage from "@/assets/about-care-built.jpg";
import aboutStandardsTrustImage from "@/assets/about-standards-trust.jpg";
import specialtiesHeroImage from "@/assets/specialties-hero.jpg";
import specialtiesNewbornsImage from "@/assets/specialties-newborns.jpg";
import specialtiesSchoolAgeImage from "@/assets/specialties-school-age.jpg";
import specialtiesAdolescentImage from "@/assets/specialties-adolescent.jpg";
import doctorsGeneralCareImage from "@/assets/doctors-general-care.jpg";
import doctorsSpecialistCollaborationImage from "@/assets/doctors-specialist-collaboration.jpg";
import doctorsCommunicationImage from "@/assets/doctors-communication.jpg";
import doctorsExpertiseComfortImage from "@/assets/doctors-expertise-comfort.jpg";
import vaccinationPlanImage from "@/assets/vaccination-plan.jpg";
import vaccinationVisitImage from "@/assets/vaccination-visit.jpg";
import vaccinationAftercareImage from "@/assets/vaccination-aftercare.jpg";
import vaccinationProtectionClarityImage from "@/assets/vaccination-protection-clarity.jpg";
import growthHeroImage from "@/assets/growth-hero.jpg";
import growthMilestonesImage from "@/assets/growth-milestones.jpg";
import growthNutritionRoutinesImage from "@/assets/growth-nutrition-routines.jpg";
import growthSleepWellbeingImage from "@/assets/growth-sleep-wellbeing.jpg";
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

const homeChildrenDifferenceImage = "/New folder/Children feel the difference when care feels like play..jpg";

export const images = {
  heroImage,
  childrenImage,
  doctorImage,
  checkupImage,
  clinicImage,
  lifestyleImage,
  homeStoryPlayImage,
  homeCarePhilosophyImage,
  aboutGentlerCareImage,
  aboutPlaceDesignedImage,
  aboutCareBuiltImage,
  aboutStandardsTrustImage,
  specialtiesHeroImage,
  specialtiesNewbornsImage,
  specialtiesSchoolAgeImage,
  specialtiesAdolescentImage,
  doctorsGeneralCareImage,
  doctorsSpecialistCollaborationImage,
  doctorsCommunicationImage,
  doctorsExpertiseComfortImage,
  vaccinationPlanImage,
  vaccinationVisitImage,
  vaccinationAftercareImage,
  vaccinationProtectionClarityImage,
  growthHeroImage,
  growthMilestonesImage,
  growthNutritionRoutinesImage,
  growthSleepWellbeingImage,
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

export function Eyebrow({ children }: { children: React.ReactNode }) {
  return <p className="eyebrow"><span />{children}</p>;
}

/* ─── Therapy service tab bar (Pinnacle-style bottom strip) ─── */
const therapyTabs = [
  { icon: Brain,     label: "Autism Therapy",           href: "/autism-therapy" },
  { icon: Activity,  label: "Occupational Therapy",     href: "/occupational-therapy" },
  { icon: Sparkles,  label: "Speech Therapy",           href: "/speech-therapy" },
  { icon: HeartPulse,label: "Psychological Counseling", href: "/psychological-counseling" },
  { icon: BookOpen,  label: "Special Education",        href: "/special-education" },
  { icon: ShieldCheck,label:"Behavioral Therapy",       href: "/behavioral-therapy" },
];

/* ─── Stats data ─── */
const stats = [
  { value: "10 +",    label: "Years of service" },
  { value: "5,000 +", label: "Children empowered" },
  { value: "30 +",    label: "Certified therapists" },
];

/* ─── Therapy service cards ─── */
const therapyCards = [
  { icon: Brain,      title: "Autism Therapy",           text: "Comprehensive ASD assessment & evidence-based therapy supporting your child's unique strengths.",           link: "/autism-therapy" },
  { icon: Sparkles,   title: "Speech Therapy",           text: "Pediatric speech & language therapy for clear, confident communication at every age.",                     link: "/speech-therapy" },
  { icon: Activity,   title: "Occupational Therapy",     text: "Skill development for daily living, motor coordination, and sensory processing independence.",              link: "/occupational-therapy" },
  { icon: Users,      title: "ABA Therapy",              text: "Applied Behavior Analysis using positive reinforcement to build meaningful life skills.",                   link: "/aba-therapy" },
  { icon: ShieldCheck,title: "Behavioral Therapy",       text: "Emotional regulation and positive behavior support for healthy, confident development.",                    link: "/behavioral-therapy" },
  { icon: Microscope, title: "Psychological Counseling", text: "Compassionate, evidence-based counseling for emotional wellbeing and resilience.",                          link: "/psychological-counseling" },
  { icon: Music,      title: "Dance Therapy",            text: "Movement-based therapy that integrates sensory, motor and emotional development through dance.",            link: "/dance-therapy" },
  { icon: BookOpen,   title: "Special Education",        text: "Individualized academic & life-skills programs designed around each child's learning profile.",             link: "/special-education" },
];

export function HomePage() {
  return (
    <>
      {/* ── HERO (Pinnacle Blooms style: full-viewport, bold overlay text) ── */}
      <section className="pb-hero reveal">
        <img
          className="pb-hero-bg"
          src={heroImage}
          alt="Nayesha child healthcare"
          width={1920}
          height={1152}
          fetchPriority="high"
          decoding="async"
        />
        <div className="pb-hero-overlay" />
        <div className="pb-hero-content section-wrap">
          <p className="pb-hero-eyebrow">Child healthcare, thoughtfully human</p>
          <h1 className="pb-hero-title">
            Empowering children to be<br />
            <em>self-sufficient</em>
          </h1>
          <p className="pb-hero-sub">
            Expert pediatric therapy &amp; care with the time, clarity and compassion every family deserves.
          </p>
          <div className="pb-hero-actions">
            <NayeshaButton to="/contact">Book an appointment</NayeshaButton>
            <NayeshaButton to="/autism-therapy" tone="outline">Explore therapy services</NayeshaButton>
          </div>
          <div className="pb-hero-trust">
            <span><b>0–18</b> years cared for</span>
            <span><b>Whole-child</b> approach</span>
            <span><b>Family-first</b> visits</span>
          </div>
        </div>
        <div className="pb-hero-scene">
          <CareScene />
        </div>
      </section>

      {/* ── THERAPY SERVICE TAB BAR (Pinnacle Blooms bottom bar strip) ── */}
      <nav className="service-tab-bar" aria-label="Therapy services">
        {therapyTabs.map(({ icon: Icon, label, href }) => (
          <a key={href} href={href} className="service-tab">
            <Icon size={22} />
            <span>{label}</span>
          </a>
        ))}
      </nav>

      {/* ── STATS STRIP ── */}
      <section className="stats-strip section-wrap reveal reveal-delay-1">
        {stats.map(({ value, label }) => (
          <div key={label} className="stat-item">
            <b>{value}</b>
            <span>{label}</span>
          </div>
        ))}
      </section>

      {/* ── THERAPY SERVICES GRID ── */}
      <section className="service-band section-wrap reveal reveal-delay-1">
        <div className="section-heading">
          <div>
            <Eyebrow>Specialized therapy services</Eyebrow>
            <h2>Comprehensive support for every child's journey.</h2>
          </div>
          <p>
            When children need specialized therapy support, our certified therapists provide evidence-based
            services tailored to each child's unique needs and strengths.
          </p>
        </div>
        <div className="service-grid">
          {therapyCards.map(({ icon: Icon, title, text, link }, i) => (
            <article
              className={`service-card reveal reveal-delay-${Math.min(i + 1, 4)}`}
              key={title}
            >
              <span className="service-number">0{i + 1}</span>
              <Icon />
              <h3>{title}</h3>
              <p>{text}</p>
              <a href={link} className="text-link">
                Learn more <span><ArrowRight size={14} /></span>
              </a>
            </article>
          ))}
        </div>
      </section>

      {/* ── WHY NAYESHA STORY SPLIT ── */}
      <section className="story-split section-wrap reveal reveal-delay-1">
        <div className="image-stage">
          <img
            src={homeChildrenDifferenceImage}
            alt="Child receiving gentle care from a parent"
            loading="lazy"
            decoding="async"
            width={1408}
            height={1056}
          />
          <span className="image-note">Care designed around curiosity</span>
        </div>
        <div className="story-copy">
          <Eyebrow>Why Nayesha?</Eyebrow>
          <h2>Children feel the difference when care feels like play.</h2>
          <p>
            Our spaces, conversations and examinations are shaped around how children experience the world.
            We explain before we examine, make room for questions, and help young patients feel involved
            every step of the way.
          </p>
          <ul className="check-list">
            <li>Unhurried, child-led consultations</li>
            <li>Clear guidance for parents and caregivers</li>
            <li>Coordinated support across all therapies</li>
          </ul>
          <NayeshaButton to="/about">Our approach</NayeshaButton>
        </div>
      </section>

      {/* ── DOCTOR FEATURE ── */}
      <section className="doctor-feature reveal reveal-delay-1">
        <div className="doctor-inner section-wrap">
          <div>
            <Eyebrow>Meet your care team</Eyebrow>
            <h2>Clinical expertise.<br /><em>Genuinely warm care.</em></h2>
            <p>
              Our pediatric specialists combine careful listening, collaborative decisions and
              clear follow-through — so your family always knows what comes next.
            </p>
            <NayeshaButton to="/doctors" tone="light">Meet the team</NayeshaButton>
          </div>
          <img
            src={doctorImage}
            alt="A warm and experienced pediatrician"
            loading="lazy"
            decoding="async"
            width={1200}
            height={1408}
          />
        </div>
      </section>

      {/* ── HOW IT WORKS ── */}
      <section className="journey section-wrap reveal reveal-delay-1">
        <Eyebrow>Your visit, made easier</Eyebrow>
        <h2>Know what comes next.</h2>
        <div className="journey-grid">
          {[
            { step: "Tell us what you need",    desc: "Choose a visit and share the concerns you want us to understand." },
            { step: "Meet your pediatrician",   desc: "We listen, examine gently and explain what we see in everyday language." },
            { step: "Leave with a clear plan",  desc: "You receive practical next steps and coordinated follow-up when needed." },
          ].map(({ step, desc }, i) => (
            <div className={`reveal reveal-delay-${Math.min(i + 1, 4)}`} key={step}>
              <b>0{i + 1}</b>
              <h3>{step}</h3>
              <p>{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── QUOTE ── */}
      <section className="quote-section section-wrap reveal reveal-delay-1">
        <img
          src={lifestyleImage}
          alt="Mother and young son walking together in a park"
          loading="lazy"
          decoding="async"
          width={1408}
          height={1056}
        />
        <blockquote>
          "The best pediatric care doesn't only treat a symptom. It helps a family feel informed, capable and supported."
          <cite>Nayesha care philosophy</cite>
        </blockquote>
      </section>

      <Callout />
    </>
  );
}

export function LinkArrow({ to }: { to: string }) {
  return <a href={to} className="text-link">Learn more <span>↗</span></a>;
}

export function PageHero({ eyebrow, title, intro, image, alt }: { eyebrow: string; title: string; intro: string; image: string; alt: string }) {
  return (
    <section className="page-hero section-wrap reveal">
      <div className="reveal-delay-1">
        <Eyebrow>{eyebrow}</Eyebrow>
        <h1>{title}</h1>
        <p>{intro}</p>
        <NayeshaButton to="/contact">Talk to our care team</NayeshaButton>
      </div>
      <div className="page-hero-visual reveal-delay-2">
        <div className="page-hero-image">
          <img src={image} alt={alt} loading="eager" fetchPriority="high" decoding="async" width={1408} height={1056} />
        </div>
        <div className="page-hero-3d"><CareScene /></div>
      </div>
    </section>
  );
}

export function ContentPage({ eyebrow, title, intro, image, alt, highlights, sections, visuals }: { eyebrow:string; title:string; intro:string; image:string; alt:string; highlights:{title:string;text:string}[]; sections:{title:string;text:string;bullets:string[]}[]; visuals?: string[] }) {
  return (
    <>
      <PageHero {...{eyebrow,title,intro,image,alt}} />
      <section className="highlight-strip section-wrap reveal">
        {highlights.map((x,i) => (
          <div className={`reveal reveal-delay-${Math.min(i + 1, 4)}`} key={x.title}>
            <b>0{i+1}</b><h3>{x.title}</h3><p>{x.text}</p>
          </div>
        ))}
      </section>
      <section className="detail-stack section-wrap">
        {sections.map((s,i) => (
          <article key={s.title} className={i%2 ? "detail-row reverse reveal reveal-delay-1":"detail-row reveal reveal-delay-1"}>
            <div className="detail-visual reveal-delay-2">
              <img src={visuals?.[i] ?? [childrenImage,checkupImage,clinicImage,lifestyleImage][i%4]} alt="Nayesha pediatric care experience" loading="lazy" decoding="async" width={1408} height={1056} />
            </div>
            <div className="reveal-delay-3">
              <Eyebrow>{String(i+1).padStart(2,"0")} · Care detail</Eyebrow>
              <h2>{s.title}</h2>
              <p>{s.text}</p>
              <ul className="check-list">{s.bullets.map(b => <li key={b}>{b}</li>)}</ul>
            </div>
          </article>
        ))}
      </section>
      <Callout />
    </>
  );
}

export function Callout() {
  return (
    <section className="callout reveal reveal-delay-1">
      <div className="floating-dots" aria-hidden="true">
        <div className="dot" style={{ left: '10%', animationDelay: '0s',  width: '20px', height: '20px' }} />
        <div className="dot" style={{ left: '25%', animationDelay: '2s',  width: '12px', height: '12px' }} />
        <div className="dot" style={{ left: '45%', animationDelay: '4s',  width: '24px', height: '24px' }} />
        <div className="dot" style={{ left: '65%', animationDelay: '1s',  width: '16px', height: '16px' }} />
        <div className="dot" style={{ left: '85%', animationDelay: '3s',  width: '28px', height: '28px' }} />
      </div>
      <div className="callout-content">
        <Eyebrow>Here when you need us</Eyebrow>
        <h2>Let's make their next visit a positive one.</h2>
      </div>
      <div className="callout-action">
        <NayeshaButton to="/contact" tone="light">Request an appointment</NayeshaButton>
      </div>
    </section>
  );
}
