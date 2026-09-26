import { expertise, summary } from '../data/resume';

export default function About() {
  return (
    <section id="about" className="section" aria-labelledby="about-title">
      <span className="eyebrow">About me</span>
      <div className="section-intro">
        <h2 id="about-title">Engineering the whole product, not just the screen.</h2>
        <p>My work connects interfaces, mobile platforms, backend services, and cloud infrastructure into maintainable product experiences.</p>
      </div>
      <div className="about-copy about-columns">
        {summary.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
      </div>
      <div className="expertise-heading">
        <div>
          <span className="eyebrow">What I bring</span>
          <h3>How I contribute</h3>
        </div>
        <p>A practical full-stack perspective shaped by real delivery across web, mobile, and cloud.</p>
      </div>
      <div className="expertise-grid">
        {expertise.map((item, index) => (
          <article className="expertise-card" key={item.title}>
            <span className="card-number" aria-hidden="true">0{index + 1}</span>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
            <ul aria-label={`${item.title} technologies`}>
              {item.tags.map((tag) => <li key={tag}>{tag}</li>)}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}
