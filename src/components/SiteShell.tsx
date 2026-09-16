import { Link, useRouterState } from "@tanstack/react-router";
import { Menu, Phone, X } from "lucide-react";
import { useState } from "react";
import { NayeshaButton } from "./NayeshaButton";

const brandLogo = "/Trust%20%26%20Legacy%20Focus.webp";

const links = [
  ["/", "Home"], ["/about", "About"], ["/specialties", "Specialties"], ["/doctors", "Doctors"],
  ["/vaccination", "Vaccination"], ["/growth-development", "Growth"], ["/diagnostics", "Diagnostics"],
  ["/resources", "Resources"], ["/stories", "Stories"], ["/contact", "Contact"],
] as const;

export function SiteShell({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false);
  const pathname = useRouterState({ select: (state) => state.location.pathname });
  return (
    <div className="min-h-screen overflow-x-clip bg-background text-foreground">
      <div className="emergency-strip"><span>Need urgent guidance?</span><a href="tel:+912200000000"><Phone size={14} /> Call our care desk</a></div>
      <header className="site-header">
        <Link to="/" className="logo-link" aria-label="Nayesha Healthcare home"><img src={brandLogo} alt="Nayesha Healthcare" /></Link>
        <nav className="desktop-nav" aria-label="Main navigation">
          {links.slice(0, 9).map(([to, label]) => <Link key={to} to={to} className={pathname === to ? "nav-link active" : "nav-link"}>{label}</Link>)}
        </nav>
        <NayeshaButton to="/contact">Book a visit</NayeshaButton>
        <button className="menu-button" aria-label={open ? "Close menu" : "Open menu"} onClick={() => setOpen(!open)}>{open ? <X /> : <Menu />}</button>
      </header>
      {open && <nav className="mobile-nav" aria-label="Mobile navigation">{links.map(([to, label]) => <Link key={to} to={to} onClick={() => setOpen(false)}>{label}</Link>)}</nav>}
      <main>{children}</main>
      <footer className="site-footer">
        <div className="footer-lead"><img src={brandLogo} alt="Nayesha Healthcare" /><p>Thoughtful pediatric care for every chapter of childhood.</p></div>
        <div><strong>Explore care</strong>{links.slice(2, 7).map(([to, label]) => <Link key={to} to={to}>{label}</Link>)}</div>
        <div><strong>For families</strong>{links.slice(7).map(([to, label]) => <Link key={to} to={to}>{label}</Link>)}</div>
        <div><strong>Care desk</strong><a href="tel:+912200000000">+91 22 0000 0000</a><a href="mailto:care@nayeshahealthcare.com">care@nayeshahealthcare.com</a><span>Mon–Sat · 8:00–20:00</span></div>
        <p className="footer-note">© 2026 Nayesha Healthcare. Information is educational and does not replace medical advice.</p>
      </footer>
    </div>
  );
}