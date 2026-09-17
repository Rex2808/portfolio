import "./App.css";

import pamfitnessImage from "./assets/pamfitness.png";
import skyrichesImage from "./assets/skyriches.png";

function App() {
  return (
    <div className="portfolio">
      {/* =========================
          NAVIGATION
      ========================= */}

      <header className="navbar">
        <div className="nav-container">
          <a href="#" className="logo">
            O<span>.</span>
          </a>

          <nav className="nav-links">
            <a href="#about">About</a>
            <a href="#skills">Skills</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
          </nav>
        </div>
      </header>

      {/* =========================
          HERO
      ========================= */}

      <main>
        <section className="hero">
          <div className="hero-container">
            <p className="hero-label">
              SOFTWARE DEVELOPER / PROBLEM SOLVER
            </p>

            <h1>
              Building digital solutions that{" "}
              <span>solve real problems.</span>
            </h1>

            <p className="hero-description">
              I design and build modern web applications with a focus on
              practical solutions, clean architecture, and great user
              experiences.
            </p>

            <div className="hero-actions">
              <a href="#projects" className="btn btn-primary">
                View My Work
              </a>

              <a href="#contact" className="btn btn-secondary">
                Get In Touch
              </a>
            </div>
          </div>
        </section>

       {/* =========================
    ABOUT
========================= */}

<section className="section" id="about">
  <div className="section-container">
    <p className="section-label">01 — ABOUT</p>

    <h2>I build software by solving the problem first.</h2>

    <p className="section-text">
      I'm Ojeaburu Samuel, a software developer and problem solver who enjoys
      turning real-world problems into practical digital solutions. I like
      understanding how a problem actually works before deciding how software
      should solve it.
    </p>

    <p className="section-text">
      I've built full-stack applications that involve authentication,
      authorization, databases, APIs, subscriptions, payments, attendance,
      analytics and deployment. My focus is not simply on making something
      work, but on building systems that are reliable, maintainable and useful
      to the people using them.
    </p>

    <p className="section-text">
      I'm also expanding my skills into artificial intelligence and exploring
      how AI can be combined with strong software engineering to create
      smarter, more useful products.
    </p>
  </div>
</section>

       {/* =========================
    SKILLS
========================= */}

<section className="section" id="skills">
  <div className="section-container">
    <p className="section-label">02 — SKILLS</p>

    <h2>Tools I use to turn ideas into working systems.</h2>

    <div className="skills-grid">
      <article className="skill-card">
        <h3>Frontend</h3>

        <p>
          Building responsive interfaces and interactive web applications
          with React, Vite, JavaScript, HTML, CSS and Tailwind CSS.
        </p>
      </article>

      <article className="skill-card">
        <h3>Backend & APIs</h3>

        <p>
          Building server-side systems with Node.js, REST APIs,
          authentication, authorization and application business logic.
        </p>
      </article>

      <article className="skill-card">
        <h3>Data & Databases</h3>

        <p>
          Designing relational data structures and working with PostgreSQL,
          Prisma, Supabase and database-driven application architecture.
        </p>
      </article>

      <article className="skill-card">
        <h3>Development & Deployment</h3>

        <p>
          Using Git, GitHub, Postman and VS Code to develop, test and take
          applications from development through production deployment.
        </p>
      </article>
    </div>
  </div>
</section>

        {/* =========================
            PROJECTS
        ========================= */}

        <section className="section" id="projects">
          <div className="section-container">
            <p className="section-label">03 — PROJECTS</p>

            <h2>Real problems I've turned into software.</h2>

            <div className="projects-grid">

              {/* =========================
                  PROJECT 01 — PAMFITNESS
              ========================= */}

              

             {/* =========================
    PROJECT 01 — PAMFITNESS
========================= */}

<article className="project-card">
  <p className="project-number">01</p>

  <img
    src={pamfitnessImage}
    alt="PAMFITNESS gym management platform"
    className="project-image"
  />

  <h3>PAMFITNESS</h3>

  <p>
    A full-stack gym management platform built to replace manual
    membership, subscription and payment processes with a reliable
    digital system.
  </p>

  <p>
    The platform manages members, subscriptions, payments, attendance,
    receipts, staff permissions, bulk imports and operational reporting
    through a centralized dashboard.
  </p>

  <div className="project-tags">
    <span>React</span>
    <span>Node.js</span>
    <span>PostgreSQL</span>
    <span>Prisma</span>
    <span>JWT Auth</span>
  </div>

  <div className="project-actions">
    <a
      href="https://pamfitness-sub.onrender.com/"
      target="_blank"
      rel="noopener noreferrer"
      className="project-link project-link-primary"
    >
      Live Project →
    </a>

    <a
      href="https://github.com/Rex2808/pamfitness-sub"
      target="_blank"
      rel="noopener noreferrer"
      className="project-link"
    >
      GitHub →
    </a>
  </div>
</article>


             {/* =========================
    PROJECT 02 — SKYRICHES
========================= */}

<article className="project-card">
  <p className="project-number">02</p>

  <img
    src={skyrichesImage}
    alt="SKYRICHES trading journal"
    className="project-image"
  />

  <h3>SKYRICHES TRADING JOURNAL</h3>

  <p>
    A trading journal and analytics platform designed to help traders
    record, review and understand their trading performance.
  </p>

  <p>
    The application combines trade tracking, performance analytics,
    account management, risk planning, screenshots and structured
    trading data into one practical workspace.
  </p>

  <div className="project-tags">
    <span>JavaScript</span>
    <span>Supabase</span>
    <span>PostgreSQL</span>
    <span>Analytics</span>
    <span>Risk Planning</span>
  </div>

  <div className="project-actions">
    <a
      href="https://skyrichesjournal.netlify.app"
      target="_blank"
      rel="noopener noreferrer"
      className="project-link project-link-primary"
    >
      Live Project →
    </a>

    <a
      href="https://github.com/Rex2808/skyriches-trading-journal"
      target="_blank"
      rel="noopener noreferrer"
      className="project-link"
    >
      GitHub →
    </a>
  </div>
</article>

              {/* =========================
                  PROJECT 03 — PAMFITNESS FESTIVAL
              ========================= */}

              <article className="project-card festival-project-card">
                <p className="project-number">03</p>

                <div className="festival-project-visual" aria-label="PAMFITNESS Festival 2026 project preview">
                  <div className="festival-visual-kicker">PAMFITNESS</div>
                  <div className="festival-visual-title">FESTIVAL 2026</div>
                  <div className="festival-visual-theme">BODY • MIND • SOUL</div>
                  <div className="festival-visual-meta">10 OCTOBER 2026 · MONARCHY EPIC ARENA</div>
                </div>

                <h3>PAMFITNESS FESTIVAL 2026</h3>

                <p>
                  A responsive event landing page built for PAMFITNESS Festival 2026,
                  turning event information, registration, vendor participation and
                  festival content into a polished digital experience.
                </p>

                <p>
                  The website integrates dynamic festival data, gallery content,
                  registration flows, Supabase storage, social links and WhatsApp
                  communication while keeping the experience mobile-friendly.
                </p>

                <div className="project-tags">
                  <span>React</span>
                  <span>Vite</span>
                  <span>JavaScript</span>
                  <span>Tailwind CSS</span>
                  <span>Supabase</span>
                  <span>Responsive Design</span>
                </div>

                <div className="project-actions">
                  <a
                    href="https://pamfitness-festival.netlify.app/"
                    target="_blank"
                    rel="noreferrer"
                    className="project-link project-link-primary"
                  >
                    Live Site →
                  </a>
                  <a
                    href="https://github.com/Rex2808/pamfitness-festival"
                    target="_blank"
                    rel="noreferrer"
                    className="project-link"
                  >
                    GitHub →
                  </a>
                </div>
              </article>

            </div>
          </div>
        </section>

        {/* =========================
            CONTACT
        ========================= */}

        <section className="section contact-section" id="contact">
          <div className="section-container">
            <p className="section-label">04 — CONTACT</p>

            <h2>Let's build something useful.</h2>

            <p className="section-text">
              Have a project, idea, or problem that needs solving? I'd love to
              hear about it.
            </p>

            <a
  href="mailto:ojeaburusamuel1@gmail.com"
  className="btn btn-primary"
>
  Get In Touch
</a>
          </div>
        </section>
      </main>

      {/* =========================
          FOOTER
      ========================= */}

      <footer className="footer">
        © 2026 Ojeaburu Samuel. Built with React.
      </footer>
    </div>
  );
}

export default App;