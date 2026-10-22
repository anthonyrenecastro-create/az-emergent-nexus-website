import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Quadra-Seer Sovereign — your AI, on your machine",
  description:
    "Quadra-Seer Sovereign is a private, local-first AI system with persistent memory. $77.99 once — yours forever. No cloud required, no data leaves your device.",
};

const supportEmail = "anthony.castro@axiomzetainnovations.com";

const sovereignUrl = "https://quadra-seer-equalibra-sovereign-stu.vercel.app/";

const included = [
  {
    index: "01",
    title: "Quadra-Seer Sovereign application",
    description:
      "The full local-first AI system: chat, persistent memory, semantic search, automation console, and voice — in one Docker Compose stack.",
  },
  {
    index: "02",
    title: "Self-contained system",
    description:
      "Everything runs on your own hardware — no cloud services, no external dependencies, no telemetry.",
  },
  {
    index: "03",
    title: "Guided setup",
    description:
      "Installers for Mac, Windows, and Linux, plus a step-by-step runbook. One command brings the whole stack up on your machine.",
  },
  {
    index: "04",
    title: "Ongoing updates",
    description:
      "Improvements ship as updates. Your perpetual license covers this version — pay once, own it forever.",
  },
];

const requirements = [
  {
    index: "R1",
    title: "Docker",
    description: "Docker Engine + Compose v2. Docker Desktop works on Mac and Windows.",
  },
  {
    index: "R2",
    title: "Ollama",
    description: "Your own Ollama running locally with llama3.1:8b-instruct. Your models, your hardware.",
  },
  {
    index: "R3",
    title: "~6 GB RAM headroom",
    description: "For the backend container and local inference. No GPU required.",
  },
];

const faqs = [
  {
    q: "Where does my data go?",
    a: "Nowhere. Quadra-Seer runs entirely on your machine — chat, memory, and models stay local. There is no cloud account and no telemetry by default. Nothing leaves your device during daily use.",
  },
  {
    q: "Do I need to be technical?",
    a: "Comfortable with a terminal helps. Installation is a guided script plus one command (./scripts/stack.sh local up). If you can install Docker and Ollama, you can run Quadra-Seer.",
  },
  {
    q: "What does it cost?",
    a: "$77.99, once. A perpetual license for this version — no subscription, ever. Checkout with Stripe, receive your license key and download by email, activate once, and it's yours.",
  },
  {
    q: "Is the source code public?",
    a: "No — Quadra-Seer is proprietary software. You receive the complete working system; the source stays with Axiom Zeta.",
  },
];

export default function QuadraSeerPage() {
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
          <div className="hero-orbit" aria-hidden="true">
            <span className="orbit-path orbit-path-one" />
            <span className="orbit-path orbit-path-two" />
            <span className="orbit-path orbit-path-three" />
          </div>
          <div className="hero-copy">
            <p className="kicker">Quadra-Seer Sovereign / Local-first AI</p>
            <h1>Your AI,<br /><span className="hero-highlight">on your machine.</span></h1>
            <p className="hero-lede">
              A private AI system with persistent memory — powered by your own Ollama.
              $77.99 once, yours forever. No cloud required. No data leaves the device.
            </p>
          </div>
          <div className="hero-actions">
            <a className="primary-link" href={sovereignUrl} rel="noreferrer" target="_blank">
              Get Sovereign — $77.99
            </a>
            <a className="secondary-link" href="#included">What&apos;s included</a>
            <a className="secondary-link" href="#requirements">Requirements</a>
          </div>
          <div className="hero-readout" aria-hidden="true">
            <span>One payment</span>
            <span>No subscription, ever</span>
          </div>
        </section>

        <div className="signal-strip">
          <div className="signal"><strong>01 / Own it</strong><span>$77.99 once. License key and download by email.</span></div>
          <div className="signal"><strong>02 / Run locally</strong><span>One command brings up the whole stack on your machine.</span></div>
          <div className="signal"><strong>03 / Own it</strong><span>Your data, your models, your hardware. Nothing leaves.</span></div>
        </div>

        <section className="section" id="included">
          <div className="section-heading">
            <div>
              <span className="section-label">Quadra-Seer Sovereign / local-first</span>
              <h2 className="section-title">What you get.</h2>
            </div>
            <p className="section-note">One payment. The whole system, running on hardware you own.</p>
          </div>
          <div className="crypto-app-grid" aria-label="What is included">
            {included.map((item) => (
              <article className="crypto-app" key={item.index}>
                <span className="product-index">Included / {item.index}</span>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section" id="requirements">
          <div className="section-heading">
            <div>
              <span className="section-label">Quadra-Seer Sovereign / setup</span>
              <h2 className="section-title">What you&apos;ll need.</h2>
            </div>
            <p className="section-note">Sovereign means your hardware does the work. Here&apos;s the checklist.</p>
          </div>
          <div className="crypto-app-grid" aria-label="System requirements">
            {requirements.map((item) => (
              <article className="crypto-app" key={item.index}>
                <span className="product-index">Requirement / {item.index}</span>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section" id="sovereignty">
          <div className="section-heading">
            <div>
              <span className="section-label">Quadra-Seer Sovereign / principle</span>
              <h2 className="section-title">Sovereign, down to the source.</h2>
            </div>
          </div>
          <div className="console-intro">
            <span className="console-mark" aria-hidden="true">...</span>
            <p>
              One activation, then true sovereignty. Your license key is validated once online; after that it runs fully offline, with no recurring checks and no telemetry. If Axiom Zeta disappeared tomorrow, your system would keep running.
            </p>
            <span className="console-status">Paid once, running on your machine</span>
          </div>
        </section>

        <section className="section" id="faq">
          <div className="section-heading">
            <div>
              <span className="section-label">Quadra-Seer Sovereign / questions</span>
              <h2 className="section-title">Before you ask.</h2>
            </div>
          </div>
          <div className="paper-grid" aria-label="Frequently asked questions">
            {faqs.map((faq, i) => (
              <article className="paper-card" key={faq.q}>
                <div className="paper-card-top">
                  <span className="paper-index">Q / {String(i + 1).padStart(2, "0")}</span>
                </div>
                <h3>{faq.q}</h3>
                <p className="paper-description">{faq.a}</p>
              </article>
            ))}
          </div>
          <div className="hero-actions" style={{ marginTop: 40 }}>
            <a
              className="secondary-link"
              href={`mailto:${supportEmail}?subject=${encodeURIComponent("Quadra-Seer Sovereign — question")}`}
            >
              Ask a question →
            </a>
          </div>
        </section>
      </main>
      <footer className="site-footer">AZ Emergent Nexus / Quadra-Seer Sovereign — your AI, on your machine</footer>
    </div>
  );
}
