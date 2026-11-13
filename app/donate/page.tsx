import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Support the Research — AZ Emergent Nexus",
  description:
    "Support independent, open-science research at Axiom Zeta Innovations. Tiered monthly contributions and one-time gifts fund compute, quantum-hardware access, laboratory time, and free public experiments. All code is open source under the AGPL-3.0.",
};

// Stripe payment links are filled in when the donation products are created.
const LINKS = {
  friend: "https://buy.stripe.com/4gM00l2Sc1gzf6S2OJ18c0u",
  patron: "https://buy.stripe.com/5kQ5kF3WgcZhaQCahb18c0v",
  sponsor: "https://buy.stripe.com/14A8wR1O8cZh8Iu2OJ18c0w",
  oneTime: "https://buy.stripe.com/bJe8wR50kaR9gaW0GB18c0x",
};

const tiers = [
  {
    index: "01",
    title: "Friend — $5/mo",
    description:
      "Keep the lights on. Covers hosting and domain costs for the public experiments, so the labs stay up and free for everyone.",
    href: LINKS.friend,
    cta: "Give $5/mo",
  },
  {
    index: "02",
    title: "Patron — $25/mo",
    description:
      "Fuel the experiments. Funds compute and time on real quantum hardware — the runs behind the published results.",
    href: LINKS.patron,
    cta: "Give $25/mo",
  },
  {
    index: "03",
    title: "Sponsor — $100/mo",
    description:
      "Underwrite a line of research. Funds laboratory time and materials; with your permission, your name appears as a sponsor on the program's page.",
    href: LINKS.sponsor,
    cta: "Give $100/mo",
  },
  {
    index: "04",
    title: "One-time gift",
    description:
      "Any amount, once. No recurring charge — a single contribution to the same open work.",
    href: LINKS.oneTime,
    cta: "Make a gift",
  },
];

export default function DonatePage() {
  return (
    <div className="site-shell">
      <nav className="site-nav">
        <Link className="brand" href="/" aria-label="AZ Emergent Nexus home">
          <span className="brand-mark"><span>+</span></span>
          <span className="brand-name">AZ Emergent Nexus</span>
        </Link>
        <div className="nav-meta">
          <span className="nav-status">Systems online</span>
        </div>
      </nav>

      <main>
        <section className="hero">
          <div className="hero-copy">
            <p className="kicker">AZ Emergent Nexus / Support open science</p>
            <h1>Keep the nexus<br /><span className="hero-highlight">open to everyone.</span></h1>
            <p className="hero-lede">
              Everything in the Nexus is built by Axiom Zeta Innovations, an independent
              open-science research organization. The systems are free and the source is
              public under the AGPL-3.0 — for anyone, regardless of what&apos;s in their
              bank account. That only works if the people who value it help carry it.
            </p>
          </div>
          <div className="hero-actions">
            <a className="primary-link" href="#tiers">Choose a level</a>
            <a className="secondary-link" href="https://axiomzetainnovations.com/donate.html" rel="noreferrer" target="_blank">Donate via the main site</a>
          </div>
        </section>

        <section className="section" id="tiers">
          <div className="section-heading">
            <div>
              <span className="section-label">Support / giving tiers</span>
              <h2 className="section-title">Choose your level.</h2>
            </div>
            <p className="section-note">Monthly support can be cancelled anytime. Every level funds the same open work.</p>
          </div>
          <div className="crypto-app-grid" aria-label="Donation tiers">
            {tiers.map((tier) => (
              <article className="crypto-app" key={tier.index}>
                <span className="product-index">Tier / {tier.index}</span>
                <h3>{tier.title}</h3>
                <p>{tier.description}</p>
                <p style={{ marginTop: 16 }}>
                  <a className="primary-link" href={tier.href} rel="noreferrer" target="_blank">{tier.cta}</a>
                </p>
              </article>
            ))}
          </div>
        </section>

        <section className="section" id="terms">
          <div className="section-heading">
            <div>
              <span className="section-label">Support / honest terms</span>
              <h2 className="section-title">The deal, stated plainly.</h2>
            </div>
          </div>
          <p className="section-note" style={{ maxWidth: 720 }}>
            Payments are processed securely by Stripe. Axiom Zeta Innovations LLC is a
            Texas company, not a 501(c)(3) nonprofit — contributions support the research
            directly and are not tax-deductible charitable donations. In return we publish
            the research, the code, and the results — including the negative ones.
            Contributions pay for compute time, quantum-hardware access, laboratory
            instruments and materials, and the hosting that keeps every experiment free.
          </p>
          <div className="hero-actions" style={{ marginTop: 32 }}>
            <Link className="secondary-link" href="/quadra-seer">Quadra-Seer Sovereign — free</Link>
            <a className="secondary-link" href="https://github.com/axiomzeta" rel="noreferrer" target="_blank">The code on GitHub</a>
          </div>
        </section>
      </main>

      <footer className="site-footer">AZ Emergent Nexus / Open science, in the open — all code AGPL-3.0</footer>
    </div>
  );
}
