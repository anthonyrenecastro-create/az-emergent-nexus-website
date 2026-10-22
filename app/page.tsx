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

const substackLink = "https://substack.com/@anthonycastro33";

type Theory = {
  index: string;
  title: string;
  image: string;
  points: string[];
  note?: string;
};

const theories: Theory[] = [
  {
    index: "01",
    title: "Interplayed Field Theory",
    image: "/theory-ift.webp",
    points: [
      "Unified Field Interactions: IFT connects quantum, classical, and macroscopic dynamics through ten coupled nonlinear PDEs.",
      "Resonance and Emergence: interacting fields generate coherent structures, synchronized oscillations, and emergent order through nonlinear resonance.",
      "Geometry and Topology: higher-dimensional structures, tensor coupling, and manifold topology shape how fields evolve and stabilize.",
      "Cross-Disciplinary Applications: a common mathematical foundation for plasma propulsion, energy transfer, materials, biology, and AI — predictions await experimental validation.",
    ],
  },
  {
    index: "02",
    title: "Helical Recursive Manifold Theory",
    image: "/theory-hrm.webp",
    points: [
      "Unified Computational Architecture: HRM unites information fields, geometry, topology, memory, cognition, and resource management in one adaptive framework.",
      "Self-Organizing Computation: pathways, structures, memories, and resources reorganize dynamically as demands change.",
      "Stability and Accountability: every change is tracked; bounded corrections maintain stability and prevent runaway adaptation.",
      "Scientific Validation: a falsifiable foundation, with controlled experiments testing efficiency, reasoning performance, and resilience.",
    ],
  },
  {
    index: "03",
    title: "Hieromath",
    image: "/theory-hieromath.webp",
    points: [
      "Semantic Mathematical Objects: objects carry value, identity, category, relationships, meaning, constraints, and state.",
      "Conditional Operations: operations governed by semantic compatibility and relational constraints, not just numerical value.",
      "Transformational Algebra: COUPLE, BIND, INHIBIT, PROJECT, PROPAGATE, and COLLAPSE manipulate structures while checking invariants.",
      "Intelligent Execution: incompatible operations are rejected before execution; valid transformations propagate and are verified for reproducibility.",
    ],
    note: "Central distinction: mathematics operates on quantities and formally defined relationships — its status as a new foundation awaits formal proof and independent validation.",
  },
  {
    index: "04",
    title: "Multi Model Recursive Multiverse Theory",
    image: "/theory-mmrm.webp",
    points: [
      "Unified Physical Framework: connects quantum mechanics, classical physics, geometry, and information processing through ten coupled nonlinear equations.",
      "Multiverse Architecture: 22 realities, 12 spatial dimensions, 14 timelines per reality, four branches per timeline — organized recursively.",
      "Force Projection: fundamental forces emerge as projections of higher-dimensional phenomena, coupled resonantly across scales.",
      "Applications: explores advances in AI, quantum computing, materials science, and cosmology — predictions require independent validation.",
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
            <a className="secondary-link" href="#seers-console">Seer&apos;s Console</a>
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

        <section className="section" id="systems">
          <div className="section-heading">
            <div>
              <span className="section-label">Emergent interface / new signal</span>
              <h2 className="section-title">The S.I.G.H.T. Zones.</h2>
            </div>
            <p className="section-note">Two gateways — the archive and the fiction world. Enter the signal.</p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 24 }}>
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
                <span>Nexus interface / Archive</span>
                <strong>The S.I.G.H.T.<br />Zone</strong>
                <em>Live / Enter below</em>
              </div>
            </a>

            <a
              className="sight-zone-portal"
              href="https://them0deyeseers.com"
              rel="noreferrer"
              target="_blank"
              aria-label="Enter the fiction world at them0deyeseers.com"
            >
              <span className="sight-zone-orbit sight-zone-orbit-outer" aria-hidden="true" />
              <span className="sight-zone-orbit sight-zone-orbit-inner" aria-hidden="true" />
              <span className="sight-zone-axis sight-zone-axis-horizontal" aria-hidden="true" />
              <span className="sight-zone-axis sight-zone-axis-vertical" aria-hidden="true" />
              <div className="sight-zone-interface">
                <span>Nexus interface / Fiction</span>
                <strong>The Fiction<br />World</strong>
                <em>Enter below</em>
              </div>
            </a>
          </div>

          <a
            className="featured-experience"
            href="https://axiom-and-ash.com"
            rel="noreferrer"
            target="_blank"
            aria-label="Get the book Phase Recursion Ontology ($6.99) at axiom-and-ash.com"
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
              <h3>Phase Recursion Ontology</h3>
              <p>A physics philosophy on the shoulders of giants — the book, $6.99.</p>
              <span className="featured-experience-cta">Get the book</span>
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

        <section className="section" id="transcendent-recursion">
          <div className="section-heading">
            <div>
              <span className="section-label">Emergent interface / creative signal</span>
              <h2 className="section-title">Transcendent Recursion.</h2>
            </div>
            <p className="section-note">A multiverse in progress — books, sound, physics, and transmissions from the edge of the known self.</p>
          </div>

          <a
            className="featured-experience"
            href="https://transcendentrecursion.online"
            rel="noreferrer"
            target="_blank"
          >
            <div className="featured-experience-image">
              <Image
                src="/transcendent-recursion.webp"
                alt="Transcendent Recursion"
                fill
                sizes="(max-width: 1240px) 100vw, 1176px"
              />
            </div>
            <div className="featured-experience-copy">
              <span className="section-label">The Transcendent Recursion</span>
              <h3>A living body of work</h3>
              <p>There is no outside. A story that keeps unfolding — into a novel, a score, a theory of everything, and a map back to the source.</p>
              <span className="featured-experience-cta">Visit Transcendent Recursion</span>
            </div>
          </a>
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

          <div className="theory-grid" aria-label="Theoretical frameworks">
            {theories.map((theory) => (
              <article className="paper-card theory-card" key={theory.index}>
                <div className="paper-card-top">
                  <span className="paper-index">Theory / {theory.index}</span>
                </div>
                <div className="theory-image">
                  <Image src={theory.image} alt={`${theory.title} artwork`} fill sizes="(max-width: 720px) 100vw, 25vw" />
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
                A guided meditation companion for crossing beyond the familiar — live on the web and on Google Play.
              </p>
              <div style={{ display: "flex", gap: 12, flexWrap: "wrap", alignItems: "center" }}>
                <a
                  href="https://quadra-mind-sight.onrender.com"
                  rel="noreferrer"
                  target="_blank"
                  className="experience-pending"
                  style={{ textDecoration: "none" }}
                >
                  Enter the system -&gt;
                </a>
                <a
                  href="https://play.google.com/store/apps/details?id=org.axiomzetainnovations.quadraroundsight"
                  rel="noreferrer"
                  target="_blank"
                  className="experience-pending"
                  style={{ textDecoration: "none" }}
                >
                  Get it on Google Play -&gt;
                </a>
              </div>
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

      </main>
      <footer className="site-footer">AZ Emergent Nexus / Cognitive systems for the next version of you</footer>
    </div>
  );
}
