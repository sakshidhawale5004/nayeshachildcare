import { Link, useRouterState } from "@tanstack/react-router";
import { Menu, Phone, X, ChevronDown } from "lucide-react";
import { useState } from "react";
import { NayeshaButton } from "./NayeshaButton";

const brandLogo = "/nayesha-logo.webp";

/** Links shown BEFORE the Services dropdown */
const beforeServiceLinks = [
  ["/", "Home"],
  ["/about", "About"],
] as const;

/** Links shown AFTER the Services dropdown */
const afterServiceLinks = [
  ["/doctors", "Doctors"],
  ["/vaccination", "Vaccination"],
  ["/growth-development", "Growth"],
  ["/diagnostics", "Diagnostics"],
  ["/resources", "Resources"],
  ["/stories", "Stories"],
  ["/contact", "Contact"],
] as const;

const allNavLinks = [...beforeServiceLinks, ...afterServiceLinks] as const;

const serviceLinks = [
  { path: "/autism-therapy",           label: "Autism Therapy",           desc: "Comprehensive ASD intervention" },
  { path: "/aba-therapy",              label: "ABA Therapy",              desc: "Applied behaviour analysis" },
  { path: "/speech-therapy",           label: "Speech Therapy",           desc: "Communication & language skills" },
  { path: "/occupational-therapy",     label: "Occupational Therapy",     desc: "Daily-living independence" },
  { path: "/psychological-counseling", label: "Psychological Counseling", desc: "Mental & emotional wellbeing" },
  { path: "/behavioral-therapy",       label: "Behavioral Therapy",       desc: "Positive behaviour support" },
  { path: "/dance-therapy",            label: "Dance Therapy",            desc: "Movement & sensory integration" },
  { path: "/special-education",        label: "Special Education",        desc: "Academic & life-skills learning" },
] as const;

export function SiteShell({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const pathname = useRouterState({ select: (state) => state.location.pathname });

  const isServiceActive = serviceLinks.some(({ path }) => pathname === path);

  return (
    <div className="min-h-screen overflow-x-clip bg-background text-foreground">
      <div className="emergency-strip">
        <span>Need urgent guidance?</span>
        <a href="tel:+912200000000"><Phone size={14} /> Call our care desk</a>
      </div>

      <header className="site-header">
        <Link to="/" className="logo-link" aria-label="Nayesha Healthcare home">
          <img src={brandLogo} alt="Nayesha Healthcare" />
        </Link>

        {/* ── Desktop nav ── */}
        <nav className="desktop-nav" aria-label="Main navigation">
          {/* Home + About */}
          {beforeServiceLinks.map(([to, label]) => (
            <Link key={to} to={to} className={pathname === to ? "nav-link active" : "nav-link"}>
              {label}
            </Link>
          ))}

          {/* Services dropdown — positioned right after About */}
          <div
            className="nav-dropdown"
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
          >
            <button className={`nav-link dropdown-toggle ${isServiceActive ? "active" : ""}`}>
              Services <ChevronDown size={14} className={`dropdown-chevron ${servicesOpen ? "open" : ""}`} />
            </button>

            <div className={`services-panel ${servicesOpen ? "services-panel--visible" : ""}`}>
              <div className="services-panel-inner">
                <p className="services-panel-heading">Our therapy services</p>
                <ul className="services-panel-grid">
                  {serviceLinks.map(({ path, label, desc }) => (
                    <li key={path}>
                      <Link
                        to={path}
                        className={`services-panel-item ${pathname === path ? "active" : ""}`}
                        onClick={() => setServicesOpen(false)}
                      >
                        <span className="spi-label">{label}</span>
                        <span className="spi-desc">{desc}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
                <div className="services-panel-footer">
                  <NayeshaButton to="/autism-therapy">Explore all therapy services</NayeshaButton>
                </div>
              </div>
            </div>
          </div>

          {/* Remaining links */}
          {afterServiceLinks.map(([to, label]) => (
            <Link key={to} to={to} className={pathname === to ? "nav-link active" : "nav-link"}>
              {label}
            </Link>
          ))}
        </nav>

        <NayeshaButton to="/contact">Book a visit</NayeshaButton>
        <button className="menu-button" aria-label={open ? "Close menu" : "Open menu"} onClick={() => setOpen(!open)}>
          {open ? <X /> : <Menu />}
        </button>
      </header>

      {/* ── Mobile nav ── */}
      {open && (
        <nav className="mobile-nav" aria-label="Mobile navigation">
          {allNavLinks.map(([to, label]) => (
            <Link key={to} to={to} onClick={() => setOpen(false)}>
              {label}
            </Link>
          ))}
          <div className="mobile-dropdown">
            <button className="dropdown-toggle" onClick={() => setServicesOpen(!servicesOpen)}>
              Services <ChevronDown size={16} />
            </button>
            {servicesOpen && (
              <div className="mobile-dropdown-menu">
                {serviceLinks.map(({ path, label }) => (
                  <Link
                    key={path}
                    to={path}
                    onClick={() => { setOpen(false); setServicesOpen(false); }}
                    className="dropdown-item"
                  >
                    {label}
                  </Link>
                ))}
              </div>
            )}
          </div>
        </nav>
      )}

      <main>{children}</main>

      <footer className="site-footer">
        <div className="footer-lead">
          <img src={brandLogo} alt="Nayesha Healthcare" />
          <p>Thoughtful pediatric care for every chapter of childhood.</p>
          <div className="footer-contact">
            <a href="tel:+912200000000">+91 22 0000 0000</a>
            <a href="mailto:care@nayeshahealthcare.com">care@nayeshahealthcare.com</a>
            <span>Mon–Sat · 8:00 – 20:00</span>
          </div>
        </div>

        <div>
          <strong>Explore</strong>
          {afterServiceLinks.slice(0, 5).map(([to, label]) => <Link key={to} to={to}>{label}</Link>)}
        </div>

        <div>
          <strong>Therapy services</strong>
          {serviceLinks.map(({ path, label }) => <Link key={path} to={path}>{label}</Link>)}
        </div>

        <div>
          <strong>Quick links</strong>
          {afterServiceLinks.slice(5).map(([to, label]) => <Link key={to} to={to}>{label}</Link>)}
          <Link to="/about">About us</Link>
          <Link to="/doctors">Our doctors</Link>
        </div>

        <p className="footer-note">
          © 2026 Nayesha Healthcare. Information is educational and does not replace medical advice.
        </p>
      </footer>
    </div>
  );
}