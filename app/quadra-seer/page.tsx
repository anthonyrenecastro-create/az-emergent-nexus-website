import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Quadra-Seer Sovereign — your AI, on your machine",
  description:
    "Quadra-Seer Sovereign is a private, local-first AI system with persistent memory, powered by your own Ollama. $14.99/mo license — no cloud required, no data leaves your device.",
};

const checkoutUrl = process.env.NEXT_PUBLIC_QUADRA_SEER_CHECKOUT_URL?.trim();
const supportEmail = "anthony.castro@axiomzetainnovations.com";

const included = [
  {
    index: "01",
    title: "Quadra-Seer Sovereign application",
    description:
      "The full local-first AI system: chat, persistent memory, semantic search, automation console, and voice — in one Docker Compose stack.",
  },
  {
    index: "02",
    title: "Your personal license key",
    description:
      "Emailed after checkout. Keys are cryptographically signed. A single one-time activation binds your key to your machine (up to 3 machines per license); after that the app verifies fully offline and never phones home.",
  },
  {
    index: "03",
    title: "Guided setup",
    description:
      "Installers for Mac, Windows, and Linux, plus a step-by-step guide. One command brings the whole stack up on your machine.",
  },
  {
    index: "04",
    title: "Updates while subscribed",
    description:
      "Every improvement ships to license holders first. Stay subscribed and your local system keeps getting better.",
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
    a: "Nowhere. Quadra-Seer runs entirely on your machine — chat, memory, and models stay local. There is no cloud account and no telemetry by default. Your license key is activated once, then verified offline — nothing leaves your device during daily use.",
  },
  {
    q: "Do I need to be technical?",
    a: "Comfortable with a terminal helps. Installation is a guided script plus one command (./scripts/stack.sh local up). If you can install Docker and Ollama, you can run Quadra-Seer.",
  },
  {
    q: "What happens if I cancel?",
    a: "Your system keeps running through the end of your paid period. After that, the local app will not start again until the license is renewed. Nothing is ever removed from your machine — your data and configuration stay yours.",
  },
  {
    q: "How do I receive my license key?",
    a: "By email, shortly after checkout. Keep it safe — it is your proof of license for downloads and updates.",
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
              No cloud required. No data leaves the device.
            </p>
          </div>
          <div className="hero-actions">
            {checkoutUrl ? (
              <a className="primary-link" href={checkoutUrl} rel="noreferrer" target="_blank">
                Get Quadra-Seer — $14.99/mo →
              </a>
            ) : (
              <a
                className="primary-link"
                href={`mailto:${supportEmail}?subject=${encodeURIComponent("Quadra-Seer Sovereign — license request")}`}
              >
                Request access →
              </a>
            )}
            <a className="secondary-link" href="#included">What&apos;s included</a>
            <a className="secondary-link" href="#requirements">Requirements</a>
          </div>
          <div className="hero-readout" aria-hidden="true">
            <span>$14.99 / month</span>
            <span>Cancel anytime</span>
            <span>License key by email</span>
          </div>
        </section>

        <div className="signal-strip">
          <div className="signal"><strong>01 / Subscribe</strong><span>Check out securely via Stripe. $14.99 per month, cancel anytime.</span></div>
          <div className="signal"><strong>02 / License key</strong><span>Your personal key arrives by email — signed, offline-verifiable.</span></div>
          <div className="signal"><strong>03 / Run locally</strong><span>Download the bundle, run one command, and talk to your own machine.</span></div>
        </div>

        <section className="section" id="included">
          <div className="section-heading">
            <div>
              <span className="section-label">Quadra-Seer Sovereign / license</span>
              <h2 className="section-title">What your subscription includes.</h2>
            </div>
            <p className="section-note">One subscription. The whole system, running on hardware you own.</p>
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
              <h2 className="section-title">Sovereign, down to the license.</h2>
            </div>
          </div>
          <div className="console-intro">
            <span className="console-mark" aria-hidden="true">...</span>
            <p>
              One call, then never again. Activating your license makes a single request to a small license server, binding your key to your machine. After that, verification is fully offline — no recurring license checks, no telemetry. If Axiom Zeta disappeared tomorrow, your activated system would keep running through the end of its license term.
            </p>
            <span className="console-status">One-time activation, then offline</span>
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
            {checkoutUrl ? (
              <a className="primary-link" href={checkoutUrl} rel="noreferrer" target="_blank">
                Get Quadra-Seer — $14.99/mo →
              </a>
            ) : (
              <a
                className="primary-link"
                href={`mailto:${supportEmail}?subject=${encodeURIComponent("Quadra-Seer Sovereign — license request")}`}
              >
                Request access →
              </a>
            )}
          </div>
        </section>
      </main>
      <footer className="site-footer">AZ Emergent Nexus / Quadra-Seer Sovereign — your AI, on your machine</footer>
    </div>
  );
}
