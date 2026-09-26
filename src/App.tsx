import { useState } from 'react';
import About from './components/about';
import Experience from './components/Experience';
import Qualifications from './components/Qualifications';
import { profile } from './data/resume';
import './App.css';

const publicAsset = (path: string): string => `${import.meta.env.BASE_URL}${path}`;

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>
      <div className="hero-shell" id="home">
        <header className="site-header page-width">
          <a className="brand" href="#home" aria-label={`${profile.shortName}, home`} onClick={closeMenu}>
            <span className="brand-mark" aria-hidden="true">dg.</span>
            <span>{profile.shortName}<small>{profile.role}</small></span>
          </a>
          <button className="menu-toggle" type="button" aria-expanded={menuOpen} aria-controls="site-nav" onClick={() => setMenuOpen((open) => !open)}>
            {menuOpen ? 'Close' : 'Menu'} <span aria-hidden="true">{menuOpen ? '×' : '+'}</span>
          </button>
          <nav id="site-nav" className={menuOpen ? 'site-nav is-open' : 'site-nav'} aria-label="Main navigation">
            <a href="#about" onClick={closeMenu}>About</a>
            <a href="#experience" onClick={closeMenu}>Experience</a>
            <a href="#background" onClick={closeMenu}>Background</a>
            <a className="nav-contact" href="#contact" onClick={closeMenu}>Let's talk <span aria-hidden="true">↗</span></a>
          </nav>
        </header>

        <section className="hero page-width" aria-labelledby="hero-title">
          <div className="hero-copy">
            <p className="eyebrow hero-eyebrow"><span className="status-light" aria-hidden="true" /> {profile.name} · {profile.location}</p>
            <h1 id="hero-title">I build software<br />across <span>web,</span><br /><span>mobile</span><br />and cloud.</h1>
            <p className="hero-description">{profile.secondaryRole} and {profile.role} with 7+ years turning product requirements into reliable applications, APIs, and mobile experiences.</p>
            <div className="hero-actions" aria-label="Download curriculum vitae">
              <a className="button button-light" href={publicAsset('cv/dilan-garcia-cv-en.pdf')} target="_blank" rel="noopener noreferrer" hrefLang="en" aria-label="Open Dilan García's CV in English (PDF, opens in a new tab)">
                CV - English <span aria-hidden="true">↗</span>
              </a>
              <a className="button button-outline" href={publicAsset('cv/dilan-garcia-cv-es.pdf')} target="_blank" rel="noopener noreferrer" hrefLang="es" aria-label="Open Dilan García's CV in Spanish (PDF, opens in a new tab)">
                CV - Spanish <span aria-hidden="true">↗</span>
              </a>
            </div>
            <div className="social-links" aria-label="Professional links">
              <a href={profile.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn <span aria-hidden="true">↗</span></a>
              <a href={profile.github} target="_blank" rel="noopener noreferrer">GitHub <span aria-hidden="true">↗</span></a>
              <a href={`mailto:${profile.email}`}>Email <span aria-hidden="true">↗</span></a>
            </div>
          </div>
          <div className="developer-card" aria-label="Developer profile summary">
            <div className="developer-card-top">
              <div className="avatar-frame"><img src={publicAsset('images/about2.png')} alt="Illustrated avatar of Dilan waving hello" width="500" height="500" fetchPriority="high" /></div>
              <div><span className="code-label">PROFILE / 01</span><strong>{profile.role}</strong><small>{profile.secondaryRole}</small></div>
            </div>
            <dl className="developer-spec">
              <div><dt>Core</dt><dd>React · React Native · Node.js</dd></div>
              <div><dt>Systems</dt><dd>GraphQL · AWS · SQL / NoSQL</dd></div>
              <div><dt>Platforms</dt><dd>Web · iOS · Android</dd></div>
            </dl>
            <div className="architecture-flow" aria-label="Product architecture experience">
              <span>Interface</span><i aria-hidden="true">→</i><span>API</span><i aria-hidden="true">→</i><span>Cloud</span>
            </div>
          </div>
        </section>
      </div>

      <main id="main">
        <section className="proof-strip" aria-label="Career overview">
          <div className="page-width proof-grid">
            <div><strong>7+</strong><span>years building software</span></div>
            <div><strong>4</strong><span>professional roles</span></div>
            <div><strong>3</strong><span>delivery platforms</span></div>
            <p>From banking and e-commerce to streaming, marketplaces, and cloud-backed products.</p>
          </div>
        </section>
        <div className="page-width content-sections"><About /><Experience /><Qualifications /></div>
        <section className="contact-section" id="contact" aria-labelledby="contact-title">
          <div className="page-width contact-inner">
            <div><span className="eyebrow">Let's connect</span><h2 id="contact-title">Have something<br />in mind?</h2><p>Let's talk about software, products, and what comes next.</p></div>
            <address className="contact-details"><a href={`mailto:${profile.email}`}>{profile.email} <span aria-hidden="true">↗</span></a><span>{profile.location}</span></address>
          </div>
        </section>
      </main>
      <footer className="page-width site-footer"><span>© {new Date().getFullYear()} {profile.name}</span><a href="#home">Back to top ↑</a></footer>
    </>
  );
}
