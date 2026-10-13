import Image from "next/image";
import Link from "next/link";
import { shopifyFetch } from "@/lib/shopify";
import { PRODUCTS_QUERY } from "@/lib/shopify-queries";
import type { Product } from "@/lib/shopify-types";
import { AddToCartButton } from "./add-to-cart-button";

export const dynamic = "force-dynamic";

const hasShopifyConfiguration = Boolean(
  process.env.SHOPIFY_STORE_DOMAIN?.trim() &&
    process.env.SHOPIFY_STOREFRONT_ACCESS_TOKEN?.trim()
);

const upcomingExperiences = [
  {
    name: "QuadraM.I.N.D.-Sight",
    subtitle: "Founder-ready product architecture, mapped before build.",
  },
  {
    name: "CONVERGENCE FORM EXTRACTOR",
    subtitle: "Mind Forge 2.0",
  },
] as const;

const substackLink = "https://substack.com/@anthonycastro33";
const cryptoApps = [
  {
    name: "HyperCross Nexus",
    description: "Core intelligence and strategy: analyze markets, portfolios, blockchain activity, DeFi, liquidity, risk, and trade setups through an explainable decision process.",
  },
  {
    name: "HyperCross Nexus Arm Xero",
    description: "The optional execution companion that prepares or executes approved strategies with authorization, position limits, routing, and transaction-level risk controls.",
  },
  {
    name: "Ameterasu HCN Companion",
    description: "The conversational interface for understanding Nexus analysis, portfolio exposure, signals, opportunities, and risk without acting as an autonomous trading engine.",
  },
];

type Theory = {
  index: string;
  title: string;
  points: string[];
  note?: string;
};

const theories: Theory[] = [
  {
    index: "01",
    title: "Interplayed Field Theory",
    points: [
      "Unified Field Interactions: Interplayed Field Theory (IFT) proposes a mathematical framework connecting quantum, classical, and macroscopic dynamics through ten coupled nonlinear partial differential equations.",
      "Resonance and Emergence: IFT models how interacting fields generate coherent structures, synchronized oscillations, stable patterns, and emergent organization through nonlinear resonance and energy redistribution.",
      "Geometry and Topology: IFT incorporates higher-dimensional mathematical structures, tensor coupling, recursive dynamics, and complex manifold topology to describe how geometry influences field evolution and stability.",
      "Cross-Disciplinary Applications: IFT seeks to provide a common mathematical foundation for studying plasma propulsion, energy transfer, advanced materials, biological systems, and artificial intelligence, with its broader physical predictions requiring experimental validation.",
    ],
  },
  {
    index: "02",
    title: "Helical Recursive Manifold Theory",
    points: [
      "Unified Computational Architecture: Helical Recursive Manifold (HRM) combines information fields, geometry, topology, memory, cognition, hierarchy, and resource management into one adaptive mathematical framework.",
      "Self-Organizing Computation: HRM is designed to dynamically reorganize information pathways, adjust computational structures, retain memories, and allocate processing resources according to changing demands.",
      "Stability and Accountability: Every computational change is mathematically tracked, while bounded correction mechanisms are designed to maintain stability, support recovery, and prevent uncontrolled structural adaptation.",
      "Scientific Validation: HRM establishes a falsifiable theoretical foundation for adaptive computation, with controlled experiments designed to determine whether it improves efficiency, reasoning-related performance, and resilience compared with conventional architectures.",
    ],
  },
  {
    index: "03",
    title: "Hieromath",
    points: [
      "Semantic Mathematical Objects: Hieromath extends conventional mathematical objects by incorporating numerical value, identity, category, relationships, contextual meaning, constraints, and state into unified mathematical structures.",
      "Conditional Mathematical Operations: Rather than performing arithmetic solely on numerical values, Hieromath introduces operations governed by semantic compatibility, relational constraints, and explicitly defined transformation rules.",
      "Transformational Computational Algebra: Hieromath employs operations such as COUPLE, BIND, INHIBIT, PROJECT, PROPAGATE, and COLLAPSE to manipulate interconnected mathematical structures while checking their required invariants.",
      "Intelligent Mathematical Execution: Hieromath proposes a computational mathematics paradigm in which incompatible operations are rejected before execution, valid transformations propagate through dependency graphs, and results are verified and recorded for reproducibility.",
    ],
    note: "Central distinction: Hieromath aims to make mathematics operate on both quantities and formally defined relationships, rather than quantities alone; its status as a genuinely new mathematical foundation remains to be established through formal proofs and independent validation.",
  },
  {
    index: "04",
    title: "Multi Model Recursive Multiverse Theory",
    points: [
      "Unified Physical Framework: The Multi-Modal Unified Recursion Multiverse Theory proposes a mathematical framework connecting quantum mechanics, classical physics, geometry, and information processing through ten coupled nonlinear equations.",
      "Multiverse Architecture: The model proposes 22 interconnected realities, 12 spatial dimensions, 14 timelines per reality, and four branches per timeline, organized through recursive mathematical structures.",
      "Force Projection and Waveform Bridging: The theory suggests that fundamental forces emerge as projections of higher-dimensional phenomena, with resonant coupling enabling interactions across different physical scales.",
      "Scientific and Technological Applications: The framework explores potential advances in artificial intelligence, quantum computing, materials science, and cosmology, with its broader predictions requiring further independent validation.",
    ],
  },
];

export default async function HomePage() {
  let products: Product[] = [];

  if (hasShopifyConfiguration) {
    try {
      const data = await shopifyFetch<{ products: { nodes: Product[] } }>(
        PRODUCTS_QUERY,
        { first: 100 }
      );
      products = data.products.nodes;
    } catch (error) {
      console.error("Unable to load Shopify products", error);
    }
  }

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
            <p className="kicker">AZ Emergent Nexus / System 001</p>
            <h1>Enter the<br /><span className="hero-highlight">nexus.</span></h1>
            <p className="hero-lede">Cognitive systems for the next version of you.</p>
          </div>
          <a className="hero-portal" href={substackLink} rel="noreferrer" target="_blank" aria-label="Enter The Singularity Point">
            <span className="portal-stars" />
            <span className="portal-glow" />
            <span className="sigil-ring sigil-ring-outer" />
            <span className="sigil-ring sigil-ring-middle" />
            <span className="sigil-ring sigil-ring-inner" />
            <span className="sigil-cross sigil-cross-horizontal" />
            <span className="sigil-cross sigil-cross-vertical" />
            <span className="sigil-diamond" />
            <span className="sigil-petal sigil-petal-one" />
            <span className="sigil-petal sigil-petal-two" />
            <span className="sigil-petal sigil-petal-three" />
            <span className="sigil-petal sigil-petal-four" />
            <span className="portal-interface">
              <span className="portal-eyebrow">Nexus Interface</span>
              <strong>The Singularity<br />Point</strong>
              <span className="portal-status">Ready / Enter below</span>
            </span>
            <span className="portal-label">Initialize Nexus</span>
          </a>
          <div className="hero-actions">
            <a className="primary-link" href="#systems">Explore systems</a>
            <a className="secondary-link" href="/quadra-seer">Quadra-Seer Sovereign</a>
            <a className="secondary-link" href="#transcendental-gateways">Transcendental Gateways</a>
            <a className="secondary-link" href="#coming-soon">Coming soon</a>
            <a className="secondary-link" href="#access">Access protocol</a>
          </div>
          <div className="hero-readout" aria-hidden="true">
            <span>Signal 93.7%</span>
            <span>Orbit stable</span>
            <span>Node AZ-01</span>
          </div>
        </section>

        <div className="signal-strip" id="access">
          <div className="signal"><strong>01 / Choose</strong><span>Find the experience that matches your current line of inquiry.</span></div>
          <div className="signal"><strong>02 / Access</strong><span>Enter the experience and begin your next line of inquiry.</span></div>
          <div className="signal"><strong>03 / Enter</strong><span>Open your browser-based experience and begin.</span></div>
        </div>

        <section className="section gateway-section" id="transcendental-gateways">
          <div className="section-heading">
            <div>
              <span className="section-label">Nexus interface / gateway signal</span>
              <h2 className="section-title">Transcendental Gateways</h2>
            </div>
            <p className="section-note">A portal for crossing beyond the familiar and entering the next layer of perception.</p>
          </div>

          <a
            className="hero-portal gateway-portal"
            href="https://transcendentalgateways.site"
            rel="noreferrer"
            target="_blank"
            aria-label="Enter Transcendental Gateways"
          >
            <span className="portal-stars" />
            <span className="portal-glow" />
            <span className="sigil-ring sigil-ring-outer" />
            <span className="sigil-ring sigil-ring-middle" />
            <span className="sigil-ring sigil-ring-inner" />
            <span className="sigil-cross sigil-cross-horizontal" />
            <span className="sigil-cross sigil-cross-vertical" />
            <span className="sigil-diamond" />
            <span className="sigil-petal sigil-petal-one" />
            <span className="sigil-petal sigil-petal-two" />
            <span className="sigil-petal sigil-petal-three" />
            <span className="sigil-petal sigil-petal-four" />
            <span className="portal-interface">
              <span className="portal-eyebrow">Nexus Interface</span>
              <strong>Transcendental<br />Gateways</strong>
              <span className="portal-status">Ready / Enter below</span>
            </span>
            <span className="portal-label">Enter Gateway</span>
          </a>
        </section>

        <section className="section" id="systems">
          <div className="section-heading">
            <div>
              <span className="section-label">Emergent interface / new signal</span>
              <h2 className="section-title">The S.I.G.H.T. Zone.</h2>
            </div>
            <p className="section-note">The archive is live — enter the signal.</p>
          </div>

          <a
            className="sight-zone-portal"
            href="https://them0deyeseer.com"
            rel="noreferrer"
            target="_blank"
            aria-label="Enter The S.I.G.H.T. Zone archive at them0deyeseer.com"
          >
            <span className="sight-zone-orbit sight-zone-orbit-outer" aria-hidden="true" />
            <span className="sight-zone-orbit sight-zone-orbit-inner" aria-hidden="true" />
            <span className="sight-zone-axis sight-zone-axis-horizontal" aria-hidden="true" />
            <span className="sight-zone-axis sight-zone-axis-vertical" aria-hidden="true" />
            <div className="sight-zone-interface">
              <span>Nexus interface / S.I.G.H.T.</span>
              <strong>The S.I.G.H.T.<br />Zone</strong>
              <em>Live / Enter below</em>
            </div>
          </a>

          <a
            className="featured-experience"
            href="https://axiom-and-ash.com"
            rel="noreferrer"
            target="_blank"
          >
            <div className="featured-experience-image">
              <Image
                src="/axiom-and-ash.svg"
                alt="Axiom and Ash"
                fill
                sizes="(max-width: 1240px) 100vw, 1176px"
              />
            </div>
            <div className="featured-experience-copy">
              <span className="section-label">Axiom and Ash</span>
              <h3>Transcendental Prescience</h3>
              <p>Enter the signal beyond the known.</p>
              <span className="featured-experience-cta">Visit Transcendental Prescience</span>
            </div>
          </a>

          <div id="product-catalog">
            {products.length > 0 && (
              <div className="product-grid">
                {products.map((product, index) => (
                  <article className="product-card" id={`product-card-${index}`} key={product.id}>
                    <div className="product-visual">
                      {product.featuredImage ? (
                        <Image
                          src={product.featuredImage.url}
                          alt={product.featuredImage.altText ?? product.title}
                          fill
                          sizes="(max-width: 720px) 100vw, 50vw"
                        />
                      ) : (
                        <span className="product-visual-empty">Signal / {String(index + 1).padStart(2, "0")}</span>
                      )}
                    </div>
                    <div className="product-info">
                      <span className="product-index">System / {String(index + 1).padStart(2, "0")}</span>
                      <h3 className="product-title">{product.title}</h3>
                      <p className="product-description">
                        {product.description || "Explore this system through a guided browser-based experience."}
                      </p>
                      <div className="product-bottom">
                        <span className="price">
                          ${parseFloat(product.priceRange.minVariantPrice.amount).toFixed(2)} <small>{product.priceRange.minVariantPrice.currencyCode}</small>
                        </span>
                        {product.variants.nodes.length > 0 && (
                          <AddToCartButton
                            variantId={product.variants.nodes[0].id}
                            availableForSale={product.availableForSale}
                          />
                        )}
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            )}
          </div>
        </section>

        <section className="section seers-console" id="seers-console">
          <div className="section-heading">
            <div>
              <span className="section-label">Research archive / active signal</span>
              <h2 className="section-title">The Seer&apos;s Console</h2>
            </div>
            <p className="section-note">Theoretical frameworks behind the Nexus line of inquiry.</p>
          </div>

          <div className="console-intro">
            <span className="console-mark" aria-hidden="true">...</span>
            <p>Anthony Castro / a shared observatory for the work behind the signal.</p>
            <span className="console-status">Index / live</span>
          </div>

          <div className="paper-grid" aria-label="Theoretical frameworks">
            {theories.map((theory) => (
              <article className="paper-card" key={theory.index}>
                <div className="paper-card-top">
                  <span className="paper-index">Theory / {theory.index}</span>
                </div>
                <h3>{theory.title}</h3>
                <ol className="theory-points">
                  {theory.points.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ol>
                {theory.note && <p className="theory-note">{theory.note}</p>}
              </article>
            ))}
          </div>
        </section>

        <section className="section live-systems" id="live-systems">
          <div className="section-heading">
            <div>
              <span className="section-label">Active systems / live signal</span>
              <h2 className="section-title">Live now.</h2>
            </div>
            <p className="section-note">Shipped applications, running in the open. Enter and use them.</p>
          </div>

          <div className="experience-destinations" aria-label="Live applications">
            <article className="experience-destination">
              <span>System / 01</span>
              <strong>Quadra-M.I.N.D. Sight</strong>
              <em className="experience-subtitle">Meditation and inner-sight practice</em>
              <p style={{ color: "var(--muted)", fontSize: "0.9rem", marginTop: 8 }}>
                A guided meditation companion for crossing beyond the familiar — live on the web and in Play review.
              </p>
              <a
                href="https://quadra-mind-sight.onrender.com"
                rel="noreferrer"
                target="_blank"
                className="experience-pending"
                style={{ textDecoration: "none" }}
              >
                Enter the system -&gt;
              </a>
            </article>
            <article className="experience-destination">
              <span>System / 02</span>
              <strong>EqualiF.I. Planner</strong>
              <em className="experience-subtitle">Financial independence planning</em>
              <p style={{ color: "var(--muted)", fontSize: "0.9rem", marginTop: 8 }}>
                A focused tool for mapping the path to financial independence — clear numbers, no noise.
              </p>
              <a
                href="https://equalifi-planner.vercel.app"
                rel="noreferrer"
                target="_blank"
                className="experience-pending"
                style={{ textDecoration: "none" }}
              >
                Enter the system -&gt;
              </a>
            </article>
          </div>
        </section>

        <section className="section coming-soon" id="coming-soon">
          <div className="section-heading">
            <div>
              <span className="section-label">Systems in development</span>
              <h2 className="section-title">Coming soon.</h2>
            </div>
            <p className="section-note">Experiences and applications preparing for their next access window.</p>
          </div>

          <div className="experience-destinations" aria-label="Experiences coming soon">
            {upcomingExperiences.map((experience, index) => (
              <article className="experience-destination" key={experience.name}>
                <span>Experience / {String(index + 1).padStart(2, "0")}</span>
                <strong>{experience.name}</strong>
                <em className="experience-subtitle">{experience.subtitle}</em>
                <span className="experience-pending">Coming Soon</span>
              </article>
            ))}
          </div>

          <div className="crypto-app-grid" aria-label="HyperCross applications coming soon">
            {cryptoApps.map((app, index) => (
              <article className="crypto-app" key={app.name}>
                <span className="product-index">HyperCross / {String(index + 1).padStart(2, "0")}</span>
                <h3>{app.name}</h3>
                <p>{app.description}</p>
                <span className="crypto-app-pending">Coming Soon</span>
              </article>
            ))}
          </div>
        </section>
      </main>
      <footer className="site-footer">AZ Emergent Nexus / Cognitive systems for the next version of you</footer>
    </div>
  );
}
