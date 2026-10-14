import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Quadra-Seer Sovereign — your AI, on your machine",
  description:
    "Quadra-Seer Sovereign is a private, local-first AI system with persistent memory, powered by your own Ollama. Free and open source — no cloud required, no data leaves your device.",
};

const sourceRepo = "https://github.com/E-L-L-I-A-Tech-Collaboration/quadra-seer-equalibra-sovereign";
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
    title: "Complete source code",
    description:
      "Every line is yours to read, run, and modify. Clone the repository and build it yourself — no binaries you can't inspect.",
  },
  {
    index: "03",
    title: "Guided setup",
    description:
      "Installers for Mac, Windows, and Linux, plus a step-by-step runbook. One command brings the whole stack up on your machine.",
  },
  {
    index: "04",
    title: "Community updates",
    description:
      "Every improvement lands in the public repository. Pull, rebuild, and your local system keeps getting better — free forever.",
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
    a: "Nothing. Quadra-Seer is free and open source — no subscription, no license key, no activation server. Download it, run it, keep it.",
  },
  {
    q: "Where is the source code?",
    a: "In the public Axiom Zeta Innovations repository on GitHub. Clone it, read every line, modify what you want, and build it yourself.",
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
              Free and open source. No cloud required. No data leaves the device.
            </p>
          </div>
          <div className="hero-actions">
            <a className="primary-link" href={sourceRepo} rel="noreferrer" target="_blank">
              Get the source →
            </a>
            <a className="secondary-link" href="#included">What&apos;s included</a>
            <a className="secondary-link" href="#requirements">Requirements</a>
          </div>
          <div className="hero-readout" aria-hidden="true">
            <span>Free forever</span>
            <span>Open source</span>
            <span>No account needed</span>
          </div>
        </section>

        <div className="signal-strip">
          <div className="signal"><strong>01 / Download</strong><span>Clone the public repository — free, no sign-up, no key.</span></div>
          <div className="signal"><strong>02 / Run locally</strong><span>One command brings up the whole stack on your machine.</span></div>
          <div className="signal"><strong>03 / Own it</strong><span>Read every line, modify what you want. It&apos;s yours.</span></div>
        </div>

        <section className="section" id="included">
          <div className="section-heading">
            <div>
              <span className="section-label">Quadra-Seer Sovereign / open source</span>
              <h2 className="section-title">What you get.</h2>
            </div>
            <p className="section-note">Free forever. The whole system, running on hardware you own.</p>
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
              No license server. No activation key. No account. You clone the repository, build it on your own hardware, and it runs — fully offline, with no recurring checks and no telemetry. If Axiom Zeta disappeared tomorrow, your system would keep running, and the source would still be yours to fork.
            </p>
            <span className="console-status">Free software, running on your machine</span>
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
            <a className="primary-link" href={sourceRepo} rel="noreferrer" target="_blank">
              Get the source →
            </a>
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
